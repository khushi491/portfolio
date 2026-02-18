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
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
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
