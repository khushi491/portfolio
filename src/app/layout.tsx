import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Khushi Parmar - Full-Stack & AI Engineer",
  description:
    "Khushi Parmar builds scalable applications, intelligent systems, and reliable digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans bg-ink text-cream leading-relaxed overflow-x-hidden`}
      >
        {/* Designed backdrop: charcoal base, soft olive/copper depth glows,
            and fine paper grain — sits behind all content. */}
        <div aria-hidden="true" className="site-bg" />
        <Navbar />
        <div className="relative pt-20 max-w-[1100px] mx-auto px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
