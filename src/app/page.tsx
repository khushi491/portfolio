"use client";
import { motion } from "framer-motion";
import TimelineCard from "@/components/TimelineCard";
import ProjectCard from "@/components/ProjectCard"; // Assuming a typewriter component will be created

export default function Home() {
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
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-neutral-50 text-neutral-900">

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
          className="text-6xl font-bold text-neutral-900 mb-4" // text-6xl for 60px
        >
          Khushi Parmar
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl font-medium text-neutral-600 mb-8" // text-3xl for 30px
        >
          Full Stack Developer (AI + Production Systems)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 max-w-[650px] mx-auto text-neutral-600 mb-8 text-lg" // mt-4 for 16px, max-w-[650px], text-gray-700 for light, text-gray-300 for dark
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
          <span className="inline-block px-3 py-1 rounded-full bg-neutral-200 text-neutral-600 text-sm mr-2 mb-2">50K+ req/day</span>
          <span className="inline-block px-3 py-1 rounded-full bg-neutral-200 text-neutral-600 text-sm mr-2 mb-2">99.8% uptime</span>
          <span className="inline-block px-3 py-1 rounded-full bg-neutral-200 text-neutral-600 text-sm mb-2">Antler Winner</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <motion.a
            href="mailto:your.email@example.com"
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
            className="inline-flex items-center justify-center px-8 py-3 border border-neutral-200 shadow-sm text-base font-medium rounded-md text-neutral-900 bg-neutral-200 hover:bg-neutral-300 md:py-4 md:text-lg md:px-10 transition-all duration-300"
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
        className="w-full py-16 bg-neutral-100 border-t border-b border-neutral-200"
      >
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">50K+</span>
            <span className="text-sm text-neutral-600">daily requests</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">99.8%</span>
            <span className="text-sm text-neutral-600">uptime</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">+35%</span>
            <span className="text-sm text-neutral-600">performance gain</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-primary">15m</span>
            <span className="text-sm text-neutral-600">deploy time (from 2h)</span>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full py-28 px-4 text-neutral-600"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
          Systems-Focused Engineering
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Left Column: Technical Narrative */}
          <div className="md:w-full space-y-6 max-w-[700px] mx-auto">
            <p className="text-lg leading-relaxed">
              As a Production Systems Engineer, I specialize in building and maintaining robust backend infrastructure that powers high-traffic applications. My expertise extends beyond typical development to focus on the operational excellence and resilience of distributed systems.
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
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
        className="w-full py-28 px-4 text-neutral-600"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
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
        className="w-full py-28 px-4 text-neutral-600"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
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

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full py-28 px-4 text-neutral-600"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
          Skills – Technical Matrix
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['Go', 'Kubernetes', 'Docker', 'AWS', 'Redis', 'PostgreSQL', 'LangChain', 'LLM Infra', 'React'].map((tech) => (
            <span key={tech} className="inline-block px-3.5 py-2 bg-neutral-200 rounded-full text-sm text-neutral-900">
              {tech}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-2xl font-semibold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="inline-block px-3.5 py-2 bg-neutral-200 rounded-full text-sm text-neutral-900">
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
        className="w-full py-28 px-4 text-neutral-600"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
          Education
        </h2>
        <div className="space-y-6 text-center text-lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-neutral-900">Monroe University</h3>
            <p className="text-neutral-600">MS Computer Science, GPA 3.9</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-neutral-900">Maharaja Sayajirao University</h3>
            <p className="text-neutral-600">Bachelor’s</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-full py-28 px-4 text-neutral-600 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">
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
            href="https://linkedin.com/in/khushiparmar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, background: "linear-gradient(to right, var(--primary), var(--secondary))" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 shadow-sm text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all duration-300"
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
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 shadow-sm text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77C19.4 3.92 19 2.5 19 2c0 0-1 0-3 1.5l-3 1.5c-1 0-4 1.5-4 1.5"></path></svg>
            GitHub
          </motion.a>
        </div>
      </motion.section>

    </main>
  );
}
