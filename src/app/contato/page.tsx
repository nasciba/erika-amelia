import { ContactForm } from "../components/ContactForm";
import { EmailIcon, InstagramIcon } from "../components/icons/ContactIcons";
import { ContactBlock, ContactLink } from "../components/styled/ContactStyles";

const EMAIL = "erika.amelia@hotmail.com";

export default async function ContactPage() {
  const instagramHref = "https://instagram.com/cameliacomvaidade";

  return (
    <ContactBlock>
      <div style={{ width: "30%" }}>
        <p>
          <EmailIcon />
          <ContactLink href={`mailto:${EMAIL}`}>
           {EMAIL}
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
      </div>
      <ContactForm />
    </ContactBlock>
  );
}
