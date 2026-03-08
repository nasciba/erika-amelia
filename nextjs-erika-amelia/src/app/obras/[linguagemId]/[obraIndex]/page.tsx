import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getLinguagemById,
  urlFor,
  type Obra,
  type ObraImagem,
} from "../../../lib/sanity";
import {
  ObraDetailWrap,
  ObraDetailTitle,
  ObraDetailDescription,
  ObrasGrid,
  ObraCardLink,
  ObraCardImageWrap,
  ObraCardTitle,
} from "../../../components/styled/ObraStyles";

interface PageProps {
  params: Promise<{ linguagemId: string; obraIndex: string }>;
}

export default async function ObraDetailPage({ params }: PageProps) {
  const { linguagemId, obraIndex } = await params;
  const linguagem = await getLinguagemById(decodeURIComponent(linguagemId));
  if (!linguagem || !linguagem.obras?.length) notFound();

  const index = parseInt(obraIndex, 10);
  if (Number.isNaN(index) || index < 0 || index >= linguagem.obras.length) {
    notFound();
  }

  const obra: Obra = linguagem.obras[index];
  const imagens = obra.imagens ?? [];

  return (
    <ObraDetailWrap>
      <ObraDetailTitle>{obra.nome ?? "Obra"}</ObraDetailTitle>
      {obra.descricao && (
        <ObraDetailDescription>{obra.descricao}</ObraDetailDescription>
      )}
      {imagens.length > 0 && (
        <>
          <ObrasGrid as="div">
            {imagens.map((img: ObraImagem, imageIndex: number) => {
              const imgUrl =
                img.imagem?.asset &&
                urlFor(img.imagem).width(400).height(300).url();
              const href = `/obras/${encodeURIComponent(linguagemId)}/${obraIndex}/${imageIndex}`;
              return (
                <ObraCardLink
                  key={imageIndex}
                  href={href}
                  aria-label={img.titulo ?? "Ver imagem"}
                >
                  <ObraCardImageWrap>
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        alt={img.titulo ?? "Imagem"}
                        fill
                        sizes="(max-width: 640px) 50vw, 200px"
                        style={{ objectFit: "cover" }}
                      />
                    ) : null}
                  </ObraCardImageWrap>
                  <ObraCardTitle>
                    {img.titulo ?? `Imagem ${imageIndex + 1}`}
                  </ObraCardTitle>
                </ObraCardLink>
              );
            })}
          </ObrasGrid>
        </>
      )}
    </ObraDetailWrap>
  );
}
