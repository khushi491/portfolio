import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider

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
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-dark-background-DEFAULT dark:text-gray-100 leading-relaxed`}>
        <ThemeProvider attribute="class"> {/* Wrap with ThemeProvider */}
          <Navbar />
          <div className="relative pt-16 max-w-[980px] mx-auto px-6">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
