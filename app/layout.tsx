import type { Metadata } from "next";
import { cormorantGaramond, dmSans } from "@/lib/fonts";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gypsophila Nail & Spa | West Village NYC",
  description: "Non-toxic gel nails, Dazzle Dry manicures, pedicures, waxing & massage in the West Village. Walk-ins welcome at 647 Hudson St, NYC.",
  keywords: ["gypsophila nail spa", "non toxic nail salon west village", "dazzle dry nyc", "nail spa west village", "gel manicure west village nyc"],
  openGraph: {
    title: "Gypsophila Nail & Spa | West Village NYC",
    description: "Non-toxic nails, Dazzle Dry, and artisan care across from Equinox in the West Village.",
    url: "https://gypsophilanailspa.com",
    siteName: "Gypsophila Nail & Spa",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-cream focus:text-charcoal">
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
