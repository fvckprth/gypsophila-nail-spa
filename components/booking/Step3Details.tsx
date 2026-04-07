"use client";

import { BookingState } from "./BookingWizard";

interface Step3Props {
  state: BookingState;
  updateState: (updates: Partial<BookingState>) => void;
  nextStep: () => void;
}

export default function Step3Details({ state, updateState, nextStep }: Step3Props) {
  const { guestDetails } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateState({
      guestDetails: {
        ...guestDetails,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="font-sans text-sm text-muted uppercase tracking-wider">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={guestDetails.firstName}
            onChange={handleChange}
            className="bg-transparent border-b border-sand/50 py-3 text-charcoal font-sans text-lg focus:outline-none focus:border-blush transition-colors placeholder:text-sand"
            placeholder="Jane"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="font-sans text-sm text-muted uppercase tracking-wider">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={guestDetails.lastName}
            onChange={handleChange}
            className="bg-transparent border-b border-sand/50 py-3 text-charcoal font-sans text-lg focus:outline-none focus:border-blush transition-colors placeholder:text-sand"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-sans text-sm text-muted uppercase tracking-wider">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={guestDetails.phone}
            onChange={handleChange}
            className="bg-transparent border-b border-sand/50 py-3 text-charcoal font-sans text-lg focus:outline-none focus:border-blush transition-colors placeholder:text-sand"
            placeholder="(555) 123-4567"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-sans text-sm text-muted uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={guestDetails.email}
            onChange={handleChange}
            className="bg-transparent border-b border-sand/50 py-3 text-charcoal font-sans text-lg focus:outline-none focus:border-blush transition-colors placeholder:text-sand"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="notes" className="font-sans text-sm text-muted uppercase tracking-wider">
          Special Requests (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={guestDetails.notes}
          onChange={handleChange}
          className="bg-transparent border-b border-sand/50 py-3 text-charcoal font-sans text-lg focus:outline-none focus:border-blush transition-colors placeholder:text-sand resize-none"
          placeholder="Any allergies, nail conditions, or specific requests..."
        />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="w-full sm:w-auto bg-charcoal hover:bg-black text-cream text-base font-medium px-12 py-4 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:ring-charcoal shadow-sm"
        >
          Confirm Appointment
        </button>
      </div>
    </form>
  );
}
