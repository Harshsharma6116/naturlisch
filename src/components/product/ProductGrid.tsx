import React from 'react';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: any[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="py-20 text-center flex flex-col items-center justify-center">
        <h3 className="font-heading text-2xl text-primary mb-2">No products found</h3>
        <p className="font-sans text-foreground/60">Try adjusting your filters to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
