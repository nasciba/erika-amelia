import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLinguagemById, urlFor } from "../../lib/sanity";
import {
  ObrasGrid,
  ObraCardLink,
  ObraCardImageWrap,
  ObraCardTitle,
  ObrasPageTitle,
} from "../../components/styled/ObraStyles";

interface PageProps {
  params: Promise<{ linguagemId: string }>;
}

export default async function LinguagemPage({ params }: PageProps) {
  const { linguagemId } = await params;
  const linguagem = await getLinguagemById(decodeURIComponent(linguagemId));
  if (!linguagem) notFound();

  const obras = linguagem.obras ?? [];

  return (
    <div>
      <Link
        href="/obras"
        style={{
          display: "inline-block",
          fontSize: "0.875rem",
          color: "var(--foreground)",
          opacity: 0.8,
          textDecoration: "underline",
          marginBottom: "1rem",
        }}
      >
        ← Voltar para Obras
      </Link>
      <ObrasPageTitle>{linguagem.nome ?? "Linguagem"}</ObrasPageTitle>
      {obras.length === 0 ? (
        <p>Nenhuma obra nesta linguagem.</p>
      ) : (
        <ObrasGrid as="div">
          {obras.map((obra, obraIndex) => {
            const coverUrl =
              obra.fotoDeCapa?.asset &&
              urlFor(obra.fotoDeCapa).width(400).height(300).url();
            const href = `/obras/${encodeURIComponent(linguagemId)}/${obraIndex}`;
            return (
              <ObraCardLink key={obraIndex} href={href}>
                <ObraCardImageWrap>
                  {coverUrl ? (
                    <Image
                      src={coverUrl}
                      alt={obra.nome ?? "Obra"}
                      fill
                      sizes="(max-width: 640px) 50vw, 200px"
                      style={{ objectFit: "cover" }}
                    />
                  ) : null}
                </ObraCardImageWrap>
                <ObraCardTitle>{obra.nome ?? "Sem nome"}</ObraCardTitle>
              </ObraCardLink>
            );
          })}
        </ObrasGrid>
      )}
    </div>
  );
}
