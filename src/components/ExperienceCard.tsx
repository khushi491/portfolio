"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  description: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  dates,
  description,
  responsibilities,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 border border-primary-light dark:border-primary-dark rounded-lg shadow-lg bg-background-light dark:bg-background-dark"
    >
      <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark">{title}</h3>
      <p className="text-text-light/75 dark:text-text-dark/75">{company} | {dates}</p>
      <p className="text-text-light dark:text-text-dark mt-4">{description}</p>
      <ul className="list-disc list-inside text-text-light dark:text-text-dark mt-2 space-y-1">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
