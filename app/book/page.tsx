import FadeIn from "@/components/FadeIn";
import { siteConfig, locations } from "@/lib/content";
import Link from "next/link";

export default function BookPage() {
  const loc = locations[0];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <FadeIn className="mb-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6">
            Book an <span className="italic text-charcoal">Appointment</span>
          </h1>
          <p className="text-lg md:text-xl text-muted font-sans max-w-2xl">
            Choose your preferred way to book. Walk-ins are especially welcome on weekday afternoons.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          <FadeIn delay={0.2} className="flex flex-col gap-8">
            <div className="bg-blush-light/50 p-10 rounded-2xl flex flex-col gap-6 border border-blush/20">
              <h2 className="font-display text-3xl text-charcoal">Book Online</h2>
              <p className="text-muted font-sans">
                Browse our full menu, select your preferred technician, and secure your time instantly.
              </p>
              <Link
                href="/book/online"
                className="w-fit bg-charcoal hover:bg-black text-cream text-base font-medium px-8 py-4 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blush-light focus-visible:ring-charcoal shadow-sm"
              >
                Book Online
              </Link>
            </div>

            <div className="bg-sand/20 p-10 rounded-2xl flex flex-col gap-6 border border-sand/40">
              <h2 className="font-display text-3xl text-charcoal">Book by Phone</h2>
              <p className="text-muted font-sans">
                Prefer to speak with someone? Call us during business hours to schedule your appointment.
              </p>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                className="w-fit bg-cream-dark hover:bg-sand text-charcoal text-base font-medium px-8 py-4 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-sand focus-visible:ring-charcoal shadow-sm"
              >
                {siteConfig.phone}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col gap-8">
            <div className="bg-cream-dark/50 p-10 rounded-2xl flex flex-col gap-6 border border-sand/30 h-full">
              <h2 className="font-display text-3xl text-charcoal">Hours</h2>
              <div className="flex flex-col gap-4 font-sans text-lg">
                {loc.hours.map((h) => (
                  <div key={h.days} className="flex justify-between border-b border-sand/50 pb-4 last:border-0">
                    <span className="font-medium text-charcoal">{h.days}</span>
                    <span className="text-muted">{h.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-sand/50">
                <h3 className="font-display text-2xl text-charcoal mb-4">Walk-ins Welcome</h3>
                <p className="text-muted font-sans">
                  We always try to accommodate walk-ins. Weekday afternoons typically have the most availability.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} className="bg-charcoal text-cream p-8 rounded-2xl text-center">
          <p className="font-sans text-lg">
            Located at 647 Hudson St, across from Equinox — West Village, NYC
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
