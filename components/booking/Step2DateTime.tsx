"use client";

import { useState } from "react";
import { BookingState } from "./BookingWizard";

interface Step2Props {
  state: BookingState;
  updateState: (updates: Partial<BookingState>) => void;
}

const technicians = ["Any", "Sherry", "Cici", "Ken"];

// Generate next 14 days
const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push(d);
  }
  return dates;
};

const DUMMY_DATES = generateDates();

const DUMMY_TIMES = [
  "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", 
  "1:00 PM", "1:30 PM", "2:00 PM", "3:30 PM", 
  "4:00 PM", "5:00 PM", "6:00 PM", "6:30 PM"
];

export default function Step2DateTime({ state, updateState }: Step2Props) {
  const [selectedDateObj, setSelectedDateObj] = useState<Date | null>(state.date);

  const handleDateSelect = (d: Date) => {
    setSelectedDateObj(d);
    updateState({ date: d, timeSlot: null }); // Reset time when date changes
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Technician Selection */}
      <div className="flex flex-col gap-6">
        <h3 className="font-display text-2xl text-charcoal">Select Technician</h3>
        <div className="flex flex-wrap gap-3">
          {technicians.map((tech) => (
            <button
              key={tech}
              onClick={() => updateState({ technician: tech })}
              className={`px-6 py-3 rounded-full font-sans text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush ${
                state.technician === tech
                  ? "bg-charcoal text-cream shadow-sm"
                  : "bg-cream-dark/50 text-charcoal hover:bg-sand/40 border border-sand/40"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="flex flex-col gap-6">
        <h3 className="font-display text-2xl text-charcoal">Select Date</h3>
        <div className="flex overflow-x-auto pb-4 gap-3 snap-x hide-scrollbar">
          {DUMMY_DATES.map((d, i) => {
            const isSelected = selectedDateObj?.toDateString() === d.toDateString();
            const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
            const dayNum = d.getDate();
            const monthName = d.toLocaleDateString("en-US", { month: "short" });

            return (
              <button
                key={i}
                onClick={() => handleDateSelect(d)}
                className={`snap-start shrink-0 w-20 flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush ${
                  isSelected
                    ? "bg-blush-light border-blush shadow-sm"
                    : "bg-cream-dark/30 border-sand/40 hover:bg-cream-dark hover:border-sand"
                } border`}
              >
                <span className={`text-xs uppercase tracking-wider mb-1 ${isSelected ? "text-charcoal/80" : "text-muted"}`}>
                  {dayName}
                </span>
                <span className={`font-display text-2xl ${isSelected ? "text-charcoal" : "text-charcoal"}`}>
                  {dayNum}
                </span>
                <span className={`text-xs ${isSelected ? "text-charcoal/80" : "text-muted"}`}>
                  {monthName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDateObj && (
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="font-display text-2xl text-charcoal">Select Time</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {DUMMY_TIMES.map((time) => {
              const isSelected = state.timeSlot === time;
              return (
                <button
                  key={time}
                  onClick={() => updateState({ timeSlot: time })}
                  className={`py-3 rounded-xl font-sans text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush ${
                    isSelected
                      ? "bg-charcoal text-cream shadow-sm"
                      : "bg-cream-dark/30 text-charcoal border border-sand/40 hover:bg-cream-dark hover:border-sand"
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
