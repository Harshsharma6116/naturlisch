"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Placeholder cart count for UI purposes
  const cartItemCount = 2;

  return (
    <header className="sticky top-0 z-30 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo-clean.png" 
            alt="Natürlisch" 
            width={120} 
            height={60} 
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide text-foreground">
          <Link href="/shop" className="hover:text-primary transition-colors">SHOP ALL</Link>
          <Link href="/about" className="hover:text-primary transition-colors">ABOUT</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">CONTACT</Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-4 text-primary">
          <button className="hidden md:flex p-2 hover:bg-secondary rounded-full transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          
          <Link href="/account/wishlist" className="p-2 hover:bg-secondary rounded-full transition-colors hidden sm:flex" aria-label="Wishlist">
            <Heart className="w-5 h-5" />
          </Link>
          
          <Link href="/cart" className="p-2 hover:bg-secondary rounded-full transition-colors relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>

          <Link href="/account" className="p-2 hover:bg-secondary rounded-full transition-colors hidden sm:flex" aria-label="Account">
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
