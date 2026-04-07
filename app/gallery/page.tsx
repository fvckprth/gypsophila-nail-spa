"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import GalleryGrid from "@/components/GalleryGrid";
import BookingCTA from "@/components/BookingCTA";
import { motion } from "motion/react";

const filters = ["All", "Manicures", "Pedicures", "Nail Art"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex flex-col pt-32 bg-cream min-h-screen">
      <div className="container mx-auto px-4 md:px-8 mb-24">
        <FadeIn className="max-w-3xl mb-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6">
            Our <span className="italic text-charcoal">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-muted font-sans">
            A selection of our recent work. Follow us on Instagram for daily inspiration.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mb-12">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush ${
                  activeFilter === filter
                    ? "bg-charcoal text-cream"
                    : "bg-cream-dark text-charcoal hover:bg-sand/40"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <GalleryGrid preview={false} />
        </FadeIn>
        
        <FadeIn delay={0.4} className="mt-24 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-charcoal hover:text-blush-dark font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm px-2 py-1"
          >
            Follow us on Instagram &rarr;
          </a>
        </FadeIn>
      </div>

      <BookingCTA />
    </div>
  );
}
