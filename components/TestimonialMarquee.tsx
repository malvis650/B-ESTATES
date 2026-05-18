"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James K.",
    role: "Land Buyer — Nairobi",
    text: "B-Estates made buying land effortless. Got my title deed in 2 weeks! Professional and transparent.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Developer — Kiambu",
    text: "Quality materials at fair prices. They're now my sole supplier for all construction projects.",
    rating: 5,
  },
  {
    name: "Peter N.",
    role: "Homeowner — Machakos",
    text: "Honest deals on land. The team is professional and walks you through every step.",
    rating: 5,
  },
  {
    name: "Grace W.",
    role: "Contractor — Nairobi",
    text: "Fast delivery on materials. Quality always consistent. Highly recommend for bulk orders.",
    rating: 4,
  },
  {
    name: "David O.",
    role: "Investor — Mombasa",
    text: "Best land deals in the region. Have bought 3 plots through them. Zero issues.",
    rating: 5,
  },
  {
    name: "Lucy A.",
    role: "Architect — Kisumu",
    text: "Their material quality is unmatched. My go-to supplier for all client projects.",
    rating: 5,
  },
];

const marqueeItems = [...testimonials, ...testimonials];

export default function TestimonialMarquee() {
  return (
    <section className="py-20 bg-dark overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-blue-300 font-semibold text-sm tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/45 text-lg max-w-lg mx-auto">
            Real feedback from real clients who trusted us with their
            investments.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Edge fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {marqueeItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, y: -4 }}
              className="flex-shrink-0 w-80 bg-white/[0.03] backdrop-blur-sm border border-white/8 rounded-2xl p-6 hover:border-brand-blue/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-brand-blue/30 mb-4" />
              <p className="text-white/75 text-sm leading-relaxed mb-5">
                "{item.text}"
              </p>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < item.rating
                        ? "fill-brand-blue text-brand-blue"
                        : "text-white/15"
                    }`}
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{item.name}</p>
                <p className="text-white/40 text-xs mt-0.5">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}