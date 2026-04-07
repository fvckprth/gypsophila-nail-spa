"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function PhilosophyStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="bg-sand/30 py-32 md:py-48 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
        <motion.div style={{ y }} className="max-w-4xl">
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
            "We don't rush. We don't upsell. We just do great work."
          </h2>
          <p className="mt-8 text-muted font-sans text-lg">
            — Your neighbors at 647 Hudson St
          </p>
        </motion.div>
      </div>
    </section>
  );
}
