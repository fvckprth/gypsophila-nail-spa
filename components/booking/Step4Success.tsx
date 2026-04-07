"use client";

import { BookingState } from "./BookingWizard";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface Step4Props {
  state: BookingState;
}

export default function Step4Success({ state }: Step4Props) {
  const { guestDetails, date, timeSlot } = state;
  const formattedDate = date ? date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "";

  return (
    <div className="flex flex-col items-center text-center py-12 px-4">
      <div className="bg-sage/20 p-6 rounded-full text-sage-dark mb-8">
        <CheckCircle2 size={48} strokeWidth={1.5} />
      </div>
      
      <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
        You're all set, <span className="italic text-charcoal">{guestDetails.firstName}</span>.
      </h2>
      
      <p className="text-lg text-muted font-sans max-w-md mb-12">
        We've received your appointment request for {formattedDate} at {timeSlot}. A confirmation email has been sent to {guestDetails.email}.
      </p>

      <div className="bg-cream-dark/50 p-8 rounded-2xl border border-sand/40 w-full max-w-md mb-12 flex flex-col gap-4 text-left">
        <h3 className="font-display text-2xl text-charcoal border-b border-sand pb-4">
          What to expect
        </h3>
        <ul className="flex flex-col gap-3 font-sans text-sm text-charcoal/80">
          <li className="flex items-start gap-2">
            <span className="text-sage mt-0.5">•</span>
            Please arrive 5 minutes early to choose your colors.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sage mt-0.5">•</span>
            If you need to cancel, please let us know 24 hours in advance.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sage mt-0.5">•</span>
            We are located at 647 Hudson St, across from Equinox.
          </li>
        </ul>
      </div>

      <Link
        href="/"
        className="text-charcoal hover:text-blush-dark font-sans font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm px-2 py-1"
      >
        &larr; Return to Home
      </Link>
    </div>
  );
}
