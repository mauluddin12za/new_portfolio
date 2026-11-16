import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hidayat Mauluddin — Full-Stack Developer & M.Kom Researcher",
  description:
    "Portfolio of Hidayat Mauluddin, a Full-Stack Web Developer from Palembang, Indonesia, specializing in Next.js, Node.js, MySQL, and AI-powered web applications. Currently completing a Master of Computer Science at Sriwijaya University.",
  metadataBase: new URL("https://www.hidayatmauluddin.my.id"),
  openGraph: {
    title: "Hidayat Mauluddin — Full-Stack Developer & M.Kom Researcher",
    description:
      "Full-Stack Web Developer from Palembang, Indonesia. Building scalable web apps with Next.js, Node.js & MySQL. M.Kom researcher in CNN + U-Net image restoration.",
    url: "https://www.hidayatmauluddin.my.id",
    siteName: "Hidayat Mauluddin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hidayat Mauluddin — Full-Stack Developer & M.Kom Researcher",
    description:
      "Full-Stack Web Developer from Palembang, Indonesia. Building scalable web apps with Next.js, Node.js & MySQL. M.Kom researcher in CNN + U-Net image restoration.",
  },
  keywords: [
    "Hidayat Mauluddin",
    "Full-Stack Developer",
    "Next.js",
    "Node.js",
    "MySQL",
    "Web Developer Indonesia",
    "Palembang Developer",
    "AI Web Applications",
    "M.Kom Sriwijaya University",
    "Image Restoration CNN UNet",
    "Portfolio",
  ],
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
