"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-cream">
      {/* Botanical SVG Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M400 800C400 800 400 600 400 400C400 200 400 0 400 0" stroke="currentColor" strokeWidth="2"/>
          <path d="M400 600C400 600 500 550 550 450" stroke="currentColor" strokeWidth="2"/>
          <path d="M400 500C400 500 300 450 250 350" stroke="currentColor" strokeWidth="2"/>
          <path d="M400 400C400 400 500 350 550 250" stroke="currentColor" strokeWidth="2"/>
          <path d="M400 300C400 300 300 250 250 150" stroke="currentColor" strokeWidth="2"/>
          {/* Baby's breath flowers */}
          <circle cx="550" cy="450" r="10" fill="currentColor"/>
          <circle cx="565" cy="440" r="8" fill="currentColor"/>
          <circle cx="540" cy="435" r="6" fill="currentColor"/>
          
          <circle cx="250" cy="350" r="10" fill="currentColor"/>
          <circle cx="235" cy="340" r="8" fill="currentColor"/>
          <circle cx="260" cy="335" r="6" fill="currentColor"/>
          
          <circle cx="550" cy="250" r="10" fill="currentColor"/>
          <circle cx="565" cy="240" r="8" fill="currentColor"/>
          <circle cx="540" cy="235" r="6" fill="currentColor"/>
          
          <circle cx="250" cy="150" r="10" fill="currentColor"/>
          <circle cx="235" cy="140" r="8" fill="currentColor"/>
          <circle cx="260" cy="135" r="6" fill="currentColor"/>
          
          <circle cx="400" cy="0" r="12" fill="currentColor"/>
          <circle cx="380" cy="10" r="8" fill="currentColor"/>
          <circle cx="420" cy="10" r="8" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-tight text-charcoal max-w-4xl tracking-tight"
        >
          Experience the <span className="italic text-charcoal">art</span> of nails.
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-muted max-w-2xl font-sans"
        >
          Non-toxic gel, Dazzle Dry & artisan care — West Village, NYC
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-blush hover:bg-blush-dark text-charcoal text-base font-medium px-8 py-3.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blush text-center shadow-sm"
          >
            Book Appointment
          </a>
          <Link
            href="/services"
            className="w-full sm:w-auto bg-transparent border border-charcoal/20 text-charcoal hover:bg-charcoal/5 text-base font-medium px-8 py-3.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-charcoal text-center"
          >
            See Services
          </Link>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 text-sm text-muted/80 font-sans tracking-wide"
        >
          Walk-ins welcome · Open 7 days
        </motion.p>
      </div>
    </section>
  );
}
