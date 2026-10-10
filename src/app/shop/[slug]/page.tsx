import React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8">
          <Link href="/shop" className="font-sans text-sm text-primary hover:underline">&larr; Back to Shop</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Images */}
          <div className="bg-[#Fdf6ed] aspect-square rounded-2xl flex items-center justify-center p-12">
            <h2 className="font-heading text-3xl text-primary opacity-50 text-center">Product Image<br/>{resolvedParams.slug}</h2>
          </div>
          
          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-2">Skincare</span>
            <h1 className="font-heading text-4xl lg:text-5xl text-foreground mb-4 capitalize">{resolvedParams.slug.replace(/-/g, ' ')}</h1>
            <span className="font-sans text-2xl text-primary mb-8">₹899</span>
            
            <p className="font-sans text-foreground/70 mb-8 leading-relaxed">
              This is a detailed description of the product. It deeply nourishes the skin while providing essential hydration. Crafted with organic symmetry and warm minimalism in mind.
            </p>
            
            <div className="flex gap-4">
              <button className="flex-1 bg-primary text-primary-foreground py-4 rounded-md font-sans text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
