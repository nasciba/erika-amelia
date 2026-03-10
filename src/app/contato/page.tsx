import { ContactForm } from "../components/ContactForm";
import { EmailIcon, InstagramIcon } from "../components/icons/ContactIcons";
import { ContactBlock, ContactBlockItem, ContactLink } from "../components/styled/ContactStyles";

const EMAIL = "erika.amelia@hotmail.com";
const INSTAGRAM = "@cameliacomvaidade";

export default async function ContactPage() {
  const instagramHref = "https://instagram.com/cameliacomvaidade";

  return (
    <ContactBlock>
      <ContactBlockItem>
        <span>
          <EmailIcon />
          <ContactLink href={`mailto:${EMAIL}`}>{EMAIL}</ContactLink>
        </span>
        <span>
          <InstagramIcon />
          <ContactLink
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {INSTAGRAM}
          </ContactLink>
        </span>
      </ContactBlockItem>
      <ContactForm />
    </ContactBlock>
  );
}
