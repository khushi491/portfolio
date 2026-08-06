"use client";
import React from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";

/** Wrap `v` into the half-open range [min, max) — the seam-free loop primitive. */
const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

type TickerProps = {
  /** The nodes repeated across the line (here: a solid + an outlined copy). */
  items: React.ReactNode[];
  /** A scroll-derived MotionValue that drives horizontal position. */
  offset: MotionValue<number>;
  className?: string;
  /** Pixels of page scroll → percent of translate. Higher = faster drift. */
  speed?: number;
};

// Copies of `items` per half. Two identical halves let a -50%…0 wrap loop
// seamlessly, as long as one half overruns the viewport — so this must stay
// high enough that even the shortest (5-item) row spans a wide screen.
const HALF_REPEAT = 3;

const Ticker: React.FC<TickerProps> = ({ items, offset, className, speed = 0.04 }) => {
  const half = Array.from({ length: HALF_REPEAT }, () => items).flat();
  const row = [...half, ...half];

  // translateX as a percentage of the row's own width, so it's resolution- and
  // content-width-independent. -50% is exactly one half → the join is invisible.
  const x = useTransform(offset, (v) => `${wrap(-50, 0, v * speed)}%`);

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        aria-hidden="true"
        style={{ x }}
        className="flex w-max flex-nowrap will-change-transform"
      >
        {row.map((node, i) => (
          <span key={i} className="mr-10 whitespace-nowrap md:mr-16">
            {node}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
