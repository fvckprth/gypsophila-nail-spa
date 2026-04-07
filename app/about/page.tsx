import FadeIn from "@/components/FadeIn";
import BookingCTA from "@/components/BookingCTA";
import { values } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-32 bg-cream min-h-screen">
      <div className="container mx-auto px-4 md:px-8 mb-24">
        <FadeIn className="max-w-4xl mb-24">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight">
            Named for baby's breath — <span className="italic text-charcoal">quiet, delicate, and always beautiful.</span>
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          <FadeIn delay={0.2} className="lg:col-span-7 flex flex-col gap-8 text-lg md:text-xl text-charcoal/80 font-sans leading-relaxed">
            <p>
              The name "Gypsophila" — the flower that fills bouquets with gentle white — reflects the salon's philosophy: not the loudest presence, but the one that brings everything together.
            </p>
            <p>
              At 647 Hudson St, West Village — steps from the energy of the Meatpacking District but intentionally calm. A neighborhood spa that believes beauty and wellness are the same thing.
            </p>
            <p>
              The Dazzle Dry commitment — non-toxic, vegan, no UV light. Because what goes on your nails matters as much as how they look.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="lg:col-span-5">
            <div className="bg-sand/20 p-10 rounded-2xl border border-sand/40 flex flex-col gap-6">
              <h3 className="font-display text-3xl text-charcoal italic">Our Team</h3>
              <p className="text-charcoal/80 font-sans leading-relaxed">
                Our technicians are artists. Ask for Sherry. We take pride in our craft and our community.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5} className="border-t border-sand pt-24">
          <h2 className="font-display text-4xl md:text-5xl text-charcoal text-center mb-16">
            Our <span className="italic text-charcoal">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            {values.map((value, i) => (
              <div key={value.title} className="flex flex-col gap-4 text-center items-center">
                <h3 className="font-display text-3xl text-charcoal">{value.title}</h3>
                <p className="text-muted font-sans leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <BookingCTA />
    </div>
  );
}
