"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  stack?: string;
  description: string;
  highlights: string[];
  link?: string; // Optional link to project details or live demo
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  stack,
  description,
  highlights,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} // 3D tilt hover would be more complex
      className="bg-dark-background-medium p-6 rounded-lg shadow-lg border border-dark-border relative group"
    >
      <h3 className="text-2xl font-semibold text-text-primary mb-2">{title}</h3>
      {stack && <p className="text-sm text-text-secondary mb-3">Stack: {stack}</p>}
      <p className="text-text-secondary mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-lg font-medium text-primary mb-2">Highlights:</h4>
        <ul className="list-disc list-inside space-y-1 text-text-secondary">
          {highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {link && (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300">
          View Project
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4-4m0 0l-4-4m4 4H3"></path></svg>
        </Link>
      )}
    </motion.div>
  );
};

export default ProjectCard;
