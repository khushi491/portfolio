import React from "react";
import { PALETTE } from "./palette";

type Layer = { d: string; fill: string; opacity: number };

/**
 * Distinct curve sets so consecutive dividers never repeat the same shape.
 * Each is a stack of 2–3 overlapping organic (architectural, not floral) waves
 * in olive / cream / charcoal tones.
 */
const VARIANTS: Record<number, Layer[]> = {
  1: [
    { d: "M0 64 C 240 8, 480 8, 720 56 S 1200 112, 1440 64 L1440 120 L0 120 Z", fill: PALETTE.deepOlive, opacity: 0.5 },
    { d: "M0 88 C 300 40, 560 104, 840 80 S 1240 48, 1440 92 L1440 120 L0 120 Z", fill: PALETTE.softOlive, opacity: 0.28 },
    { d: "M0 104 C 360 76, 620 120, 960 100 S 1300 84, 1440 108 L1440 120 L0 120 Z", fill: PALETTE.charcoal, opacity: 0.9 },
  ],
  2: [
    { d: "M0 72 C 200 120, 520 20, 760 72 S 1180 120, 1440 76 L1440 120 L0 120 Z", fill: PALETTE.softOlive, opacity: 0.34 },
    { d: "M0 92 C 260 60, 600 116, 900 84 S 1260 52, 1440 96 L1440 120 L0 120 Z", fill: PALETTE.deepOlive, opacity: 0.55 },
    { d: "M0 108 C 340 92, 700 120, 1040 104 S 1320 92, 1440 110 L1440 120 L0 120 Z", fill: PALETTE.charcoal, opacity: 0.92 },
  ],
  3: [
    { d: "M0 56 C 320 104, 640 24, 1000 64 S 1320 104, 1440 60 L1440 120 L0 120 Z", fill: PALETTE.deepOlive, opacity: 0.45 },
    { d: "M0 96 C 400 64, 760 120, 1120 92 S 1360 72, 1440 100 L1440 120 L0 120 Z", fill: PALETTE.charcoal, opacity: 0.92 },
  ],
};

type PaperDividerProps = {
  variant?: 1 | 2 | 3;
  /** Flip vertically to transition into a section from above. */
  flip?: boolean;
  height?: number;
  className?: string;
};

/**
 * Curved layered-paper divider for transitions between major sections. Soft
 * shadow gives depth; vary `variant` between adjacent dividers so shapes never
 * repeat. Full-bleed and purely decorative.
 */
const PaperDivider: React.FC<PaperDividerProps> = ({
  variant = 1,
  flip = false,
  height = 100,
  className = "",
}) => {
  const layers = VARIANTS[variant] ?? VARIANTS[1];
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-none ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height, filter: "drop-shadow(0 -6px 10px rgba(0,0,0,0.35))" }}
      >
        {layers.map((l, i) => (
          <path key={i} d={l.d} fill={l.fill} fillOpacity={l.opacity} />
        ))}
      </svg>
    </div>
  );
};

export default PaperDivider;
