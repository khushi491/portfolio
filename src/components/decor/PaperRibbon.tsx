"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { PALETTE } from "./palette";

type PaperRibbonProps = {
  color?: string;
  accent?: string;
  /** Mirror horizontally to sweep the other way. */
  flip?: boolean;
  /** Max parallax travel in px as the ribbon scrolls through the viewport. */
  parallax?: number;
  /** Positioning / sizing classes for the absolutely-placed layer. */
  className?: string;
};

/**
 * A thin curled paper ribbon that threads through negative space to guide the
 * eye, with restrained scroll parallax. Place along a section edge or behind a
 * mockup — never wrap it around cards. Render inside a `relative` container.
 */
const PaperRibbon: React.FC<PaperRibbonProps> = ({
  color = PALETTE.deepOlive,
  accent = PALETTE.copper,
  flip = false,
  parallax = 40,
  className = "absolute inset-0",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none z-0 ${className}`}
      style={{ y: reduced ? 0 : y }}
    >
      <svg
        viewBox="0 0 400 240"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      >
        <path
          d="M-20 120 C 80 60, 150 190, 250 120 S 380 60, 430 110"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        <path
          d="M-20 120 C 80 60, 150 190, 250 120 S 380 60, 430 110"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <path
          d="M-20 150 C 90 96, 170 210, 270 150 S 390 108, 430 146"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeOpacity="0.3"
        />
      </svg>
    </motion.div>
  );
};

export default PaperRibbon;
