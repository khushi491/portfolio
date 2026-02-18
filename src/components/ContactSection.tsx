"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactSection: React.FC = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-center my-16 w-full max-w-7xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Get in Touch</h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex justify-center space-x-6">
        <Link href="mailto:your.email@example.com" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-600 transition-colors duration-300 text-lg font-semibold">
          Email
        </Link>
        <Link href="https://linkedin.com/in/khushiparmar" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-600 transition-colors duration-300 text-lg font-semibold">
          LinkedIn
        </Link>
        <Link href="https://github.com/khushi491" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-600 transition-colors duration-300 text-lg font-semibold">
          GitHub
        </Link>
      </div>
    </motion.section>
  );
};

export default ContactSection;
