import React from "react";
import Link from "next/link";

type BaseProps = {
  children: React.ReactNode;
  /** Accessible label (required — the content is usually an icon). */
  label: string;
  shape?: "square" | "circle";
  size?: "sm" | "md";
  className?: string;
};

type AsLink = BaseProps & { href: string; onClick?: never };
type AsButton = BaseProps & { href?: undefined; onClick?: () => void };

const sizeClasses = { sm: "h-10 w-10", md: "h-12 w-12" } as const;

/**
 * A small embossed, matte-paper icon button (see .decor-emboss) — for GitHub,
 * external link, download, email, or feature icons. Line-based icons only, no
 * gloss. Renders as an anchor when `href` is set, otherwise a button.
 */
const EmbossedButton: React.FC<AsLink | AsButton> = ({
  children,
  label,
  shape = "square",
  size = "md",
  className = "",
  ...rest
}) => {
  const cls = `decor-emboss paper-grain relative inline-flex items-center justify-center text-cream-muted hover:text-cream ${
    shape === "circle" ? "rounded-full" : "rounded-xl"
  } ${sizeClasses[size]} ${className}`;

  if ("href" in rest && rest.href) {
    const external = /^https?:/.test(rest.href);
    return (
      <Link
        href={rest.href}
        aria-label={label}
        title={label}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span className="relative z-10 flex items-center justify-center">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={(rest as AsButton).onClick}
      className={cls}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
};

export default EmbossedButton;
