"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PALETTE } from "./palette";
import { spiralPath } from "./util";

type PaperCoilProps = {
  /** Rendered diameter in px (keep 12–36 for markers/nodes). */
  size?: number;
  color?: string;
  turns?: number;
  /** Draw the coil in on scroll-into-view. */
  draw?: boolean;
  className?: string;
};

/**
 * A small rolled-paper coil — timeline node, section marker, or corner accent.
 * Restrained: a faint disc for depth plus a spiral that draws on view.
 */
const PaperCoil: React.FC<PaperCoilProps> = ({
  size = 28,
  color = PALETTE.copper,
  turns = 3.5,
  draw = true,
  className,
}) => {
  const reduced = useReducedMotion();
  const r = size / 2;
  const d = spiralPath(r, r, turns, r - 1.5);
  const animate = draw && !reduced;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.35))" }}
    >
      <circle cx={r} cy={r} r={r - 0.75} stroke={color} strokeOpacity="0.18" />
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={size > 24 ? 1.2 : 1}
        strokeLinecap="round"
        strokeOpacity="0.85"
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        whileInView={animate ? { pathLength: 1, opacity: 1 } : undefined}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default PaperCoil;
