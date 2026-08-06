"use client";
import React from "react";
import { motion } from "framer-motion";
import { getSkillIcon } from "@/lib/skill-icons";

interface SkillTileProps {
  skill: string;
  /** `lg` is the core-stack wall above the categories, `md` inside a category card. */
  size?: "md" | "lg";
  /** Drives the stagger; capped so long rows don't crawl in. */
  index?: number;
}

const SkillTile: React.FC<SkillTileProps> = ({ skill, size = "md", index = 0 }) => {
  const { Icon, color, label, detail } = getSkillIcon(skill);
  const isLg = size === "lg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
      whileHover={{ y: -4 }}
      title={detail ? `${label} — ${detail}` : label}
      className={`flex flex-col items-center justify-start text-center rounded-2xl border transition-colors duration-200 ${
        isLg
          ? "w-[104px] shrink-0 gap-3 px-3 py-5 bg-ink-light border-ink-edge shadow-sm hover:border-primary/40"
          : "gap-2.5 px-2 py-4 bg-ink border-transparent hover:bg-ink-lighter hover:border-ink-edge"
      }`}
    >
      <Icon
        aria-hidden="true"
        style={{ color }}
        className={isLg ? "w-11 h-11" : "w-9 h-9"}
      />
      <span className="flex flex-col gap-0.5 min-w-0 w-full">
        <span
          className={`font-semibold text-cream leading-tight break-words ${
            isLg ? "text-xs" : "text-[11px]"
          }`}
        >
          {label}
        </span>
        {detail && (
          <span className="text-[10px] text-cream-dim leading-tight break-words">
            {detail}
          </span>
        )}
      </span>
    </motion.div>
  );
};

export default SkillTile;
