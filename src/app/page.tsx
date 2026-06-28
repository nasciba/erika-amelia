import {
  SectionsWrap,
  PageSection,
  BackgroundImage,
} from "./_components/styled/HomeStyles";
import { getBackgroundImageUrl } from "./lib/sanity";


export default async function HomePage() {
  const backgroundImageUrl = (await getBackgroundImageUrl()) ?? "/images/capa.jpg";

  return (
    <BackgroundImage $imageUrl={backgroundImageUrl}>
      <SectionsWrap>
        <PageSection />
      </SectionsWrap>
    </BackgroundImage>
  );
}
