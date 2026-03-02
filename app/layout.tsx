import type { Metadata } from "next";
import Roboto from "next/font/local";

import "./globals.css";

const roboto = Roboto({
  src: [
    { path: "./fonts/Roboto-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/Roboto-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./fonts/Roboto-ExtraLight.ttf", weight: "200", style: "normal" },
    {
      path: "./fonts/Roboto-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    { path: "./fonts/Roboto-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Roboto-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Roboto-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Roboto-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Roboto-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./fonts/Roboto-SemiBold.ttf", weight: "600", style: "normal" },
    {
      path: "./fonts/Roboto-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    { path: "./fonts/Roboto-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Roboto-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./fonts/Roboto-ExtraBold.ttf", weight: "800", style: "normal" },
    {
      path: "./fonts/Roboto-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    { path: "./fonts/Roboto-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/Roboto-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hidayat Mauluddin - Portfolio",
  description:
    "Personal portfolio website showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
