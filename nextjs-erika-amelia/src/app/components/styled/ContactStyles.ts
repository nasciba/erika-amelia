import styled from "styled-components";

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactLabel = styled.span`
  color: color-mix(in srgb, var(--foreground) 70%, transparent);
`;

export const ContactIconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  vertical-align: middle;
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
