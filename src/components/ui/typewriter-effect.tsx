"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed] = useState(150); // Adjust typing speed
  const [deletingSpeed] = useState(75); // Adjust deleting speed
  const [delayBetweenWords] = useState(1500); // Adjust delay between words

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentWord = words[currentWordIndex].text;
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText.length === currentWord.length) {
          setIsDeleting(true);
          timer = setTimeout(() => {}, delayBetweenWords); // Pause before deleting
          return;
        }
      }
    };

    timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentWordIndex, currentText, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  const renderWords = () => {
    return (
      <motion.div className="inline-block">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWordIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "text-dark-text-primary text-xl md:text-2xl font-medium",
              words[currentWordIndex].className
            )}
          >
            {currentText}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6 justify-center", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "inline-block h-6 w-1 bg-primary rounded-sm",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
