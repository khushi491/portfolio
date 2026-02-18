"use client";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"; // Assuming a typewriter component will be created

export default function Home() {
  const words = [
    {
      text: "Backend Systems",
    },
    {
      text: "Cloud Infrastructure",
    },
    {
      text: "AI Orchestration",
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-dark-background-DEFAULT text-dark-text-primary">
      {/* Background - will be implemented later */}

      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-dark-text-primary mb-4"
        >
          Khushi Parmar
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold text-dark-text-primary mb-8"
        >
          Production Systems Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-dark-text-secondary max-w-3xl mx-auto mb-8"
        >
          Building scalable backend systems handling 50K+ daily requests with 99.8% uptime.
        </motion.p>

        {/* Micro Credibility Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <span className="bg-dark-background-medium text-dark-text-secondary px-4 py-2 rounded-full text-sm">
            3+ Years Experience
          </span>
          <span className="bg-dark-background-medium text-dark-text-secondary px-4 py-2 rounded-full text-sm">
            Distributed Systems
          </span>
          <span className="bg-dark-background-medium text-dark-text-secondary px-4 py-2 rounded-full text-sm">
            Docker & Kubernetes
          </span>
          <span className="bg-dark-background-medium text-dark-text-secondary px-4 py-2 rounded-full text-sm">
            AI + LLM Orchestration
          </span>
        </motion.div>

        {/* Typewriter rotating specialization titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-xl md:text-2xl font-medium text-primary mb-16"
        >
          <TypewriterEffectSmooth words={words} />
        </motion.div>

        {/* Scroll Indicator - will be implemented later */}
      </motion.section>
    </main>
  );
}
