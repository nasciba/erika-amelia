import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}

export interface BioContent {
  description?: string | null;
  image?: {
    _type: "image";
    asset?: { _ref: string };
  } | null;
}

export async function getBio(): Promise<BioContent | null> {
  if (!projectId) return null;
  const data = await client.fetch<BioContent | null>(
    `*[_type == "bio"][0]{ description, image }`
  );
  return data;
}

export interface ContactContent {
  email?: string | null;
  instagram?: string | null;
  other?: string | null;
}

export async function getContact(): Promise<ContactContent | null> {
  if (!projectId) {
    return {
      email: "artist@example.com",
      instagram: "@artist",
      other: null,
    };
  }
  const data = await client.fetch<ContactContent | null>(
    `*[_type == "contact"][0]{ email, instagram, other }`
  );
  return data ?? { email: null, instagram: null, other: null };
}
