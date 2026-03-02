import styled from "styled-components";

export const ArticleWrap = styled.article`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
`;

export const ArticleTitle = styled.h1`
  font-family: var(--font-display), serif;
  font-size: 1.875rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  margin: 0;
  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

export const ArticleBody = styled.div`
  margin-top: 2rem;
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 1.125rem;
  line-height: 1.625;
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactLabel = styled.span`
  color: color-mix(in srgb, var(--foreground) 70%, transparent);
`;

export const ContactLink = styled.a`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

export const ContactProse = styled.div`
  font-size: 1.125rem;
  color: color-mix(in srgb, var(--foreground) 90%, transparent);
`;
