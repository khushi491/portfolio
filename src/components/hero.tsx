"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HeroSpotlight } from "@/components/hero-spotlight";
import { IndustryOrbit } from "@/components/industry-orbit";
import { site } from "@/lib/site";

const ctas = [
  { href: `mailto:${site.email}`, label: "Email", external: false },
  { href: site.github, label: "GitHub", external: true },
  { href: site.linkedin, label: "LinkedIn", external: true },
  { href: site.x, label: "X", external: true },
  { href: site.resume, label: "Resume", external: false },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
      aria-labelledby="hero-name"
    >
      <HeroSpotlight />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:gap-8 lg:py-32 xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-10">
        <div className="relative z-10 min-w-0">
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            Software engineer · {site.location}
          </motion.p>
          <h1
            id="hero-name"
            className="mt-6 font-serif text-[clamp(4.25rem,16vw,10rem)] leading-[0.82] tracking-[-0.03em] text-ink"
          >
            <motion.span
              className="block"
              initial={reduced ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease }}
            >
              Khushi
            </motion.span>
            <motion.span
              className="block italic text-gold"
              initial={reduced ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease }}
            >
              Parmar
            </motion.span>
          </h1>
          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease }}
          >
            {site.description}
          </motion.p>
          <motion.ul
            className="mt-10 flex flex-wrap gap-3"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            {ctas.map((cta) => (
              <li key={cta.label}>
                <a
                  href={cta.href}
                  {...(cta.external || cta.label === "Resume"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={
                    cta.label === "Email" ? "btn-link" : "btn-link btn-link-ghost"
                  }
                >
                  {cta.label}
                  {cta.external || cta.label === "Resume" ? (
                    <span className="sr-only"> (opens in a new tab)</span>
                  ) : null}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
        {site.portraitSrc ? (
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-line bg-bg-subtle lg:w-72">
            <Image
              src={site.portraitSrc}
              alt={site.portraitAlt}
              fill
              sizes="(min-width: 1024px) 18rem, 100vw"
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <IndustryOrbit />
        )}
      </div>
    </section>
  );
}
