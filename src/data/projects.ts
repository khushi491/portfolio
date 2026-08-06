import type { IconType } from "react-icons";
import {
  LuFileStack,
  LuShieldCheck,
  LuPuzzle,
  LuCalendarDays,
  LuScale,
  LuUsers,
  LuSend,
  LuTrendingUp,
  LuStar,
} from "react-icons/lu";
import type { Project } from "@/components/ProjectModal";

export type Metric = { value: string; label: string; Icon: IconType };

export type ProjectItem = Project & {
  /** URL segment: /projects/<slug> */
  slug: string;
  subtitle: string;
  /** One-line teaser shown on the row / card. */
  blurb: string;
  /** Intro paragraph on the detail page. */
  description: string;
  /** Short tag pills (the full stack lives in techChips). */
  tags: string[];
  Icon?: IconType;
  /** Monogram used when no icon is set. */
  mono?: string;
  /** Two hexes for the placeholder preview gradient. */
  tint: [string, string];
  /** Optional real screenshot; replaces the gradient preview when set. */
  image?: string;
  /** External links for the detail page (rendered only when present). */
  liveLink?: string;
  caseStudyLink?: string;
  /** Headline stats for the detail page (optional). */
  metrics?: Metric[];
};

// First three are the featured set shown on the home page; all six appear on
// the /projects page, and each has a /projects/<slug> detail page.
export const PROJECTS: ProjectItem[] = [
  {
    title: "CareerBakers",
    slug: "careerbakers",
    subtitle: "AI-Powered Career Companion",
    blurb: "AI-powered platform for resumes, interviews, and job applications.",
    description:
      "An all-in-one platform that helps users build professional resumes, prepare for interviews, and automate job applications using AI.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AI"],
    mono: "CB",
    tint: ["#3d3d20", "#151513"],
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
    metrics: [
      { value: "10K+", label: "Active Users", Icon: LuUsers },
      { value: "50K+", label: "Applications Sent", Icon: LuSend },
      { value: "92%", label: "Resume Match Rate", Icon: LuTrendingUp },
      { value: "4.9/5", label: "User Rating", Icon: LuStar },
    ],
  },
  {
    title: "DocMCP",
    slug: "docmcp",
    subtitle: "Logistics Document Assistant",
    blurb: "AI assistant for logistics documents and smart Q&A.",
    description:
      "An AI assistant that turns dense logistics paperwork into fast, conversational answers using retrieval-augmented generation.",
    tags: ["FastAPI", "LangChain", "ChromaDB", "LLM"],
    Icon: LuFileStack,
    tint: ["#57311d", "#151513"],
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
    slug: "authai",
    subtitle: "x402 + Gmail + Coinbase CDP",
    blurb: "Secure agent authentication with crypto payments.",
    description:
      "Secure authentication for AI agents, uniting x402, Gmail, and Coinbase CDP so agents can verify identity and settle crypto payments on Base.",
    tags: ["Next.js", "Node.js", "Base", "x402"],
    Icon: LuShieldCheck,
    tint: ["#33402c", "#151513"],
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
    slug: "auto-apply-extension",
    subtitle: "Job Application Automation",
    blurb: "Chrome extension that auto-fills and submits job applications.",
    description:
      "A Chrome extension that automates the job hunt — auto-filling and submitting applications across platforms in one click.",
    tags: ["React", "TypeScript", "Chrome API"],
    Icon: LuPuzzle,
    tint: ["#43391f", "#151513"],
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
    slug: "workforce-scheduler",
    subtitle: "Event Staffing & Scheduling",
    blurb: "Staffing and shift scheduling for events.",
    description:
      "A staffing and scheduling platform for planning shifts and assigning teams across events.",
    tags: ["Next.js", "MySQL", "Tailwind CSS"],
    Icon: LuCalendarDays,
    tint: ["#2f3a3a", "#151513"],
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
    slug: "justicestack",
    subtitle: "Parking OCR + RAG System",
    blurb: "OCR + RAG system for parking citations.",
    description:
      "A parking OCR and RAG system that extracts data from citations and answers questions across the corpus.",
    tags: ["Python", "OCR", "PostgreSQL", "RAG"],
    Icon: LuScale,
    tint: ["#3a2a30", "#151513"],
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

export const getProject = (slug: string): ProjectItem | undefined =>
  PROJECTS.find((p) => p.slug === slug);
