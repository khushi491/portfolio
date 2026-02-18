import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a common sans-serif font
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khushi Parmar - Software Engineer Portfolio",
  description: "Khushi Parmar's professional portfolio showcasing her experience, skills, and projects as a Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
