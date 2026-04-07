export interface Service {
  name: string;
  description?: string;
  price: string;
  featured?: boolean;
  note?: string;
}

export interface ServiceCategory {
  category: string;
  services: Service[];
}

export interface Review {
  quote: string;
  author: string;
  source?: string;
}

export interface Location {
  name: string;
  address: string;
  phone: string;
  hours: { days: string; time: string }[];
  mapEmbedUrl: string;
}

export interface Value {
  title: string;
  description: string;
  icon?: string;
}

export const services: ServiceCategory[] = [
  {
    category: 'Manicures',
    services: [
      { name: 'Classic Manicure', price: '$28' },
      { name: 'French Manicure', price: '$34' },
      { name: 'Buff Manicure', price: '$36' },
      { name: 'Change Polish', price: '$18' },
      { name: 'Gel Manicure', price: '$49' },
      { name: 'Dazzle Dry Manicure', price: '$38', featured: true, note: 'Non-toxic · Air-dries in 5 min' },
      { name: 'SNS Powder Gel', price: '$68' },
      { name: 'Extension Tips / Hard Gel', price: '$120' },
    ],
  },
  {
    category: 'Pedicures',
    services: [
      { name: 'Classic Pedicure', price: '$42' },
      { name: 'French Pedicure', price: '$47' },
      { name: 'Buff & Shine Pedicure', price: '$50' },
      { name: 'Dazzle Dry Pedicure', price: '$52', featured: true, note: 'Non-toxic · Air-dries in 5 min' },
      { name: 'Gel Pedicure', price: '$68' },
      { name: 'Spa Pedicure', price: '$80' },
      { name: 'Gel Pedicure + Spa', price: '$125' },
      { name: 'Change Polish', price: '$22' },
      { name: 'Callus Removal', price: '$16', note: 'Add-on' },
    ],
  },
  {
    category: 'Waxing',
    services: [
      { name: 'Eyebrow', price: '$20' },
      { name: 'Lip', price: '$15' },
      { name: 'Chin', price: '$15' },
      { name: 'Underarm', price: '$30' },
      { name: 'Half Arm', price: '$40' },
      { name: 'Full Arm', price: '$55' },
      { name: 'Half Leg', price: '$50' },
      { name: 'Full Leg', price: '$70' },
      { name: 'Regular Bikini', price: '$32' },
      { name: 'Brazilian', price: '$75' },
    ],
  },
  {
    category: 'Body Work',
    services: [
      { name: 'Back Rub (10 min)', price: '$18' },
      { name: 'Foot Rub (10 min)', price: '$18' },
      { name: 'Deep Tissue Massage (30 min)', price: '$60' },
      { name: 'Deep Tissue Massage (60 min)', price: '$120' },
    ],
  },
  {
    category: 'Packages',
    services: [
      { name: 'Mani + Pedi', price: '$68' },
      { name: 'Gel Mani + Pedi', price: '$85' },
      { name: 'Gel Mani + Gel Pedi', price: '$108' },
      { name: 'Mani + 10min Massage', price: '$45' },
      { name: 'Pedi + 10min Massage', price: '$58' },
      { name: 'Gel Mani + 10min Massage', price: '$65' },
      { name: 'Mani + Pedi + 10min Massage', price: '$85' },
      { name: 'Gel Mani + Pedi + 10min Massage', price: '$102' },
    ],
  },
];

export const reviews: Review[] = [
  {
    quote: "I didn't feel rushed at all. They also didn't try to upsell me on anything... The salon is peaceful and calm.",
    author: "Emily H.",
    source: "Yelp",
  },
  {
    quote: "Best manicure in NYC.",
    author: "Melissa M.",
    source: "Google",
  },
  {
    quote: "Always quick, efficient, clean and friendly service.",
    author: "Zehra M.",
    source: "Yelp",
  },
];

export const locations: Location[] = [
  {
    name: "West Village",
    address: "647 Hudson St, New York, NY 10014",
    phone: "(212) 603-9799",
    hours: [
      { days: "Mon–Fri", time: "10:30 AM – 7:30 PM" },
      { days: "Sat–Sun", time: "10:00 AM – 7:00 PM" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.279617711467!2d-74.0028212!3d40.733878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25993e50b1aeb%3A0x8e8264e138a0f5a7!2s647%20Hudson%20St%2C%20New%20York%2C%20NY%2010014!5e0!3m2!1sen!2sus!4v1712500000000!5m2!1sen!2sus",
  }
];

export const values: Value[] = [
  {
    title: "Peaceful",
    description: "Steps from the energy of the Meatpacking District but intentionally calm. A neighborhood spa that believes beauty and wellness are the same thing.",
  },
  {
    title: "Non-Toxic",
    description: "The Dazzle Dry commitment — non-toxic, vegan, no UV light. Because what goes on your nails matters as much as how they look.",
  },
  {
    title: "Unhurried",
    description: "We don't rush. We don't upsell. We just do great work. Our technicians are artists who take the time to do it right.",
  },
];

export const siteConfig = {
  name: "Gypsophila Nail & Spa",
  phone: "(212) 603-9799",
  bookingUrl: "#", // Placeholder for future online booking
  yelp: "Gypsophila Nail & Spa",
  yelpUrl: "https://www.yelp.com/biz/gypsophila-nail-and-spa-new-york",
};
