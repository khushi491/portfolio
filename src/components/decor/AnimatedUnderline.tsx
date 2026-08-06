import React from "react";
import { PALETTE } from "./palette";

type AnimatedUnderlineProps = {
  children: React.ReactNode;
  /** Force the underline drawn (e.g. active nav item). */
  active?: boolean;
  color?: string;
  className?: string;
};

/**
 * Wraps inline text with a copper underline that draws left-to-right on hover
 * (or when `active`). CSS-driven (see .decor-underline) so it costs nothing and
 * honours prefers-reduced-motion. Use sparingly — not on every heading.
 */
const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({
  children,
  active = false,
  color = PALETTE.copper,
  className = "",
}) => (
  <span
    className={`decor-underline ${className}`}
    data-active={active || undefined}
    style={{ ["--decor-underline" as string]: color }}
  >
    {children}
  </span>
);

export default AnimatedUnderline;
