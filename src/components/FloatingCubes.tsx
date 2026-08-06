"use client";
import React from "react";
import { motion } from "framer-motion";

/** An isometric cube: three faces shaded to read as a lit 3D solid. */
const Cube: React.FC<{ muted?: boolean }> = ({ muted }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
    {/* top */}
    <path d="M50 20 L80 37.5 L50 55 L20 37.5 Z" fill={muted ? "#3A2A24" : "#FF8A5B"} />
    {/* left */}
    <path d="M20 37.5 L50 55 L50 90 L20 72.5 Z" fill={muted ? "#241A16" : "#B8390F"} />
    {/* right */}
    <path d="M80 37.5 L50 55 L50 90 L80 72.5 Z" fill={muted ? "#2E211C" : "#EA5B26"} />
  </svg>
);

type CubeSpec = {
  /** Tailwind positioning for this cube within the hero. */
  className: string;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  drift: number;
  muted?: boolean;
};

/**
 * Positions deliberately straddle the panel edge so cubes read as floating in
 * front of it, the way they do in the reference.
 */
const CUBES: CubeSpec[] = [
  { className: "top-0 -right-2 md:-right-6", size: 92, duration: 7, delay: 0, rotate: 8, drift: 14 },
  { className: "top-1/3 -right-1 md:-right-3 hidden md:block", size: 40, duration: 9, delay: 1.2, rotate: -10, drift: 10, muted: true },
  { className: "bottom-0 -left-2 md:-left-6", size: 76, duration: 8, delay: 0.6, rotate: -6, drift: 12 },
  { className: "bottom-0 left-20 md:left-36 hidden sm:block", size: 52, duration: 6.5, delay: 1.8, rotate: 12, drift: 9 },
  { className: "top-16 left-1/2 hidden lg:block", size: 34, duration: 10, delay: 2.4, rotate: -14, drift: 8, muted: true },
];

const FloatingCubes: React.FC = () => (
  <>
    {CUBES.map((cube, i) => (
      <motion.div
        key={i}
        aria-hidden="true"
        className={`absolute pointer-events-none z-20 ${cube.className}`}
        style={{ width: cube.size, height: cube.size }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -cube.drift, 0],
          rotate: [0, cube.rotate, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.3 + i * 0.12 },
          scale: { duration: 0.6, delay: 0.3 + i * 0.12 },
          y: { duration: cube.duration, delay: cube.delay, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: cube.duration, delay: cube.delay, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Cube muted={cube.muted} />
      </motion.div>
    ))}
  </>
);

export default FloatingCubes;
