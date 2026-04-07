import FadeIn from "@/components/FadeIn";
import BookingCTA from "@/components/BookingCTA";
import { locations } from "@/lib/content";

export default function ContactPage() {
  const loc = locations[0];

  return (
    <div className="flex flex-col pt-32 bg-cream min-h-screen">
      <div className="container mx-auto px-4 md:px-8 mb-24">
        <FadeIn className="max-w-3xl mb-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6">
            Get in <span className="italic text-charcoal">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted font-sans">
            Call or stop by. We're right across from Equinox in the West Village.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn delay={0.2} className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-4xl text-charcoal">{loc.name}</h2>
              <div className="flex flex-col gap-4 font-sans text-lg text-charcoal/80">
                <p>{loc.address}</p>
                <p>
                  <a href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="hover:text-blush-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm px-1 -mx-1">
                    {loc.phone}
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-6">
                <h3 className="font-sans font-medium text-charcoal uppercase tracking-wider text-sm">Hours</h3>
                {loc.hours.map((h) => (
                  <div key={h.days} className="flex justify-between text-muted max-w-sm border-b border-sand/50 pb-2 last:border-0">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col gap-8 h-full min-h-[500px]">
            <div className="w-full bg-cream-dark rounded-2xl overflow-hidden relative flex-1 min-h-[400px] border border-sand/30">
              <iframe
                src={loc.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title={`Map of ${loc.name}`}
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}
