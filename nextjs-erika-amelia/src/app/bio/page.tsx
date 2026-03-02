import Image from "next/image";
import { notFound } from "next/navigation";
import { getBio, urlFor } from "../lib/sanity";
import {
  BioLayout,
  BioImageWrap,
  BioContent,
  BioTitle,
  BioDescription,
} from "../components/styled/BioStyles";

export default async function BioPage() {
  const bio = await getBio();
  if (!bio) notFound();

  const imageUrl =
    bio.image && bio.image.asset
      ? urlFor(bio.image).width(800).height(1000).url()
      : null;

  return (
    <BioLayout>
      {imageUrl ? (
        <BioImageWrap>
          <Image
            src={imageUrl}
            alt="Erika Amelia"
            width={800}
            height={1000}
            style={{ width: "100%", height: "auto" }}
          />
        </BioImageWrap>
      ) : null}
      <BioContent>
        <BioTitle>Sobre</BioTitle>
        <BioDescription>
          {bio.description ?? ""}
        </BioDescription>
      </BioContent>
    </BioLayout>
  );
}
