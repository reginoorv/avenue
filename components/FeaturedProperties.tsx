import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bed, Bath, MapPin } from "lucide-react";

const properties = [
  {
    id: 1,
    image: "/property-beverly.jpg",
    location: "Beverly Hills, CA",
    name: "Modern Hillside Estate",
    price: "$12,750,000",
    beds: 5,
    baths: 6.5,
  },
  {
    id: 2,
    image: "/property-miami.jpg",
    location: "Miami Beach, FL",
    name: "Oceanfront Masterpiece",
    price: "$9,850,000",
    beds: 4,
    baths: 5.5,
  },
  {
    id: 3,
    image: "/property-newyork.jpg",
    location: "New York, NY",
    name: "Upper East Side Residence",
    price: "$7,950,000",
    beds: 3,
    baths: 4,
  },
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="bg-warm py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] block mb-4">
              Featured Properties
            </span>
            <h2 className="font-serif text-text-dark text-4xl md:text-5xl font-bold">
              Handpicked Exceptional Homes
            </h2>
            <div className="w-16 h-1 bg-gold mt-8" />
          </div>
          
          <Link 
            href="#all-properties"
            className="mt-8 md:mt-0 inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.15em] hover:text-gold/80 transition-colors"
          >
            View All Properties
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="group bg-white border border-border-card flex flex-col hover:-translate-y-2 transition-transform duration-500 ease-out shadow-sm hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-text-muted mb-3 text-sm">
                  <MapPin className="w-4 h-4 text-text-muted" strokeWidth={1.5} />
                  <span>{property.location}</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-4">
                  {property.name}
                </h3>
                
                <p className="text-gold font-medium text-xl mb-8">
                  {property.price}
                </p>
                
                <div className="mt-auto pt-6 border-t border-border-card flex items-center justify-between text-text-muted text-sm">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <span>{property.baths} Baths</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
