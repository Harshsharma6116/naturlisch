import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    slug: string;
    price: number;
    compareAtPrice?: number;
    images: string[];
    shortDescription: string;
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <div className="group flex flex-col gap-4">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#Fdf6ed] rounded-lg">
        {hasDiscount && (
          <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded z-10">
            SALE
          </span>
        )}
        
        <button className="absolute top-3 right-3 p-2 bg-white/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white/80 hover:text-destructive">
          <Heart className="w-4 h-4" />
        </button>

        <Link href={'/shop/' + product.slug}>
          <img 
            src={product.images[0] || '/images/products/hero-product.webp'} 
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Quick Add Button (Desktop hover) */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-md font-sans text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-primary/90">
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        <Link href={'/shop/' + product.slug} className="hover:underline decoration-primary/30 underline-offset-4">
          <h3 className="font-heading text-xl text-foreground">{product.name}</h3>
        </Link>
        <p className="font-sans text-sm text-foreground/60 mt-1 line-clamp-1">{product.shortDescription}</p>
        
        <div className="flex items-center gap-3 mt-2">
          <span className="font-sans font-medium text-foreground">₹{product.price}</span>
          {hasDiscount && (
            <span className="font-sans text-sm text-foreground/40 line-through">₹{product.compareAtPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
