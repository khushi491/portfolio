"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle'; // Import DarkModeToggle

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Offset for better detection
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
        setActiveSection(section.id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
          Khushi Parmar
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center"> {/* Added items-center for alignment */}
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300
                ${activeSection === section.id ? 'font-semibold text-gray-900 dark:text-white' : ''}
              `}
            >
              {section.name}
            </Link>
          ))}
          <DarkModeToggle /> {/* Dark Mode Toggle for Desktop */}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4"> {/* Group toggle and hamburger */}
          <DarkModeToggle /> {/* Dark Mode Toggle for Mobile */}
          <button
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-md shadow-lg"
        >
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={`block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700
                ${activeSection === section.id ? 'font-semibold bg-gray-100 dark:bg-gray-700' : ''}
              `}
              onClick={() => setIsOpen(false)}
            >
              {section.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
