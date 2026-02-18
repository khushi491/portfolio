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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark`}>
        <ThemeProvider attribute="class"> {/* Wrap with ThemeProvider */}
          <Navbar />
          <div className="relative pt-16">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
