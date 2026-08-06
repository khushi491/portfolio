"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TimelineCard from "@/components/TimelineCard";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal, { Project } from "@/components/ProjectModal";
import SkillsTicker from "@/components/SkillsTicker";
import HeroIntro from "@/components/HeroIntro";
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
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-ink text-cream">

      <HeroIntro />

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
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full py-28 px-4 text-cream-muted"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cream text-center mb-12">
          Experience
        </h2>
        <div className="space-y-6">
          {/* Webforest LLP */}
          <TimelineCard
            index={0}
            company="Webforest LLP"
            role="Software Engineer"
            duration="Jan 2022 - Present"
            description={[
              "Operated 8+ production microservices, ensuring high availability and performance.",
              "Handled 50K+ daily requests • 99.8% uptime • +35% performance gain",
              "Implemented Docker and Kubernetes for seamless orchestration and scaling."
            ]}
            techStack={['Microservices', 'Docker', 'Kubernetes']}
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
            techStack={['TypeScript', 'React', 'Redux']}
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
            techStack={['Java', 'Spring', 'REST APIs']}
          />
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full py-28 px-4 text-cream-muted"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cream text-center mb-12">
          Advanced Projects – Technical Depth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              title: "CareerBakers",
              oneLiner: "AI-powered resume & interview platform designed to optimize job search efficiency.",
              highlights: [
                "AI agent orchestration for personalized feedback and suggestions.",
                "Sophisticated resume scoring system based on industry standards.",
                "Integrated real-time interview simulation with speech-to-text analysis.",
                "Automated job matching algorithm achieving 85% accuracy in role recommendations."
              ],
              techChips: ['Node.js', 'Python', 'Django', 'React', 'Redux', 'OpenAI API'],
              longDescription: "CareerBakers is a comprehensive career advancement platform that leverages LLMs to provide users with deep insights into their professional standing. It features a sophisticated resume parser, an AI-driven interview coach, and a personalized career roadmap generator. The system orchestrates multiple AI agents to ensure feedback is both contextually relevant and technically accurate.",
              demoLink: "https://career-bakers.com"
            },
            {
              title: "ArcPay",
              oneLiner: "Cross-chain distributed payment system enabling seamless transactions across different blockchain networks.",
              highlights: [
                "Developed a fault-tolerant backend ensuring high reliability and data integrity.",
                "Implemented complex settlement workflow orchestration for secure transfers.",
                "Optimized smart contract interactions reducing gas costs by 25%.",
                "Built a real-time transaction monitoring dashboard with 200ms latency."
              ],
              techChips: ['Python', 'PostgreSQL', 'Docker', 'Kubernetes', 'Solidity', 'Web3.js'],
              longDescription: "ArcPay solves the liquidity and interoperability challenges in the decentralized finance space. By implementing a custom settlement engine, it allows users to transfer value across chains with minimal friction. The infrastructure is built to be highly available, utilizing Kubernetes for auto-scaling and Prometheus for deep system monitoring.",
              demoLink: "https://arcpay.io"
            },
            {
              title: "VitalSense",
              oneLiner: "Real-time AI health platform, recognized as an Antler Hackathon Winner, providing proactive health insights.",
              highlights: [
                "Built an AI Nurse Agent for intelligent health monitoring and alerts.",
                "Designed containerized cloud deployment strategies for scalability.",
                "Integrated wearable device data streams for continuous monitoring.",
                "Developed predictive models for early detection of health anomalies."
              ],
              techChips: ['AI', 'Python', 'Cloud (AWS/GCP)', 'IoT', 'FastAPI', 'PyTorch'],
              longDescription: "VitalSense was developed during the Antler Hackathon to bridge the gap between reactive and proactive healthcare. It uses a combination of IoT data and AI to provide users with a 'digital twin' of their health. The AI Nurse Agent can interpret symptoms, cross-reference medical databases, and provide immediate, data-backed advice.",
              demoLink: "https://vitalsense.health"
            },
            {
              title: "Devolution-World",
              oneLiner: "High-performance backend for a gaming platform supporting 10,000+ concurrent users.",
              highlights: [
                "Implemented Redis caching strategies for ultra-low latency data access.",
                "Achieved significant throughput optimization for a seamless user experience.",
                "Designed a WebSocket-based real-time state synchronization engine.",
                "Reduced server-side latency by 40% through efficient payload serialization."
              ],
              techChips: ['Node.js', 'Redis', 'Microservices', 'WebSockets', 'Go'],
              longDescription: "Devolution-World is a high-stakes gaming environment where performance is paramount. The backend architecture focuses on minimizing the event loop lag and optimizing data flow between the game client and the server. It utilizes a distributed cache layer to handle frequent state updates without stressing the primary database.",
              demoLink: "https://devolution.world"
            },
            {
              title: "NFT Marketplace",
              oneLiner: "A robust and scalable platform for buying, selling, and trading Non-Fungible Tokens.",
              highlights: [
                "Developed secure APIs for minting, listing, and transacting NFTs.",
                "Implemented CI/CD automation for rapid and reliable deployment.",
                "Built a decentralized metadata storage system using IPFS.",
                "Integrated multiple wallet providers for a seamless user onboarding experience."
              ],
              techChips: ['Node.js', 'Solidity', 'Ethereum', 'IPFS', 'Hardhat', 'Ethers.js'],
              longDescription: "This marketplace provides a secure and intuitive interface for the NFT ecosystem. It handles the complete lifecycle of a digital asset, from creation on the blockchain to secondary market sales. The focus was on building a trustless environment where security audits and automated testing were integral to the development process.",
              demoLink: "https://nft-market.place"
            }
          ].map((project, idx) => (
            <ProjectCard
              key={idx}
              {...project}
              onClick={() => openProject(project)}
            />
          ))}
        </div>
      </motion.section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

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

      {/* Education Section */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="w-full py-28 px-4 text-cream-muted"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cream text-center mb-12">
          Education
        </h2>
        <div className="space-y-6 text-center text-lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-cream">Monroe University</h3>
            <p className="text-cream-muted">MS Computer Science, GPA 3.9</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-cream">Maharaja Sayajirao University</h3>
            <p className="text-cream-muted">Bachelor’s</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-full py-28 px-4 text-cream-muted text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cream mb-12">
          Let’s Build Resilient Systems.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
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

    </main>
  );
}
