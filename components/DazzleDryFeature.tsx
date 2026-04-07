import { Leaf, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function DazzleDryFeature() {
  return (
    <section className="bg-sage/10 py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn className="flex flex-col gap-8">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight">
              Why <span className="italic text-charcoal">Dazzle Dry?</span>
            </h2>
            <p className="text-lg md:text-xl text-charcoal/80 font-sans leading-relaxed max-w-lg">
              The award-winning nail system that delivers the performance of gel without the harsh chemicals or UV light. It's the healthiest option for your natural nails.
            </p>
            <p className="text-sm italic text-muted font-display tracking-wide">
              One of the only salons in the West Village offering Dazzle Dry.
            </p>
            <div className="mt-4">
              <Link
                href="/book/online"
                className="inline-flex items-center gap-2 text-charcoal hover:text-sage font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage rounded-sm px-2 py-1 -ml-2"
              >
                Book a Dazzle Dry Mani &rarr;
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col gap-6">
            <div className="bg-cream p-6 rounded-full flex items-center gap-6 shadow-sm border border-sage/20">
              <div className="bg-sage/20 p-4 rounded-full text-charcoal">
                <Clock size={28} strokeWidth={1.5} />
              </div>
              <span className="font-sans text-lg text-charcoal font-medium">Air-dries in 5 minutes — no UV lamp</span>
            </div>
            
            <div className="bg-cream p-6 rounded-full flex items-center gap-6 shadow-sm border border-sage/20 ml-0 lg:ml-8">
              <div className="bg-sage/20 p-4 rounded-full text-charcoal">
                <Leaf size={28} strokeWidth={1.5} />
              </div>
              <span className="font-sans text-lg text-charcoal font-medium">Non-toxic, vegan & cruelty-free</span>
            </div>
            
            <div className="bg-cream p-6 rounded-full flex items-center gap-6 shadow-sm border border-sage/20 ml-0 lg:ml-16">
              <div className="bg-sage/20 p-4 rounded-full text-charcoal">
                <CheckCircle2 size={28} strokeWidth={1.5} />
              </div>
              <span className="font-sans text-lg text-charcoal font-medium">Lasts 14+ days without chipping</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
