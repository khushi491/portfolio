"use client";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import TimelineCard from "@/components/TimelineCard";
import ProjectCard from "@/components/ProjectCard"; // Assuming a typewriter component will be created

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

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 text-dark-text-secondary"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text-primary text-center mb-12">
          Experience – Engineering Timeline
        </h2>
        <div className="relative border-l-2 border-dark-border ml-4 pl-8 space-y-12">
          {/* Webforest LLP */}
          <TimelineCard
            index={0}
            company="Webforest LLP"
            role="Software Engineer"
            duration="Jan 2022 - Present"
            description={[
              "Operated 8+ production microservices, ensuring high availability and performance.",
              "Managed systems handling 50K+ daily requests with 99.8% uptime.",
              "Achieved a 35% performance boost through targeted optimizations.",
              "Implemented Docker and Kubernetes for seamless orchestration and scaling."
            ]}
          />

          {/* Wedowebapps LLC */}
          <TimelineCard
            index={1}
            company="Wedowebapps LLC"
            role="Full Stack Developer"
            duration="Aug 2020 - Dec 2021"
            description={[
              "Designed and developed applications using TypeScript and React architecture.",
              "Implemented robust Redux state management systems.",
              "Optimized data flow for enhanced user experience and application responsiveness."
            ]}
          />

          {/* Techyhood Software Solution */}
          <TimelineCard
            index={2}
            company="Techyhood Software Solution"
            role="Backend Developer Intern"
            duration="May 2020 - Jul 2020"
            description={[
              "Developed Java + Spring backend systems for various client projects.",
              "Created and maintained REST APIs for efficient data exchange.",
              "Contributed to SDLC workflows, focusing on agile methodologies."
            ]}
          />
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 text-dark-text-secondary"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text-primary text-center mb-12">
          Advanced Projects – Technical Depth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CareerBakers */}
          <ProjectCard
            title="CareerBakers"
            stack="Node.js, Python, Django, React, Redux"
            description="AI-powered resume & interview platform designed to optimize job search efficiency."
            highlights={[
              "AI agent orchestration for personalized feedback and suggestions.",
              "Sophisticated resume scoring system based on industry standards.",
              "End-to-end architecture design for a scalable and robust platform."
            ]}
            // link="https://career-bakers.com" // Example link
          />

          {/* ArcPay */}
          <ProjectCard
            title="ArcPay"
            stack="Python, PostgreSQL, Docker, Kubernetes"
            description="Cross-chain distributed payment system enabling seamless transactions across different blockchain networks."
            highlights={[
              "Developed a fault-tolerant backend ensuring high reliability and data integrity.",
              "Implemented complex settlement workflow orchestration for secure transfers."
            ]}
            // link="https://arcpay.io" // Example link
          />

          {/* VitalSense (Antler Hackathon Winner) */}
          <ProjectCard
            title="VitalSense"
            stack="AI, Python, Cloud (AWS/GCP), IoT"
            description="Real-time AI health platform, recognized as an Antler Hackathon Winner, providing proactive health insights."
            highlights={[
              "Built an AI Nurse Agent for intelligent health monitoring and alerts.",
              "Designed containerized cloud deployment strategies for scalability.",
              "Developed real-time backend processing for immediate data analysis."
            ]}
            // link="https://vitalsense.health" // Example link
          />

          {/* Devolution-World */}
          <ProjectCard
            title="Devolution-World"
            stack="Node.js, Redis, Microservices"
            description="High-performance backend for a gaming platform supporting 10,000+ concurrent users."
            highlights={[
              "Implemented Redis caching strategies for ultra-low latency data access.",
              "Achieved significant throughput optimization for a seamless user experience.",
              "Reduced latency across distributed services through advanced engineering techniques."
            ]}
            // link="https://devolution.world" // Example link
          />

          {/* NFT Marketplace */}
          <ProjectCard
            title="NFT Marketplace"
            stack="Node.js, Solidity, Ethereum, IPFS"
            description="A robust and scalable platform for buying, selling, and trading Non-Fungible Tokens."
            highlights={[
              "Developed secure APIs for minting, listing, and transacting NFTs.",
              "Implemented CI/CD automation for rapid and reliable deployment.",
              "Scaled infrastructure to handle 200% growth in user base and transactions."
            ]}
            // link="https://nft-market.place" // Example link
          />
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 text-dark-text-secondary"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text-primary text-center mb-12">
          Skills – Technical Matrix
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming */}
          <div className="bg-dark-background-medium p-6 rounded-lg shadow-lg border border-dark-border">
            <h3 className="text-2xl font-semibold text-primary mb-4">Programming</h3>
            <ul className="list-disc list-inside space-y-2 text-dark-text-secondary">
              <li>Python (Advanced)</li>
              <li>JavaScript/TypeScript (Advanced)</li>
              <li>Java (Intermediate)</li>
              <li>Go (Beginner)</li>
            </ul>
          </div>

          {/* Backend Engineering */}
          <div className="bg-dark-background-medium p-6 rounded-lg shadow-lg border border-dark-border">
            <h3 className="text-2xl font-semibold text-primary mb-4">Backend Engineering</h3>
            <ul className="list-disc list-inside space-y-2 text-dark-text-secondary">
              <li>Node.js (Express, NestJS)</li>
              <li>Django, Flask (Python)</li>
              <li>Spring Boot (Java)</li>
              <li>RESTful APIs, gRPC</li>
              <li>PostgreSQL, MongoDB, Redis</li>
            </ul>
          </div>

          {/* Cloud & DevOps */}
          <div className="bg-dark-background-medium p-6 rounded-lg shadow-lg border border-dark-border">
            <h3 className="text-2xl font-semibold text-primary mb-4">Cloud & DevOps</h3>
            <ul className="list-disc list-inside space-y-2 text-dark-text-secondary">
              <li>Docker, Kubernetes</li>
              <li>AWS (EC2, S3, Lambda, RDS, EKS)</li>
              <li>Google Cloud Platform (GCP)</li>
              <li>CI/CD (GitLab CI, GitHub Actions)</li>
              <li>Terraform, Ansible</li>
            </ul>
          </div>

          {/* AI Systems */}
          <div className="bg-dark-background-medium p-6 rounded-lg shadow-lg border border-dark-border">
            <h3 className="text-2xl font-semibold text-primary mb-4">AI Systems</h3>
            <ul className="list-disc list-inside space-y-2 text-dark-text-secondary">
              <li>Machine Learning (Scikit-learn, TensorFlow)</li>
              <li>Deep Learning (PyTorch)</li>
              <li>NLP, LLM Orchestration</li>
              <li>Data Preprocessing, Feature Engineering</li>
            </ul>
          </div>

          {/* Networking */}
          <div className="bg-dark-background-medium p-6 rounded-lg shadow-lg border border-dark-border">
            <h3 className="text-2xl font-semibold text-primary mb-4">Networking</h3>
            <ul className="list-disc list-inside space-y-2 text-dark-text-secondary">
              <li>TCP/IP, HTTP/S</li>
              <li>Load Balancing, API Gateways</li>
              <li>Service Mesh (Istio)</li>
              <li>DNS Management</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 text-dark-text-secondary"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text-primary text-center mb-12">
          Education
        </h2>
        <div className="space-y-6 text-center text-lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-text-primary">Monroe University</h3>
            <p className="text-text-secondary">MS Computer Science, GPA 3.9</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-text-primary">Maharaja Sayajirao University</h3>
            <p className="text-text-secondary">Bachelor’s</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 text-dark-text-secondary text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text-primary mb-12">
          Let’s Build Resilient Systems.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05, background: "linear-gradient(to right, var(--primary), var(--secondary))" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dark-text-primary bg-primary hover:bg-secondary md:py-4 md:text-lg md:px-10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V3"></path></svg>
            Email
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/khushiparmar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, background: "linear-gradient(to right, var(--primary), var(--secondary))" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dark-text-primary bg-dark-background-medium border border-dark-border hover:bg-primary md:py-4 md:text-lg md:px-10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/khushi491"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, background: "linear-gradient(to right, var(--primary), var(--secondary))" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dark-text-primary bg-dark-background-medium border border-dark-border hover:bg-primary md:py-4 md:text-lg md:px-10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77C19.4 3.92 19 2.5 19 2c0 0-1 0-3 1.5l-3 1.5c-1 0-4 1.5-4 1.5"></path></svg>
            GitHub
          </motion.a>
        </div>
      </motion.section>

    </main>
  );
}
