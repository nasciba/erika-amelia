import {
  SectionsWrap,
  PageSection,
  BackgroundImage,
} from "./components/styled/HomeStyles";

export default function HomePage() {
  return (
    <BackgroundImage>
      <SectionsWrap>
        <PageSection></PageSection>

        {/* <CardGrid>
        <Card href="/bio">
          <CardTitle>Bio</CardTitle>
          <CardDescription>
            Learn about the artist and her practice.
          </CardDescription>
        </Card>
        <Card href="/work">
          <CardTitle>Work</CardTitle>
          <CardDescription>Browse work by category.</CardDescription>
        </Card>
        <Card href="/contact">
          <CardTitle>Contact</CardTitle>
          <CardDescription>
            Get in touch for commissions and inquiries.
          </CardDescription>
        </Card>
      </CardGrid> */}
      </SectionsWrap>
    </BackgroundImage>
  );
}
