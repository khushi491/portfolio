"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { SectionNumber, CopperLine } from "./decor";
import { PROJECTS } from "@/data/projects";

const FEATURED = PROJECTS.slice(0, 3);

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="relative w-full overflow-hidden py-28 px-4 text-cream-muted">
      <SectionNumber className="right-0 top-10 translate-x-[12%]">03</SectionNumber>
      <div className="relative z-10 mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[34%_1fr] lg:gap-16">
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

          <CopperLine length="4rem" className="mt-7" />

          <p className="mt-7 max-w-sm leading-relaxed text-cream-muted">
            A collection of products I&rsquo;ve built across full-stack
            development, AI systems, and automation.
          </p>

          <Link
            href="/projects"
            className="group mt-8 inline-flex items-center gap-3 rounded-sm border border-gold/70 px-6 py-3.5 text-cream transition-colors duration-200 hover:border-gold hover:bg-gold/10"
          >
            View All Projects
            <LuArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Featured project rows */}
        <ul className="flex flex-col gap-4">
          {FEATURED.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link
                href={`/projects/${item.slug}`}
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
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProjects;
