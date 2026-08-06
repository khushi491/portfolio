"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type Slide = {
  title: string;
  subtitle: string;
  /** Two hexes for the poster gradient when no `image` is supplied. */
  tint: [string, string];
  /** Optional real cover image (drop screenshots in /public and reference here). */
  image?: string;
};

// Flagship work as poster slides. Add an `image` to any slide to swap the
// gradient poster for a real screenshot.
const SLIDES: Slide[] = [
  {
    title: "CareerBakers",
    subtitle: "AI-Powered Career Companion",
    tint: ["#3d3d20", "#151513"],
  },
  {
    title: "DocMCP",
    subtitle: "Logistics Document Assistant",
    tint: ["#57311d", "#151513"],
  },
  {
    title: "AuthAI",
    subtitle: "x402 + Gmail + Coinbase CDP",
    tint: ["#33402c", "#151513"],
  },
  {
    title: "Auto Apply Extension",
    subtitle: "Job Application Automation",
    tint: ["#43391f", "#151513"],
  },
  {
    title: "Workforce Scheduler",
    subtitle: "Event Staffing & Scheduling",
    tint: ["#2f3a3a", "#151513"],
  },
  {
    title: "JusticeStack",
    subtitle: "Parking OCR + RAG System",
    tint: ["#3a2a30", "#151513"],
  },
];

function Poster({ slide, index }: { slide: Slide; index: number }) {
  return (
    <div
      className="paper-grain relative flex aspect-[3/4] w-[clamp(230px,26vw,360px)] items-center justify-center overflow-hidden rounded-lg border border-ink-edge shadow-lg"
      style={{
        backgroundImage: `linear-gradient(150deg, ${slide.tint[0]}, ${slide.tint[1]})`,
      }}
    >
      {slide.image ? (
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          sizes="(max-width: 768px) 80vw, 360px"
          className="object-cover"
        />
      ) : (
        <>
          {/* Oversized index watermark */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 right-1 font-serif text-[11rem] leading-none text-cream/[0.06]"
          >
            {index + 1}
          </span>
          <h3 className="relative px-6 text-center font-serif text-3xl leading-tight text-cream">
            {slide.title}
          </h3>
        </>
      )}
    </div>
  );
}

const Gallery: React.FC = () => {
  const trackRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Pan the row horizontally across the pinned viewport: 0 → -(n-1) slides.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(SLIDES.length - 1) * 100}vw`],
  );

  // Reduced motion: skip the scroll-jack entirely and stack the posters.
  if (prefersReduced) {
    return (
      <article
        id="gallery"
        className="w-screen mx-[calc(50%-50vw)] px-6 py-28"
      >
        <h2 className="mb-16 text-center text-3xl md:text-4xl font-bold text-cream">
          Selected Work
        </h2>
        <div className="flex flex-col items-center gap-16">
          {SLIDES.map((slide, i) => (
            <div key={slide.title} className="flex flex-col items-center gap-4">
              <Poster slide={slide} index={i} />
              <div className="text-center">
                <span className="font-mono text-sm text-primary">
                  #{String(i + 1).padStart(3, "0")}
                </span>
                <p className="mt-1 max-w-sm text-cream-muted">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article id="gallery" className="w-screen mx-[calc(50%-50vw)]">
      {/* Intro panel */}
      <header className="flex h-[70vh] flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 text-xs uppercase tracking-[0.22em] text-cream-dim">
          Selected Work
        </span>
        <h2 className="font-serif text-[clamp(2.5rem,8vw,5rem)] font-light leading-[1.1] tracking-tight text-cream">
          Things I&rsquo;ve shipped.
        </h2>
        <p className="mt-4 text-cream-muted">Scroll to pan through the reel.</p>
      </header>

      {/* Scroll-jacked horizontal track: tall container, sticky viewport */}
      <section
        ref={trackRef}
        className="relative"
        style={{ height: `${SLIDES.length * 100}vh` }}
      >
        <div className="sticky top-0 h-svh overflow-hidden">
          <motion.ul style={{ x }} className="flex h-full will-change-transform">
            {SLIDES.map((slide, i) => (
              <li
                key={slide.title}
                className="flex h-full w-screen flex-none flex-col items-center justify-center gap-6 px-6"
              >
                <Poster slide={slide} index={i} />
                <div className="text-center">
                  <span className="font-mono text-sm text-primary">
                    #{String(i + 1).padStart(3, "0")}
                  </span>
                  <p className="mt-1 max-w-sm text-cream-muted">
                    {slide.subtitle}
                  </p>
                </div>
              </li>
            ))}
          </motion.ul>

          {/* Progress bar — only visible while the gallery is pinned */}
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="absolute bottom-10 left-0 right-0 h-[4px] origin-left bg-primary"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Outro panel */}
      <footer className="flex h-[70vh] flex-col items-center justify-center px-6 text-center">
        <p className="text-cream-muted">
          Full case studies below
          <span aria-hidden="true" className="mt-3 block text-primary">
            ↓
          </span>
        </p>
      </footer>
    </article>
  );
};

export default Gallery;
