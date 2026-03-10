import styled from "styled-components";
import Link from "next/link";

export const StyledNav = styled.nav`
  position: relative;
  z-index: 100;
  margin-left: auto;
  background-color: transparent;
  margin-right: auto;
  max-width: min(120rem, 94vw);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const LogoLink = styled(Link)<{ $isHome?: boolean }>`
  font-family: var(--font-display), serif;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  color: ${(props) =>
    props.$isHome ? "var(--background)" : "var(--foreground)"};
  text-decoration: none;
`;

export const HamburgerButton = styled.button<{
  $isHome?: boolean;
  $isOpen?: boolean;
}>`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${(props) =>
    props.$isHome ? "var(--background)" : "var(--foreground)"};
  @media (max-width: 799px) {
    display: flex;
  }
  span {
    display: block;
    width: 100%;
    height: 2px;
    background: currentColor;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  ${(props) =>
    props.$isOpen &&
    `
    span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  `}
`;

export const NavList = styled.ul<{ $isOpen?: boolean }>`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 799px) {
    position: absolute;
    top: 100%;
    left: auto;
    right: 0;
    width: 12rem;
    z-index: 101;
    flex-direction: column;
    gap: 0;
    padding: 1rem;
    background: var(--background);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    align-items: center;
  }
`;

export const NavItem = styled.li<{ $isHome?: boolean }>`
  padding-bottom: 8px;
  @media (max-width: 799px) {
    padding: 0.75rem 0;
    border-bottom: 1px solid color-mix(in srgb, var(--foreground) 10%, transparent);
    text-align: center;
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const NavLink = styled(Link)<{
  $isHome?: boolean;
  $isActive?: boolean;
  $isMobile?: boolean;
}>`
  position: relative;
  display: inline-block;
  font-size: 1.075rem;
  font-weight: 600;
  color: ${(props) =>
    props.$isHome && !props.$isMobile
      ? "var(--background)"
      : "color-mix(in srgb, var(--foreground) 80%, transparent)"};
  text-decoration: none;
  transition: color 0.15s ease;
  padding-bottom: 8px;
  &:hover {
    color: ${(props) =>
      props.$isHome && !props.$isMobile ? "var(--background)" : "var(--foreground)"};
  }
  @media (max-width: 799px) {
    color: var(--foreground);
    padding-bottom: 0;
    &:hover {
      color: var(--foreground);
    }
  }
  ${(props) =>
    props.$isActive &&
    !props.$isMobile &&
    `
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 60%;
      height: 2px;
      background: red;
    }
  `}
  ${(props) =>
    props.$isActive &&
    props.$isMobile &&
    `
    font-weight: 700;
    color: var(--foreground);
  `}
`;
