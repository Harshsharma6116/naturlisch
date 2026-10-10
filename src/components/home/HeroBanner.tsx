"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] bg-background flex flex-col lg:flex-row overflow-hidden border-b border-border">
      
      {/* Left Content (Text) */}
      <div className="flex-1 flex flex-col justify-center px-8 py-20 lg:px-24 lg:py-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-sm tracking-[0.3em] text-primary/60 uppercase mb-8 block">
            The Essence of Nature
          </span>
          
          <h1 className="font-heading text-6xl lg:text-[7rem] leading-[0.85] text-primary mb-8 tracking-tight">
            Real <br />
            <span className="italic text-secondary-foreground/90 font-light ml-8 lg:ml-16">Beauty.</span>
          </h1>
          
          <p className="font-sans text-lg text-foreground/80 max-w-md leading-relaxed mb-12">
            Authentic personal care crafted from the earth. Discover formulations designed for grounded elegance and natural radiance.
          </p>
          
          <Link 
            href="/shop" 
            className="group flex items-center gap-6 font-sans text-sm uppercase tracking-widest text-primary hover:text-[#3A2A0F] transition-colors w-fit"
          >
            <span className="border-b border-primary pb-1 group-hover:border-[#3A2A0F] transition-colors">
              Explore Collection
            </span>
            <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Right Content (Editorial Image/Video Slot) */}
      <div className="flex-1 relative min-h-[50vh] lg:min-h-full bg-secondary overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Conceptual Image Placeholder - A soft gradient replacing an actual photo for now */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F1DDC4] to-[#E3C5A5]" />
          
          {/* Decorative element representing a product bottle/shape in the editorial shoot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[70%] bg-[#FFF8F0]/40 backdrop-blur-md rounded-[100px] border border-white/30 shadow-2xl flex items-center justify-center">
            <span className="font-heading text-primary/50 text-2xl text-center px-8">
              [Editorial Campaign Image Slot]
            </span>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
