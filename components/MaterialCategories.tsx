"use client";

import { motion } from "framer-motion";
import {
  BrickWall,
  Home,
  Hammer,
  Wrench,
  Zap,
  Droplets,
  PaintBucket,
  Ruler,
  ExternalLink,
} from "lucide-react";

const categories = [
  { icon: BrickWall, name: "Building Blocks", color: "from-blue-600 to-brand-blue", count: 15 },
  { icon: Home, name: "Roofing", color: "from-brand-blue-dark to-blue-700", count: 8 },
  { icon: Hammer, name: "Hardware", color: "from-slate-600 to-slate-800", count: 25 },
  { icon: Wrench, name: "Tools", color: "from-brand-blue to-blue-400", count: 30 },
  { icon: Zap, name: "Electrical", color: "from-amber-500 to-orange-600", count: 12 },
  { icon: Droplets, name: "Plumbing", color: "from-cyan-500 to-blue-600", count: 10 },
  { icon: PaintBucket, name: "Finishing", color: "from-purple-500 to-pink-600", count: 18 },
  { icon: Ruler, name: "Measuring", color: "from-emerald-500 to-green-600", count: 6 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function MaterialCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue font-semibold text-sm tracking-[0.2em] uppercase">
            Categories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mt-4 mb-4">
            Available Material Categories
          </h2>
          <p className="text-dark/55 text-lg max-w-xl mx-auto mb-4">
            Everything you need for your construction project. Browse categories
            available on our procurement platform.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-dark/40 text-sm"
          >
            Click any category or visit{" "}
            <a
              href="https://www.b-estates.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue font-semibold hover:underline inline-flex items-center gap-1"
            >
              B-Estates.shop <ExternalLink className="w-3 h-3" />
            </a>{" "}
            to order
            </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <a
                href="https://www.b-estates.shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative group/cat bg-cream rounded-2xl p-6 sm:p-7 text-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-brand-blue/5 transition-all border border-transparent hover:border-brand-blue/10"
                >
                  {/* Hover gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover/cat:opacity-8 transition-opacity duration-300`}
                  />

                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} mb-4 shadow-lg group-hover/cat:shadow-xl transition-shadow`}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="font-semibold text-dark group-hover/cat:text-brand-blue transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-dark/40 text-sm mt-1.5">
                    {category.count}+ products
                  </p>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}