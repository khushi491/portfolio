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
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'education', name: 'Education' },
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
      className="fixed top-0 left-0 w-full bg-dark-background-light dark:bg-dark-background-DEFAULT border-b border-dark-border shadow-md z-50 p-4"
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-2xl font-bold text-text-light dark:text-text-dark">
          Khushi Parmar
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center"> {/* Added items-center for alignment */}
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={`relative text-text-light/75 dark:text-text-dark/75 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300
                ${activeSection === section.id ? 'font-semibold text-primary-light dark:text-primary-dark after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-primary-light dark:after:bg-primary-dark' : ''}
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
            className="text-text-light/75 dark:text-text-dark/75 focus:outline-none"
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
          className="md:hidden mt-4 bg-dark-background-medium dark:bg-dark-background-DEFAULT rounded-md shadow-lg"
        >
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={`block px-4 py-2 text-text-light dark:text-text-dark hover:bg-primary-light/10 dark:hover:bg-primary-dark/10
                ${activeSection === section.id ? 'font-semibold bg-primary-light/10 dark:bg-primary-dark/10 border-l-2 border-primary-light dark:border-primary-dark' : ''}
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
