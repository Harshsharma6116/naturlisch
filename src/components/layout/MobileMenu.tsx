"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-background z-50 flex flex-col p-6 shadow-xl"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-heading text-2xl text-primary">Natürlisch</span>
              <button onClick={onClose} className="p-2 text-primary" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-lg text-foreground font-sans">
              <Link href="/" onClick={onClose} className="hover:text-primary transition-colors">Home</Link>
              <Link href="/shop" onClick={onClose} className="hover:text-primary transition-colors">Shop All</Link>
              <Link href="/shop?gender=female" onClick={onClose} className="hover:text-primary transition-colors">Women's Skincare</Link>
              <Link href="/shop?gender=male" onClick={onClose} className="hover:text-primary transition-colors">Men's Skincare</Link>
              <Link href="/about" onClick={onClose} className="hover:text-primary transition-colors">Brand Story</Link>
              <Link href="/contact" onClick={onClose} className="hover:text-primary transition-colors">Contact</Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
