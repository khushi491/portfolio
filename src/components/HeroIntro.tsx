"use client";
import React, { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { LuCodeXml, LuBrain, LuCloudUpload } from "react-icons/lu";
import portrait from "../../public/khushi-portrait.jpg";

/**
 * matchMedia as an external store — avoids setState-in-effect and returns a
 * stable `false` during SSR so server and client markup agree on first paint.
 */
function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const CAPABILITIES = [
  { Icon: LuCodeXml, verb: "Build", what: "Scalable Apps" },
  { Icon: LuBrain, verb: "Engineer", what: "AI Systems" },
  { Icon: LuCloudUpload, verb: "Deploy", what: "Reliable Infrastructure" },
];

/**
 * Hero + Personal Introduction as one continuous scroll scene. A single
 * portrait lives in a sticky stage pinned for the wrapper's full 200vh; the
 * two copy panels scroll past it. Scroll progress drives the portrait's
 * position, scale and rotation and cross-fades the background charcoal → olive,
 * so the same figure appears to transform from Section 1 into Section 2 — no
 * second image, no fade-swap.
 */
const HeroIntro: React.FC = () => {
  const wrapRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const parallaxOn = isDesktop && !prefersReduced;

  // 0 when the wrapper's top meets the viewport top, 1 when its bottom does —
  // i.e. across the single viewport-height of scroll while the stage is pinned.
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // Spring-smoothed so the layers glide instead of tracking scroll frame-exact.
  const p = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.3,
  });

  // Portrait: stable through the hero (0–0.45), travels up/right and scales in
  // through the hand-off (0.45–0.7), then settles into the close-up (0.7–1).
  const steps = [0, 0.45, 0.7, 1];
  const xDesk = useTransform(p, steps, ["0vw", "0vw", "6vw", "10vw"]);
  const yDesk = useTransform(p, steps, ["0vh", "0vh", "-10vh", "-18vh"]);
  const scaleDesk = useTransform(p, steps, [1, 1, 1.08, 1.15]);
  const rotateDesk = useTransform(p, steps, [0, 0, -0.8, -1.5]);
  // Fade the portrait out over the tail of Section 2 so the girl is fully gone
  // before the scene hands off to the Proof Row / Experience sections below.
  const opacityDesk = useTransform(p, [0, 0.88, 1], [1, 1, 0]);

  // Mobile keeps a much shorter travel so the portrait never swamps the copy.
  const yMob = useTransform(p, [0, 1], ["0vh", "-6vh"]);

  // Background paper shapes drift slower than the portrait for layered depth.
  const shapeY = useTransform(p, [0, 1], ["0vh", "-8vh"]);

  // Charcoal holds through the hero, then warms into muted olive for Section 2.
  const bgColor = useTransform(
    p,
    [0, 0.4, 0.85, 1],
    ["#151513", "#17170F", "#2C2E1A", "#33351F"],
  );

  const portraitStyle = parallaxOn
    ? { x: xDesk, y: yDesk, scale: scaleDesk, rotate: rotateDesk, opacity: opacityDesk }
    : prefersReduced
      ? {}
      : { y: yMob };

  return (
    <section
      ref={wrapRef}
      id="hero"
      className="relative w-screen mx-[calc(50%-50vw)] -mt-20"
    >
      {/* ── Sticky stage: pinned for the full 200vh, holds every visual layer ── */}
      <div className="sticky top-0 h-svh overflow-hidden -mb-[100svh] z-0">
        {/* Background wash, charcoal → olive */}
        <motion.div
          aria-hidden="true"
          style={{ backgroundColor: parallaxOn ? bgColor : "#1C1C14" }}
          className="absolute inset-0"
        />
        {/* Self-contained paper grain */}
        <div aria-hidden="true" className="paper-grain absolute inset-0" />

        {/* Abstract paper curves — slowest layer */}
        <motion.div
          aria-hidden="true"
          style={{ y: parallaxOn ? shapeY : 0 }}
          className="pointer-events-none absolute inset-0 hidden md:block"
        >
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <path
              d="M980 -60 C 1120 160, 1020 420, 1140 620 S 1260 860, 1220 980 L 1600 980 L 1600 -60 Z"
              fill="#4A4A22"
              opacity="0.28"
            />
            <path
              d="M1120 -60 C 1220 180, 1140 440, 1250 660 S 1360 880, 1330 980 L 1600 980 L 1600 -60 Z"
              fill="#77775D"
              opacity="0.16"
            />
          </svg>
        </motion.div>

        {/* The one persistent portrait — foreground layer */}
        <motion.div
          style={{
            ...portraitStyle,
            transformOrigin: "48% 34%",
            willChange: "transform",
          }}
          className="portrait-frame pointer-events-none absolute bottom-0 right-0
                     w-[92vw] max-w-[460px] opacity-70
                     sm:w-[70vw]
                     md:w-[62vw] md:max-w-[820px] md:opacity-100
                     lg:w-[58vw]"
        >
          <Image
            src={portrait}
            alt="Paper-quilling portrait of Khushi Parmar"
            priority
            sizes="(max-width: 768px) 92vw, 62vw"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Reading scrim: opaque on the left where the copy sits, clear on the
            right over the portrait. Keeps text legible without hiding the art. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0
                     bg-gradient-to-r from-ink via-ink/70 to-transparent
                     md:via-ink/30 md:to-transparent"
        />
      </div>

      {/* ── Panel 1 — Hero copy (first viewport) ── */}
      <div className="relative z-10 h-svh flex items-center">
        <div className="w-full mx-auto max-w-[1240px] px-6 pt-20">
          <div className="md:w-[54%]">
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
              <span
                aria-hidden="true"
                className="mt-3 block h-px w-16 bg-primary/70"
              />
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12h15m0 0l-5.5-5.5M19 12l-5.5 5.5"
                  />
                </svg>
              </a>

              <a
                href="/Full%20Stack%20Developer%20-%20Khushi%20Parmar%20-ethh.pdf"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14"
                  />
                </svg>
              </a>
            </motion.div>

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
      </div>

      {/* ── Panel 2 — Personal Introduction (second viewport) ── */}
      <div
        id="about"
        className="relative z-10 h-svh flex items-center"
      >
        <div className="w-full mx-auto max-w-[1240px] px-6">
          <div className="md:w-[54%]">
            <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-7">
              <span className="font-serif text-primary text-xl">02</span>
              <span aria-hidden="true" className="h-px w-10 bg-cream-dim/60" />
              <span className="text-cream-dim text-xs tracking-[0.22em] uppercase">
                Personal Introduction
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.08)}
              className="font-serif font-light text-cream leading-[1.06] text-[clamp(2.25rem,5.6vw,4.5rem)]"
            >
              I transform complex ideas into{" "}
              <span className="text-primary">reliable products</span> that
              people can actually use<span className="text-primary">.</span>
            </motion.h2>

            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-9 mb-8 block h-px w-full max-w-md origin-left bg-cream-dim/35"
            />

            <motion.p
              {...fadeUp(0.12)}
              className="max-w-[34rem] text-cream-muted text-base sm:text-lg leading-loose"
            >
              I&rsquo;m a full-stack engineer focused on building
              production-ready applications, AI-powered systems, and scalable
              backend infrastructure. I work across product design, frontend
              development, backend architecture, cloud deployment, and
              intelligent automation.
            </motion.p>

            <div className="mt-14 flex flex-wrap gap-x-12 gap-y-8">
              {CAPABILITIES.map(({ Icon, verb, what }, i) => (
                <motion.div
                  key={verb}
                  {...fadeUp(0.15 + i * 0.1)}
                  className="flex flex-col items-center text-center"
                >
                  <Icon
                    className="w-7 h-7 text-gold mb-3"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <span className="text-cream text-sm leading-snug">{verb}</span>
                  <span className="text-cream-muted text-sm leading-snug">
                    {what}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;
