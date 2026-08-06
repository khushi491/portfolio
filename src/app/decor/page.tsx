import type { Metadata } from "next";
import DecorShowcase from "@/components/DecorShowcase";

export const metadata: Metadata = {
  title: "Design System — Khushi Parmar",
  description:
    "Paper & Ink: the reusable paper-quilling decorative primitives behind the portfolio.",
};

export default function DecorPage() {
  return <DecorShowcase />;
}
