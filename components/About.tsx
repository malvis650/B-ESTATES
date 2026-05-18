"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Users,
  Quote,
  Briefcase,
  Home,
  TrendingUp,
  Shield,
  Star,
  Truck,
  HardHat,
  Heart,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/TextReveal";
import StatsCounter from "@/components/StatsCounter";
import boss from "@/images/Mr.DickmuBruno2.jpg";

// ============================================
// 🔵 PLACE TEAM IMAGES IN: /public/images/team/
//    Or import them like the boss image above
// ============================================

const team = [
  // ============ FOUNDER & CEO ============
  {
    name: "Mr. Dickmu Bruno",
    role: "Founder & CEO",
    image: boss,
    bio: "Visionary entrepreneur with over 15 years of experience in real estate and construction. Mr. Bruno founded B-Estates in 2024 with a mission to make land ownership accessible to every Cameroonian in Yaoundé. Under his leadership, the company has grown to serve over 500 clients and supply materials to major construction projects across the country. His commitment to integrity and excellence has made B-Estates one of the most trusted names in the industry.",
    quote: "We don't just sell land — we help people build legacies that last for generations.",
    featured: true,
  },
  {
    name: "Sarah Wanjiku",
    role: "Head of Land Sales",
    image: "/images/team/sarah-wanjiku.jpg",
    bio: "Sarah brings 10 years of real estate expertise to B-Estates. She has personally overseen the sale of over 150 plots and is known for her transparent, client-first approach. Her deep knowledge of land laws and title deed processing ensures every transaction is smooth and secure.",
    quote: "Every client deserves honesty and clarity — that's what I deliver.",
    featured: false,
  },
  {
    name: "James Ochieng",
    role: "Operations Manager",
    image: "/images/team/james-ochieng.jpg",
    bio: "James oversees all day-to-day operations, from land surveying to material logistics. With a background in civil engineering and supply chain management, he ensures that every plot is properly vetted and every material order is fulfilled on time.",
    quote: "Efficiency and reliability are the backbone of our service.",
    featured: false,
  },
  {
    name: "Grace Atieno",
    role: "Head of Customer Relations",
    image: "/images/team/grace-atieno.jpg",
    bio: "Grace is the friendly voice behind our customer support. With 8 years in client relations, she ensures every inquiry is answered promptly and every concern is addressed with warmth and professionalism.",
    quote: "Our clients are family — we take care of them like our own.",
    featured: false,
  },
  {
    name: "Peter Mwangi",
    role: "Senior Land Surveyor",
    image: "/images/team/peter-mwangi.jpg",
    bio: "Peter is a licensed surveyor with 12 years of field experience. He conducts thorough site assessments, boundary verification, and topographic surveys for every plot before listing.",
    quote: "Accuracy on the ground builds trust at the table.",
    featured: false,
  },
  {
    name: "Faith Nyambura",
    role: "Materials Procurement Lead",
    image: "/images/team/faith-nyambura.jpg",
    bio: "Faith manages relationships with suppliers and oversees the procurement platform. She ensures all materials meet quality standards and are sourced at competitive prices.",
    quote: "Quality materials at fair prices — that's non-negotiable.",
    featured: false,
  },
  {
    name: "David Kiprotich",
    role: "Marketing & Digital Strategy",
    image: "/images/team/david-kiprotich.jpg",
    bio: "David handles all marketing, branding, and digital presence for B-Estates. His creative campaigns have helped grow our client base by over 200% in the last 3 years.",
    quote: "Great service deserves great visibility.",
    featured: false,
  },
  {
    name: "Joyce Muthoni",
    role: "Legal & Compliance Officer",
    image: "/images/team/joyce-muthoni.jpg",
    bio: "Joyce is a qualified legal professional specializing in property law. She handles all title deed verification, contract drafting, and regulatory compliance.",
    quote: "Legal protection for every client, every time.",
    featured: false,
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "Honest pricing, transparent transactions, and genuine land titles. We never compromise on trust.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Star,
    title: "Quality",
    desc: "Only premium plots and top-grade materials that meet rigorous standards of excellence.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Your satisfaction drives everything we do. We listen, we care, we deliver.",
    color: "from-red-500 to-rose-600",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Over a decade of outstanding service, 500+ happy clients, and counting.",
    color: "from-purple-500 to-violet-600",
  },
];

const services = [
  {
    icon: Home,
    title: "Land Sales",
    desc: "Residential, commercial, agricultural, and industrial plots in prime locations across Cameroon.",
    stats: "200+ Plots Sold",
    color: "from-emerald-500 to-green-700",
  },
  {
    icon: Truck,
    title: "Materials Supply",
    desc: "Building blocks, roofing, hardware, plumbing, electrical, finishing materials, and more.",
    stats: "50+ Product Types",
    color: "from-blue-500 to-indigo-700",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    desc: "Expert guidance on land investment, property valuation, and portfolio building.",
    stats: "500+ Clients",
    color: "from-amber-500 to-orange-700",
  },
  {
    icon: HardHat,
    title: "Construction Support",
    desc: "End-to-end material procurement support for construction projects of all sizes.",
    stats: "100+ Projects",
    color: "from-cyan-500 to-teal-700",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-brand-blue-dark via-dark to-brand-blue overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-[0.04]"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage: "radial-gradient(circle at 30% 60%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 border border-white/5 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 border border-white/5 rounded-full"
          animate={{ rotate: -360, scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-2 pr-5 py-2 mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-blue-400 rounded-full"
            />
            <span className="text-white/85 text-sm font-medium tracking-wide">
              Get To Know Us
            </span>
          </motion.div>

          {/* Heading */}
          <TextReveal
            text="About B-Estates"
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white block mb-6"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Building futures, one plot at a time — since 2024
          </motion.p>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap justify-center gap-6 mt-10 text-white/40 text-sm"
          >
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Yaoundé, Cameroon</span>
            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> b-estates.shop</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 500+ Clients</span>
          </motion.div>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ============ STATS COUNTER ============ */}
      <StatsCounter />

      {/* ============ OUR STORY ============ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <span className="text-brand-blue font-semibold text-sm tracking-[0.25em] uppercase">
              Our Journey
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-dark">
              The B-Estates Story
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-blue-light mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-6 text-dark/60 text-lg leading-relaxed">
            {[
              <>
                B-Estates was founded in <strong className="text-dark">2024</strong> by{" "}
                <strong className="text-brand-blue">Mr. Dickmu Bruno</strong>, a
                visionary entrepreneur who saw a gap in Cameroon's real estate market.
                Too many Cameroonians were struggling with fraudulent land deals,
                unclear title deeds, and unreliable construction material suppliers.
                Mr. Bruno set out to change that.
              </>,
              <>
                Starting with just a small office in Yaoundé and a handful of verified plots,
                B-Estates quickly earned a reputation for{" "}
                <strong className="text-dark">honesty, transparency, and quality</strong>. Word spread.
                Clients came back. They told their friends. Within a short time,
                B-Estates had grown from a one-man operation to a team of dedicated
                professionals — surveyors, legal experts, customer relations
                specialists, and procurement officers.
              </>,
              <>
                Today, B-Estates has helped over <strong className="text-dark">500 clients</strong>{" "}
                secure prime land across Cameroon and supplied construction materials
                to countless projects — from family homes to large-scale commercial
                developments. Our procurement platform makes it easy for builders to
                source quality materials at competitive prices.
              </>,
              <>
                The mission remains the same as day one:{" "}
                <strong className="text-dark">
                  to make land ownership accessible, transparent, and secure for
                  every Cameroonian, and to supply the best construction materials at
                  fair prices.
                </strong>
              </>,
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-blue font-semibold text-sm tracking-[0.25em] uppercase">
              Our Services
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 text-dark">
              What We Do
            </h2>
            <p className="text-dark/50 text-lg max-w-xl mx-auto">
              Comprehensive real estate and construction material solutions tailored for Cameroon.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-7 text-center shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-brand-blue/10 group relative overflow-hidden"
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-5 shadow-lg group-hover:shadow-xl transition-shadow relative`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-dark/45 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="inline-block text-xs font-semibold text-brand-blue bg-brand-blue/5 px-3 py-1 rounded-full">
                  {service.stats}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ OUR VALUES ============ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-blue font-semibold text-sm tracking-[0.25em] uppercase">
              What Drives Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 text-dark">
              Our Core Values
            </h2>
            <p className="text-dark/50 text-lg max-w-lg mx-auto">
              These principles guide every decision we make and every client we serve.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="bg-cream rounded-2xl p-7 text-center group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-blue/10 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-5 shadow-lg group-hover:shadow-xl transition-shadow relative`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
                  {value.title}
                </h3>
                <p className="text-dark/45 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ FOUNDER & CEO SECTION ============ */}
      <section className="py-24 bg-gradient-to-br from-brand-blue-dark via-dark to-brand-blue relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-[0.03]"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage: "radial-gradient(circle at 70% 30%, white 1px, transparent 1px)",
              backgroundSize: "35px 35px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.02] rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-300 font-semibold text-sm tracking-[0.25em] uppercase">
              Leadership
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-4">
              Meet Our Founder
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-brand-blue mx-auto rounded-full" />
          </motion.div>

          {team
            .filter((member) => member.featured)
            .map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/[0.06] transition-colors duration-300">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                    {/* Image with ring animation */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="relative"
                    >
                      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden border-4 border-brand-blue/40 shadow-2xl shadow-brand-blue/20">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 192px, 240px"
                          onError={() => handleImageError(0)}
                        />
                        {imageErrors[0] && (
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-dark flex items-center justify-center">
                            <span className="text-white/40 font-heading text-6xl font-bold">
                              {member.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                        )}
                      </div>
                      {/* Decorative ring */}
                      <motion.div
                        className="absolute -inset-3 border-2 border-brand-blue/20 rounded-2xl"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="text-center md:text-left flex-1">
                      <div className="inline-flex items-center gap-2 bg-brand-blue/25 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-300 text-xs font-semibold tracking-wider uppercase">
                          {member.role}
                        </span>
                      </div>
                      <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
                        {member.name}
                      </h3>
                      <p className="text-white/60 leading-relaxed mb-7 text-base">
                        {member.bio}
                      </p>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-5 relative">
                        <Quote className="w-8 h-8 text-brand-blue/30 absolute -top-3 -left-2" />
                        <p className="text-white/75 italic text-lg pl-4">
                          &ldquo;{member.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* ============ FULL TEAM ============ */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-blue font-semibold text-sm tracking-[0.25em] uppercase">
              Our Team
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 text-dark">
              The People Behind B-Estates
            </h2>
            <p className="text-dark/50 text-lg max-w-xl mx-auto">
              A dedicated team of 8 professionals working together to serve you better.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border cursor-pointer ${
                  member.featured
                    ? "ring-2 ring-brand-blue/40 hover:ring-brand-blue/60"
                    : "border-transparent hover:border-brand-blue/15"
                }`}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onError={() => handleImageError(index)}
                  />
                  {imageErrors[index] && (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark to-brand-blue flex items-center justify-center">
                      <span className="text-white/25 font-heading text-5xl font-bold">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />

                  {/* Name & Role */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-lg font-bold text-white leading-tight">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      {member.featured && <Award className="w-3.5 h-3.5 text-yellow-400" />}
                      <p className="text-white/65 text-xs">{member.role}</p>
                    </div>
                  </div>
                </div>

                {/* Expandable Bio */}
                <AnimatePresence>
                  {selectedMember === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 border-t border-slate-100">
                        <p className="text-dark/55 text-sm leading-relaxed mb-4">
                          {member.bio}
                        </p>
                        <div className="bg-cream rounded-xl p-4">
                          <Quote className="w-4 h-4 text-brand-blue/40 mb-1.5" />
                          <p className="text-dark/55 text-sm italic">
                            &ldquo;{member.quote}&rdquo;
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Click indicator */}
                <div className="px-5 pb-4">
                  <div className="flex items-center justify-center gap-1 text-brand-blue/40 text-xs">
                    <span>{selectedMember === index ? "Click to collapse" : "Click for more"}</span>
                    <motion.span
                      animate={{ rotate: selectedMember === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-3 h-3" />
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ JOIN OUR TEAM CTA ============ */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Users className="w-16 h-16 text-white/30 mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-white/55 text-lg max-w-lg mx-auto mb-8">
              We're always looking for talented, passionate individuals to grow with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:careers@b-estates.shop"
                className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300"
              >
                <Briefcase className="w-5 h-5" />
                Send Your CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 glass text-white font-semibold px-8 py-4 rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}