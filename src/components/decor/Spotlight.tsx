import React from "react";
import { PALETTE } from "./palette";
import { hexToRgba } from "./util";

type SpotlightProps = {
  color?: string;
  /** Peak opacity of the glow (kept low to avoid banding). */
  intensity?: number;
  /** Ellipse size, e.g. "60% 60%". */
  size?: string;
  /** Focal position, e.g. "50% 40%". */
  position?: string;
  /** Positioning / sizing classes for the absolutely-placed layer. */
  className?: string;
};

/**
 * A soft, diffused radial spotlight to sit behind a portrait, mockup, or
 * heading. One per section, maximum. Render inside a `relative` container.
 */
const Spotlight: React.FC<SpotlightProps> = ({
  color = PALETTE.softOlive,
  intensity = 0.22,
  size = "60% 60%",
  position = "50% 40%",
  className = "absolute inset-0",
}) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none z-0 ${className}`}
    style={{
      background: `radial-gradient(${size} at ${position}, ${hexToRgba(
        color,
        intensity,
      )}, transparent 70%)`,
    }}
  />
);

export default Spotlight;
