"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import QuillDecor from "./QuillDecor";
import portrait from "../../public/khushi-portrait.jpg";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Hero: React.FC = () => {
  return (
    // Full-bleed and full-height. The surrounding layout constrains to 1100px
    // and adds pt-20 for the fixed nav; -mt-20 cancels that so the hero owns
    // the whole viewport, and pt-20 inside keeps content clear of the nav.
    <section
      id="hero"
      className="paper-grain relative w-screen mx-[calc(50%-50vw)] -mt-20 min-h-svh flex flex-col md:flex-row md:items-center overflow-hidden"
    >
      <QuillDecor />

      {/* Copy */}
      <div className="relative z-10 w-full mx-auto max-w-[1240px] px-6 pt-28 pb-10 md:py-24">
        <div className="md:w-[56%]">
          <motion.h1
            {...fadeUp(0.05)}
            className="font-serif font-light text-cream leading-[0.92] tracking-[0.02em] text-[clamp(2.75rem,10vw,7rem)]"
          >
            <span className="block">KHUSHI</span>
            <span className="block">PARMAR</span>
          </motion.h1>

          <motion.div {...fadeUp(0.2)} className="mt-6 md:mt-7">
            <p className="font-serif text-primary text-[clamp(1.25rem,4vw,2rem)] leading-tight">
              Full-Stack &amp; AI Engineer
            </p>
            <span aria-hidden="true" className="mt-3 block h-px w-16 bg-primary/70" />
          </motion.div>

          <motion.p
            {...fadeUp(0.32)}
            className="mt-6 md:mt-7 max-w-[27rem] text-cream-muted text-base sm:text-lg leading-relaxed"
          >
            I build scalable applications, intelligent systems, and reliable
            digital products.
          </motion.p>

          <motion.div
            {...fadeUp(0.44)}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-sm bg-olive text-cream hover:bg-olive-light transition-colors duration-200"
            >
              View Projects
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h15m0 0l-5.5-5.5M19 12l-5.5 5.5" />
              </svg>
            </a>

            <a
              href="/khushi-parmar-resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-sm border border-gold/70 text-cream hover:border-gold hover:bg-gold/10 transition-colors duration-200"
            >
              Download R&eacute;sum&eacute;
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
              </svg>
            </a>
          </motion.div>

          {/* Scroll cue */}
          <motion.a
            {...fadeUp(0.7)}
            href="#about"
            className="mt-12 md:mt-16 hidden sm:inline-flex items-center gap-3 text-cream-dim hover:text-cream transition-colors duration-200"
          >
            <span
              aria-hidden="true"
              className="flex items-start justify-center w-[18px] h-[28px] rounded-full border border-current pt-1.5"
            >
              <span className="block w-[3px] h-[5px] rounded-full bg-current animate-pulse-scroll" />
            </span>
            <span className="text-sm">Scroll to explore</span>
          </motion.a>
        </div>
      </div>

      {/*
       * Portrait. On desktop it is taken out of flow and bleeds off the right
       * and bottom edges, as in the design. On mobile it stacks underneath the
       * copy instead, so the face never sits behind the text.
       */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="portrait-mask pointer-events-none relative z-0 mt-auto w-full max-w-[520px] self-end
                   md:absolute md:right-0 md:bottom-0 md:mt-0 md:w-[62%] md:max-w-[820px] lg:w-[58%]"
      >
        <Image
          src={portrait}
          alt="Paper-quilling portrait of Khushi Parmar"
          priority
          sizes="(max-width: 768px) 100vw, 62vw"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
