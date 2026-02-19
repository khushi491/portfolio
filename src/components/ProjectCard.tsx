"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from './ProjectModal';

interface ProjectCardProps extends Project {
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  oneLiner,
  highlights,
  githubLink,
  demoLink,
  techChips,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }} 
      onClick={onClick}
      className="bg-white p-7 rounded-xl border border-gray-200 relative group transition-all duration-200 ease-in-out hover:border-primary/30 hover:shadow-md cursor-pointer"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
        <div className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </div>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-2">{oneLiner}</p>
      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Impact</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {highlights.slice(0, 2).map((item, index) => (
            <li key={index} className="text-sm line-clamp-1">{item}</li>
          ))}
        </ul>
      </div>
      {techChips && techChips.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {techChips.slice(0, 4).map((chip, idx) => (
            <span key={idx} className="inline-block px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-[10px] font-bold uppercase tracking-tight">
              {chip}
            </span>
          ))}
          {techChips.length > 4 && (
            <span className="text-[10px] text-gray-400 font-bold self-center">+{techChips.length - 4} more</span>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
