"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const featured = [
  { id: 1, name: "Hydrating Face Wash", price: 499, img: "/images/logo-cropped.png", tag: "Bestseller" },
  { id: 2, name: "Revitalizing Serum", price: 1299, img: "/images/logo-cropped.png", tag: "New" },
  { id: 3, name: "Organic Clay Mask", price: 899, img: "/images/logo-cropped.png" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border pb-8">
          <div>
            <span className="font-sans text-sm uppercase tracking-widest text-primary/60 mb-4 block">02 — The Collection</span>
            <h2 className="font-heading text-4xl md:text-5xl text-primary">Signature Formulations</h2>
          </div>
          <Link href="/shop" className="group hidden md:flex items-center gap-4 mt-6 md:mt-0 font-sans text-sm uppercase tracking-widest text-primary">
            View Complete Line
            <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
              <div className="w-1.5 h-1.5 bg-primary group-hover:bg-background rounded-full transition-colors" />
            </div>
          </Link>
        </div>

        {/* Minimalist Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featured.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] bg-background mb-6 flex items-center justify-center overflow-hidden">
                <Image 
                  src={p.img} 
                  alt={p.name} 
                  width={200}
                  height={200}
                  className="w-1/2 h-auto object-contain opacity-70 group-hover:scale-105 transition-transform duration-700" 
                />
                
                {p.tag && (
                  <span className="absolute top-6 left-6 font-sans text-xs uppercase tracking-widest text-primary">
                    [{p.tag}]
                  </span>
                )}

                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-500" />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-heading text-2xl text-primary mb-2 group-hover:opacity-80 transition-opacity">{p.name}</h3>
                  <p className="font-sans text-sm text-foreground/60">50ml / 1.7 oz</p>
                </div>
                <span className="font-sans text-lg text-primary">₹{p.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
