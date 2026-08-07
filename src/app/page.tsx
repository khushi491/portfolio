"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsTicker from "@/components/SkillsTicker";
import EducationSection from "@/components/EducationSection";
import HeroIntro from "@/components/HeroIntro";
import {
  PaperDivider,
  PaperRibbon,
  MonogramSeal,
  PaperCoil,
  PALETTE,
} from "@/components/decor";
import githubRepos from "@/data/github-repos.json";

const GITHUB_USER = "khushi491";

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
};

export default function Home() {
  const [repos] = useState<GitHubRepo[]>(githubRepos);
  const [reposLoading] = useState(false);
  const [reposError] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 text-cream">

      <HeroIntro />

      {/* Curved layered-paper transition out of the introduction */}
      <div className="w-screen mx-[calc(50%-50vw)]">
        <PaperDivider variant={1} />
      </div>

      {/* Proof Row Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full py-16 bg-ink-light/60 border-t border-b border-ink-edge"
      >
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">50K+</span>
            <span className="text-sm text-cream-muted">daily requests</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">99.8%</span>
            <span className="text-sm text-cream-muted">uptime</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">+35%</span>
            <span className="text-sm text-cream-muted">performance gain</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">15m</span>
            <span className="text-sm text-cream-muted">deploy time (from 2h)</span>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <ExperienceTimeline />

      {/* Projects Section — featured split layout */}
      <FeaturedProjects />

      {/* Open Source / GitHub Projects Section */}
      <motion.section
        id="open-source"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full py-28 px-4 text-cream-muted bg-ink-light/60 border-t border-ink-edge"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cream text-center mb-4">
          Open Source
        </h2>
        <p className="text-center text-cream-muted mb-12 max-w-xl mx-auto">
          Projects I’ve built and shared on GitHub. Clone, star, or contribute.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {reposLoading && (
            <div className="col-span-full flex justify-center py-12">
              <div className="animate-pulse text-cream-dim">Loading repos from GitHub…</div>
            </div>
          )}
          {reposError && (
            <div className="col-span-full text-center py-8 text-cream-muted">
              {reposError}{" "}
              <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                View on GitHub
              </a>
            </div>
          )}
          {!reposLoading && !reposError && repos.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="block bg-ink-light p-6 rounded-xl border border-ink-edge hover:border-primary/50 shadow-sm transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-cream group-hover:text-primary transition-colors truncate">
                  {repo.name}
                </h3>
                <svg className="w-5 h-5 text-cream-dim group-hover:text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <p className="text-cream-muted text-sm mb-3 line-clamp-2">{repo.description}</p>
              {repo.language && (
                <span className="inline-block px-2.5 py-1 rounded-md bg-ink-lighter text-cream-muted text-xs font-medium">
                  {repo.language}
                </span>
              )}
            </motion.a>
          ))}
        </div>
        <div className="text-center mt-10">
          <motion.a
            href="https://github.com/khushi491"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ink-lighter text-white font-medium hover:bg-ink-edge transition-colors"
          >
            View all on GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </motion.a>
        </div>
      </motion.section>

      {/* Skills Section — kinetic-typography ticker */}
      <SkillsTicker />

      {/* Curved layered-paper transition into education */}
      <div className="w-screen mx-[calc(50%-50vw)]">
        <PaperDivider variant={2} flip />
      </div>

      {/* Education Section — editorial split timeline */}
      <EducationSection />

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative w-full overflow-hidden py-28 px-4 text-cream-muted text-center"
      >
        {/* Large paper ribbon guiding the eye toward the call to action */}
        <PaperRibbon
          className="absolute inset-x-0 bottom-0 h-[60%] opacity-80"
          flip
        />

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
          <MonogramSeal
            initials="KP"
            size={72}
            ringText="KHUSHI PARMAR · LET'S BUILD · "
            className="mb-8"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-12">
            Let’s Build Resilient Systems.
          </h2>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="mailto:khushieeparmar@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 shadow-sm text-base font-medium rounded-md text-white bg-primary-deep hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V3"></path></svg>
            Email
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/khushieeparmar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-ink-edge shadow-sm text-base font-medium rounded-md text-cream bg-ink-light hover:bg-ink-lighter md:py-4 md:text-lg md:px-10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/khushi491"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-ink-edge shadow-sm text-base font-medium rounded-md text-cream bg-ink-light hover:bg-ink-lighter md:py-4 md:text-lg md:px-10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77C19.4 3.92 19 2.5 19 2c0 0-1 0-3 1.5l-3 1.5c-1 0-4 1.5-4 1.5"></path></svg>
            GitHub
          </motion.a>
        </div>
      </motion.section>

      {/* Footer — a single small paper coil */}
      <footer className="flex w-full flex-col items-center gap-3 border-t border-ink-edge py-10 text-cream-dim">
        <PaperCoil size={24} color={PALETTE.gold} />
        <p className="text-xs">© 2026 Khushi Parmar — Full-Stack &amp; AI Engineer</p>
      </footer>

    </main>
  );
}
