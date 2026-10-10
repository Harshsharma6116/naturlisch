'use client';
import React from 'react';

export function ProductFilters() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="font-heading text-lg mb-4 text-foreground">Category</h4>
        <div className="flex flex-col gap-2 font-sans text-sm text-foreground/70">
          <label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="checkbox" className="accent-primary" /> Men's Skincare</label>
          <label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="checkbox" className="accent-primary" /> Women's Skincare</label>
          <label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="checkbox" className="accent-primary" /> Unisex</label>
        </div>
      </div>

      <div>
        <h4 className="font-heading text-lg mb-4 text-foreground">Skin Type</h4>
        <div className="flex flex-col gap-2 font-sans text-sm text-foreground/70">
          <label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="checkbox" className="accent-primary" /> Oily</label>
          <label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="checkbox" className="accent-primary" /> Dry</label>
          <label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="checkbox" className="accent-primary" /> Combination</label>
          <label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="checkbox" className="accent-primary" /> Sensitive</label>
        </div>
      </div>
      
      <div>
        <h4 className="font-heading text-lg mb-4 text-foreground">Price Range</h4>
        <div className="flex flex-col gap-2 font-sans text-sm text-foreground/70">
          <label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="radio" name="price" className="accent-primary" /> Under ₹500</label>
          <label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="radio" name="price" className="accent-primary" /> ₹500 - ₹1000</label>
          <label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="radio" name="price" className="accent-primary" /> Over ₹1000</label>
        </div>
      </div>
    </div>
  );
}
