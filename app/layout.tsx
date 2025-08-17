import type { Metadata } from "next";
import "./globals.css";
import { inter, sora } from "../lib/fonts";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aurora Startup Page | Glow in the Dark Innovation",
  description:
    "A night-sky tech landing page with aurora motion, glassmorphism, and neon accents.",
  keywords: [
    "Aurora",
    "glassmorphism",
    "neon",
    "Next.js",
    "Framer Motion",
    "Tailwind",
  ],
  openGraph: {
    title: "Aurora Startup Page",
    description: "Glow in the Dark Innovation",
    images: ["/og-image.png"],
    type: "website",
    url: "https://example.com",
  },
  metadataBase: new URL("https://example.com"),
  alternates: { canonical: "https://example.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
