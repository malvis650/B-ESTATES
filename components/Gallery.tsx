"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
  Share2,
  Image as ImageIcon,
  MapPin,
  Camera,
  Grid3X3,
  LayoutGrid,
  Filter,
  Search,
} from "lucide-react";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";

// ============================================
// 🔵 PLACE GALLERY IMAGES IN: /public/images/gallery/
// ============================================

const galleryImages = [
  // Land & Properties
  {
    id: 1,
    src: "/images/gallery/land-1.jpg",
    alt: "Prime residential plot in Yaoundé",
    category: "Land & Properties",
    location: "Yaoundé",
    description: "Premium residential plot with ready title deed",
    featured: true,
  },
  {
    id: 2,
    src: "/images/gallery/land-2.jpg",
    alt: "Commercial land along highway",
    category: "Land & Properties",
    location: "Douala",
    description: "Prime commercial land with highway frontage",
    featured: false,
  },
  {
    id: 3,
    src: "/images/gallery/land-3.jpg",
    alt: "Agricultural farmland",
    category: "Land & Properties",
    location: "Bafoussam",
    description: "Fertile agricultural land with river frontage",
    featured: false,
  },
  {
    id: 4,
    src: "/images/gallery/land-4.jpg",
    alt: "Gated community plots",
    category: "Land & Properties",
    location: "Yaoundé",
    description: "Secure gated community with modern amenities",
    featured: false,
  },
  // Construction Materials
  {
    id: 5,
    src: "/images/gallery/materials-1.jpg",
    alt: "Building blocks and cement",
    category: "Materials",
    location: "Warehouse",
    description: "High-quality building blocks and cement bags",
    featured: false,
  },
  {
    id: 6,
    src: "/images/gallery/materials-2.jpg",
    alt: "Steel reinforcement bars",
    category: "Materials",
    location: "Warehouse",
    description: "Grade A steel reinforcement bars in stock",
    featured: false,
  },
  {
    id: 7,
    src: "/images/gallery/materials-3.jpg",
    alt: "Roofing materials display",
    category: "Materials",
    location: "Showroom",
    description: "Various roofing options available",
    featured: false,
  },
  // Projects & Site Visits
  {
    id: 8,
    src: "/images/gallery/project-1.jpg",
    alt: "Site inspection by our surveyor",
    category: "Projects",
    location: "Yaoundé",
    description: "Professional land survey and boundary marking",
    featured: false,
  },
  {
    id: 9,
    src: "/images/gallery/project-2.jpg",
    alt: "Client site visit",
    category: "Projects",
    location: "Douala",
    description: "Guided site visit with potential buyers",
    featured: false,
  },
  {
    id: 10,
    src: "/images/gallery/project-3.jpg",
    alt: "Construction project using our materials",
    category: "Projects",
    location: "Yaoundé",
    description: "Ongoing construction using B-Estates materials",
    featured: false,
  },
  // Team & Office
  {
    id: 11,
    src: "/images/gallery/team-1.jpg",
    alt: "B-Estates team meeting",
    category: "Team & Office",
    location: "Head Office",
    description: "Our dedicated team at the weekly strategy meeting",
    featured: false,
  },
  {
    id: 12,
    src: "/images/gallery/team-2.jpg",
    alt: "Client consultation session",
    category: "Team & Office",
    location: "Head Office",
    description: "One-on-one consultation with a client",
    featured: false,
  },
  {
    id: 13,
    src: "/images/gallery/office-1.jpg",
    alt: "B-Estates headquarters",
    category: "Team & Office",
    location: "Yaoundé",
    description: "Our modern office in the heart of Yaoundé",
    featured: false,
  },
  // Community & Events
  {
    id: 14,
    src: "/images/gallery/community-1.jpg",
    alt: "Community land registration drive",
    category: "Community",
    location: "Yaoundé",
    description: "Helping locals register their land legally",
    featured: false,
  },
  {
    id: 15,
    src: "/images/gallery/community-2.jpg",
    alt: "Construction workshop",
    category: "Community",
    location: "Douala",
    description: "Free workshop on quality construction practices",
    featured: false,
  },
  {
    id: 16,
    src: "/images/gallery/event-1.jpg",
    alt: "Real estate expo booth",
    category: "Community",
    location: "Yaoundé",
    description: "B-Estates at the annual Real Estate Expo",
    featured: false,
  },
];

const categories = [
  "All",
  "Land & Properties",
  "Materials",
  "Projects",
  "Team & Office",
  "Community",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  // Filter images
  const filteredImages = galleryImages.filter((img) => {
    const matchesCategory =
      activeCategory === "All" || img.category === activeCategory;
    const matchesSearch =
      img.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get current image for lightbox
  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage)
    : -1;
  const currentImage =
    currentIndex >= 0 ? filteredImages[currentIndex] : null;

  // Navigation
  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null);
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrev();
  };

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

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
                "radial-gradient(circle at 50% 40%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
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
              Our Work In Pictures
            </span>
          </motion.div>

          <TextReveal
            text="Gallery"
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white block mb-4"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore our work — from prime land parcels to quality materials and
            community projects.
          </motion.p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-white/35 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <Camera className="w-4 h-4" /> {galleryImages.length} Photos
            </span>
            <span className="flex items-center gap-1.5">
              <Grid3X3 className="w-4 h-4" /> {categories.length - 1} Categories
            </span>
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

      {/* ============ FILTERS & SEARCH ============ */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                      : "bg-slate-100 text-dark/60 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search & View Toggle */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-56">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                />
              </div>
              <div className="flex bg-slate-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-white shadow-sm text-brand-blue"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                  title="Grid view"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "masonry"
                      ? "bg-white shadow-sm text-brand-blue"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                  title="Masonry view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="text-dark/35 text-xs mt-3">
            Showing {filteredImages.length} of {galleryImages.length} images
          </p>
        </div>
      </section>

      {/* ============ GALLERY GRID ============ */}
      <section className="py-12 bg-cream min-h-[400px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <ImageIcon className="w-20 h-20 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-dark mb-2">
                No images found
              </h3>
              <p className="text-dark/40">
                Try adjusting your search or category filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="text-brand-blue mt-3 hover:underline text-sm"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                  : "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
              }
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setSelectedImage(image.id)}
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 bg-white ${
                      image.featured && viewMode === "grid"
                        ? "sm:col-span-2 sm:row-span-2"
                        : ""
                    }`}
                  >
                    <div
                      className={`relative w-full ${
                        image.featured && viewMode === "grid"
                          ? "h-80 sm:h-full"
                          : "h-56"
                      } overflow-hidden`}
                    >
                      {/* Loading skeleton */}
                      {!loadedImages[image.id] && (
                        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                      )}

                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className={`object-cover group-hover:scale-110 transition-transform duration-700 ${
                          loadedImages[image.id] ? "opacity-100" : "opacity-0"
                        }`}
                        sizes={
                          image.featured
                            ? "(max-width: 640px) 100vw, 50vw"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        }
                        onLoad={() => handleImageLoad(image.id)}
                        onError={() => handleImageLoad(image.id)}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                        <span className="text-white/70 text-xs font-medium mb-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {image.location}
                        </span>
                        <p className="text-white font-semibold text-sm leading-tight">
                          {image.description}
                        </p>
                      </div>

                      {/* Zoom icon */}
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full">
                          {image.category}
                        </span>
                      </div>

                      {/* Featured badge */}
                      {image.featured && (
                        <div className="absolute bottom-3 left-3">
                          <span className="bg-brand-blue/90 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ============ LIGHTBOX ============ */}
      <AnimatePresence>
        {selectedImage && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-10 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>

            {/* Previous button */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 md:left-8 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next button */}
            {currentIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 md:right-8 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={currentImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Info bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-dark/80 backdrop-blur-xl text-white rounded-2xl px-6 py-4 max-w-lg w-[90%]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-sm">{currentImage.alt}</p>
                  <div className="flex items-center gap-3 mt-1 text-white/50 text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {currentImage.location}
                    </span>
                    <span>{currentImage.description}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    title="Share"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <a
                    href={currentImage.src}
                    download
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    title="Download"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ CTA SECTION ============ */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)",
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
            <Camera className="w-16 h-16 text-white/30 mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Want to See More?
            </h2>
            <p className="text-white/55 text-lg max-w-lg mx-auto mb-8">
              Visit our office for a personal tour or schedule a site visit to
              see our properties firsthand.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300"
            >
              Schedule a Visit
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}