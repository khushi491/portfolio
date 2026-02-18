"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedArchitectureDiagram: React.FC = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'], // Trigger animation when element enters/leaves center of viewport
  });

  // Animate pathLength for each line
  const pathLengthMicroservicesToLoadBalancer = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLengthLoadBalancerToCache = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLengthLoadBalancerToDB = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative w-full h-full flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Microservices Box */}
        <motion.rect
          x="50" y="50" width="100" height="50" rx="8"
          fill="var(--dark-background-light)" stroke="var(--primary)" strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <text x="100" y="80" textAnchor="middle" fill="var(--dark-text-primary)" fontSize="14">Microservices</text>

        {/* Load Balancer Box */}
        <motion.rect
          x="250" y="50" width="100" height="50" rx="8"
          fill="var(--dark-background-light)" stroke="var(--primary)" strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <text x="300" y="80" textAnchor="middle" fill="var(--dark-text-primary)" fontSize="14">Load Balancer</text>

        {/* Cache Box */}
        <motion.rect
          x="50" y="200" width="100" height="50" rx="8"
          fill="var(--dark-background-light)" stroke="var(--secondary)" strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <text x="100" y="230" textAnchor="middle" fill="var(--dark-text-primary)" fontSize="14">Cache</text>

        {/* Database Box */}
        <motion.rect
          x="250" y="200" width="100" height="50" rx="8"
          fill="var(--dark-background-light)" stroke="var(--secondary)" strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <text x="300" y="230" textAnchor="middle" fill="var(--dark-text-primary)" fontSize="14">Database</text>

        {/* Lines */}
        {/* Microservices to Load Balancer */}
        <motion.line
          x1="150" y1="75" x2="250" y2="75"
          stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"
          style={{ pathLength: pathLengthMicroservicesToLoadBalancer }}
        />
        {/* Load Balancer to Cache */}
        <motion.path
          d="M275 100 V150 H100 V200"
          stroke="var(--secondary)" strokeWidth="2" fill="none" strokeLinecap="round"
          style={{ pathLength: pathLengthLoadBalancerToCache }}
        />
        {/* Load Balancer to Database */}
        <motion.line
          x1="275" y1="100" x2="275" y2="200"
          stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round"
          style={{ pathLength: pathLengthLoadBalancerToDB }}
        />
      </svg>
    </div>
  );
};

export default AnimatedArchitectureDiagram;
