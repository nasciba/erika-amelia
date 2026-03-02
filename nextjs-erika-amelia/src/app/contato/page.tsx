import { getContact } from "../lib/sanity";
import { notFound } from "next/navigation";
import {
  ArticleWrap,
  ArticleTitle,
  ArticleBody,
  ContactBlock,
  ContactLabel,
  ContactLink,
  ContactProse,
} from "../components/styled/ArticleStyles";

export default async function ContactPage() {
  const data = await getContact();
  if (!data) notFound();
  const contact = data;

  const instagramHref = contact.instagram
    ? contact.instagram.startsWith("http")
      ? contact.instagram
      : `https://instagram.com/${contact.instagram.replace(/^@/, "")}`
    : "";

  return (
    <ArticleWrap>
      <ArticleTitle>Contato</ArticleTitle>
      <ArticleBody>
        <ContactBlock>
          {contact.email && (
            <p>
              <ContactLabel>Email:</ContactLabel>{" "}
              <ContactLink href={`mailto:${contact.email}`}>
                {contact.email}
              </ContactLink>
            </p>
          )}
          {contact.instagram && (
            <p>
              <ContactLabel>Instagram:</ContactLabel>{" "}
              <ContactLink
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.instagram}
              </ContactLink>
            </p>
          )}
          {contact.other && (
            <ContactProse>{contact.other}</ContactProse>
          )}
        </ContactBlock>
      </ArticleBody>
    </ArticleWrap>
  );
}
