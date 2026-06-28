import {
  SectionsWrap,
  PageSection,
  BackgroundImage,
} from "./_components/styled/HomeStyles";
import { getBackgroundImageUrl } from "./lib/sanity";
import { Analytics } from '@vercel/analytics/react';


export default async function HomePage() {
  const backgroundImageUrl = (await getBackgroundImageUrl()) ?? "/images/capa.jpg";

  return (
    <BackgroundImage $imageUrl={backgroundImageUrl}>
      <Analytics />
      <SectionsWrap>
        <PageSection />
      </SectionsWrap>
    </BackgroundImage>
  );
}
