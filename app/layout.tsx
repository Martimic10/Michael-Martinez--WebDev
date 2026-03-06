import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Michael Martinez — Freelance Web Developer",
  description:
    "I design and build clean, fast, premium websites for businesses that want a stronger online presence and a more professional brand.",
  openGraph: {
    title: "Michael Martinez — Freelance Web Developer",
    description:
      "Modern websites built to make businesses look better online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
