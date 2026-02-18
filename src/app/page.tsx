"use client";
import { motion } from "framer-motion";
import ExperienceCard from '@/components/ExperienceCard';
import Image from "next/image";
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center my-16 max-w-7xl flex flex-col items-center"
      >
                  <Image
                    src="/profile-placeholder.svg" // Placeholder image
                    alt="Khushi Parmar"
                    width={150}
                    height={150}
                    className="rounded-full mb-6 border-4 border-purple-500 shadow-lg"
                  />        <h1 className="text-5xl font-bold mb-4">Khushi Parmar</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
        className="my-16 w-full max-w-7xl"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-md">JavaScript</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-md">Python</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-md">React</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-md">Node.js</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-md">PostgreSQL</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-md">Docker</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-md">Kubernetes</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-md">Cloud Platforms</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-md">AI/ML</motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="my-16 w-full max-w-7xl"
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
        className="my-16 w-full max-w-7xl"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.03 }} className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">CareerBakers (AI Résumé Platform)</h3>
            <p className="text-gray-700 mt-2">AI-powered platform for optimizing resumes.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">ArcPay (Cross-Chain Payments)</h3>
            <p className="text-gray-700 mt-2">Facilitates transactions across different blockchain networks.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">VitalSense (AI Health Platform - Hackathon Winner)</h3>
            <p className="text-gray-700 mt-2">An AI-driven platform for health monitoring and insights, recognized as a hackathon winner.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="p-6 border rounded-lg shadow-md">
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
