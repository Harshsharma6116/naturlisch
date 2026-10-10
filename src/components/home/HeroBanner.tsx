"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TopDownJar } from "@/components/ui/TopDownJar";

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
          <span className="font-sans text-base font-bold tracking-[0.3em] text-leafy-green uppercase mb-8 block">
            The Essence of Nature
          </span>
          
          <h1 className="font-heading text-6xl lg:text-[7rem] leading-[0.85] text-wavy-brown mb-8 tracking-tight">
            Real <br />
            <span className="italic text-wavy-brown font-light ml-8 lg:ml-16">Beauty.</span>
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

      {/* Right Content (Animated Product Stage) */}
      <div className="flex-1 relative min-h-[50vh] lg:min-h-full bg-[#E8D4C0] overflow-hidden flex items-center justify-center">
        
        {/* Soft atmospheric background glow */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-[#F1DDC4] to-[#E8D4C0]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        {/* The Pedestal / Spotlight for the future animated product */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Slow pulsing aura */}
          <motion.div 
            className="absolute w-[80%] max-w-[500px] aspect-square rounded-full bg-white/40 blur-3xl mix-blend-overlay"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

            {/* Floating Split Jar Effect */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-8 z-10"
              animate={{ y: [-15, 15, -15] }} // Uplifted effect for the whole jar
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-full h-full max-w-[300px] max-h-[300px] drop-shadow-2xl">
                
                {/* JAR BODY (Bottom 75%) */}
                <img 
                  src="/images/products/product_8_transparent.webp" 
                  alt="Natürlisch Red Scrub Body" 
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{ clipPath: "polygon(0 23%, 100% 23%, 100% 100%, 0 100%)" }}
                />

                {/* ROTATING LID (Top 25%) */}
                <motion.div
                  className="absolute inset-0 w-full h-full origin-bottom"
                  animate={{ 
                    y: [-5, -25, -5], // Lid lifts off slightly
                    rotate: [-3, 12, -3] // Lid rotates while lifted
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img 
                    src="/images/products/product_8_transparent.webp" 
                    alt="Natürlisch Red Scrub Lid" 
                    className="w-full h-full object-contain"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 23%, 0 23%)" }}
                  />
                </motion.div>
                
              </div>
            </motion.div>

        </div>
      </div>

    </section>
  );
}
