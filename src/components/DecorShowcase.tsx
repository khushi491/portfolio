"use client";
import React from "react";
import Link from "next/link";
import {
  LuArrowLeft,
  LuGithub,
  LuExternalLink,
  LuDownload,
  LuMail,
} from "react-icons/lu";
import {
  PALETTE,
  PaperDivider,
  SectionNumber,
  MonogramSeal,
  EmbossedButton,
  CopperLine,
  PaperCoil,
  PaperRibbon,
  Spotlight,
  AnimatedUnderline,
  BrowserFrame,
  HoverRevealList,
} from "./decor";

function Item({
  n,
  name,
  desc,
  children,
  className = "",
}: {
  n: string;
  name: string;
  desc: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className="border-t border-ink-edge py-14 first:border-t-0">
      <div className="mb-6 flex items-baseline gap-4">
        <span className="font-mono text-sm text-primary">{n}</span>
        <div>
          <h2 className="font-serif text-2xl text-cream">{name}</h2>
          <p className="mt-1 max-w-xl text-sm text-cream-muted">{desc}</p>
        </div>
      </div>
      <div
        className={`relative flex min-h-[180px] items-center justify-center overflow-hidden rounded-2xl border border-ink-edge bg-ink-light/40 p-8 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

const HOVER_ITEMS = [
  { title: "CareerBakers", subtitle: "AI-Powered Career Companion", href: "/projects/careerbakers", tint: ["#3d3d20", "#151513"] as [string, string] },
  { title: "DocMCP", subtitle: "Logistics Document Assistant", href: "/projects/docmcp", tint: ["#57311d", "#151513"] as [string, string] },
  { title: "AuthAI", subtitle: "x402 + Gmail + Coinbase CDP", href: "/projects/authai", tint: ["#33402c", "#151513"] as [string, string] },
];

const DecorShowcase: React.FC = () => {
  return (
    <main className="py-14 text-cream-muted">
      <Link
        href="/"
        className="group inline-flex items-center gap-2.5 text-sm text-cream-muted transition-colors hover:text-cream"
      >
        <LuArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <header className="relative mt-8 mb-4 overflow-hidden">
        <Spotlight color={PALETTE.softOlive} className="absolute -inset-x-10 -top-10 h-64" />
        <div className="relative">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-sm text-primary">00</span>
            <CopperLine length="2rem" />
            <span className="text-xs uppercase tracking-[0.22em] text-cream-dim">
              Design System
            </span>
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-light leading-none text-cream">
            Paper &amp; <span className="text-primary">Ink</span>
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-cream-muted">
            A reusable set of paper-quilling decorative primitives — handcrafted
            identity and depth, ~15% of the interface, kept out of the way of the
            content. Each is theme-consistent and respects reduced motion.
          </p>
        </div>
      </header>

      <Item n="01" name="Curved layered-paper dividers" desc="Overlapping organic curves for transitions between major sections. Vary the shape so adjacent dividers never repeat." className="!p-0 flex-col gap-0">
        <PaperDivider variant={1} />
        <PaperDivider variant={2} />
        <PaperDivider variant={3} />
      </Item>

      <Item n="02" name="Thin copper lines" desc="1–2px line fragments that draw on scroll — dividers, label accents, timeline paths.">
        <div className="flex w-full flex-col items-center gap-6">
          <CopperLine length="12rem" />
          <div className="flex items-center gap-4">
            <CopperLine length="3rem" />
            <span className="text-xs uppercase tracking-[0.22em] text-cream-dim">Label</span>
            <CopperLine length="3rem" />
          </div>
        </div>
      </Item>

      <Item n="03" name="Rolled-paper coils" desc="Small spiral markers and nodes, 12–36px, that draw in on view. One to three per section.">
        <div className="flex items-center gap-8">
          <PaperCoil size={20} color={PALETTE.copper} />
          <PaperCoil size={28} color={PALETTE.gold} />
          <PaperCoil size={36} color={PALETTE.softOlive} />
        </div>
      </Item>

      <Item n="04" name="Large faded section numbers" desc="Oversized, very-low-opacity serif numerals that support hierarchy from the background." className="min-h-[220px]">
        <SectionNumber className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">04</SectionNumber>
        <p className="relative z-10 max-w-xs text-center text-sm text-cream-muted">
          Content sits cleanly in front of the numeral.
        </p>
      </Item>

      <Item n="05" name="Monogram seals" desc="Thin antique-gold embossed seals with optional ring text — logo, footer signature, project mark.">
        <div className="flex items-center gap-10 text-gold">
          <MonogramSeal initials="K" size={64} />
          <MonogramSeal initials="KP" size={92} ringText="KHUSHI PARMAR · ENGINEER · " />
        </div>
      </Item>

      <Item n="06" name="Paper ribbons" desc="Thin curled ribbons threading negative space with restrained scroll parallax, guiding the eye." className="min-h-[220px]">
        <PaperRibbon className="absolute inset-0" />
        <span className="relative z-10 text-sm text-cream-dim">Ribbon drifts behind content on scroll</span>
      </Item>

      <Item n="07" name="Embossed icon buttons" desc="Matte-paper buttons with a raised edge and soft inner shadow. Line icons only, no gloss.">
        <div className="flex items-center gap-4">
          <EmbossedButton label="GitHub" href="https://github.com/khushi491"><LuGithub className="h-5 w-5" /></EmbossedButton>
          <EmbossedButton label="External link" href="https://example.com"><LuExternalLink className="h-5 w-5" /></EmbossedButton>
          <EmbossedButton label="Download résumé"><LuDownload className="h-5 w-5" /></EmbossedButton>
          <EmbossedButton label="Email" shape="circle"><LuMail className="h-5 w-5" /></EmbossedButton>
        </div>
      </Item>

      <Item n="08" name="Soft spotlight gradients" desc="Low-contrast radial light behind a heading, portrait, or mockup. One per section, no banding." className="min-h-[200px]">
        <Spotlight color={PALETTE.copper} intensity={0.18} className="absolute inset-0" />
        <h3 className="relative z-10 font-serif text-3xl text-cream">Featured</h3>
      </Item>

      <Item n="09" name="Fine paper grain" desc="A matte texture visible only on close inspection — applied globally via .paper-grain.">
        <div className="paper-grain relative h-24 w-full rounded-lg border border-ink-edge bg-ink" />
      </Item>

      <Item n="10" name="Animated underline strokes" desc="Copper underlines that draw left-to-right on hover. Use on nav items and labels — not every heading.">
        <div className="flex items-center gap-8 text-cream">
          <AnimatedUnderline>Hover me</AnimatedUnderline>
          <AnimatedUnderline active color={PALETTE.gold}>Active label</AnimatedUnderline>
        </div>
      </Item>

      <Item n="11" name="Vertical timeline threads" desc="A fine line with rolled-paper nodes connecting milestones — used live in Experience & Education.">
        <div className="relative w-full max-w-sm pl-6">
          <span className="absolute left-[3px] top-2 bottom-2 w-px bg-ink-edge" />
          {["2024 — Present", "2022 — 2024", "2020 — 2022"].map((t) => (
            <div key={t} className="relative mb-6 last:mb-0">
              <span className="absolute -left-[1.35rem] top-1"><PaperCoil size={14} /></span>
              <span className="text-sm text-cream-muted">{t}</span>
            </div>
          ))}
        </div>
      </Item>

      <Item n="12" name="Floating browser mockups" desc="Clean browser chrome around a screenshot, with a slow float-in and restrained depth.">
        <BrowserFrame url="careerbakers.app" className="w-full max-w-md">
          <div className="flex h-40 items-center justify-center" style={{ backgroundImage: `linear-gradient(150deg, ${PALETTE.deepOlive}, ${PALETTE.charcoal})` }}>
            <span className="font-serif text-2xl text-cream/70">Screenshot</span>
          </div>
        </BrowserFrame>
      </Item>

      <Item n="13" name="Hover-reveal project list" desc="Hovering a title reveals a framed preview that follows the cursor; touch devices get inline thumbnails." className="!block !p-6">
        <HoverRevealList items={HOVER_ITEMS} />
      </Item>
    </main>
  );
};

export default DecorShowcase;
