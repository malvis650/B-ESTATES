"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Landmark, Package, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Landmark,
    value: 200,
    suffix: "+",
    label: "Plots Sold",
    color: "from-blue-600 to-brand-blue",
  },
  {
    icon: Package,
    value: 50,
    suffix: "+",
    label: "Material Types",
    color: "from-brand-blue to-blue-400",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    color: "from-brand-blue-dark to-brand-blue",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    color: "from-blue-700 to-blue-500",
  },
];

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, {
    duration: 2500,
    bounce: 0.3,
  });

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  const display = useTransform(spring, (latest) => Math.floor(latest));

  return (
    <span
      ref={ref}
      className="font-heading text-4xl md:text-5xl font-bold text-dark inline-flex items-baseline"
    >
      <motion.span>{display}</motion.span>
      <span className="text-brand-blue">{suffix}</span>
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative -mt-24 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-2xl shadow-brand-blue/5 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 border border-slate-100"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -6 }}
              className="text-center group cursor-default"
            >
              <div
                className={`inline-flex p-3.5 rounded-xl bg-gradient-to-br ${stat.color} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-dark/50 mt-1.5 text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}