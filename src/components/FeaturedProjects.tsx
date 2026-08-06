"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuFileStack,
  LuShieldCheck,
  LuPuzzle,
  LuCalendarDays,
  LuScale,
} from "react-icons/lu";
import ProjectModal, { Project } from "./ProjectModal";

type Item = Project & {
  subtitle: string;
  /** One-line teaser shown on the row. */
  blurb: string;
  /** Short tag pills for the row (full stack lives in the modal). */
  tags: string[];
  Icon?: IconType;
  /** Monogram used when no icon is set. */
  mono?: string;
};

// First three are the featured set; the rest reveal under "View All Projects".
const PROJECTS: Item[] = [
  {
    title: "CareerBakers",
    subtitle: "AI-Powered Career Companion",
    blurb: "AI-powered platform for resumes, interviews, and job applications.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AI"],
    mono: "CB",
    oneLiner: "AI-Powered Career Companion",
    longDescription:
      "CareerBakers combines AI, automation, and modern web technologies to simplify the entire job search process. From ATS-friendly resumes to AI mock interviews and auto job applications — everything in one place.",
    highlights: [
      "AI Resume Builder with ATS optimization",
      "AI Interview Copilot with real-time feedback",
      "Auto Apply to jobs across platforms",
      "Smart job matching based on skills & goals",
    ],
    techChips: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "OpenAI API",
      "Stripe",
      "Resend",
      "Clerk",
      "Vercel",
    ],
  },
  {
    title: "DocMCP",
    subtitle: "Logistics Document Assistant",
    blurb: "AI assistant for logistics documents and smart Q&A.",
    tags: ["FastAPI", "LangChain", "ChromaDB", "LLM"],
    Icon: LuFileStack,
    oneLiner: "Logistics Document Assistant",
    longDescription:
      "An AI assistant for logistics documents that answers questions over your files with retrieval-augmented generation, turning dense paperwork into smart, conversational Q&A.",
    highlights: [
      "Document ingestion and vector indexing with ChromaDB",
      "Retrieval-augmented Q&A over logistics documents",
      "LangChain orchestration with LLM reasoning",
      "FastAPI backend for fast, typed endpoints",
    ],
    techChips: ["FastAPI", "LangChain", "ChromaDB", "LLM", "Python"],
  },
  {
    title: "AuthAI",
    subtitle: "x402 + Gmail + Coinbase CDP",
    blurb: "Secure agent authentication with crypto payments.",
    tags: ["Next.js", "Node.js", "Base", "x402"],
    Icon: LuShieldCheck,
    oneLiner: "x402 + Gmail + Coinbase CDP",
    longDescription:
      "Secure agent authentication that brings together x402, Gmail, and Coinbase CDP — letting agents authenticate and settle crypto payments on Base.",
    highlights: [
      "Agent authentication via the x402 protocol",
      "Gmail-based identity flows",
      "Coinbase CDP integration for crypto payments",
      "Settlement deployed on Base",
    ],
    techChips: ["Next.js", "Node.js", "Base", "x402", "Coinbase CDP"],
  },
  {
    title: "Auto Apply Extension",
    subtitle: "Job Application Automation",
    blurb: "Chrome extension that auto-fills and submits job applications.",
    tags: ["React", "TypeScript", "Chrome API"],
    Icon: LuPuzzle,
    oneLiner: "Job Application Automation",
    longDescription:
      "A Chrome extension that automates job applications — auto-filling forms from a saved profile and submitting across platforms in one click.",
    highlights: [
      "One-click auto-apply across job platforms",
      "Form auto-fill from a saved profile",
      "Built on the Chrome Extension APIs",
    ],
    techChips: ["React", "TypeScript", "Chrome API"],
  },
  {
    title: "Workforce Scheduler",
    subtitle: "Event Staffing & Scheduling",
    blurb: "Staffing and shift scheduling for events.",
    tags: ["Next.js", "MySQL", "Tailwind CSS"],
    Icon: LuCalendarDays,
    oneLiner: "Event Staffing & Scheduling",
    longDescription:
      "An event staffing and scheduling platform for planning shifts and assigning staff across events, backed by a relational data model.",
    highlights: [
      "Shift planning and staff assignment",
      "Event-based scheduling",
      "Next.js app with MySQL persistence",
    ],
    techChips: ["Next.js", "MySQL", "Tailwind CSS"],
  },
  {
    title: "JusticeStack",
    subtitle: "Parking OCR + RAG System",
    blurb: "OCR + RAG system for parking citations.",
    tags: ["Python", "OCR", "PostgreSQL", "RAG"],
    Icon: LuScale,
    oneLiner: "Parking OCR + RAG System",
    longDescription:
      "A parking OCR and RAG system that extracts structured data from citations and answers questions over the corpus with retrieval-augmented generation.",
    highlights: [
      "OCR extraction from parking documents",
      "Retrieval-augmented Q&A over the corpus",
      "PostgreSQL-backed data store",
    ],
    techChips: ["Python", "OCR", "PostgreSQL", "RAG"],
  },
];

const FeaturedProjects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = (item: Project) => {
    setSelected(item);
    setIsOpen(true);
  };

  const visible = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="w-full py-28 px-4 text-cream-muted">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[34%_1fr] lg:gap-16">
        {/* Editorial column */}
        <div className="md:sticky md:top-28 md:self-start">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-sm text-primary">03</span>
            <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
            <span className="text-xs uppercase tracking-[0.22em] text-primary">
              Projects
            </span>
          </div>

          <h2 className="font-serif text-[clamp(2.75rem,6vw,4.5rem)] font-light leading-[1.02] text-cream">
            Featured
            <br />
            <span className="text-primary">Projects</span>
          </h2>

          <p className="mt-6 max-w-sm leading-relaxed text-cream-muted">
            A collection of products I&rsquo;ve built across full-stack
            development, AI systems, and automation.
          </p>

          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="group mt-8 inline-flex items-center gap-3 rounded-sm border border-gold/70 px-6 py-3.5 text-cream transition-colors duration-200 hover:border-gold hover:bg-gold/10"
          >
            {showAll ? "Show Less" : "View All Projects"}
            <LuArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        {/* Project rows */}
        <ul className="flex flex-col gap-4">
          {visible.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(i, 3) * 0.05 }}
            >
              <button
                type="button"
                onClick={() => open(item)}
                className="group flex w-full flex-col gap-4 rounded-2xl border border-ink-edge bg-ink-light p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 md:flex-row md:items-center md:gap-6 md:p-6"
              >
                {/* Icon + identity */}
                <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-ink-edge bg-ink-lighter text-gold md:h-16 md:w-16">
                    {item.Icon ? (
                      <item.Icon className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
                    ) : (
                      <span className="font-serif text-lg font-semibold text-primary md:text-xl">
                        {item.mono}
                      </span>
                    )}
                  </span>

                  <span className="min-w-0">
                    <span className="block text-lg font-semibold text-cream">
                      {item.title}
                    </span>
                    <span className="block text-sm text-cream-muted">
                      {item.subtitle}
                    </span>
                    <span className="mt-2 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-ink-edge bg-ink px-2 py-0.5 text-[11px] text-cream-dim"
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  </span>
                </div>

                {/* Blurb + arrow */}
                <div className="flex items-center gap-4 pl-[4.5rem] md:w-[38%] md:shrink-0 md:pl-0">
                  <p className="flex-1 text-sm leading-relaxed text-cream-muted">
                    {item.blurb}
                  </p>
                  <LuArrowRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-cream-dim transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <ProjectModal
        project={selected}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
};

export default FeaturedProjects;
