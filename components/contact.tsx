"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  MessageCircle,
  ArrowRight,
  Building2,
  Globe,
  Users,
  Star,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import TextReveal from "@/components/TextReveal";
import { GoogleMapsEmbed } from '@next/third-parties/google'

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+237 6XX XXX XXX",
    sub: "Call us anytime",
    href: "tel:+237600000000",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@b-estates.shop",
    sub: "We reply within 24 hours",
    href: "mailto:info@b-estates.shop",
    color: "from-purple-500 to-violet-700",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Yaoundé, Cameroon",
    sub: "Visit our office",
    href: "#",
    color: "from-red-500 to-rose-700",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat",
    sub: "8:00 AM - 6:00 PM",
    href: "#",
    color: "from-emerald-500 to-green-700",
  },
];

const quickReasons = [
  "Buy a plot of land",
  "Sell your property",
  "Order construction materials",
  "Get investment advice",
  "Schedule a site visit",
  "Partnership inquiry",
  "General question",
  "Other",
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Globe, value: "24/7", label: "Support" },
  { icon: Building2, value: "10+", label: "Years Experience" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedReason, setSelectedReason] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate submission
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  const resetForm = () => {
    setFormState("idle");
    setSelectedReason("");
  };

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-brand-blue-dark via-dark to-brand-blue overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-[0.04]"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage:
                "radial-gradient(circle at 40% 50%, white 1px, transparent 1px)",
              backgroundSize: "35px 35px",
            }}
          />
        </div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 border border-white/[0.04] rounded-full"
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-16 left-16 w-48 h-48 border border-white/[0.04] rounded-full"
          animate={{ rotate: -360, scale: [1, 1.12, 1] }}
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
              Let&apos;s Talk
            </span>
          </motion.div>

          {/* Heading */}
          <TextReveal
            text="Contact Us"
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white block mb-6"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;re here to help you find the perfect plot or source quality
            construction materials. Reach out anytime.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-1.5">
                  <stat.icon className="w-4 h-4 text-blue-300" />
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-white/35 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Wave transition */}
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

      {/* ============ CONTACT INFO CARDS ============ */}
      <section className="relative -mt-10 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-brand-blue/10 relative overflow-hidden`}
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`}
                />

                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-md group-hover:shadow-lg transition-shadow`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-dark/70 mb-1">
                  {item.label}
                </h3>
                <p className="font-bold text-dark group-hover:text-brand-blue transition-colors text-sm">
                  {item.value}
                </p>
                <p className="text-dark/35 text-xs mt-1">{item.sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FORM & INFO SECTION ============ */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* ============ CONTACT FORM ============ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              {formState === "success" ? (
                /* ============ SUCCESS STATE ============ */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-10 md:p-14 shadow-xl text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="inline-flex p-5 bg-green-100 rounded-full mb-6"
                  >
                    <Check className="w-12 h-12 text-green-500" />
                  </motion.div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-3">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-dark/50 text-lg mb-8 max-w-md mx-auto">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-blue-dark transition-colors shadow-lg shadow-brand-blue/20"
                    >
                      Send Another Message
                    </button>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 bg-slate-100 text-dark font-semibold px-6 py-3 rounded-full hover:bg-slate-200 transition-colors"
                    >
                      Back to Home
                    </Link>
                  </div>
                </motion.div>
              ) : (
                /* ============ FORM ============ */
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-dark/45 mb-8">
                    Fill out the form below and we&apos;ll respond as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Fields */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-dark/70 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all bg-slate-50 focus:bg-white placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark/70 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Doe"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all bg-slate-50 focus:bg-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-dark/70 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all bg-slate-50 focus:bg-white placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark/70 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="+237 6XX XXX XXX"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all bg-slate-50 focus:bg-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Reason */}
                    <div>
                      <label className="block text-sm font-medium text-dark/70 mb-2">
                        What are you interested in?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {quickReasons.map((reason) => (
                          <button
                            key={reason}
                            type="button"
                            onClick={() => setSelectedReason(reason)}
                            className={`text-xs px-3 py-2 rounded-xl border transition-all text-left ${
                              selectedReason === reason
                                ? "border-brand-blue bg-brand-blue/5 text-brand-blue font-medium"
                                : "border-slate-200 text-dark/50 hover:border-brand-blue/30 hover:bg-slate-50"
                            }`}
                          >
                            {reason}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-dark/70 mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Tell us about your inquiry..."
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all bg-slate-50 focus:bg-white placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full bg-brand-blue text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/35 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formState === "submitting" ? (
                        <>
                          <motion.span
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* ============ SIDEBAR INFO ============ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Contact Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="font-heading text-xl font-bold text-dark mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-5">
                  <a
                    href="tel:+237600000000"
                    className="flex items-center gap-4 p-4 rounded-xl bg-brand-blue text-white hover:bg-brand-blue-dark transition-colors group"
                  >
                    <Phone className="w-5 h-5 shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">Call Us</p>
                      <p className="text-white/70 text-xs">+237 6XX XXX XXX</p>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="https://wa.me/237600000000?text=Hello%20B-Estates!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-colors group"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">WhatsApp</p>
                      <p className="text-white/70 text-xs">Chat with us instantly</p>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="mailto:info@b-estates.shop"
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-100 text-dark hover:bg-slate-200 transition-colors group"
                  >
                    <Mail className="w-5 h-5 shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">Email Us</p>
                      <p className="text-dark/50 text-xs">info@b-estates.shop</p>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Materials Platform Card */}
              <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-3xl p-8 text-white shadow-xl">
                <h3 className="font-heading text-xl font-bold mb-3">
                  Need Materials?
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-5">
                  Visit our procurement platform to browse and order construction
                  materials directly.
                </p>
                <a
                  href="https://www.b-estates.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-5 py-3 rounded-full text-sm hover:shadow-xl transition-all group"
                >
                  <ExternalLink className="w-4 h-4" />
                  B-Estates.shop
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="font-heading text-xl font-bold text-dark mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-dark/60">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-dark/60">Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-dark/60">Sunday</span>
                    <span className="font-medium text-dark/40">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ MAP SECTION ============ */}
      <section className="relative h-[400px] bg-slate-200">
        {/* Placeholder for Google Map embed */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500 font-heading text-xl font-bold">Yaoundé, Cameroon</p>
            <p className="text-slate-400 text-sm">B-Estates Headquarters</p>
            <p className="text-slate-400 text-xs mt-2">
              Replace with Google Maps embed
              {/* google map embed
              <GoogleMapsEmbed
                apiKey="YOUR_API_KEY"
                height={400}
                width="100%"
                mode="place"
                q="Brooklyn+Bridge,New+York,NY"
              /> */}
              
            </p>
          </div>
        </div>
      </section>

      {/* ============ TRUST BADGES ============ */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              "Verified Land Deals",
              "Fast Response",
              "Secure Transactions",
              "Expert Guidance",
              "100% Satisfaction",
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-dark/40"
              >
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">{badge}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}