"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuArrowLeft } from "react-icons/lu";
import { PROJECTS, type ProjectItem } from "@/data/projects";

const PAGE_SIZE = 6;

function Preview({ item }: { item: ProjectItem }) {
  return (
    <div
      className="paper-grain relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-ink-edge"
      style={{
        backgroundImage: `linear-gradient(150deg, ${item.tint[0]}, ${item.tint[1]})`,
      }}
    >
      {item.image ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover"
        />
      ) : (
        <>
          {/* Faux window chrome so the panel reads as an app preview */}
          <span
            aria-hidden="true"
            className="absolute left-3 top-3 flex gap-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-cream/20" />
            <span className="h-2 w-2 rounded-full bg-cream/15" />
            <span className="h-2 w-2 rounded-full bg-cream/10" />
          </span>
          {item.Icon ? (
            <item.Icon
              className="h-12 w-12 text-cream/25"
              aria-hidden="true"
            />
          ) : (
            <span className="font-serif text-5xl font-semibold text-cream/25">
              {item.mono}
            </span>
          )}
        </>
      )}
    </div>
  );
}

const AllProjects: React.FC = () => {
  const [page, setPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(PROJECTS.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = PROJECTS.slice(start, start + PAGE_SIZE);

  return (
    <section className="py-12 text-cream-muted">
      {/* Header */}
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-sm text-primary">03</span>
            <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
            <span className="text-xs uppercase tracking-[0.22em] text-primary">
              Projects
            </span>
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-light leading-none text-cream">
            All <span className="text-primary">Projects</span>
          </h1>
        </div>

        <Link
          href="/"
          className="group inline-flex w-fit items-center gap-2.5 rounded-lg border border-ink-edge bg-ink-light px-5 py-2.5 text-sm text-cream transition-colors duration-200 hover:border-primary/40"
        >
          <LuArrowLeft
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
          />
          Back to Home
        </Link>
      </div>

      {/* Grid */}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: Math.min(i, 5) * 0.05 }}
          >
            <Link
              href={`/projects/${item.slug}`}
              className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-ink-light text-left transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 ${
                i === 0 && page === 1
                  ? "border-primary/60"
                  : "border-ink-edge"
              }`}
            >
              <Preview item={item} />
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-xl font-semibold text-cream">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-cream-muted">{item.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-ink-edge bg-ink px-2 py-0.5 text-[11px] text-cream-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Pagination */}
      {pageCount > 1 && (
        <nav
          aria-label="Projects pagination"
          className="mt-14 flex items-center justify-center gap-2"
        >
          {Array.from({ length: pageCount }, (_, idx) => idx + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              aria-current={page === n ? "page" : undefined}
              className={`h-10 w-10 rounded-lg text-sm font-medium transition-colors duration-200 ${
                page === n
                  ? "bg-primary text-white"
                  : "border border-ink-edge bg-ink-light text-cream-muted hover:border-primary/40 hover:text-cream"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
            aria-label="Next page"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-edge bg-ink-light text-cream-muted transition-colors duration-200 hover:border-primary/40 hover:text-cream disabled:cursor-not-allowed disabled:opacity-40"
          >
            ›
          </button>
        </nav>
      )}
    </section>
  );
};

export default AllProjects;
