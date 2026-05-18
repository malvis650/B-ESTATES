"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, ChevronRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/images/b-ESTATES_LONG.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Scroll detection with hide/show on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold
      setScrolled(currentScrollY > 60);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-brand-blue/5 border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* ============ LOGO ============ */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="relative h-10 md:h-12 w-auto"
              >
                <Image
                  src={logo}
                  alt="B-Estates Logo"
                  width={160}
                  height={50}
                  className={`h-10 md:h-12 w-auto object-contain transition-all duration-500 ${
                    scrolled ? "" : "brightness-0 invert"
                  }`}
                  priority
                />
              </motion.div>
              {/* Optional: Text next to logo */}
              {/* <span className={`font-heading text-lg font-bold hidden sm:block transition-colors ${scrolled ? "text-dark" : "text-white"}`}>
                B-Estates
              </span> */}
            </Link>

            {/* ============ DESKTOP NAVIGATION ============ */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2.5 font-medium text-sm tracking-wide transition-all duration-300 rounded-xl ${
                    scrolled
                      ? isActive(link.href)
                        ? "text-brand-blue bg-brand-blue/8"
                        : "text-dark/65 hover:text-brand-blue hover:bg-brand-blue/5"
                      : isActive(link.href)
                      ? "text-white bg-white/15"
                      : "text-white/75 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {/* Active indicator dot */}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-blue rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}

              {/* Divider + CTA */}
              <div className="ml-3 pl-3 border-l border-slate-200/30 flex items-center gap-2">
                {/* Phone icon quick contact */}
                <a
                  href="tel:+254700000000"
                  className={`p-2.5 rounded-full transition-all ${
                    scrolled
                      ? "text-dark/50 hover:text-brand-blue hover:bg-brand-blue/5"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                  aria-label="Call us"
                  title="Call B-Estates"
                >
                  <Phone className="w-4 h-4" />
                </a>

                {/* Shop Materials Button */}
                <a
                  href="https://www.b-estates.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`font-semibold px-5 py-2.5 rounded-full text-sm transition-all inline-flex items-center gap-1.5 ${
                      scrolled
                        ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/35 hover:bg-brand-blue-dark"
                        : "bg-white text-brand-blue shadow-lg hover:shadow-xl hover:bg-white/95"
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Shop Materials
                  </motion.button>
                </a>
              </div>
            </div>

            {/* ============ MOBILE TOGGLE ============ */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                scrolled
                  ? "text-dark hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ============ SCROLL PROGRESS BAR ============ */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-blue-light origin-left"
            style={{
              scaleX: typeof window !== "undefined" 
                ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) 
                : 0,
            }}
          />
        )}
      </motion.nav>

      {/* ============ MOBILE FULLSCREEN MENU ============ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark/95 backdrop-blur-2xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 h-16">
                <Image
                  src={logo}
                  alt="B-Estates"
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-8">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`group flex items-center justify-between py-4 px-5 rounded-2xl text-2xl font-heading transition-all ${
                          isActive(link.href)
                            ? "bg-brand-blue/15 text-white border border-brand-blue/30"
                            : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight
                          className={`w-5 h-5 transition-all ${
                            isActive(link.href)
                              ? "text-brand-blue translate-x-0"
                              : "text-white/20 -translate-x-2 group-hover:translate-x-0 group-hover:text-white/60"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-10 space-y-3"
                >
                  <a
                    href="https://www.b-estates.shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 bg-brand-blue text-white font-semibold px-6 py-4 rounded-2xl text-base hover:bg-brand-blue-dark transition-colors shadow-lg shadow-brand-blue/20"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Shop Materials
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 glass text-white font-semibold px-6 py-4 rounded-2xl text-base border border-white/20 hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Contact Us
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="px-8 pb-8"
              >
                <div className="flex items-center gap-3 text-white/30 text-sm pt-6 border-t border-white/10">
                  <MapPin className="w-4 h-4" />
                  <span>Nairobi, Kenya</span>
                  <span className="mx-1">•</span>
                  <a href="tel:+254700000000" className="hover:text-brand-blue transition-colors">
                    +254 700 000 000
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}