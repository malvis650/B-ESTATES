"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  ShoppingCart,
  MapPin,
  Calculator,
  Check,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Landmark,
  ClipboardCheck,
  FileCheck,
  Truck,
  Search,
  BarChart3,
  PiggyBank,
  Target,
  Clock,
  Users,
  Star,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/TextReveal";

// ============================================
// 🔵 PLACE SERVICE IMAGES IN: /public/images/services/
// ============================================

const services = [
  {
    id: "land-procurement",
    icon: Shield,
    title: "Verified Land Procurement",
    subtitle: "Buy with confidence, build with control",
    description:
      "We source, verify, and secure genuine land parcels across Cameroon. Every plot undergoes rigorous due diligence — title deed verification, boundary survey, ownership history check, and local community clearance — before being listed on our platform. Whether you're in the diaspora or locally based, we make land acquisition safe, transparent, and hassle-free.",
    features: [
      "Title deed verification and authenticity check",
      "Boundary survey with GPS coordinates",
      "Ownership history and encumbrance search",
      "Local community and council clearance",
      "Legal documentation and transfer support",
      "Diaspora-friendly remote purchasing process",
    ],
    stats: [
      { icon: Check, value: "100%", label: "Verified Plots" },
      { icon: Clock, value: "2 Weeks", label: "Avg. Title Transfer" },
      { icon: Users, value: "50+", label: "Happy Land Buyers" },
    ],
    cta: "Browse Land Listings",
    link: "/lands",
    image: "/images/services/land-procurement.jpg",
    color: "from-emerald-500 to-green-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-100",
    textColor: "text-emerald-600",
    featured: true,
  },
  {
    id: "material-procurement",
    icon: ShoppingCart,
    title: "Phase-Based Material Procurement",
    subtitle: "Quality materials delivered when you need them",
    description:
      "Through our procurement platform at B-Estates.shop, we supply verified construction materials in phases — aligned to your project timeline. No more bulk purchasing or storage headaches. Order what you need, when you need it. From foundation blocks to finishing tiles, every material is quality-checked and delivered to your site on schedule.",
    features: [
      "Phase-by-phase material delivery scheduling",
      "Verified suppliers and quality-assured products",
      "Competitive pricing with transparent quotes",
      "Construction blocks, roofing, plumbing, electrical, finishing",
      "Bulk order discounts for large projects",
      "Delivery tracking and order management dashboard",
    ],
    stats: [
      { icon: Check, value: "50+", label: "Product Categories" },
      { icon: Truck, value: "97%", label: "On-Time Delivery" },
      { icon: Star, value: "4.9", label: "Quality Rating" },
    ],
    cta: "Visit Procurement Platform",
    link: "https://www.b-estates.shop",
    external: true,
    image: "/images/services/material-procurement.jpg",
    color: "from-blue-500 to-indigo-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    textColor: "text-blue-600",
    featured: true,
  },
  {
    id: "site-intelligence",
    icon: Search,
    title: "Site Intelligence",
    subtitle: "Know your land before you build",
    description:
      "Our site intelligence service provides comprehensive reports on any plot you're considering. We conduct topographic surveys, soil analysis, flood risk assessment, accessibility evaluation, and utility proximity checks. Make informed decisions with data-driven insights about your land's potential and limitations before you invest a single franc in construction.",
    features: [
      "Topographic survey and terrain analysis",
      "Soil quality and bearing capacity testing",
      "Flood risk and drainage assessment",
      "Access road and transportation evaluation",
      "Utility proximity check (water, electricity, sewage)",
      "Development feasibility report with recommendations",
    ],
    stats: [
      { icon: Search, value: "100+", label: "Sites Surveyed" },
      { icon: FileCheck, value: "48hrs", label: "Report Turnaround" },
      { icon: Target, value: "100%", label: "Accuracy Rate" },
    ],
    cta: "Request Site Report",
    link: "/contact",
    image: "/images/services/site-intelligence.jpg",
    color: "from-purple-500 to-violet-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-100",
    textColor: "text-purple-600",
    featured: false,
  },
  {
    id: "budget-control",
    icon: Calculator,
    title: "Budget Control",
    subtitle: "Build within your means, without surprises",
    description:
      "Take control of your construction budget with our comprehensive cost management tools. We provide detailed material quantity estimates, cost projections per construction phase, and real-time price tracking. Our budget control service helps you plan accurately, avoid cost overruns, and make informed procurement decisions throughout your project lifecycle.",
    features: [
      "Detailed material quantity estimation (Bill of Quantities)",
      "Phase-by-phase cost projection and breakdown",
      "Real-time material price tracking and alerts",
      "Alternative material recommendations to optimize costs",
      "Budget vs. actual spending dashboard",
      "Vendor quote comparison and negotiation support",
    ],
    stats: [
      { icon: PiggyBank, value: "30%", label: "Avg. Cost Savings" },
      { icon: BarChart3, value: "200+", label: "Budgets Analyzed" },
      { icon: Calculator, value: "98%", label: "Budget Accuracy" },
    ],
    cta: "Start Budget Planning",
    link: "/contact",
    image: "/images/services/budget-control.jpg",
    color: "from-amber-500 to-orange-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-100",
    textColor: "text-amber-600",
    featured: false,
  },
];

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "Tell us your needs — land, materials, site analysis, or budget planning.",
    icon: Users,
  },
  {
    step: 2,
    title: "Verification & Analysis",
    description: "We verify land titles, vet suppliers, survey sites, and crunch numbers.",
    icon: ClipboardCheck,
  },
  {
    step: 3,
    title: "Recommendation",
    description: "You receive a detailed report with options, pricing, and timelines.",
    icon: FileCheck,
  },
  {
    step: 4,
    title: "Execution & Support",
    description: "We handle procurement, documentation, and ongoing support.",
    icon: Shield,
  },
];

const testimonials = [
  {
    quote: "B-Estates verified my land title in under 2 weeks. As someone in the diaspora, I finally feel secure about my investment back home.",
    name: "Jean-Paul M.",
    role: "Diaspora Client — France",
    service: "Land Procurement",
  },
  {
    quote: "The phase-based material delivery saved us 30% on our construction budget. No more paying for storage or dealing with theft on site.",
    name: "Marie K.",
    role: "Property Developer — Douala",
    service: "Material Procurement",
  },
  {
    quote: "Their site intelligence report revealed drainage issues I would have missed. Saved me from building in a flood-prone area.",
    name: "Samuel T.",
    role: "First-time Builder — Yaoundé",
    service: "Site Intelligence",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-brand-blue-dark via-dark to-brand-blue overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-[0.04]"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, white 1px, transparent 1px)",
              backgroundSize: "35px 35px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
              What We Offer
            </span>
          </motion.div>

          <TextReveal
            text="Our Services"
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white block mb-6"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Four comprehensive services designed to make land acquisition and
            construction in Cameroon safe, transparent, and affordable.
          </motion.p>

          {/* Service quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  const el = document.getElementById(service.id);
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveService(service.id);
                  setTimeout(() => setActiveService(null), 2000);
                }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:bg-white/20 px-5 py-2.5 rounded-full text-sm transition-all"
              >
                <service.icon className="w-4 h-4" />
                {service.title}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-brand-blue font-semibold text-sm tracking-[0.25em] uppercase">
              How It Works
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-3 mb-3">
              Simple 4-Step Process
            </h2>
            <p className="text-dark/50 max-w-lg mx-auto text-sm">
              Every service follows our proven methodology for reliable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center group"
              >
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-blue to-brand-blue-light"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    />
                  </div>
                )}

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue text-white font-heading text-2xl font-bold mb-4 shadow-lg shadow-brand-blue/20 group-hover:scale-110 transition-transform relative z-10">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-dark/45 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DETAILED SERVICES ============ */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-28 ${index % 2 === 0 ? "bg-cream" : "bg-white"} relative overflow-hidden transition-all duration-500 ${
            activeService === service.id ? "ring-4 ring-brand-blue/20 ring-inset" : ""
          }`}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03]">
            <service.icon className="w-full h-full" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}
              >
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 ${service.iconBg} ${service.textColor} rounded-full px-4 py-1.5 mb-5 text-sm font-medium`}
                >
                  <service.icon className="w-4 h-4" />
                  {service.subtitle}
                </div>

                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-5">
                  {service.title}
                </h2>

                <p className="text-dark/55 leading-relaxed mb-7">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div
                        className={`p-1 rounded-full ${service.iconBg} mt-0.5 shrink-0`}
                      >
                        <Check className={`w-3.5 h-3.5 ${service.textColor}`} />
                      </div>
                      <span className="text-dark/60 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-8 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  {service.stats.map((stat, i) => (
                    <div key={i} className="text-center min-w-[80px]">
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <stat.icon className={`w-4 h-4 ${service.textColor}`} />
                        <span className="text-2xl font-bold text-dark">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-dark/35 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {service.external ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all group`}
                  >
                    {service.cta}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <Link
                    href={service.link}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all group`}
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </motion.div>

              {/* Image / Visual */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}
              >
                <div className="relative">
                  {/* Decorative blob */}
                  <div
                    className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${service.color} opacity-10 blur-2xl`}
                  />
                  <div
                    className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] ${service.bgColor} border ${service.borderColor}`}
                  >
                    {/* Fallback display */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <div
                        className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}
                      >
                        <service.icon className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-dark mb-2">
                        {service.title}
                      </h3>
                      <p className={`${service.textColor} font-medium`}>
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Replace with actual image when available */}
                    {/* <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    /> */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-dark via-dark to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-blue-300 font-semibold text-sm tracking-[0.25em] uppercase">
              Client Stories
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7"
              >
                <Quote className="w-8 h-8 text-brand-blue/30 mb-4" />
                <p className="text-white/75 text-sm leading-relaxed mb-5">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-brand-blue text-brand-blue"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-white/40 text-xs">{testimonial.role}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <span className="text-brand-blue text-xs font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-dark/50 text-lg mb-8">
              Choose a service above or contact us for a free consultation. We'll
              help you find the right solution for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-brand-blue/20 hover:shadow-brand-blue/35 transition-all group"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://www.b-estates.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-8 py-4 rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all group"
              >
                Visit B-Estates.shop
                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}