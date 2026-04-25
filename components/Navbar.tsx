"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white border-b border-border-card/60 shadow-sm" 
          : "bg-transparent border-b-0"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className={`w-10 h-10 border border-gold flex items-center justify-center transition-colors ${isScrolled ? 'bg-white group-hover:bg-gold/5' : 'bg-transparent group-hover:bg-white/10'}`}>
            <span className="font-serif text-gold font-bold text-lg tracking-wider">
              AH
            </span>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-lg font-bold tracking-widest uppercase leading-tight transition-colors ${isScrolled ? 'text-text-dark' : 'text-white'}`}>
              Avenue
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium leading-none transition-colors ${isScrolled ? 'text-text-muted' : 'text-white/70'}`}>
              Real Estate
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10">
          {["Buy", "Sell", "Properties", "About Us", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Buy" ? "/buy" : item === "Sell" ? "/sell" : item === "Properties" ? "/properties" : item === "About Us" ? "/about" : item === "Blog" ? "/blog" : item === "Contact" ? "/contact" : `/#${item.toLowerCase().replace(" ", "-")}`}
              className={`text-[11px] font-medium uppercase tracking-[0.15em] transition-colors hover:text-gold ${isScrolled ? 'text-text-dark' : 'text-white'}`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className={`text-[11px] font-bold uppercase tracking-[0.15em] border border-gold px-8 py-3 transition-all duration-300 hover:bg-gold hover:border-gold hover:text-white ${isScrolled ? 'text-text-dark' : 'text-white'}`}
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-text-dark' : 'text-white'}`}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
