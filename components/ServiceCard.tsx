import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  href: string;
}

export default function ServiceCard({ title, description, price, href }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-3 py-6 md:py-0 md:px-6 border-b md:border-b-0 md:border-l border-sand first:border-0 first:pt-0 md:first:pl-0">
      <h3 className="font-display text-2xl text-charcoal">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-sans text-sm text-charcoal">{price}</span>
        <Link 
          href={href}
          className="text-blush-dark hover:text-charcoal text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm px-1 -mx-1"
        >
          View menu &rarr;
        </Link>
      </div>
    </div>
  );
}
