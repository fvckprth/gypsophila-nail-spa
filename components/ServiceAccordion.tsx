"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { ServiceCategory } from "@/lib/content";

interface ServiceAccordionProps {
  categories: ServiceCategory[];
}

export default function ServiceAccordion({ categories }: ServiceAccordionProps) {
  return (
    <Accordion.Root type="single" defaultValue={categories[0].category} collapsible className="w-full">
      {categories.map((cat) => (
        <Accordion.Item
          key={cat.category}
          value={cat.category}
          className="border-b border-sand/50 overflow-hidden"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm group">
              <span className="font-display text-3xl text-charcoal group-hover:text-blush-dark transition-colors">
                {cat.category}
              </span>
              <ChevronDown
                size={20}
                className="text-muted transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-charcoal data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <div className="pb-8 flex flex-col gap-6">
              {cat.services.map((svc) => (
                <div key={svc.name} className="flex flex-col gap-1">
                  <div className="flex justify-between items-baseline gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-sans font-medium text-charcoal">{svc.name}</span>
                      {svc.featured && (
                        <span className="bg-sage/20 text-sage-dark text-xs px-2 py-0.5 rounded-full font-medium tracking-wide">
                          Non-toxic
                        </span>
                      )}
                    </div>
                    <div className="flex-1 border-b border-dotted border-charcoal/20"></div>
                    <span className="font-sans text-charcoal whitespace-nowrap">{svc.price}</span>
                  </div>
                  {svc.note && <span className="text-sm text-muted">{svc.note}</span>}
                  {svc.description && <span className="text-sm text-muted">{svc.description}</span>}
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
