import styled from "styled-components";
import Link from "next/link";

export const BackgroundImage = styled.div`
  background-image: url("/images/background.jpg");
  background-position: center;
  background-size: stretch;
  background-repeat: stretch;
  height: 100vh;  
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;
export const PageSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &:first-of-type {
    text-align: center;
  }
`;

export const SectionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-display), serif;
  font-size: 2.25rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  margin: 0;
  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

export const HeroSubtitle = styled.p`
  margin: 1rem 0 0;
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 1.125rem;
  color: color-mix(in srgb, var(--foreground) 80%, transparent);
`;

export const CardGrid = styled.section`
  display: grid;
  gap: 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled(Link)`
  display: block;
  border-radius: 0.5rem;
  border: 1px solid color-mix(in srgb, var(--foreground) 10%, transparent);
  background: var(--background);
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease;
  &:hover {
    border-color: color-mix(in srgb, var(--foreground) 20%, transparent);
  }
`;

export const CardTitle = styled.h2`
  font-family: var(--font-display), serif;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
`;

export const CardDescription = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
  color: color-mix(in srgb, var(--foreground) 70%, transparent);
`;
