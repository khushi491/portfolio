import React from "react";
import { PALETTE } from "./palette";

type MonogramSealProps = {
  initials?: string;
  size?: number;
  color?: string;
  /** Text set around the ring (repeated). Omit for a plain seal. */
  ringText?: string;
  className?: string;
};

/**
 * A minimal embossed monogram seal: two thin antique-gold rings, centred
 * initials, and optional circular ring text. For the logo, footer signature,
 * or a section transition mark.
 */
const MonogramSeal: React.FC<MonogramSealProps> = ({
  initials = "K",
  size = 72,
  color = PALETTE.gold,
  ringText,
  className,
}) => {
  const id = `seal-ring-${initials}-${size}`;
  const c = size / 2;
  const textR = c - 9;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
      role="img"
      aria-label={`${initials} monogram seal`}
    >
      <defs>
        <path
          id={id}
          d={`M ${c} ${c} m -${textR} 0 a ${textR} ${textR} 0 1 1 ${textR * 2} 0 a ${textR} ${textR} 0 1 1 -${textR * 2} 0`}
        />
      </defs>

      <circle cx={c} cy={c} r={c - 1.5} stroke={color} strokeOpacity="0.85" />
      <circle cx={c} cy={c} r={c - 6} stroke={color} strokeOpacity="0.35" />

      {ringText && (
        <text
          fill={color}
          fillOpacity="0.7"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: size * 0.09,
            letterSpacing: size * 0.03,
          }}
        >
          <textPath href={`#${id}`} startOffset="0%">
            {ringText}
          </textPath>
        </text>
      )}

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill={color}
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: ringText ? size * 0.34 : size * 0.42,
          fontWeight: 500,
        }}
      >
        {initials}
      </text>
    </svg>
  );
};

export default MonogramSeal;
