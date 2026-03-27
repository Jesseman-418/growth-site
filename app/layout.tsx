import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Growth Operating | Turn Your Audience Into Revenue",
  description:
    "I partner with creators to build, launch, and sell digital products. You bring the audience, I handle everything else. $0 upfront — revenue share only.",
  keywords: [
    "creator partnerships",
    "digital product launch",
    "revenue share",
    "course creation",
    "instagram monetization",
    "creator economy",
    "digital products",
    "audience monetization",
  ],
  openGraph: {
    title: "Growth Operating | Turn Your Audience Into Revenue",
    description:
      "I partner with creators to build, launch, and sell digital products. $0 upfront — revenue share only.",
    type: "website",
    locale: "en_US",
    siteName: "Growth Operating",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Operating | Turn Your Audience Into Revenue",
    description:
      "I partner with creators to build, launch, and sell digital products. $0 upfront — revenue share only.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
