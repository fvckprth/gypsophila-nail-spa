import HeroSection from "@/components/HeroSection";
import PhilosophyStrip from "@/components/PhilosophyStrip";
import DazzleDryFeature from "@/components/DazzleDryFeature";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import GalleryGrid from "@/components/GalleryGrid";
import BookingCTA from "@/components/BookingCTA";
import FadeIn from "@/components/FadeIn";
import { reviews } from "@/lib/content";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <PhilosophyStrip />
      
      <DazzleDryFeature />

      {/* Services Preview */}
      <section className="py-32 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">
              What we <span className="italic text-charcoal">offer</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            <FadeIn delay={0.1}>
              <ServiceCard
                title="Manicures"
                description="Classic, gel, and our signature Dazzle Dry treatments."
                price="from $28"
                href="/services"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <ServiceCard
                title="Pedicures"
                description="Restorative foot care including spa and gel options."
                price="from $42"
                href="/services"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <ServiceCard
                title="Body Work"
                description="Deep tissue massage and targeted rub treatments."
                price="from $18"
                href="/services"
              />
            </FadeIn>
            <FadeIn delay={0.4}>
              <ServiceCard
                title="Waxing"
                description="Gentle, precise hair removal services."
                price="from $15"
                href="/services"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 bg-sand/10">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="mb-16 flex flex-col gap-4">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">
              What our <span className="italic text-charcoal">clients say</span>
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex text-blush-dark">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-sans text-charcoal font-medium">4.3 stars · 168+ reviews</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            {reviews.map((review, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <ReviewCard {...review} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-32 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">
              Our <span className="italic text-charcoal">work</span>
            </h2>
          </FadeIn>
          
          <GalleryGrid preview={true} />
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
