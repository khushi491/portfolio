"use client";
import React from "react";
import { motion } from "framer-motion";

/** Archimedean spiral, approximated as a polyline — a rolled paper coil. */
function spiral(cx: number, cy: number, turns: number, rMax: number) {
  const steps = turns * 36;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * turns * Math.PI * 2;
    const r = (i / steps) * rMax;
    const x = cx + Math.cos(t) * r;
    const y = cy + Math.sin(t) * r;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return d;
}

const COILS = [
  { cx: 96, cy: 150, turns: 3.5, r: 15, stroke: "#C96C3F", delay: 1.0 },
  { cx: 250, cy: 172, turns: 3, r: 10, stroke: "#A58A50", delay: 1.15 },
  { cx: 40, cy: 118, turns: 2.5, r: 8, stroke: "#77775D", delay: 1.3 },
];

/**
 * Restrained quilling: two ribbons sweeping the lower edge plus a few coils.
 * The portrait already carries the decoration on the right, so this only
 * balances the lower-left and stays well clear of the copy.
 */
const QuillDecor: React.FC = () => (
  <svg
    viewBox="0 0 420 200"
    className="pointer-events-none absolute -left-6 bottom-0 z-0 w-[min(60%,420px)] h-auto opacity-90"
    aria-hidden="true"
    fill="none"
  >
    <motion.path
      d="M-10 168 C 70 130, 130 196, 210 156 S 350 120, 430 150"
      stroke="#4A4A22"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.6, ease: "easeInOut" }}
    />
    <motion.path
      d="M-10 188 C 80 158, 150 210, 230 178 S 360 152, 430 176"
      stroke="#C96C3F"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeOpacity="0.65"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
    />

    {COILS.map((c) => (
      <motion.path
        key={`${c.cx}-${c.cy}`}
        d={spiral(c.cx, c.cy, c.turns, c.r)}
        stroke={c.stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeOpacity="0.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: c.delay, ease: "easeInOut" }}
      />
    ))}
  </svg>
);

export default QuillDecor;
