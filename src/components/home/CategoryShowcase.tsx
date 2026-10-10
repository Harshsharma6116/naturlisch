"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CategoryShowcase() {
  const categories = [
    {
      title: "Women's Skincare",
      desc: "Gentle, effective, authentic.",
      href: "/shop?gender=female",
      bg: "bg-background"
    },
    {
      title: "Men's Skincare",
      desc: "Grounded elegance for him.",
      href: "/shop?gender=male",
      bg: "bg-card"
    }
  ];

  return (
    <section className="py-20 bg-[#FFF8F0]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`relative group overflow-hidden rounded-3xl ${cat.bg} border border-border p-12 min-h-[300px] flex flex-col justify-center items-center text-center shadow-sm hover:shadow-xl transition-all duration-300`}
          >
            <h3 className="font-heading text-4xl text-primary mb-4 relative z-10">{cat.title}</h3>
            <p className="font-sans text-foreground opacity-80 mb-8 relative z-10">{cat.desc}</p>
            <Link 
              href={cat.href}
              className="font-sans text-primary border-b border-primary pb-1 flex items-center gap-2 hover:gap-4 transition-all relative z-10"
            >
              Explore <ArrowRight className="w-4 h-4" />
            </Link>
            
            {/* Hover overlay shape */}
            <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
