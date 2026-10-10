import React from 'react';
import { ProductFilters } from '@/components/product/ProductFilters';
import { ProductGrid } from '@/components/product/ProductGrid';

// Mock data since MongoDB is not connected yet
const mockProducts = [
  { _id: '1', name: 'Deep Hydration Blue Scrub', slug: 'deep-hydration-blue-scrub', price: 899, compareAtPrice: 1299, shortDescription: 'Exfoliating and cooling formula', images: ['/images/products/product_png_1.webp'] },
  { _id: '2', name: 'Espresso Coffee Balm', slug: 'espresso-coffee-balm', price: 549, shortDescription: 'Rich anti-oxidant wake up call', images: ['/images/products/product_1.webp'] },
  { _id: '3', name: 'Matcha Green Clay', slug: 'matcha-green-clay', price: 1199, shortDescription: 'Detoxifying natural pore cleanser', images: ['/images/products/product_2.webp'] },
  { _id: '4', name: 'Lavender Night Cream', slug: 'lavender-night-cream', price: 999, compareAtPrice: 1199, shortDescription: 'Overnight soothing repair', images: ['/images/products/product_8.webp'] },
  { _id: '5', name: 'Rosewater Toner', slug: 'rosewater-toner', price: 450, shortDescription: 'Hydrating mist for all day freshness', images: ['/images/products/product_5.webp'] },
  { _id: '6', name: 'Vitamin C Serum', slug: 'vitamin-c-serum', price: 1499, shortDescription: 'Brightening daily drops', images: ['/images/products/product_6.webp'] },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      
      {/* Page Header */}
      <div className="bg-[#E8D4C0]/30 py-16 mb-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4">The Collection</h1>
          <p className="font-sans text-foreground/70 max-w-xl mx-auto">
            Discover our full range of natural, authentic skincare products designed to bring out your inner radiance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <ProductFilters />
          </aside>

          {/* Product Grid area */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <span className="font-sans text-sm text-foreground/60">Showing {mockProducts.length} products</span>
              
              <select className="bg-transparent border-b border-border py-1 pr-8 font-sans text-sm text-foreground focus:outline-none cursor-pointer">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
            
            <ProductGrid products={mockProducts} />
          </main>

        </div>
      </div>
    </div>
  );
}
