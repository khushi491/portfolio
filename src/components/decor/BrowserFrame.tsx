"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type BrowserFrameProps = {
  children: React.ReactNode;
  /** Fake address shown in the toolbar. */
  url?: string;
  /** Gentle float-in on scroll (disabled for reduced motion). */
  float?: boolean;
  className?: string;
};

/**
 * A clean browser chrome around a project screenshot — dots, an address pill,
 * and a subtle raised shadow. Restrained perspective, no distortion. Let it
 * overlap a paper layer for depth; keep motion slow.
 */
const BrowserFrame: React.FC<BrowserFrameProps> = ({
  children,
  url = "careerbakers.app",
  float = true,
  className = "",
}) => {
  const reduced = useReducedMotion();
  const animate = float && !reduced;

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 24 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-xl border border-ink-edge bg-ink-light shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-ink-edge bg-ink-lighter px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/10" />
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-md bg-ink px-3 py-1 text-center text-xs text-cream-dim">
          {url}
        </span>
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
};

export default BrowserFrame;
