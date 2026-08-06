"use client";
import React from "react";
import { motion } from "framer-motion";

const NODES = [
  { x: 151, y: 14, label: "API Gateway", accent: true },
  { x: 18, y: 126, label: "Services" },
  { x: 284, y: 126, label: "LLM Agents", accent: true },
  { x: 18, y: 250, label: "Redis Cache" },
  { x: 284, y: 250, label: "PostgreSQL" },
];

const EDGES = [
  "M210 58 V92 H77 V126",
  "M210 58 V92 H343 V126",
  "M77 170 V250",
  "M343 170 V250",
  "M136 148 H284",
];

const NODE_W = 118;
const NODE_H = 44;

/**
 * Stands in for the hero illustration: the topology she actually builds, drawn
 * on mount with a request pulse travelling each edge.
 */
const HeroSystemGraph: React.FC = () => (
  <svg
    viewBox="0 0 420 312"
    className="w-full h-auto max-w-[460px]"
    role="img"
    aria-label="Diagram of a production system: an API gateway routing to services and LLM agents, backed by a Redis cache and a PostgreSQL database."
  >
    {EDGES.map((d, i) => (
      <g key={d}>
        <motion.path
          d={d}
          fill="none"
          stroke="#EA5B26"
          strokeOpacity={0.35}
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeInOut" }}
        />
        {/* Travelling pulse — a short dash chasing the full path length. */}
        <motion.path
          d={d}
          fill="none"
          stroke="#FF8A5B"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeDasharray="10 250"
          initial={{ strokeDashoffset: 260, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 1 }}
          transition={{
            strokeDashoffset: {
              duration: 3.2,
              delay: 1.6 + i * 0.4,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: "linear",
            },
            opacity: { duration: 0.3, delay: 1.6 + i * 0.4 },
          }}
        />
      </g>
    ))}

    {NODES.map((node, i) => (
      <motion.g
        key={node.label}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
      >
        <rect
          x={node.x}
          y={node.y}
          width={NODE_W}
          height={NODE_H}
          rx={10}
          fill="#241A16"
          stroke={node.accent ? "#EA5B26" : "#4A352C"}
          strokeWidth={1.5}
        />
        <text
          x={node.x + NODE_W / 2}
          y={node.y + NODE_H / 2 + 4}
          textAnchor="middle"
          fontSize={13}
          fill={node.accent ? "#FF8A5B" : "#C9BAB2"}
          fontWeight={500}
        >
          {node.label}
        </text>
      </motion.g>
    ))}
  </svg>
);

export default HeroSystemGraph;
