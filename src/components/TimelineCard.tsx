"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineCardProps {
  company: string;
  role: string;
  duration: string;
  description: string[];
  techStack?: string[]; // Add techStack prop
  index: number; // Add index prop
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  company,
  role,
  duration,
  description,
  techStack, // Destructure techStack
  index, // Destructure index
}) => {

  const formatDescription = (text: string) => {
    // Regex to find numbers potentially followed by units, percentages, or +/- signs
    const metricRegex = /(\b\d[\d.,+%-]*\b|\+\d+%)|(\d+\.?\d*[%]|\+\d+%)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    text.replace(metricRegex, (match, p1, offset) => {
      if (offset > lastIndex) {
        parts.push(text.substring(lastIndex, offset));
      }
      parts.push(<span key={offset} className="font-semibold text-neutral-900">{match}</span>);
      lastIndex = offset + match.length;
      return match; // Return the match to satisfy replace callback signature
    });

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    return parts;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Alternate animation direction
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="bg-white p-7 rounded-xl border border-neutral-200 relative group transition-all duration-200 ease-in-out hover:border-neutral-300 hover:-translate-y-1 shadow-sm"
    >
      <h3 className="text-2xl font-semibold text-neutral-900 mb-1">{role}</h3>
      <p className="text-lg text-neutral-600 mb-2">{company} | {duration}</p>
      <ul className="list-disc list-inside space-y-1 text-neutral-600 mb-4">
        {description.map((item, idx) => (
          <li key={idx}>{formatDescription(item)}</li>
        ))}
      </ul>
      {techStack && (
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, idx) => (
            <span key={idx} className="inline-block px-3.5 py-2 bg-neutral-200 rounded-full text-sm text-neutral-900">
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default TimelineCard;
