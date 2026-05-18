import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ExternalLink, ShoppingCart } from "lucide-react";
import logo from "@/images/b-ESTATES_LONG.png";

const footerLinks = {
  quick: [
    { href: "/lands", label: "Browse Land" },
    { href: "/materials", label: "Materials Info" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/lands", label: "Buy Land" },
    { href: "/lands", label: "Sell Land" },
    { href: "/contact", label: "Free Consultation" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src={logo}
                alt="B-Estates Logo"
                width={160}
                height={48}
                className="h-11 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-5">
              Your trusted partner for premium land and quality construction
              materials. Building futures across Cameroon since 2024.
            </p>
            {/* Materials Platform Link */}
            <a
              href="https://www.b-estates.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue/20 hover:bg-brand-blue/30 text-white rounded-full px-4 py-2 text-sm transition-colors border border-brand-blue/30"
            >
              <ShoppingCart className="w-4 h-4" />
              Procurement Platform
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-5 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/45 text-sm hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.b-estates.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/45 text-sm hover:text-brand-blue transition-colors inline-flex items-center gap-1"
                >
                  Shop Materials
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-5 text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/45 text-sm hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.b-estates.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/45 text-sm hover:text-brand-blue transition-colors"
                >
                  Materials Procurement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-5 text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>Yaounde | Neptune Tam Tam, Cameroon</span>
              </li>
              <li className="flex gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a
                  href="tel:+237674022027"
                  className="hover:text-brand-blue transition-colors"
                >
                  +237 674 022 027
                </a>
              </li>
              <li className="flex gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <a
                  href="mailto:bestates2024@gmail.com"
                  className="hover:text-brand-blue transition-colors"
                >
                  bestates2024@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} B-Estates. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            For materials:{" "}
            <a
              href="https://www.b-estates.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-blue transition-colors"
            >
              www.b-estates.shop
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}