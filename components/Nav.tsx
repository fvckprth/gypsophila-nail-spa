"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { siteConfig } from "@/lib/content";

const links = [
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Book", href: "/book" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-cream/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm">
          <span className="font-display italic text-2xl md:text-3xl text-charcoal">Gypsophila</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blush mt-1">
            <circle cx="3" cy="3" r="1.5" fill="currentColor" />
            <circle cx="9" cy="4" r="1.5" fill="currentColor" />
            <circle cx="5" cy="9" r="1.5" fill="currentColor" />
          </svg>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-charcoal hover:text-blush-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm px-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}
