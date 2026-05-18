"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Ruler,
  Heart,
  Check,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const featuredLands = [
  {
    id: 1,
    slug: "prime-residential-karen",
    title: "Prime Residential Plot — Karen",
    location: "Karen, Nairobi",
    size: "0.5 Acres",
    price: "Ksh 8,500,000",
    status: "Available",
    features: ["Ready Title Deed", "Near Tarmac", "Water Connected"],
  },
  {
    id: 2,
    slug: "commercial-thika-road",
    title: "Commercial Land — Thika Road",
    location: "Thika Road, Kiambu",
    size: "2 Acres",
    price: "Ksh 25,000,000",
    status: "Available",
    features: ["Highway Frontage", "Electricity", "Fenced"],
  },
  {
    id: 3,
    slug: "farmland-limuru",
    title: "Agricultural Farmland — Limuru",
    location: "Limuru, Kiambu",
    size: "5 Acres",
    price: "Ksh 15,000,000",
    status: "Reserved",
    features: ["Fertile Soil", "River Frontage", "Access Road"],
  },
  {
    id: 4,
    slug: "gated-syokimau",
    title: "Gated Community Plot — Syokimau",
    location: "Syokimau, Machakos",
    size: "0.25 Acres",
    price: "Ksh 4,200,000",
    status: "Available",
    features: ["Gated Estate", "Tarmacked", "Street Lights"],
  },
  {
    id: 5,
    slug: "industrial-athi-river",
    title: "Industrial Land — Athi River",
    location: "Athi River, Machakos",
    size: "10 Acres",
    price: "Ksh 45,000,000",
    status: "Available",
    features: ["Zoned Industrial", "Near Highway", "Flat Terrain"],
  },
];

export default function FeaturedCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });
  const [favorites, setFavorites] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="relative group">
      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white shadow-xl rounded-full p-3.5 z-20 opacity-0 group-hover:opacity-100 hover:scale-110 transition-all hidden md:block"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 text-dark" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white shadow-xl rounded-full p-3.5 z-20 opacity-0 group-hover:opacity-100 hover:scale-110 transition-all hidden md:block"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 text-dark" />
      </button>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {featuredLands.map((land, index) => (
            <motion.div
              key={land.id}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="flex-[0_0_330px] sm:flex-[0_0_380px] md:flex-[0_0_420px] min-w-0"
            >
              <Link href={`/lands/${land.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-blue/5 transition-shadow duration-300 group/card cursor-pointer border border-transparent hover:border-brand-blue/10"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-blue-400">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 font-heading text-6xl font-bold">
                          {land.title.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Status */}
                    <span
                      className={`absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
                        land.status === "Available"
                          ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                          : "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                      }`}
                    >
                      {land.status}
                    </span>

                    {/* Favorite */}
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      onClick={(e) => toggleFavorite(e, land.id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors z-10"
                      aria-label="Favorite"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.includes(land.id)
                            ? "fill-red-500 text-red-500"
                            : "text-white"
                        } transition-colors`}
                      />
                    </motion.button>

                    {/* Price */}
                    <div className="absolute bottom-4 right-4 bg-dark/85 backdrop-blur-md text-white px-4 py-2.5 rounded-lg">
                      <span className="text-sm font-semibold tracking-wide">
                        {land.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-dark mb-3 group-hover/card:text-brand-blue transition-colors">
                      {land.title}
                    </h3>

                    <div className="flex items-center gap-5 text-dark/50 text-sm mb-4">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-brand-blue" />
                        {land.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Ruler className="w-4 h-4 text-brand-blue" />
                        {land.size}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {land.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-xs bg-brand-blue/5 text-brand-blue font-medium px-2.5 py-1.5 rounded-full"
                        >
                          <Check className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Hint */}
      <p className="text-center text-dark/30 text-sm mt-6 md:hidden">
        ← Swipe to browse →
      </p>
    </div>
  );
}