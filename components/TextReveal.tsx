"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

// Line-by-line reveal (clip-path)
export default function TextReveal({
  text,
  className = "",
  delay = 0,
  duration = 0.9,
}: TextRevealProps) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
      animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      transition={{
        duration,
        delay,
        ease: [0.77, 0, 0.175, 1],
      }}
    >
      {text}
    </motion.span>
  );
}

// Character-by-character 3D flip reveal
export function TextRevealPerChar({
  text,
  className = "",
  delay = 0,
}: TextRevealProps) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: [0.77, 0, 0.175, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

// Typewriter effect with blinking cursor
export function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 50,
}: TextRevealProps & { speed?: number }) {
  const characters = text.split("");

  return (
    <span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.01,
            delay: delay + index * (speed / 1000),
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-brand-blue ml-1 align-middle"
      />
    </span>
  );
}