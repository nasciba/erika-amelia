import Image from "next/image";
import { getLinguagens, urlFor } from "../lib/sanity";
import {
  ObrasPageTitle,
  ObrasGrid,
  ObraCardLink,
  ObraCardImageWrap,
  ObraCardTitle,
} from "../components/styled/ObraStyles";

export default async function ObrasPage() {
  const linguagens = await getLinguagens();

  return (
    <div>
      <ObrasPageTitle>Obras</ObrasPageTitle>
      {linguagens?.length === 0 ? (
        <p>Nenhuma linguagem ou obra cadastrada.</p>
      ) : (
        <ObrasGrid as="div">
          {linguagens?.map((linguagem) =>
            (linguagem.obras ?? []).map((obra, obraIndex) => {
              const coverUrl =
                obra.fotoDeCapa?.asset &&
                urlFor(obra.fotoDeCapa).width(400).height(300).url();
              const href = `/obras/${encodeURIComponent(linguagem._id)}/${obraIndex}`;
              return (
                <ObraCardLink key={`${linguagem._id}-${obraIndex}`} href={href}>
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
            })
          )}
        </ObrasGrid>
      )}
    </div>
  );
}
