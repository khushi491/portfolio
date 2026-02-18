"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineCardProps {
  company: string;
  role: string;
  duration: string;
  description: string[];
  index: number; // Add index prop
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  company,
  role,
  duration,
  description,
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
      parts.push(<span key={offset} className="font-semibold text-black dark:text-white">{match}</span>);
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
      className="bg-white dark:bg-dark-background-medium p-7 rounded-xl border border-gray-200 dark:border-gray-800 relative group transition-all duration-200 ease-in-out hover:border-gray-300 dark:hover:border-gray-600 hover:-translate-y-1"
    >
      <h3 className="text-2xl font-semibold text-text-primary mb-1">{role}</h3>
      <p className="text-lg text-text-secondary mb-2">{company} | {duration}</p>
      <ul className="list-disc list-inside space-y-1 text-text-secondary mb-4">
        {description.map((item, idx) => (
          <li key={idx}>{formatDescription(item)}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TimelineCard;
