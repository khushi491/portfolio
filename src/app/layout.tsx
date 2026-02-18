import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 leading-relaxed`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="relative pt-16 max-w-[1100px] mx-auto px-6">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
