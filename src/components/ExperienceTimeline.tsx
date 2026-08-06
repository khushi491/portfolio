"use client";
import React from "react";
import { motion } from "framer-motion";

type Role = {
  company: string;
  role: string;
  period: string;
  points: string[];
  stack: string[];
};

// Sourced from the résumé, most-recent first.
const EXPERIENCE: Role[] = [
  {
    company: "Wiseai.care",
    role: "Full Stack Developer",
    period: "Dec 2025 – Feb 2026",
    points: [
      "Built a conversational AI Nurse Agent surfacing real-time health insights and therapy guidance.",
      "Engineered scalable Node.js and Python backend APIs, deployed on GCP with containerized infrastructure.",
      "Added Spring/Hibernate services and drove testing, debugging and iterative delivery across the SDLC.",
    ],
    stack: ["Node.js", "Python", "GCP", "Spring"],
  },
  {
    company: "Stealth Startup",
    role: "Full Stack Developer",
    period: "Feb 2024 – Aug 2025",
    points: [
      "Built full-stack features for a blockchain-based metaverse NFT gaming ecosystem.",
      "Shipped game APIs for marketplace, assets and gameplay, plus Web3 wallet and NFT-ownership integrations.",
      "Automated build, test and deploy with GitHub Actions and Docker CI/CD pipelines.",
    ],
    stack: ["Web3", "Node.js", "Docker", "GitHub Actions"],
  },
  {
    company: "Webforest LLP",
    role: "Full Stack Developer",
    period: "Nov 2022 – Dec 2023",
    points: [
      "Designed full-stack apps and backend services in Node.js, Python and Core Java on OOP foundations.",
      "Built RESTful APIs powering microservice architectures with reliable end-to-end data flow.",
      "Scaled deployments across GCP and Azure with Docker, Kubernetes, CI/CD and infrastructure-as-code.",
    ],
    stack: ["Node.js", "Python", "Kubernetes", "Azure"],
  },
  {
    company: "Wedowebapps LLC",
    role: "React JS Developer",
    period: "May 2021 – Nov 2022",
    points: [
      "Built responsive, mobile-friendly UIs with TypeScript, React and Redux for predictable state.",
      "Applied component-based architecture and design patterns for frontend scalability.",
      "Improved client–server data handling via AJAX and Axios in an Agile/Scrum team.",
    ],
    stack: ["TypeScript", "React", "Redux"],
  },
  {
    company: "Techyhood Software Solution",
    role: "Web Developer Intern",
    period: "Dec 2020 – May 2021",
    points: [
      "Developed full-stack features with Core Java, JDBC and Node.js on enterprise-style apps.",
      "Built and consumed REST APIs across SQL and NoSQL databases.",
      "Learned ORM and layered design with Spring and Hibernate.",
    ],
    stack: ["Java", "Spring", "Node.js"],
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="w-full py-28 px-4 text-cream-muted">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-cream-dim">
            Career
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-cream">
            Experience
          </h2>
        </div>

        <ol className="relative ml-2 border-l border-ink-edge md:ml-0">
          {EXPERIENCE.map((item, i) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.3) }}
              className="group relative pb-14 pl-8 last:pb-0 md:pl-12"
            >
              {/* Node on the spine */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center"
              >
                <span className="h-3.5 w-3.5 rounded-full bg-primary/20 ring-4 ring-ink" />
                <span className="absolute h-1.5 w-1.5 rounded-full bg-primary transition-transform duration-200 group-hover:scale-[1.6]" />
              </span>

              <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                {item.period}
              </span>
              <h3 className="mt-2 font-serif text-2xl leading-tight text-cream md:text-[1.75rem]">
                {item.role}
              </h3>
              <p className="mt-0.5 text-gold">{item.company}</p>

              <ul className="mt-4 space-y-2.5">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="relative pl-5 leading-relaxed text-cream-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.6rem] h-1 w-1 rounded-full bg-cream-dim"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-ink-edge bg-ink-light px-3 py-1 text-xs text-cream-muted transition-colors duration-200 group-hover:border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
