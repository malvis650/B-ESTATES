"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

// ============================================
// 🔵 CORRECT STATIC IMPORT SYNTAX
//    Images should be in your project (e.g., /src/images/ or /public/)
// ============================================
import heroImage1 from "@/images/CWD29Malvis.png";
import heroImage2 from "@/images/Mr.DickmuBruno2.jpg";
import heroImage3 from "@/images/Mr.DickmuBruno.jpg";

const slides: { image: StaticImageData; alt: string }[] = [
  {
    image: heroImage1,
    alt: "Prime land for sale",
  },
  {
    image: heroImage2,
    alt: "Quality construction materials",
  },
  {
    image: heroImage3,
    alt: "Build your future with B-Estates",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    new Array(slides.length).fill(false)
  );

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  // Preload images
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new window.Image();
      img.src = slide.image.src;
      img.onload = () => {
        setImagesLoaded((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      };
      img.onerror = () => {
        setImagesLoaded((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      };
    });
  }, []);

  // Auto-play with smooth progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 0.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Fallback gradient if image fails to load
  const fallbackGradients = [
    "from-brand-blue-dark via-blue-900 to-dark",
    "from-dark via-slate-900 to-brand-blue-dark",
    "from-blue-950 via-brand-blue-dark to-dark",
  ];

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {/* Fallback gradient shows while image loads or if it fails */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${fallbackGradients[current]}`}
          />

          {/* Actual image with Ken Burns effect */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.08] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Image
              src={slides[current].image}
              alt={slides[current].alt}
              fill
              className="object-cover"
              priority={current === 0}
              sizes="100vw"
              quality={90}
              placeholder="blur"
            />
          </motion.div>

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/35 to-dark/75" />
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-36 left-0 right-0 z-30 flex justify-center gap-3 px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setProgress(0);
            }}
            className="group relative h-1 rounded-full overflow-hidden bg-white/25 w-20 cursor-pointer hover:h-1.5 transition-all"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className="absolute inset-0 bg-white rounded-full"
              initial={{ width: "0%" }}
              animate={{
                width:
                  index === current
                    ? `${progress}%`
                    : index < current
                    ? "100%"
                    : "0%",
              }}
              transition={{ duration: 0.2, ease: "linear" }}
            />
          </button>
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => {
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
          setProgress(0);
        }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/25 text-white rounded-full p-3 md:p-4 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => {
          nextSlide();
          setProgress(0);
        }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/25 text-white rounded-full p-3 md:p-4 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}