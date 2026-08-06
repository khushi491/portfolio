"use client";
import React from "react";
import {
  useScroll,
  useTransform,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import Ticker from "./Ticker";
import { getSkillIcon } from "@/lib/skill-icons";

// Full résumé stack across six lines, drifting in alternating directions.
// `name` resolves the brand logo (via getSkillIcon) and labels it.
const lines: { reverse: boolean; names: string[] }[] = [
  {
    reverse: false,
    names: ["JavaScript", "TypeScript", "Python", "Java", "Go", "GraphQL","React", "Next.js", "Node.js", "Express", "React Native", "Angular", "Vue", "Redux"],
  },
  {
    reverse: true,
    names: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch","AWS", "GCP", "Azure", "Docker", "Kubernetes", "Flask", "FastAPI", "CI/CD", "Terraform"],
  },
  {
    reverse: false,
    names: ["Git", "GitHub", "Firebase", "Jira", "Bitbucket", "Maven", "Linux"],
  },
  {
    reverse: true,
    names: ["PyTorch", "LangChain", "OpenAI", "NLP", "Machine Learning", "Prompt Engineering", "Vector Search"],
  },
];

function Logo({ name }: { name: string }) {
  const { Icon, color } = getSkillIcon(name);
  return (
    <span className="skill-logo" title={name}>
      <Icon style={{ color }} aria-hidden="true" />
      <span className="skill-name">{name}</span>
    </span>
  );
}

const SkillsTicker: React.FC = () => {
  const { scrollY } = useScroll();
  const invertScroll = useTransform(scrollY, (v) => -v);
  const prefersReduced = useReducedMotion();
  // A frozen value so the marquee sits still (still legible) for reduced motion.
  const frozen = useMotionValue(0);

  return (
    <section
      id="skills"
      className="w-screen mx-[calc(50%-50vw)] overflow-hidden py-28"
    >
      <div className="mx-auto mb-14 max-w-[1100px] px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cream">Skills</h2>
        <p className="mt-3 text-cream-muted">
          The stack I build production systems with.
        </p>
      </div>

      {/* The marquee is decorative (looped logos); expose a real list to AT. */}
      <ul className="sr-only">
        {lines.flatMap((line) => line.names).map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>

      <div
        className="flex select-none flex-col gap-6 md:gap-10"
        aria-hidden="true"
      >
        {lines.map((line, index) => (
          <Ticker
            key={index}
            className={`ticker-line ticker-${index}`}
            offset={
              prefersReduced ? frozen : line.reverse ? invertScroll : scrollY
            }
            items={line.names.map((name) => (
              <Logo key={name} name={name} />
            ))}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsTicker;
