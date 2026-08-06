import React from "react";

type SectionNumberProps = {
  /** e.g. "01", "02". */
  children: React.ReactNode;
  /**
   * Positioning classes — place it partially outside the section boundary,
   * e.g. "-top-10 -left-6" or "top-8 right-0 translate-x-1/3".
   */
  className?: string;
};

/**
 * Oversized, very-low-opacity serif section number for background hierarchy.
 * Purely decorative and non-interactive; render inside a `relative` section.
 */
const SectionNumber: React.FC<SectionNumberProps> = ({ children, className = "" }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute z-0 select-none font-serif font-light leading-none text-cream/[0.04] text-[24vw] md:text-[16rem] ${className}`}
  >
    {children}
  </span>
);

export default SectionNumber;
