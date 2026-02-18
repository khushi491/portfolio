"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'; // Import icons

const ContactSection: React.FC = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-center w-full max-w-7xl mx-auto py-16 md:py-24 px-4 bg-background-light dark:bg-background-dark rounded-lg shadow-md"
    >
      <h2 className="text-4xl font-bold mb-8 text-text-light dark:text-text-dark">Get in Touch</h2>
      <p className="text-xl text-text-light dark:text-text-dark mb-8">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex justify-center space-x-6">
        <Link href="mailto:your.email@example.com" className="flex items-center space-x-2 text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors duration-300 text-lg font-semibold">
          <FiMail /> <span>Email</span>
        </Link>
        <Link href="https://linkedin.com/in/khushiparmar" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors duration-300 text-lg font-semibold">
          <FiLinkedin /> <span>LinkedIn</span>
        </Link>
        <Link href="https://github.com/khushi491" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors duration-300 text-lg font-semibold">
          <FiGithub /> <span>GitHub</span>
        </Link>
      </div>
    </motion.section>
  );
};

export default ContactSection;
