import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* BACKGROUND IMAGE OVERLAY */}
      <div className="absolute inset-0 z-0 bg-navy">
        <Image
          src="/hero-mansion.jpg"
          alt="Luxury Mansion hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        {/* Gradient dark from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Exceptional Homes. Extraordinary Lives.
          </p>
          <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Find Your Place<br />
            in Something Rare
          </h1>
          <p className="text-white/80 text-lg font-light max-w-lg mb-10 leading-relaxed text-balance">
            Curated luxury properties in the world&apos;s most desirable locations.
          </p>
          
          <Link
            href="#properties"
            className="inline-flex items-center gap-3 bg-gold text-white text-xs font-bold uppercase tracking-[0.15em] px-10 py-5 hover:bg-gold/90 transition-colors"
          >
            Explore Properties 
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
