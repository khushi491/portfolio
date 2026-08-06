/**
 * Paper-quilling decorative palette. These map closely onto the site's Tailwind
 * tokens (ink / olive / sage / cream / primary / gold) but are exposed as raw
 * hexes for the SVG-based decor primitives, which can't consume Tailwind colors.
 */
export const PALETTE = {
  charcoal: "#0E0F0E", // ~ink
  deepOlive: "#343821", // ~olive
  softOlive: "#66684B", // ~sage
  cream: "#E4D8BE", // ~cream
  copper: "#B8613E", // ~primary
  gold: "#9C8350", // ~gold
  beige: "#CFC2A6",
} as const;

export type PaletteKey = keyof typeof PALETTE;
