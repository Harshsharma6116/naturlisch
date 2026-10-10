"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";

// We mock the products since DB is not connected right now
const featured = [
  { id: 1, name: "Hydrating Face Wash", price: 499, img: "/images/logo-clean.png" },
  { id: 2, name: "Revitalizing Serum", price: 1299, compare: 1499, img: "/images/logo-clean.png" },
  { id: 3, name: "Organic Clay Mask", price: 899, img: "/images/logo-clean.png" },
  { id: 4, name: "Nourishing Night Cream", price: 1599, img: "/images/logo-clean.png" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading text-4xl text-primary mb-2">Featured Favorites</h2>
            <p className="font-sans text-foreground opacity-70">Curated specifically for your authentic self.</p>
          </div>
          <Link href="/shop" className="hidden md:inline-block font-sans text-primary underline underline-offset-4 hover:text-[#3A2A0F] transition-colors">
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-card rounded-2xl aspect-square mb-4 p-6 flex items-center justify-center border border-border overflow-hidden">
                <Image 
                  src={p.img} 
                  alt={p.name} 
                  width={200}
                  height={200}
                  className="w-3/4 h-3/4 object-contain opacity-80 group-hover:scale-110 transition-transform duration-500" 
                />
                
                {p.compare && (
                  <span className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                    Sale
                  </span>
                )}
                
                <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-primary hover:text-primary-foreground">
                  <Heart className="w-4 h-4" />
                </button>
                
                <button className="absolute bottom-4 left-4 right-4 bg-primary text-primary-foreground py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all font-sans text-sm font-semibold flex justify-center items-center gap-2 shadow-lg hover:bg-[#3A2A0F]">
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
              </div>
              <h3 className="font-heading text-xl text-primary truncate">{p.name}</h3>
              <div className="flex gap-2 items-baseline mt-1 font-sans">
                <span className="font-semibold text-foreground">₹{p.price}</span>
                {p.compare && (
                  <span className="text-sm text-foreground opacity-50 line-through">₹{p.compare}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/shop" className="inline-block border border-primary text-primary font-sans px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
