import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getLinguagemById,
  urlFor,
  type ObraImagem,
} from "../../../../lib/sanity";
import {
  ImageDetailWrap,
  ImageDetailTitle,
  ImageDetailMeta,
} from "../../../../components/styled/ObraStyles";

interface PageProps {
  params: Promise<{
    linguagemId: string;
    obraIndex: string;
    imageIndex: string;
  }>;
}

export default async function ImageDetailPage({ params }: PageProps) {
  const { linguagemId, obraIndex, imageIndex } = await params;
  
  const linguagem = await getLinguagemById(decodeURIComponent(linguagemId));
  
  if (!linguagem || !linguagem.obras?.length) notFound();

  const obraIdx = parseInt(obraIndex, 10);
  const imgIdx = parseInt(imageIndex, 10);
  
  if (
    Number.isNaN(obraIdx) ||
    obraIdx < 0 ||
    obraIdx >= linguagem.obras.length ||
    Number.isNaN(imgIdx)
  ) {
    notFound();
  }

  const obra = linguagem.obras[obraIdx];
  const imagens = obra.imagens ?? [];
  if (imgIdx < 0 || imgIdx >= imagens.length) notFound();

  const img: ObraImagem = imagens[imgIdx];
  const imageUrl =
    img.imagem?.asset &&
    urlFor(img.imagem).width(1200).height(1200).url();

  const metaParts = [img.tecnica, img.ano, img.dimensoes].filter(Boolean);
  const backHref = `/obras/${encodeURIComponent(linguagemId)}/${obraIndex}`;

  return (
    <ImageDetailWrap>
      <Link
        href={backHref}
        style={{
          fontSize: "0.875rem",
          color: "var(--foreground)",
          opacity: 0.8,
          textDecoration: "underline",
          marginBottom: "1rem",
          display: "inline-block",
        }}
      >
        ← Voltar para {obra.nome ?? "obra"}
      </Link>
      {imageUrl && (
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1",
            maxHeight: "80vh",
            background: "color-mix(in srgb, var(--foreground) 8%, transparent)",
          }}
        >
          <Image
            src={imageUrl}
            alt={img.titulo ?? "Imagem"}
            fill
            sizes="(max-width: 768px) 100vw, 56rem"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      )}
      <ImageDetailTitle>{img.titulo ?? "Sem título"}</ImageDetailTitle>
      {metaParts.length > 0 && (
        <ImageDetailMeta>{metaParts.join(" · ")}</ImageDetailMeta>
      )}
    </ImageDetailWrap>
  );
}
