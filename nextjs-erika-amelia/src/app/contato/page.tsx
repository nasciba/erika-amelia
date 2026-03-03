import { EmailIcon, InstagramIcon } from "../components/icons/ContactIcons";
import { ContactBlock, ContactLink } from "../components/styled/ContactStyles";

export default async function ContactPage() {
  const instagramHref = "https://instagram.com/cameliacomvaidade";

  return (
    <ContactBlock>
      <p>
        <EmailIcon />
        <ContactLink href="mailto:erikaamelia@gmail.com">
          erikaamelia@gmail.com
        </ContactLink>
      </p>
      <p>
        <InstagramIcon />
        <ContactLink
          href={instagramHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          @cameliacomvaidade
        </ContactLink>
      </p>
    </ContactBlock>
  );
}
