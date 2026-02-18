"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle'; // Import DarkModeToggle

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // Initialize with 'hero'

  const sections = [
    { id: 'hero', name: 'Home' }, // Only for scroll detection, not for rendering links
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'open-source', name: 'Open Source' },
    { id: 'skills', name: 'Skills' },
    { id: 'education', name: 'Education' },
    { id: 'contact', name: 'Contact' },
  ];

  const navLinks = [
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'open-source', name: 'Open Source' },
    { id: 'skills', name: 'Skills' },
    { id: 'education', name: 'Education' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let currentActiveSection = 'hero'; // Default to hero

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        if (scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          currentActiveSection = section.id;
          break;
        }
      }
    }
    setActiveSection(currentActiveSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 py-6 bg-white/80 backdrop-blur-lg"
    >
      <div className="flex justify-between items-center max-w-[1100px] mx-auto px-6">
        <Link href="#hero" className="text-2xl font-bold text-gray-900">
          Khushi Parmar
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center"> {/* Added items-center for alignment */}
          {navLinks.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={`relative font-medium transition-colors duration-300
                ${activeSection === section.id ? 'font-semibold text-primary after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-100 after:origin-left after:transition-transform after:duration-300' : 'text-gray-600 hover:text-gray-900 after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300'}
              `}
            >
              {section.name}
            </Link>
          ))}
          <DarkModeToggle /> {/* Dark Mode Toggle for Desktop */}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-600 focus:outline-none"
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
          className="md:hidden mt-4 bg-white rounded-md shadow-lg"
        >
          {navLinks.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={`block px-4 py-2 relative transition-colors duration-300
                ${activeSection === section.id ? 'font-semibold text-primary after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-100 after:origin-left after:transition-transform after:duration-300' : 'text-gray-600 hover:bg-gray-200 after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300'}
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
