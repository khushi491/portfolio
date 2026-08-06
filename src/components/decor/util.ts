/** Archimedean spiral as a polyline path — the core "rolled paper" shape. */
export function spiralPath(
  cx: number,
  cy: number,
  turns: number,
  rMax: number,
): string {
  const steps = Math.max(24, Math.round(turns * 36));
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

/** #RRGGBB + alpha → rgba() string. */
export function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
