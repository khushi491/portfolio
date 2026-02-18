"use client";
import { motion } from "framer-motion";
import ExperienceCard from '@/components/ExperienceCard';
import Image from "next/image";
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-16">
      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-7xl mx-auto py-16 md:py-24 px-4 flex flex-col items-center"
      >
                  <Image
                    src="/profile-placeholder.svg" // Placeholder image
                    alt="Khushi Parmar"
                    width={150}
                    height={150}
                    className="rounded-full mb-6 border-4 border-purple-500 shadow-lg"
                  />        <h1 className="text-5xl font-bold mb-4">Khushi Parmar</h1>
        <p className="text-xl text-text-light dark:text-text-dark max-w-3xl mx-auto">
          Passionate Software Engineer with over 3 years of experience in designing, developing, and deploying scalable systems and robust microservices.
          My expertise lies in crafting efficient solutions using modern technologies like Python, Node.js, PostgreSQL, Docker, and Kubernetes, with a strong foundation in cloud infrastructure.
          I thrive on tackling complex challenges and contributing to innovative projects.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-7xl mx-auto py-16 md:py-24 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 text-center">
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-4 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >JavaScript</motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-4 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >Python</motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-4 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >React</motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-4 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >Node.js</motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-4 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >PostgreSQL</motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-4 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >Docker</motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-4 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >Kubernetes</motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-4 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >Cloud Platforms</motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-4 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >AI/ML</motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-7xl mx-auto py-16 md:py-24 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-8">
          <ExperienceCard
            title="Software Engineer"
            company="Various Companies"
            dates="3+ years"
            description="Focused on building robust and efficient solutions across various domains."
            responsibilities={[
              "Developed scalable systems",
              "Designed microservices",
              "Managed cloud infrastructure",
              "Utilized Python, Node.js, PostgreSQL, Docker, and Kubernetes"
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
        className="w-full max-w-7xl mx-auto py-16 md:py-24 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-6 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold">CareerBakers (AI Résumé Platform)</h3>
            <p className="text-gray-700 mt-2">AI-powered platform for optimizing resumes.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-6 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold">ArcPay (Cross-Chain Payments)</h3>
            <p className="text-gray-700 mt-2">Facilitates transactions across different blockchain networks.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-6 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold">VitalSense (AI Health Platform - Hackathon Winner)</h3>
            <p className="text-gray-700 mt-2">An AI-driven platform for health monitoring and insights, recognized as a hackathon winner.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-6 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold">NFT Marketplace</h3>
            <p className="text-gray-700 mt-2">A platform for buying, selling, and trading Non-Fungible Tokens.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
