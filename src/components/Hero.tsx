"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import FloatingCubes from "./FloatingCubes";
import HeroSystemGraph from "./HeroSystemGraph";

const SOCIALS = [
  { href: "https://github.com/khushi491", label: "GitHub", Icon: FaGithub },
  { href: "https://linkedin.com/in/khushieeparmar", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "mailto:khushieeparmar@gmail.com", label: "Email", Icon: FaEnvelope },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full py-10 md:py-16">
      <FloatingCubes />

      <div className="relative rounded-[28px] bg-ink border border-accent/60 overflow-hidden">
        {/* Warm glow behind the illustration side */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 78% 40%, rgba(234,91,38,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative flex flex-col lg:flex-row items-center gap-10 px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20 min-h-[70vh]">
          {/* Vertical social rail */}
          <motion.div
            {...fadeUp(0.9)}
            className="hidden lg:flex flex-col items-center gap-5 absolute left-6 top-1/2 -translate-y-1/2"
          >
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="text-white/50 hover:text-accent transition-colors duration-200"
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </motion.div>

          {/* Copy */}
          <div className="flex-1 lg:pl-16 text-center lg:text-left">
            <motion.div
              {...fadeUp(0.1)}
              className="flex items-center justify-center lg:justify-start gap-3 mb-5"
            >
              <span className="h-px w-8 bg-white/40" aria-hidden="true" />
              <span className="text-white/70 text-sm tracking-wide">Hello</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-[1.1]"
            >
              <span className="font-light">I&rsquo;m </span>
              <span className="font-bold">Khushi Parmar</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="text-white/60 text-base sm:text-lg max-w-[440px] mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              A full stack developer building AI and production systems &mdash;
              50K+ daily requests at 99.8% uptime.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="mb-9 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent-light text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                Antler Hackathon Winner
              </span>
            </motion.div>

            <motion.div
              {...fadeUp(0.55)}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-dark transition-colors duration-200"
              >
                Learn more
              </motion.a>
              <motion.a
                href="mailto:khushieeparmar@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-white/20 text-white/80 font-medium hover:border-white/50 hover:text-white transition-colors duration-200"
              >
                Get in touch
              </motion.a>
            </motion.div>
          </div>

          {/* Illustration side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="flex-1 flex justify-center lg:justify-end w-full"
          >
            <HeroSystemGraph />
          </motion.div>

          {/* Scroll cue */}
          <motion.a
            {...fadeUp(1.1)}
            href="#about"
            className="hidden lg:flex flex-col items-center gap-2 absolute left-6 bottom-8 text-white/40 hover:text-accent transition-colors duration-200"
          >
            <span
              className="text-[11px] tracking-widest uppercase"
              style={{ writingMode: "vertical-rl" }}
            >
              scroll down
            </span>
            <svg
              className="w-4 h-4 animate-pulse-scroll"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
