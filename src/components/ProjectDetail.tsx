"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  LuArrowLeft,
  LuArrowRight,
  LuExternalLink,
  LuGithub,
  LuShieldCheck,
} from "react-icons/lu";
import QuillDecor from "./QuillDecor";
import { getProject, type ProjectItem } from "@/data/projects";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function HeroDevice({ project }: { project: ProjectItem }) {
  return (
    <div className="relative">
      {/* Paper-quilling swirls sweeping out from under the device */}
      <div className="absolute -bottom-8 right-0 z-0 w-full scale-x-[-1]">
        <QuillDecor />
      </div>

      <motion.div
        {...fade(0.15)}
        className="paper-grain relative z-10 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border border-ink-edge shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(150deg, ${project.tint[0]}, ${project.tint[1]})`,
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
          />
        ) : (
          <>
            <span aria-hidden="true" className="absolute left-4 top-4 flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-cream/10" />
            </span>
            {project.Icon ? (
              <project.Icon
                className="h-16 w-16 text-cream/25"
                aria-hidden="true"
              />
            ) : (
              <span className="font-serif text-7xl font-semibold text-cream/25">
                {project.mono}
              </span>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}

const ProjectDetail: React.FC<{ slug: string }> = ({ slug }) => {
  const project = getProject(slug);
  if (!project) return null;

  return (
    <article className="py-10 text-cream-muted">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2.5 text-sm text-cream-muted transition-colors duration-200 hover:text-cream"
      >
        <LuArrowLeft
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
        />
        Back to Projects
      </Link>

      {/* Top: intro + hero device */}
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <motion.h1
            {...fade(0)}
            className="font-serif text-[clamp(2.75rem,7vw,4.75rem)] font-light leading-[1.02] text-cream"
          >
            {project.title}
          </motion.h1>
          <motion.p {...fade(0.06)} className="mt-2 text-lg text-cream-muted">
            {project.subtitle}
          </motion.p>
          <motion.p
            {...fade(0.12)}
            className="mt-6 max-w-lg leading-relaxed text-cream-muted"
          >
            {project.description}
          </motion.p>

          <motion.div {...fade(0.18)} className="mt-8 flex flex-wrap items-center gap-4">
            {project.demoLink && (
              <Link
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-sm bg-olive px-6 py-3.5 text-cream transition-colors duration-200 hover:bg-olive-light"
              >
                Live Project
                <LuExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-sm border border-ink-edge px-6 py-3.5 text-cream transition-colors duration-200 hover:border-primary/40"
              >
                Github
                <LuGithub className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
            {project.caseStudyLink && (
              <Link
                href={project.caseStudyLink}
                className="group inline-flex items-center gap-2.5 px-2 py-3.5 text-cream transition-colors duration-200 hover:text-primary"
              >
                Case Study
                <LuArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            )}
          </motion.div>
        </div>

        <HeroDevice project={project} />
      </div>

      {/* Bottom: overview + tech/highlights */}
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {/* Overview + highlights */}
        <motion.div
          {...fade(0.1)}
          className="rounded-2xl border border-ink-edge bg-ink-light p-7 md:p-8"
        >
          <h2 className="text-xl font-semibold text-cream">Overview</h2>
          <p className="mt-3 leading-relaxed text-cream-muted">
            {project.longDescription}
          </p>

          <ul className="mt-8 space-y-5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <LuShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span className="text-cream-muted">{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tech stack + metrics */}
        <div className="flex flex-col gap-6">
          <motion.div
            {...fade(0.16)}
            className="rounded-2xl border border-ink-edge bg-ink-light p-7 md:p-8"
          >
            <h2 className="text-xl font-semibold text-cream">Tech Stack</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {project.techChips?.map((chip) => (
                <span
                  key={chip}
                  className="rounded-lg border border-ink-edge bg-ink px-3.5 py-2 text-sm text-cream-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {project.metrics && (
            <motion.div
              {...fade(0.22)}
              className="rounded-2xl border border-ink-edge bg-ink-light p-7 md:p-8"
            >
              <h2 className="text-xl font-semibold text-cream">Highlights</h2>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <m.Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                    <span className="mt-1 text-2xl font-bold text-cream">
                      {m.value}
                    </span>
                    <span className="text-xs text-cream-dim">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;
