import type { Metadata } from "next";
import AllProjects from "@/components/AllProjects";

export const metadata: Metadata = {
  title: "All Projects — Khushi Parmar",
  description:
    "Every project Khushi Parmar has shipped across full-stack development, AI systems, and automation.",
};

export default function ProjectsPage() {
  return <AllProjects />;
}
