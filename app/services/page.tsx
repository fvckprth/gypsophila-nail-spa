import FadeIn from "@/components/FadeIn";
import BookingCTA from "@/components/BookingCTA";
import ServiceAccordion from "@/components/ServiceAccordion";
import { services } from "@/lib/content";

export default function ServicesPage() {
  const packages = services.find(s => s.category === 'Packages');
  const regularServices = services.filter(s => s.category !== 'Packages');

  return (
    <div className="flex flex-col pt-32 bg-cream min-h-screen">
      <div className="container mx-auto px-4 md:px-8 mb-24">
        <FadeIn className="max-w-3xl mb-24">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6">
            Services & <span className="italic text-charcoal">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted font-sans">
            All services use high-quality, non-toxic products. Ask about our Dazzle Dry system.
          </p>
        </FadeIn>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col gap-24">
          <div className="grid grid-cols-2 gap-x-24 gap-y-24">
            {regularServices.map((cat, i) => (
              <FadeIn key={cat.category} delay={i * 0.1} className="flex flex-col gap-8">
                <h2 className="font-display text-4xl text-charcoal border-b border-sand pb-4">{cat.category}</h2>
                <div className="flex flex-col gap-6">
                  {cat.services.map((svc) => (
                    <div key={svc.name} className="flex flex-col gap-1">
                      <div className="flex justify-between items-baseline gap-4">
                        <div className="flex items-center gap-3">
                          <span className="font-sans font-medium text-charcoal text-lg">{svc.name}</span>
                          {svc.featured && (
                            <span className="bg-sage/20 text-sage-dark text-xs px-2 py-0.5 rounded-full font-medium tracking-wide">
                              Non-toxic
                            </span>
                          )}
                        </div>
                        <div className="flex-1 border-b border-dotted border-charcoal/20"></div>
                        <span className="font-sans text-charcoal text-lg whitespace-nowrap">{svc.price}</span>
                      </div>
                      {svc.note && <span className="text-sm text-muted">{svc.note}</span>}
                      {svc.description && <span className="text-sm text-muted">{svc.description}</span>}
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Packages Section */}
          {packages && (
            <FadeIn delay={0.4}>
              <div className="bg-blush-light/50 p-12 rounded-2xl border border-blush/20">
                <h2 className="font-display text-4xl text-charcoal mb-8 text-center">{packages.category}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-6">
                  {packages.services.map((svc) => (
                    <div key={svc.name} className="flex justify-between items-baseline gap-4">
                      <span className="font-sans font-medium text-charcoal text-lg">{svc.name}</span>
                      <div className="flex-1 border-b border-dotted border-charcoal/20"></div>
                      <span className="font-sans text-charcoal text-lg whitespace-nowrap">{svc.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <FadeIn>
            <ServiceAccordion categories={services} />
          </FadeIn>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}
