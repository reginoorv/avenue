import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Bed, Bath, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const exclusiveProperties = [
  {
    id: 1,
    image: "/property-beverly.jpg",
    location: "Beverly Hills, CA",
    name: "Modern Hillside Estate",
    description: "An architectural marvel offering panoramic views of Los Angeles, featuring a zero-edge infinity pool and smart home technology throughout.",
    price: "$12,750,000",
    beds: 5,
    baths: 6.5,
    sqft: "8,500",
  },
  {
    id: 2,
    image: "/property-miami.jpg",
    location: "Miami Beach, FL",
    name: "Oceanfront Masterpiece",
    description: "Direct ocean access with pristine private beach frontage, bespoke interiors, and expansive wrap-around terraces for seamless indoor-outdoor living.",
    price: "$9,850,000",
    beds: 4,
    baths: 5.5,
    sqft: "6,200",
  },
  {
    id: 3,
    image: "/property-newyork.jpg",
    location: "New York, NY",
    name: "Upper East Side Residence",
    description: "A stately limestone townhome blending classic pre-war elegance with modern luxury, mere steps from Central Park and Fifth Avenue.",
    price: "$7,950,000",
    beds: 3,
    baths: 4,
    sqft: "4,800",
  },
];

export default function PropertiesPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-navy">
          <Image
            src="/hero-mansion.jpg"
            alt="Luxury background pattern"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>

        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] block mb-4">
            Our Portfolio
          </span>
          <h1 className="font-serif text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Exclusive <br className="hidden md:block"/> Properties
          </h1>
          <p className="text-white/80 text-lg font-light mb-12 max-w-2xl mx-auto">
            Explore our definitive collection of luxury real estate, representing the pinnacle of architectural excellence and prestigious living.
          </p>
        </div>
      </section>

      {/* Properties List (Alternating Layout) */}
      <section className="bg-white py-24 md:py-32 flex-grow">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-24 md:gap-32">
            {exclusiveProperties.map((property, index) => (
              <div 
                key={property.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
              >
                {/* Image Col */}
                <div className="w-full lg:w-3/5 group relative overflow-hidden">
                  <div className="aspect-[4/3] md:aspect-[16/10] w-full relative">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  {/* Decorative Border Element */}
                  <div className={`absolute top-4 ${index % 2 === 1 ? 'right-4' : 'left-4'} bottom-4 ${index % 2 === 1 ? 'left-4' : 'right-4'} border border-white/30 pointer-events-none transform scale-[0.98] group-hover:scale-100 transition-transform duration-700`} />
                </div>
                
                {/* Content Col */}
                <div className="w-full lg:w-2/5 flex flex-col">
                  <div className="flex items-center gap-2 text-gold mb-4 text-xs font-bold uppercase tracking-[0.15em]">
                    <MapPin className="w-4 h-4 text-gold" strokeWidth={2} />
                    <span>{property.location}</span>
                  </div>
                  
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-4">
                    {property.name}
                  </h2>
                  
                  <p className="text-text-muted leading-relaxed mb-8">
                    {property.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border-card">
                    <div className="flex flex-col">
                      <span className="text-text-dark font-serif text-xl font-bold">{property.beds}</span>
                      <span className="text-[10px] text-text-muted uppercase tracking-wider font-bold">Beds</span>
                    </div>
                    <div className="flex flex-col border-l border-border-card pl-4">
                      <span className="text-text-dark font-serif text-xl font-bold">{property.baths}</span>
                      <span className="text-[10px] text-text-muted uppercase tracking-wider font-bold">Baths</span>
                    </div>
                    <div className="flex flex-col border-l border-border-card pl-4">
                      <span className="text-text-dark font-serif text-xl font-bold">{property.sqft}</span>
                      <span className="text-[10px] text-text-muted uppercase tracking-wider font-bold">Sq Ft</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-text-dark font-serif text-2xl font-bold">
                      {property.price}
                    </p>
                    <Link 
                      href="#" 
                      className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-text-dark hover:text-gold transition-colors"
                    >
                      View Details
                      <div className="w-8 h-8 rounded-full border border-border-card flex items-center justify-center group-hover:border-gold transition-colors">
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <h3 className="font-serif text-3xl font-bold text-text-dark mb-6">Looking for something specific?</h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Our portfolio includes exclusive off-market properties not listed publicly. Contact our agents for a personalized consultation.
            </p>
            <Link href="/buy" className="inline-block bg-gold hover:bg-gold/90 transition-colors text-white text-xs font-bold uppercase tracking-[0.15em] px-8 py-5">
              Access Full Inventory
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
