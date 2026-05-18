"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Camera,
  Pause,
  Play,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ============================================
// 🔵 PLACE IMAGES IN: /public/images/showcase/
// ============================================

const showcaseImages = [
  {
    id: 1,
    src: "/images/showcase/slide-1.jpg",
    alt: "Prime land in Yaoundé",
    title: "Premium Residential Plots",
    location: "Yaoundé, Cameroon",
    link: "www.b-estates.com",
  },
  {
    id: 2,
    src: "/images/showcase/slide-2.jpg",
    alt: "Construction materials warehouse",
    title: "Quality Building Materials",
    location: "Our Warehouse",
    link: "www.b-estates.com",
  },
  {
    id: 3,
    src: "/images/showcase/slide-3.jpg",
    alt: "Site survey in progress",
    title: "Professional Land Surveying",
    location: "Douala, Cameroon",
    link: "www.b-estates.com",
  },
  {
    id: 4,
    src: "/images/showcase/slide-4.jpg",
    alt: "Modern construction project",
    title: "Building Dreams Together",
    location: "Yaoundé, Cameroon",
    link: "www.b-estates.com",
  },
  {
    id: 5,
    src: "/images/showcase/slide-5.jpg",
    alt: "Team at community event",
    title: "Community Development",
    location: "Bafoussam, Cameroon",
    link: "www.b-estates.com",
  },
];

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % showcaseImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length
    );
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Slide variants for animation
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-brand-blue font-semibold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-2">
            <Camera className="w-4 h-4" />
            Our Work
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-3 mb-3">
            See What We Do
          </h2>
          <p className="text-dark/50 max-w-lg mx-auto text-sm">
            Explore our projects, properties, and community impact across Cameroon.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] bg-slate-100">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                {/* Loading skeleton */}
                {!loadedImages[showcaseImages[current].id] && (
                  <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                )}

                <Image
                  src={showcaseImages[current].src}
                  alt={showcaseImages[current].alt}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    loadedImages[showcaseImages[current].id]
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={current === 0}
                  onLoad={() => handleImageLoad(showcaseImages[current].id)}
                  onError={() => handleImageLoad(showcaseImages[current].id)}
                />

                {/* Fallback gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-blue-400 -z-10" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 text-white/60 text-xs mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {showcaseImages[current].location}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-heading font-bold text-white mb-3">
                      {showcaseImages[current].title}
                    </h3>
                    <Link
                      href={showcaseImages[current].link}
                      className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/25 transition-all border border-white/20"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white rounded-full p-2.5 md:p-3 transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white rounded-full p-2.5 md:p-3 transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Pause/Play Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? (
                <Play className="w-4 h-4" />
              ) : (
                <Pause className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-5">
            {showcaseImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`relative w-16 md:w-20 h-12 md:h-14 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === current
                    ? "ring-2 ring-brand-blue ring-offset-2 scale-105"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-3">
            {showcaseImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === current ? "w-8 bg-brand-blue" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <p className="text-center text-dark/30 text-xs mt-3">
            {current + 1} / {showcaseImages.length}
          </p>
        </div>
      </div>
    </section>
  );
}