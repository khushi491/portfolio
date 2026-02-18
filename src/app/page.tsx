"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-16 lg:p-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center my-16 max-w-7xl"
      >
        <h1 className="text-5xl font-bold mb-4">Khushi Parmar</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          3+ years as a Software Engineer working on scalable systems,
          microservices, and cloud infrastructure. Passionate about building
          robust and efficient solutions using Python, Node.js, PostgreSQL, Docker, and Kubernetes.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="my-16 w-full max-w-7xl"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 border rounded-lg shadow-md">JavaScript</div>
          <div className="p-4 border rounded-lg shadow-md">Python</div>
          <div className="p-4 border rounded-lg shadow-md">React</div>
          <div className="p-4 border rounded-lg shadow-md">Node.js</div>
          <div className="p-4 border rounded-lg shadow-md">PostgreSQL</div>
          <div className="p-4 border rounded-lg shadow-md">Docker</div>
          <div className="p-4 border rounded-lg shadow-md">Kubernetes</div>
          <div className="p-4 border rounded-lg shadow-md">Cloud Platforms</div>
          <div className="p-4 border rounded-lg shadow-md">AI/ML</div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="my-16 w-full max-w-7xl"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-8">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Software Engineer</h3>
            <p className="text-gray-500">Company Name | Dates</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Developed scalable systems...</li>
              <li>Designed microservices...</li>
              <li>Managed cloud infrastructure...</li>
            </ul>
          </div>
          {/* Add more experience entries here */}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="my-16 w-full max-w-7xl"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">CareerBakers (AI Résumé Platform)</h3>
            <p className="text-gray-700 mt-2">Description of project...</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">ArcPay (Cross-Chain Payments)</h3>
            <p className="text-gray-700 mt-2">Description of project...</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">VitalSense (AI Health Platform - Hackathon Winner)</h3>
            <p className="text-gray-700 mt-2">Description of project...</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">NFT Marketplace</h3>
            <p className="text-gray-700 mt-2">Description of project...</p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
