"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';

export interface Project {
  title: string;
  oneLiner: string;
  highlights: string[];
  techChips?: string[];
  githubLink?: string;
  demoLink?: string;
  longDescription?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <IoClose size={24} className="text-gray-500" />
              </button>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-xl text-primary font-medium mb-6">{project.oneLiner}</p>

                <div className="space-y-6">
                  {project.longDescription && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Overview</h4>
                      <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.techChips && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techChips.map((chip, idx) => (
                          <span key={idx} className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 text-sm font-medium border border-gray-200">
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-6 border-t border-gray-100">
                    {project.demoLink && (
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md"
                      >
                        Live Demo
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all shadow-md"
                      >
                        GitHub
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
