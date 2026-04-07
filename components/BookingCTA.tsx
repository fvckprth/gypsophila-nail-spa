import { siteConfig } from "@/lib/content";

export default function BookingCTA() {
  return (
    <section className="bg-blush-light text-charcoal py-24">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center gap-8">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl italic">
          Ready for your next visit?
        </h2>
        <p className="text-lg text-charcoal/80 font-sans">
          Walk-ins welcome anytime. Or call ahead.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blush text-charcoal hover:bg-blush-dark text-base font-medium px-10 py-4 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blush-light focus-visible:ring-charcoal shadow-sm w-full sm:w-auto"
          >
            Book Online
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
            className="text-charcoal hover:text-blush-dark text-lg font-display tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blush-light focus-visible:ring-charcoal rounded-sm px-2 py-1"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
