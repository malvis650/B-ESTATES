"use client";

import { motion } from "framer-motion";
import {
  Package,
  ExternalLink,
  ArrowRight,
  ShoppingCart,
  Shield,
  Truck,
  CreditCard,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import TextReveal from "@/components/TextReveal";

const benefits = [
  {
    icon: Shield,
    title: "Verified Suppliers",
    description: "All materials sourced from certified and trusted suppliers.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Fast and reliable delivery across Kenya.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options with secure transactions.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team ready to assist you anytime.",
  },
];

const categories = [
  { name: "Building Blocks", count: 15 },
  { name: "Roofing Materials", count: 8 },
  { name: "Hardware", count: 25 },
  { name: "Plumbing", count: 10 },
  { name: "Electrical", count: 12 },
  { name: "Finishing", count: 18 },
  { name: "Tools & Equipment", count: 30 },
  { name: "Timber & Wood", count: 6 },
];

export default function MaterialsPage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-blue-dark via-dark to-brand-blue overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating icons */}
        <motion.div
          className="absolute top-20 right-10 text-white/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Package className="w-48 h-48" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 text-white/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <ShoppingCart className="w-36 h-36" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-blue-400 rounded-full"
            />
            <span className="text-white/80 text-sm font-medium">
              Procurement Platform
            </span>
          </motion.div>

          <TextReveal
            text="Construction Materials"
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white block mb-4"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-4"
          >
            Quality building supplies for every project — from foundation to
            finishing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-white/50 text-sm max-w-xl mx-auto"
          >
            Cement &bull; Steel &bull; Roofing &bull; Plumbing &bull;
            Electrical &bull; Tiles &bull; Timber &bull; Hardware &bull; Tools
            &bull; Paint &bull; And more...
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* ============ MAIN CTA — PROCUREMENT PLATFORM ============ */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-brand-blue/5 border border-brand-blue/10 p-8 md:p-12 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.2,
                }}
                className="inline-flex p-5 bg-brand-blue/5 rounded-2xl mb-6"
              >
                <ShoppingCart className="w-10 h-10 text-brand-blue" />
              </motion.div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
                Ready to Purchase Materials?
              </h2>

              <p className="text-dark/60 text-lg leading-relaxed mb-8">
                To purchase materials, visit the{" "}
                <span className="font-semibold text-brand-blue">
                  B-Estates Procurement Platform
                </span>{" "}
                where you can browse our full catalog, compare prices, and place
                orders directly.
              </p>

              {/* CTA Button */}
              <motion.a
                href="https://www.b-estates.shop"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 bg-brand-blue text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-brand-blue/20 hover:shadow-brand-blue/40 transition-all animate-pulse-glow"
              >
                <ExternalLink className="w-5 h-5" />
                Visit B-Estates.shop
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <p className="text-dark/30 text-sm mt-5">
                You&apos;ll be redirected to our secure procurement platform
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-brand-blue font-semibold text-sm tracking-[0.2em] uppercase">
              Why Choose Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
              The B-Estates Advantage
            </h2>
            <p className="text-dark/50 text-lg max-w-xl mx-auto">
              When you order through our platform, you get more than just
              materials.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-cream rounded-2xl p-7 text-center group hover:shadow-lg hover:shadow-brand-blue/5 transition-all border border-transparent hover:border-brand-blue/10"
              >
                <div className="inline-flex p-3.5 bg-brand-blue/5 rounded-xl mb-5 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <benefit.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-dark/45 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-brand-blue font-semibold text-sm tracking-[0.2em] uppercase">
              What We Supply
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
              Material Categories
            </h2>
            <p className="text-dark/50 text-lg max-w-lg mx-auto">
              Everything you need for your construction project, available on
              our platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100 cursor-default"
              >
                <Package className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                <h3 className="font-semibold text-sm">{category.name}</h3>
                <p className="text-dark/30 text-xs mt-1">
                  {category.count}+ products
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-dark via-dark to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Visit our procurement platform to browse the full catalog, get
              quotes, and place your order today.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://www.b-estates.shop"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-white/20 transition-shadow"
              >
                <ExternalLink className="w-5 h-5" />
                B-Estates.shop
              </motion.a>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 glass text-white font-semibold px-8 py-4 rounded-full border-white/20 hover:bg-white/20 transition-all"
                >
                  Contact Support
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}