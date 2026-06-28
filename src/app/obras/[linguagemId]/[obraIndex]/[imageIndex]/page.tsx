import Image from "next/image";
import { notFound } from "next/navigation";
import { ImageDetailKeyboardNav } from "../../../../_components/ImageDetailKeyboardNav";
import {
  getLinguagemById,
  urlFor,
  type ObraImagem,
} from "../../../../lib/sanity";
import {
  ImageDetailWrap,
  ImageDetailViewer,
  ImageDetailArrowSlot,
  ImageDetailImageWrap,
  ImageDetailNavLink,
  ImageDetailNavPlaceholder,
  ImageDetailTitle,
  ImageDetailMeta,
  ObraBreadcrumb,
  ObraBreadcrumbLink,
  ObraBreadcrumbSep,
} from "../../../../_components/styled/ObraStyles";
import { ChevronLeft } from "@/app/_components/ChevronLeft";
import { ChevronRight } from "@/app/_components/ChevronRight";
import { FullBreadcrumbs } from "./_components/FullBreadcrumbs";
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
    img.imagem?.asset && urlFor(img.imagem).width(2400).quality(95).url();
  
  const metaParts = [img.titulo, img.tecnica, img.dimensoes, img.ano].filter(
    Boolean,
  );
  const obraHref = `/obras/${encodeURIComponent(linguagemId)}/${obraIndex}`;
  const prevIdx = imgIdx - 1;
  const nextIdx = imgIdx + 1;
  const hasPrev = prevIdx >= 0;
  const hasNext = nextIdx < imagens.length;
  const prevHref = hasPrev
    ? `/obras/${encodeURIComponent(linguagemId)}/${obraIndex}/${prevIdx}`
    : null;
  const nextHref = hasNext
    ? `/obras/${encodeURIComponent(linguagemId)}/${obraIndex}/${nextIdx}`
    : null;

  return (
    <ImageDetailWrap>
      <ImageDetailKeyboardNav prevHref={prevHref} nextHref={nextHref} />
      <FullBreadcrumbs linguagem={linguagem} linguagemId={linguagemId} obraHref={obraHref} obra={obra} />
      <ImageDetailViewer as="nav" aria-label="Navegar entre imagens">
        <ImageDetailArrowSlot $position="left">
          {prevHref ? (
            <ImageDetailNavLink href={prevHref} aria-label="Imagem anterior">
              <ChevronLeft />
            </ImageDetailNavLink>
          ) : (
            <ImageDetailNavPlaceholder aria-hidden>
              <ChevronLeft />
            </ImageDetailNavPlaceholder>
          )}
        </ImageDetailArrowSlot>
        {imageUrl && (
          <ImageDetailImageWrap>
            <Image
              src={imageUrl}
              alt={img.titulo ?? "Imagem"}
              width={2400}
              height={1800}
              quality={95}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
              }}
              sizes="(max-width: 72rem) 100vw, 72rem"
              priority
            />
          </ImageDetailImageWrap>
        )}
        <ImageDetailArrowSlot $position="right">
          {nextHref ? (
            <ImageDetailNavLink href={nextHref} aria-label="Próxima imagem">
              <ChevronRight />
            </ImageDetailNavLink>
          ) : (
            <ImageDetailNavPlaceholder aria-hidden>
              <ChevronRight />
            </ImageDetailNavPlaceholder>
          )}
        </ImageDetailArrowSlot>
      </ImageDetailViewer>
      <ImageDetailTitle>{img.titulo ?? ""}</ImageDetailTitle>
      {metaParts?.length > 0 &&
        metaParts.map((part) => (
          <ImageDetailMeta key={part}>{part}</ImageDetailMeta>
        ))}
    </ImageDetailWrap>
  );
}
