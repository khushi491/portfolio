"use client";
import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import { PALETTE } from "./palette";

export type HoverRevealItem = {
  title: string;
  subtitle?: string;
  href?: string;
  /** Real screenshot; falls back to a gradient panel when omitted. */
  image?: string;
  tint?: [string, string];
};

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

function PreviewFill({ item }: { item: HoverRevealItem }) {
  if (item.image) {
    return (
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="288px"
        className="object-cover"
      />
    );
  }
  const tint = item.tint ?? [PALETTE.deepOlive, PALETTE.charcoal];
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{ backgroundImage: `linear-gradient(150deg, ${tint[0]}, ${tint[1]})` }}
    >
      <span className="px-4 text-center font-serif text-xl text-cream/70">
        {item.title}
      </span>
    </div>
  );
}

/**
 * A project list that reveals a preview on hover. On hover-capable screens a
 * framed preview follows the cursor; on touch it falls back to an inline
 * thumbnail. Previews render lazily, so large images aren't all loaded upfront.
 */
const HoverRevealList: React.FC<{ items: HoverRevealItem[] }> = ({ items }) => {
  const canHover = useMediaQuery("(hover: hover) and (min-width: 768px)");
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    // Clamp so the 18rem preview never runs off the right edge.
    const max = window.innerWidth - 300;
    setPos({ x: Math.min(e.clientX + 24, max), y: e.clientY - 96 });
  };

  return (
    <div onMouseMove={canHover ? onMove : undefined}>
      <ul className="border-y border-ink-edge">
        {items.map((item, i) => {
          const inner = (
            <>
              <div className="min-w-0">
                <h3 className="font-serif text-2xl leading-tight text-cream-muted transition-colors duration-200 group-hover:text-cream md:text-4xl">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="mt-1 text-sm text-cream-dim">{item.subtitle}</p>
                )}
              </div>

              {!canHover && (
                <span className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md border border-primary/40">
                  <PreviewFill item={item} />
                </span>
              )}

              <LuArrowUpRight
                aria-hidden="true"
                className="hidden h-6 w-6 shrink-0 text-cream-dim transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary md:block"
              />
            </>
          );

          const rowClass =
            "group flex items-center justify-between gap-6 border-t border-ink-edge py-6 first:border-t-0";

          return (
            <li
              key={item.title}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {item.href ? (
                <Link href={item.href} className={rowClass}>
                  {inner}
                </Link>
              ) : (
                <div className={rowClass}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>

      {canHover && (
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="hover-preview"
              className="pointer-events-none fixed z-50 h-48 w-72 overflow-hidden rounded-lg border shadow-2xl"
              style={{ left: pos.x, top: pos.y, borderColor: PALETTE.copper }}
              initial={reduced ? { opacity: 0 } : { opacity: 0, x: -12, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <PreviewFill item={items[active]} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default HoverRevealList;
