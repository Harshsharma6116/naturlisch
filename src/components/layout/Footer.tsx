"use client";

import Link from "next/link";
import Image from "next/image";
import { Camera, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3A2A0F] text-[#F1DDC4] py-16 border-t-4 border-primary">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="inline-block w-fit">
            <Image 
              src="/images/logo-cropped.png" 
              alt="Natürlisch" 
              width={240} 
              height={60} 
              className="h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="font-sans text-sm opacity-90 max-w-xs">
            Authentic personal care and a genuine approach to aesthetics with natural products.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="hover:text-white transition-colors" aria-label="Instagram"><Camera className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors" aria-label="Facebook"><Globe className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors" aria-label="Twitter"><MessageCircle className="w-5 h-5" /></Link>
          </div>
        </div>

        {/* Shop Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-xl mb-2">Shop</h4>
          <Link href="/shop" className="font-sans text-sm hover:underline opacity-90">All Products</Link>
          <Link href="/shop?gender=female" className="font-sans text-sm hover:underline opacity-90">Women's Skincare</Link>
          <Link href="/shop?gender=male" className="font-sans text-sm hover:underline opacity-90">Men's Skincare</Link>
          <Link href="/shop?type=bestsellers" className="font-sans text-sm hover:underline opacity-90">Bestsellers</Link>
        </div>

        {/* Support Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-xl mb-2">Support</h4>
          <Link href="/faq" className="font-sans text-sm hover:underline opacity-90">FAQ</Link>
          <Link href="/shipping" className="font-sans text-sm hover:underline opacity-90">Shipping & Returns</Link>
          <Link href="/contact" className="font-sans text-sm hover:underline opacity-90">Contact Us</Link>
          <Link href="/track-order" className="font-sans text-sm hover:underline opacity-90">Track Order</Link>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-xl mb-2">Join Our Newsletter</h4>
          <p className="font-sans text-sm opacity-90">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="flex flex-col gap-3 mt-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-4 py-3 bg-[#F1DDC4]/10 border border-[#F1DDC4]/30 rounded-md focus:outline-none focus:border-[#F1DDC4] text-[#F1DDC4] placeholder:text-[#F1DDC4]/50"
              required
            />
            <button 
              type="submit" 
              className="bg-[#F1DDC4] text-[#3A2A0F] font-semibold py-3 px-4 rounded-md hover:bg-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-[#F1DDC4]/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-xs opacity-70">
          &copy; 2026 Natürlisch. All rights reserved.
        </p>
        <div className="flex gap-4 font-sans text-xs opacity-70">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
