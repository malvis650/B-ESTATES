"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  imageUrl: string;
  height?: string;
  overlay?: boolean;
}

export default function ParallaxSection({
  children,
  imageUrl,
  height = "h-[500px]",
  overlay = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.65, 0.8, 0.65]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          y,
          scale,
        }}
      />
      {overlay && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/70 to-dark/85"
          style={{ opacity: overlayOpacity }}
        />
      )}
      {/* Fallback gradient if no image */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-dark to-brand-blue -z-10" />
      <div className="relative z-10 h-full flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}