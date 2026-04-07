"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { services, Service } from "@/lib/content";
import { BookingState } from "./BookingWizard";

interface Step1Props {
  state: BookingState;
  updateState: (updates: Partial<BookingState>) => void;
}

export default function Step1Services({ state, updateState }: Step1Props) {
  const handleToggleService = (svc: Service) => {
    const isSelected = state.selectedServices.some((s) => s.name === svc.name);
    if (isSelected) {
      updateState({
        selectedServices: state.selectedServices.filter((s) => s.name !== svc.name),
      });
    } else {
      updateState({
        selectedServices: [...state.selectedServices, svc],
      });
    }
  };

  return (
    <Tabs.Root defaultValue={services[0].category} className="flex flex-col gap-8">
      <Tabs.List className="flex flex-wrap gap-2 border-b border-sand/50 pb-4">
        {services.map((cat) => (
          <Tabs.Trigger
            key={cat.category}
            value={cat.category}
            className="px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush data-[state=active]:bg-charcoal data-[state=active]:text-cream data-[state=inactive]:bg-cream-dark data-[state=inactive]:text-charcoal data-[state=inactive]:hover:bg-sand/40"
          >
            {cat.category}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {services.map((cat) => (
        <Tabs.Content key={cat.category} value={cat.category} className="focus:outline-none">
          <div className="flex flex-col gap-4">
            {cat.services.map((svc) => {
              const isSelected = state.selectedServices.some((s) => s.name === svc.name);
              return (
                <button
                  key={svc.name}
                  onClick={() => handleToggleService(svc)}
                  className={`flex items-center justify-between p-6 rounded-xl border text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush ${
                    isSelected
                      ? "bg-blush-light/30 border-blush shadow-sm"
                      : "bg-cream-dark/30 border-sand/40 hover:bg-cream-dark/60 hover:border-sand"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <span className={`font-sans text-lg ${isSelected ? "font-medium text-charcoal" : "text-charcoal"}`}>
                        {svc.name}
                      </span>
                      {svc.featured && (
                        <span className="bg-sage/20 text-sage-dark text-xs px-2 py-0.5 rounded-full font-medium tracking-wide">
                          Non-toxic
                        </span>
                      )}
                    </div>
                    {(svc.description || svc.note) && (
                      <span className="text-sm text-muted">
                        {svc.description || svc.note}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`font-sans ${isSelected ? "font-medium text-charcoal" : "text-charcoal"}`}>
                      {svc.price}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-charcoal border-charcoal text-cream"
                          : "bg-transparent border-sand text-transparent"
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
