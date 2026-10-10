"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-secondary text-primary py-24 md:py-32">
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-heading text-5xl md:text-7xl mb-6 leading-tight">
            Real Beauty,<br /> Naturally.
          </h1>
          <p className="font-sans text-lg md:text-xl opacity-90 max-w-lg mx-auto md:mx-0 mb-8">
            Authentic personal care and a genuine approach to aesthetics. Discover products crafted with natural ingredients for radiant, grounded elegance.
          </p>
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-sans px-8 py-4 rounded-full text-lg hover:bg-[#3A2A0F] transition-all transform hover:scale-105 shadow-xl"
          >
            Shop Now <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Animated Product Showcase slot */}
        <motion.div 
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated decorative shapes */}
            <motion.div 
              className="absolute inset-0 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {/* Placeholder for actual product image */}
            <motion.div
              className="absolute inset-4 bg-background rounded-[40px] shadow-2xl flex items-center justify-center border border-primary/20"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-primary font-heading text-2xl text-center px-4 opacity-70">
                [Product Animation Slot]
              </span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
