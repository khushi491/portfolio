"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'open-source', name: 'Open Source' },
  { id: 'skills', name: 'Skills' },
  { id: 'contact', name: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = 'hero';

      for (const section of navLinks) {
        const element = document.getElementById(section.id);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          current = section.id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `relative pb-1 text-sm tracking-wide transition-colors duration-200 ${
      activeSection === id
        ? 'text-primary'
        : 'text-cream-muted hover:text-cream'
    }`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 py-5 bg-ink/85 backdrop-blur-md"
    >
      <div className="relative flex items-center justify-between max-w-[1240px] mx-auto px-6">
        {/* Monogram */}
        <Link href="#hero" aria-label="Khushi Parmar — home" className="shrink-0">
          <span className="flex items-center justify-center w-11 h-11 rounded-full border border-gold/70 font-serif text-xl text-gold hover:border-gold transition-colors duration-200">
            K
          </span>
        </Link>

        {/* Centered navigation */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-9">
          {navLinks.map((section) => (
            <Link key={section.id} href={`#${section.id}`} className={linkClass(section.id)}>
              {section.name}
              {activeSection === section.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-0.5 h-px w-full bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-cream-muted hover:text-cream transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.25 }}
          className="lg:hidden overflow-hidden mt-4 mx-6 rounded-sm border border-ink-edge bg-ink-light"
        >
          {navLinks.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setIsOpen(false)}
              className={`block px-5 py-3 text-sm transition-colors duration-200 ${
                activeSection === section.id
                  ? 'text-primary'
                  : 'text-cream-muted hover:text-cream hover:bg-ink-lighter'
              }`}
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
