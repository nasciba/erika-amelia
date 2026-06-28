import { ContactForm } from "../_components/ContactForm";
import { EmailIcon, InstagramIcon } from "../_components/icons/ContactIcons";
import { ContactBlock, ContactBlockItem, ContactLink } from "../_components/styled/ContactStyles";

const EMAIL = "erika.amelia@hotmail.com";
const INSTAGRAM = "@cameliacomvaidade";
const INSTAGRAM_REF = "https://instagram.com/cameliacomvaidade";

export default async function ContactPage() {

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
            href={INSTAGRAM_REF}
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
