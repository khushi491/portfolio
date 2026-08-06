"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PALETTE } from "./palette";

type CopperLineProps = {
  orientation?: "horizontal" | "vertical";
  /** CSS length for the drawn axis (e.g. "4rem", "100%"). */
  length?: string;
  thickness?: number;
  color?: string;
  className?: string;
};

/**
 * A delicate 1–2px copper line that draws itself on scroll-into-view. Use as a
 * short divider, label accent, or timeline fragment — not as a full border.
 */
const CopperLine: React.FC<CopperLineProps> = ({
  orientation = "horizontal",
  length = "3rem",
  thickness = 1,
  color = PALETTE.copper,
  className,
}) => {
  const reduced = useReducedMotion();
  const horizontal = orientation === "horizontal";

  return (
    <motion.span
      aria-hidden="true"
      className={className}
      style={{
        display: "block",
        background: color,
        width: horizontal ? length : thickness,
        height: horizontal ? thickness : length,
        transformOrigin: horizontal ? "left center" : "top center",
      }}
      initial={reduced ? false : { scaleX: horizontal ? 0 : 1, scaleY: horizontal ? 1 : 0 }}
      whileInView={reduced ? undefined : { scaleX: 1, scaleY: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    />
  );
};

export default CopperLine;
