import Link from "next/link";
import { siteConfig, locations } from "@/lib/content";
import { FaYelp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm w-fit">
              <span className="font-display italic text-3xl md:text-4xl text-cream">Gypsophila</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blush mt-2">
                <circle cx="3" cy="3" r="1.5" fill="currentColor" />
                <circle cx="9" cy="4" r="1.5" fill="currentColor" />
                <circle cx="5" cy="9" r="1.5" fill="currentColor" />
              </svg>
            </Link>
            <p className="text-cream/80 text-sm max-w-sm leading-relaxed">
              Experience the art of nails. Non-toxic gel, Dazzle Dry, and artisan care in the West Village.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-xl text-blush-light">Explore</h3>
            <nav className="flex flex-col gap-3">
              {["Services", "Gallery", "About", "Book", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-cream/80 hover:text-blush-light text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm w-fit"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Locations Col */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-xl text-blush-light">Visit Us</h3>
            <div className="flex flex-col gap-6">
              {locations.map((loc) => (
                <div key={loc.name} className="flex flex-col gap-1">
                  <span className="font-medium text-sm">{loc.name}</span>
                  <span className="text-cream/80 text-sm">{loc.address}</span>
                  <span className="text-cream/80 text-sm">{loc.phone}</span>
                </div>
              ))}
            </div>
            <a
              href={siteConfig.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/80 hover:text-blush-light text-sm transition-colors mt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm w-fit"
            >
              <FaYelp className="w-4 h-4" />
              <span>{siteConfig.yelp} on Yelp</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/60 text-xs">
            © {new Date().getFullYear()} Gypsophila Nail & Spa. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-cream/60">
            <Link href="/privacy" className="hover:text-cream transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm">Privacy</Link>
            <Link href="/terms" className="hover:text-cream transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
