"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  StyledNav,
  LogoLink,
  HamburgerButton,
  NavList,
  NavItem,
  NavLink,
} from "./styled/NavStyles";

const links = [
  { href: "/obras", label: "Obras" },
  { href: "/bio", label: "Sobre" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contato", label: "Contato" },
];

const LOGO_TEXT = "Érika Amélia";

const Nav = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledNav>
      <LogoLink href="/" $isHome={isHome}>
        {LOGO_TEXT}
      </LogoLink>
      <HamburgerButton
        type="button"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        $isHome={isHome}
        $isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </HamburgerButton>
      <NavList $isOpen={isMenuOpen}>
        {links.map(({ href, label }) => (
          <NavItem key={href}>
            <NavLink
              href={href}
              $isHome={isHome}
              $isActive={pathname.includes(href)}
              $isMobile={isMenuOpen}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </StyledNav>
  );
}

export default Nav;