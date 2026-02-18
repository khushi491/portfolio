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

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 text-dark-text-secondary"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text-primary text-center mb-12">
          Systems-Focused Engineering
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Left Column: Technical Narrative */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed">
              As a Production Systems Engineer, I specialize in building and maintaining robust backend infrastructure that powers high-traffic applications. My expertise extends beyond typical development to focus on the operational excellence and resilience of distributed systems.
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark-text-secondary">
              <li>Deep experience with <span className="text-primary font-semibold">Microservices Architecture</span>, designing decoupled and scalable services.</li>
              <li>Proficient in optimizing <span className="text-primary font-semibold">Linux-based Production Environments</span> for stability and performance.</li>
              <li>Adept at <span className="text-primary font-semibold">Debugging Distributed Systems</span> to quickly identify and resolve complex issues across multiple services.</li>
              <li>Track record of <span className="text-primary font-semibold">Performance Optimization</span>, achieving up to 35% improvement in critical system metrics.</li>
              <li>Expertise in <span className="text-primary font-semibold">Database Indexing & Caching Strategies</span> to ensure low-latency data access and high throughput.</li>
              <li>Hands-on experience with <span className="text-primary font-semibold">Container Orchestration</span> using Docker and Kubernetes for seamless deployment and scaling.</li>
            </ul>
          </div>

          {/* Right Column: Animated Architecture Diagram Placeholder */}
          <div className="md:w-1/2 flex justify-center items-center h-64 border border-dark-border rounded-lg bg-dark-background-medium">
            <p className="text-dark-text-secondary">Animated Architecture Diagram Coming Soon</p>
          </div>
        </div>
      </motion.section>

    </main>
  );
}
