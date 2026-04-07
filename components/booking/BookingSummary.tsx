"use client";

import { BookingState } from "./BookingWizard";

interface BookingSummaryProps {
  state: BookingState;
  nextStep: () => void;
}

export default function BookingSummary({ state, nextStep }: BookingSummaryProps) {
  const { step, selectedServices, date, timeSlot, technician } = state;

  const totalCost = selectedServices.reduce((sum, service) => {
    const priceMatch = service.price.match(/\d+/);
    return sum + (priceMatch ? parseInt(priceMatch[0], 10) : 0);
  }, 0);

  const canProceed = () => {
    if (step === 1) return selectedServices.length > 0;
    if (step === 2) return date !== null && timeSlot !== null;
    return true; // Step 3 handles its own validation before calling nextStep
  };

  return (
    <div className="bg-cream-dark/50 rounded-2xl p-8 border border-sand/40 flex flex-col gap-8">
      <h3 className="font-display text-2xl text-charcoal border-b border-sand pb-4">
        Your Appointment
      </h3>

      <div className="flex flex-col gap-6">
        {selectedServices.length === 0 ? (
          <p className="text-muted font-sans text-sm italic">No services selected yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {selectedServices.map((svc, i) => (
              <div key={i} className="flex justify-between items-start gap-4 font-sans text-sm">
                <span className="text-charcoal font-medium">{svc.name}</span>
                <span className="text-charcoal whitespace-nowrap">{svc.price}</span>
              </div>
            ))}
          </div>
        )}

        {(date || timeSlot || technician !== "Any") && (
          <div className="flex flex-col gap-3 pt-6 border-t border-sand/50 font-sans text-sm">
            {technician !== "Any" && (
              <div className="flex justify-between text-charcoal">
                <span className="text-muted">Technician</span>
                <span className="font-medium">{technician}</span>
              </div>
            )}
            {date && (
              <div className="flex justify-between text-charcoal">
                <span className="text-muted">Date</span>
                <span className="font-medium">
                  {date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                </span>
              </div>
            )}
            {timeSlot && (
              <div className="flex justify-between text-charcoal">
                <span className="text-muted">Time</span>
                <span className="font-medium">{timeSlot}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between items-center pt-6 border-t border-sand/50">
          <span className="font-sans font-medium text-charcoal">Estimated Total</span>
          <span className="font-sans font-medium text-charcoal text-lg">${totalCost}</span>
        </div>
      </div>

      {step < 3 && (
        <button
          onClick={nextStep}
          disabled={!canProceed()}
          className="w-full bg-charcoal hover:bg-black disabled:bg-sand disabled:text-muted disabled:cursor-not-allowed text-cream text-base font-medium px-8 py-4 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-dark focus-visible:ring-charcoal shadow-sm mt-4"
        >
          Continue
        </button>
      )}
    </div>
  );
}
