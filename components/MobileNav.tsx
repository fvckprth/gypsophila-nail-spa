"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface MobileNavProps {
  links: { name: string; href: string }[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="p-2 -mr-2 text-charcoal hover:text-blush-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-md">
          <Menu size={24} />
          <span className="sr-only">Open menu</span>
        </button>
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-cream p-6 shadow-xl flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <Dialog.Title className="font-display italic text-2xl text-charcoal flex items-center gap-2">
                    Gypsophila
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blush mt-1">
                      <circle cx="3" cy="3" r="1.5" fill="currentColor" />
                      <circle cx="9" cy="4" r="1.5" fill="currentColor" />
                      <circle cx="5" cy="9" r="1.5" fill="currentColor" />
                    </svg>
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button className="p-2 -mr-2 text-charcoal hover:text-blush-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-md">
                      <X size={24} />
                      <span className="sr-only">Close menu</span>
                    </button>
                  </Dialog.Close>
                </div>
                
                <div className="flex flex-col gap-6 flex-1">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-2xl font-display text-charcoal hover:text-blush-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-sm w-fit"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
