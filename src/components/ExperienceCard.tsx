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
      className="p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800"
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{company} | {dates}</p>
      <p className="text-gray-700 dark:text-gray-300 mt-4">{description}</p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
