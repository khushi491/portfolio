"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  oneLiner: string;
  highlights: string[]; // Strictly 2 bullets (impact + tech)
  githubLink?: string; // Link to GitHub repo
  demoLink?: string; // Link to live demo
  techChips?: string[]; // Built with chips
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  oneLiner,
  highlights,
  githubLink,
  demoLink,
  techChips,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1 }} // Keeping scale 1 as transform is handled by hover:-translate-y-1
      className="bg-white p-7 rounded-xl border border-neutral-200 relative group transition-all duration-200 ease-in-out hover:border-neutral-300 hover:-translate-y-1 shadow-sm"
    >
      <h3 className="text-2xl font-semibold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-600 mb-4">{oneLiner}</p>
      <div className="mb-4">
        <h4 className="text-lg font-medium text-primary mb-2">Impact:</h4>
        <ul className="list-disc list-inside space-y-1 text-neutral-600">
          {highlights.slice(0, 2).map((item, index) => ( // Ensure max 2 bullets
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {techChips && techChips.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 mb-4">
          {techChips.map((chip, idx) => (
            <span key={idx} className="inline-block px-3 py-1 rounded-full bg-neutral-200 text-neutral-900 text-xs">
              {chip}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-4 mt-6">
        {demoLink && (
          <Link href={demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-neutral-900 transition-colors duration-300">
            Demo
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4-4m0 0l-4-4m4 4H3"></path></svg>
          </Link>
        )}
        {githubLink && (
          <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-neutral-900 transition-colors duration-300">
            GitHub
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77C19.4 3.92 19 2.5 19 2c0 0-1 0-3 1.5l-3 1.5c-1 0-4 1.5-4 1.5"></path></svg>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
