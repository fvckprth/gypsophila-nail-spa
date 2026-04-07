"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

interface GalleryGridProps {
  preview?: boolean;
}

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop", alt: "Nail art detail" },
  { id: 2, src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", alt: "Manicure process" },
  { id: 3, src: "https://picsum.photos/seed/nail3/800/1000", alt: "Dip powder nails" },
  { id: 4, src: "https://picsum.photos/seed/nail4/800/1000", alt: "Gel extensions" },
  { id: 5, src: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=800&auto=format&fit=crop", alt: "Salon interior" },
  { id: 6, src: "https://picsum.photos/seed/nail6/800/1000", alt: "Nail polish colors" },
];

export default function GalleryGrid({ preview = false }: GalleryGridProps) {
  const displayImages = preview ? images.slice(0, 6) : images;

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {displayImages.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-blush-light to-sage/20"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-0"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                target.classList.remove('opacity-0');
              }}
            />
            <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
          </motion.div>
        ))}
      </div>
      
      {preview && (
        <div className="flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-charcoal hover:text-blush-dark font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm px-2 py-1"
          >
            See the full gallery &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
