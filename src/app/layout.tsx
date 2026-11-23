import type { Metadata } from "next";
import { Caveat, Fraunces, Instrument_Sans, Tiro_Devanagari_Hindi } from "next/font/google";
import { book } from "@/content/book";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  weight: "400",
  variable: "--font-tiro",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL(book.siteUrl),
  title: `${book.title} – ${book.tagline}`,
  description: book.metaDescription,
  openGraph: {
    title: `${book.title} – ${book.tagline}`,
    description: book.metaDescription,
    type: "website",
    url: book.siteUrl,
    siteName: book.publisher,
    images: [{ url: "/images/cover.jpg", width: 988, height: 1280, alt: book.title }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${instrument.variable} ${tiro.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
