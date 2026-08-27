import React from "react";
import type { Metadata } from "next";
import { Crimson_Pro, Work_Sans } from "next/font/google";
// @ts-ignore: Next.js global CSS side-effect import
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { MainContainer } from "./_components/styled/LayoutStyles";
import Nav from "./_components/Nav";
import { siteUrl } from "./lib/site";

const display = Crimson_Pro({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Érika Amélia",
  description:
    "Site oficial de Érika Amélia, artista visual. Conheça suas obras, biografia e portfólio.",
  metadataBase: siteUrl,
  keywords: [
    "Érika Amélia",
    "Erika Amelia",
    "artista visual",
    "arte",
    "obras",
    "guignard",
    "escola guignard",
    "uemg",
    "escultura",
    "feminismo e arte",
    "arte contemporânea",
    "arte brasileira",
    "artista brasileira",
  ],
  authors: [{ name: "Érika Amélia" }],
  creator: "Érika Amélia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "Érika Amélia",
    description:
      "Site oficial de Érika Amélia, artista visual. Conheça suas obras, biografia e portfólio.",
    siteName: "Érika Amélia",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Nav />
          <MainContainer>{children}</MainContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
