import BookingWizard from "@/components/booking/BookingWizard";
import FadeIn from "@/components/FadeIn";

export default function BookOnlinePage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <FadeIn className="mb-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6">
            Book <span className="italic text-charcoal">Online</span>
          </h1>
          <p className="text-lg md:text-xl text-muted font-sans max-w-2xl">
            Select your services, choose a time, and we'll take care of the rest.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <BookingWizard />
        </FadeIn>
      </div>
    </div>
  );
}
