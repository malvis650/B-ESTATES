"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import StatsCounter from "@/components/StatsCounter";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import TextReveal from "@/components/TextReveal";
import ParallaxSection from "@/components/ParallaxSection";
import MaterialCategories from "@/components/MaterialCategories";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import CtaSection from "@/components/CtaSection";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function Home() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative h-screen min-h-[700px] max-h-[900px] overflow-hidden">
        <HeroCarousel />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/45 to-dark/80 z-10" />

        {/* Floating blue particles */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                backgroundColor: `rgba(37, 99, 235, ${Math.random() * 0.5 + 0.3})`,
              }}
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{
                y: [null, "-120%"],
                opacity: [0, 0.9, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-30 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-2 pr-5 py-2 mb-8"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2.5 h-2.5 bg-blue-400 rounded-full"
                />
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  Trusted by 50+ Clients Across Cameroon
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="font-heading mb-8">
                <TextReveal
                  text="Build with control."
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient-blue block mt-3 leading-tight"
                  delay={0.9}
                />
                <TextReveal
                  text="Buy with confidence."
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white/90 block mt-3 leading-tight"
                  delay={1.4}
                />
              </h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="text-white/65 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
              >
                B-Estates is a digital procurement and real estate platform focused on Cameroon that helps diaspora clients and local investors safely acquire land, design projects, and purchase verified construction materials.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/lands">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-8 py-4 rounded-full shadow-xl cursor-pointer animate-pulse-glow"
                  >
                    Browse Plots
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </motion.span>
                </Link>
                <Link href="/materials">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-2 glass text-white font-semibold px-8 py-4 rounded-full cursor-pointer hover:bg-white/20 transition-all"
                  >
                    Shop Materials
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ IMAGE GALLERY CAROUSEL ============ */}
      <GalleryCarousel />

      {/* ============ FEATURED LAND LISTINGS ============ */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-brand-blue font-semibold text-sm tracking-[0.2em] uppercase">
              Featured Properties
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mt-4 mb-4">
              Premium Land Parcels
            </h2>
            <p className="text-dark/55 text-lg max-w-xl mx-auto">
              Hand-picked plots in prime locations. Ready title deeds, instant
              ownership, zero hassle.
            </p>
          </motion.div>

          <FeaturedCarousel />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link
              href="/lands"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold text-lg hover:gap-3 transition-all group"
            >
              View All Land Listings
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ PARALLAX MATERIALS CTA ============ */}
      <ParallaxSection imageUrl="/images/materials-bg.jpg" height="h-[550px]">
        <div className="text-center text-white max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-300 font-semibold text-sm tracking-[0.2em] uppercase"
          >
            Build With The Best
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight"
          >
            Quality Construction Materials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/65 text-lg max-w-xl mx-auto mb-4"
          >
            From foundation blocks to roofing sheets — we supply everything you
            need to build strong and durable structures.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/50 text-sm mb-10"
          >
            Visit our procurement platform to browse and order →
          </motion.p>
          <motion.a
            href="https://www.b-estates.shop"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-8 py-4 rounded-full shadow-2xl"
          >
            <ExternalLink className="w-5 h-5" />
            B-Estates.shop
          </motion.a>
        </div>
      </ParallaxSection>

      {/* ============ MATERIAL CATEGORIES GRID ============ */}
      <MaterialCategories />

      {/* ============ TESTIMONIALS MARQUEE ============ */}
      <TestimonialMarquee />

      {/* ============ CTA SECTION ============ */}
      <CtaSection />
    </>
  );
}