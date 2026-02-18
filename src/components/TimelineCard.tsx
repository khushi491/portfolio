"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineCardProps {
  company: string;
  role: string;
  duration: string;
  description: string[];
  metrics?: { label: string; value: string | number }[];
  index: number; // Add index prop
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  company,
  role,
  duration,
  description,
  metrics,
  index, // Destructure index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Alternate animation direction
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="bg-dark-background-medium p-6 rounded-lg shadow-lg border border-dark-border relative group"
    >
      <h3 className="text-2xl font-semibold text-text-primary mb-1">{role}</h3>
      <p className="text-lg text-text-secondary mb-2">{company} | {duration}</p>
      <ul className="list-disc list-inside space-y-1 text-text-secondary mb-4">
        {description.map((item, idx) => ( // Changed index to idx to avoid conflict
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {metrics && (
        <div className="flex flex-wrap gap-4 mt-4">
          {metrics.map((metric, idx) => ( // Changed index to idx
            <div key={idx} className="flex flex-col items-center">
              <span className="text-primary text-xl font-bold">{metric.value}</span>
              <span className="text-text-secondary text-sm">{metric.label}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default TimelineCard;
