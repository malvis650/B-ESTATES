"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-dark to-brand-blue">
        <motion.div
          className="absolute inset-0 opacity-[0.07]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your{" "}
            <span className="text-gradient-blue">Dream?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Get in touch today. Browse land listings or visit our procurement
            platform for quality construction materials.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/lands">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-white/20 transition-shadow"
              >
                Browse Land
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <motion.a
              href="https://www.b-estates.shop"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 glass text-white font-semibold px-8 py-4 rounded-full border-white/20 hover:bg-white/20 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Shop Materials
            </motion.a>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-brand-blue/20 hover:shadow-brand-blue/40 transition-all animate-pulse-glow"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </motion.button>
            </Link>
            <a
              href="https://wa.me/254700000000?text=Hello%20B-Estates!%20I'm%20interested%20in%20your%20listings."
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-green-500/20 hover:shadow-green-500/40 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.button>
            </a>
          </div>

          <p className="text-white/30 text-sm mt-8">
            For materials procurement:{" "}
            <a
              href="https://www.b-estates.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              www.b-estates.shop
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}