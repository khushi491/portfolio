"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TimelineCard from "@/components/TimelineCard";
import ProjectCard from "@/components/ProjectCard";

const GITHUB_USER = "khushi491";
const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100&type=owner`;

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
};

export default function Home() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [reposLoading, setReposLoading] = useState(true);
  const [reposError, setReposError] = useState<string | null>(null);

  useEffect(() => {
    fetch(GITHUB_REPOS_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repos");
        return res.json();
      })
      .then(async (data: { name: string; description: string | null; html_url: string; language: string | null }[]) => {
        const reposWithReadmes = await Promise.all(
          data.map(async (repo) => {
            try {
              const readmeRes = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${repo.name}/readme`);
              if (readmeRes.ok) {
                const readmeData = await readmeRes.json();
                const decodedReadme = atob(readmeData.content.replace(/\n/g, ""));
                // Basic cleanup: remove markdown headers and truncate
                const cleanDescription = decodedReadme
                  .replace(/#.*?\n/g, "") // Remove headers
                  .replace(/\[.*?\]\(.*?\)/g, "") // Remove links
                  .replace(/[*#`]/g, "") // Remove common markdown chars
                  .trim()
                  .slice(0, 120) + "...";
                
                return {
                  ...repo,
                  description: cleanDescription || repo.description || "No description available.",
                };
              }
            } catch (e) {
              console.error(`Failed to fetch readme for ${repo.name}`, e);
            }
            return {
              ...repo,
              description: repo.description || "No description available.",
            };
          })
        );
        setRepos(reposWithReadmes);
      })
      .catch(() => setReposError("Could not load GitHub repos."))
      .finally(() => setReposLoading(false));
  }, []);

  const skillsData = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Redux"]
    },
    {
      category: "Backend",
      skills: ["Node.js (Express, NestJS)", "Python (Django, Flask)", "Java (Spring Boot)", "RESTful APIs", "gRPC", "Microservices"]
    },
    {
      category: "Cloud/DevOps",
      skills: ["Docker", "Kubernetes", "AWS (EC2, S3, Lambda, RDS, EKS)", "GCP", "CI/CD (GitLab CI, GitHub Actions)", "Terraform", "Ansible", "Linux"]
    },
    {
      category: "AI/ML",
      skills: ["Machine Learning", "Deep Learning (PyTorch)", "NLP", "LLM Orchestration", "Data Preprocessing"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
    }
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-gray-50 text-gray-900">

      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center py-28" // Use padding instead of specific margin
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl font-bold text-gray-900 mb-4" // text-6xl for 60px
        >
          Khushi Parmar
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl font-medium text-gray-600 mb-8" // text-3xl for 30px
        >
          Full Stack Developer (AI + Production Systems)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 max-w-[650px] mx-auto text-gray-600 mb-8 text-lg" // mt-4 for 16px, max-w-[650px], text-gray-700 for light, text-gray-300 for dark
        >
          I build distributed systems that handle 50K+ daily requests with 99.8% uptime.
          Specializing in Kubernetes, cloud infra, and AI orchestration.
        </motion.p>

        {/* Proof Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center mt-8 mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-sm mr-2 mb-2">50K+ req/day</span>
          <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-sm mr-2 mb-2">99.8% uptime</span>
          <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-sm mb-2">Antler Winner</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <motion.a
            href="mailto:khushieeparmar@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-sm"
          >
            Email
          </motion.a>
          <motion.a
            href="https://github.com/khushi491"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 shadow-sm text-base font-medium rounded-md text-gray-900 bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10 transition-all duration-300"
          >
            GitHub
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Proof Row Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full py-16 bg-gray-100 border-t border-b border-gray-200"
      >
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">50K+</span>
            <span className="text-sm text-gray-600">daily requests</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">99.8%</span>
            <span className="text-sm text-gray-600">uptime</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">+35%</span>
            <span className="text-sm text-gray-600">performance gain</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">15m</span>
            <span className="text-sm text-gray-600">deploy time (from 2h)</span>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full py-28 px-4 text-gray-600"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Systems-Focused Engineering
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Left Column: Technical Narrative */}
          <div className="md:w-full space-y-6 max-w-[700px] mx-auto">
            <p className="text-lg leading-relaxed">
              As a Production Systems Engineer, I specialize in building and maintaining robust backend infrastructure that powers high-traffic applications. My expertise extends beyond typical development to focus on the operational excellence and resilience of distributed systems.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Deep experience with <span className="text-primary font-semibold">Microservices Architecture</span>, designing decoupled and scalable services.</li>
              <li>Proficient in optimizing <span className="text-primary font-semibold">Linux-based Production Environments</span> for stability and performance.</li>
              <li>Adept at <span className="text-primary font-semibold">Debugging Distributed Systems</span> to quickly identify and resolve complex issues across multiple services.</li>
              <li>Track record of <span className="text-primary font-semibold">Performance Optimization</span>, achieving up to 35% improvement in critical system metrics.</li>
              <li>Expertise in <span className="text-primary font-semibold">Database Indexing & Caching Strategies</span> to ensure low-latency data access and high throughput.</li>
              <li>Hands-on experience with <span className="text-primary font-semibold">Container Orchestration</span> using Docker and Kubernetes for seamless deployment and scaling.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full py-28 px-4 text-gray-600"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
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
        className="w-full py-28 px-4 text-gray-600"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Advanced Projects – Technical Depth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* CareerBakers */}
          <ProjectCard
            title="CareerBakers"
            oneLiner="AI-powered resume & interview platform designed to optimize job search efficiency."
            highlights={[
              "AI agent orchestration for personalized feedback and suggestions.",
              "Sophisticated resume scoring system based on industry standards.",
            ]}
            techChips={['Node.js', 'Python', 'Django', 'React', 'Redux']}
            // githubLink=""
            // demoLink="https://career-bakers.com"
          />

          {/* ArcPay */}
          <ProjectCard
            title="ArcPay"
            oneLiner="Cross-chain distributed payment system enabling seamless transactions across different blockchain networks."
            highlights={[
              "Developed a fault-tolerant backend ensuring high reliability and data integrity.",
              "Implemented complex settlement workflow orchestration for secure transfers."
            ]}
            techChips={['Python', 'PostgreSQL', 'Docker', 'Kubernetes']}
            // githubLink=""
            // demoLink="https://arcpay.io"
          />

          {/* VitalSense (Antler Hackathon Winner) */}
          <ProjectCard
            title="VitalSense"
            oneLiner="Real-time AI health platform, recognized as an Antler Hackathon Winner, providing proactive health insights."
            highlights={[
              "Built an AI Nurse Agent for intelligent health monitoring and alerts.",
              "Designed containerized cloud deployment strategies for scalability.",
            ]}
            techChips={['AI', 'Python', 'Cloud (AWS/GCP)', 'IoT']}
            // githubLink=""
            // demoLink="https://vitalsense.health"
          />

          {/* Devolution-World */}
          <ProjectCard
            title="Devolution-World"
            oneLiner="High-performance backend for a gaming platform supporting 10,000+ concurrent users."
            highlights={[
              "Implemented Redis caching strategies for ultra-low latency data access.",
              "Achieved significant throughput optimization for a seamless user experience.",
            ]}
            techChips={['Node.js', 'Redis', 'Microservices']}
            // githubLink=""
            // demoLink="https://devolution.world"
          />

          {/* NFT Marketplace */}
          <ProjectCard
            title="NFT Marketplace"
            oneLiner="A robust and scalable platform for buying, selling, and trading Non-Fungible Tokens."
            highlights={[
              "Developed secure APIs for minting, listing, and transacting NFTs.",
              "Implemented CI/CD automation for rapid and reliable deployment.",
            ]}
            techChips={['Node.js', 'Solidity', 'Ethereum', 'IPFS']}
            // githubLink=""
            // demoLink="https://nft-market.place"
          />
        </div>
      </motion.section>

      {/* Open Source / GitHub Projects Section */}
      <motion.section
        id="open-source"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full py-28 px-4 text-gray-600 bg-gray-100 border-t border-gray-200"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Open Source
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Projects I’ve built and shared on GitHub. Clone, star, or contribute.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {reposLoading && (
            <div className="col-span-full flex justify-center py-12">
              <div className="animate-pulse text-gray-500">Loading repos from GitHub…</div>
            </div>
          )}
          {reposError && (
            <div className="col-span-full text-center py-8 text-gray-600">
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
              className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/50 shadow-sm transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors truncate">
                  {repo.name}
                </h3>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{repo.description}</p>
              {repo.language && (
                <span className="inline-block px-2.5 py-1 rounded-md bg-gray-200 text-gray-700 text-xs font-medium">
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            View all on GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </motion.a>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full py-28 px-4 text-gray-600"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Skills – Technical Matrix
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['Go', 'Kubernetes', 'Docker', 'AWS', 'Redis', 'PostgreSQL', 'LangChain', 'LLM Infra', 'React'].map((tech) => (
            <span key={tech} className="inline-block px-3.5 py-2 bg-gray-200 rounded-full text-sm text-gray-900">
              {tech}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="inline-block px-3.5 py-2 bg-gray-200 rounded-full text-sm text-gray-900">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="w-full py-28 px-4 text-gray-600"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Education
        </h2>
        <div className="space-y-6 text-center text-lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900">Monroe University</h3>
            <p className="text-gray-600">MS Computer Science, GPA 3.9</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900">Maharaja Sayajirao University</h3>
            <p className="text-gray-600">Bachelor’s</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-full py-28 px-4 text-gray-600 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Let’s Build Resilient Systems.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05, background: "linear-gradient(to right, var(--primary), var(--secondary))" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 shadow-sm text-base font-medium rounded-md text-gray-800 bg-primary hover:bg-primary md:py-4 md:text-lg md:px-10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V3"></path></svg>
            Email
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/khushieeparmar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, background: "linear-gradient(to right, var(--primary), var(--secondary))" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 shadow-sm text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all duration-300"
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
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 shadow-sm text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77C19.4 3.92 19 2.5 19 2c0 0-1 0-3 1.5l-3 1.5c-1 0-4 1.5-4 1.5"></path></svg>
            GitHub
          </motion.a>
        </div>
      </motion.section>

    </main>
  );
}
