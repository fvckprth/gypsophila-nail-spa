"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Step1Services from "./Step1Services";
import Step2DateTime from "./Step2DateTime";
import Step3Details from "./Step3Details";
import Step4Success from "./Step4Success";
import BookingSummary from "./BookingSummary";
import { Service } from "@/lib/content";

export interface BookingState {
  step: number;
  selectedServices: Service[];
  technician: string;
  date: Date | null;
  timeSlot: string | null;
  guestDetails: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    notes: string;
  };
}

export default function BookingWizard() {
  const [state, setState] = useState<BookingState>({
    step: 1,
    selectedServices: [],
    technician: "Any",
    date: null,
    timeSlot: null,
    guestDetails: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      notes: "",
    },
  });

  const updateState = (updates: Partial<BookingState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    setState((prev) => ({ ...prev, step: Math.min(prev.step + 1, 4) }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setState((prev) => ({ ...prev, step: Math.max(prev.step - 1, 1) }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <Step1Services state={state} updateState={updateState} />;
      case 2:
        return <Step2DateTime state={state} updateState={updateState} />;
      case 3:
        return <Step3Details state={state} updateState={updateState} nextStep={nextStep} />;
      case 4:
        return <Step4Success state={state} />;
      default:
        return <Step1Services state={state} updateState={updateState} />;
    }
  };

  const stepTitles = [
    "Select Services",
    "Date & Time",
    "Your Details",
    "Confirmed",
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
      <div className="flex-1 max-w-3xl">
        {state.step < 4 && (
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-charcoal italic">
              Step {state.step} of 3 — {stepTitles[state.step - 1]}
            </h2>
            {state.step > 1 && (
              <button
                onClick={prevStep}
                className="mt-4 text-muted hover:text-charcoal text-sm font-sans transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm px-1 -mx-1"
              >
                &larr; Back
              </button>
            )}
          </div>
        )}

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={state.step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {state.step < 4 && (
        <div className="lg:w-[380px] shrink-0">
          <div className="sticky top-32">
            <BookingSummary state={state} nextStep={nextStep} />
          </div>
        </div>
      )}
    </div>
  );
}
