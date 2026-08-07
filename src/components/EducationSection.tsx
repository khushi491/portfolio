"use client";
import React from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  LuGraduationCap,
  LuLandmark,
  LuAward,
  LuCalendar,
  LuStar,
  LuBookOpen,
  LuClock,
} from "react-icons/lu";
import QuillDecor from "./QuillDecor";
import { PaperCoil, MonogramSeal, PALETTE } from "./decor";

type Meta = { Icon: IconType; text: string };

type Entry = {
  Icon: IconType;
  period: string;
  label: string;
  title: string;
  org?: string;
  meta?: Meta[];
  pills?: string[];
  description: string;
};

// Degrees are drawn from the résumé; certifications are illustrative — confirm.
const ENTRIES: Entry[] = [
  {
    Icon: LuGraduationCap,
    period: "2023 –\n2025",
    label: "Master's Degree",
    title: "M.S. in Computer Science",
    org: "Monroe University, New Rochelle, NY, USA",
    meta: [
      { Icon: LuCalendar, text: "Graduated: Dec 2025" },
      { Icon: LuStar, text: "GPA: 3.9 / 4.0" },
    ],
    description:
      "Focused on advanced software engineering, AI, and scalable system design.",
  },
  {
    Icon: LuLandmark,
    period: "2018 –\n2021",
    label: "Bachelor's Degree",
    title: "Bachelor of Computer Application",
    org: "Maharaja Sayajirao University, Baroda, Gujarat, India",
    meta: [{ Icon: LuCalendar, text: "Graduated: May 2021" }],
    description:
      "Built a strong foundation in data structures, algorithms, databases, and software development.",
  },
  {
    Icon: LuAward,
    period: "2023 –\nPresent",
    label: "Certifications & Courses",
    title: "Continuous Growth",
    pills: [
      "AWS Certified Developer",
      "Oracle Certified Professional, Java",
      "React – Advanced Concepts",
      "System Design",
      "AI & ML Specialization",
    ],
    description:
      "Continuously learning to stay ahead and build future-ready solutions.",
  },
];

const STATS: { Icon: IconType; value: string; label: string }[] = [
  { Icon: LuBookOpen, value: "2", label: "Degrees" },
  { Icon: LuAward, value: "5+", label: "Certifications" },
  { Icon: LuClock, value: "1000+", label: "Learning Hours" },
];

const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full overflow-hidden py-28 px-4 text-cream-muted"
    >
      {/* Paper-quilling swirls, lower-left as in the design */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 z-0 w-[min(40%,460px)] opacity-70">
        <QuillDecor />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1240px] gap-12 md:grid-cols-[34%_1fr] lg:gap-16">
        {/* Editorial column */}
        <div className="md:sticky md:top-28 md:self-start">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-sm text-primary">04</span>
            <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
            <span className="text-xs uppercase tracking-[0.22em] text-cream-dim">
              Education
            </span>
          </div>

          <h2 className="font-serif text-[clamp(2.75rem,6vw,4.5rem)] font-light leading-[1.02] text-cream">
            Education
            <br />
            &amp; <span className="text-primary">Learning</span>
          </h2>

          <span
            aria-hidden="true"
            className="mt-7 mb-7 block h-px w-16 bg-primary/50"
          />

          <p className="max-w-sm leading-relaxed text-cream-muted">
            A strong academic foundation that shaped my problem-solving mindset
            and engineering journey.
          </p>

          <div className="mt-10 flex max-w-sm items-start gap-4 rounded-2xl border border-ink-edge bg-ink-light/60 p-5">
            <LuGraduationCap
              className="h-8 w-8 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <p className="font-medium text-primary">Continuous Learner</p>
              <p className="mt-1 text-sm text-cream-muted">
                Always exploring new technologies, frameworks, and ideas.
              </p>
            </div>
          </div>

          <div className="mt-10 opacity-80">
            <MonogramSeal initials="KP" size={64} />
          </div>
        </div>

        {/* Timeline + stats */}
        <div>
          <ol className="relative">
            {/* Continuous spine behind the node dots */}
            <span
              aria-hidden="true"
              className="absolute left-[5.5rem] top-8 bottom-8 w-px -translate-x-1/2 bg-ink-edge md:left-[6.25rem]"
            />

            {ENTRIES.map((entry, i) => (
              <motion.li
                key={entry.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.08, 0.3) }}
                className="grid grid-cols-[3.5rem_1.5rem_1fr] items-start gap-x-3 pb-8 last:pb-0 md:grid-cols-[4.5rem_1.5rem_1fr] md:gap-x-4"
              >
                {/* Period */}
                <div className="whitespace-pre-line pt-7 text-right text-xs leading-tight text-cream-muted md:text-sm">
                  {entry.period}
                </div>

                {/* Rolled-paper node */}
                <div className="relative z-10 flex justify-center pt-7">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink ring-4 ring-ink">
                    <PaperCoil size={16} color={PALETTE.copper} />
                  </span>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-ink-edge bg-ink-light/70 p-5 md:p-6">
                  <div className="flex items-start gap-4 md:gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary md:h-14 md:w-14">
                      <entry.Icon className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                        {entry.label}
                      </span>
                      <h3 className="mt-1 font-serif text-xl leading-snug text-cream md:text-2xl">
                        {entry.title}
                      </h3>
                      {entry.org && (
                        <p className="mt-0.5 text-gold">{entry.org}</p>
                      )}

                      {entry.meta && (
                        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 border-t border-ink-edge pt-4 text-sm text-cream-muted">
                          {entry.meta.map((m) => (
                            <span key={m.text} className="flex items-center gap-2">
                              <m.Icon className="h-4 w-4 text-cream-dim" aria-hidden="true" />
                              {m.text}
                            </span>
                          ))}
                        </div>
                      )}

                      {entry.pills && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {entry.pills.map((pill) => (
                            <span
                              key={pill}
                              className="rounded-full border border-ink-edge bg-ink px-3 py-1 text-xs text-cream-muted"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="mt-4 text-sm leading-relaxed text-cream-muted">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>

          {/* Stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mt-6 grid grid-cols-1 divide-y divide-ink-edge rounded-2xl border border-ink-edge bg-ink-light/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center justify-center gap-3 py-6">
                <s.Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <div>
                  <div className="text-xl font-bold text-cream">{s.value}</div>
                  <div className="text-xs text-cream-dim">{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
