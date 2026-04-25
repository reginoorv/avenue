import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASearch from "@/components/CTASearch";
import Image from "next/image";
import { Bed, Bath, MapPin } from "lucide-react";

const allProperties = [
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
  {
    id: 4,
    image: "/property-beverly.jpg", // Reuse for demo
    location: "Malibu, CA",
    name: "Pacific Coast Villa",
    price: "$15,200,000",
    beds: 6,
    baths: 7,
  },
  {
    id: 5,
    image: "/property-miami.jpg",
    location: "Palm Beach, FL",
    name: "Mediterranean Retreat",
    price: "$8,400,000",
    beds: 4,
    baths: 4.5,
  },
  {
    id: 6,
    image: "/property-newyork.jpg",
    location: "Tribeca, NY",
    name: "Luxury Penthouse Loft",
    price: "$11,500,000",
    beds: 3,
    baths: 3.5,
  },
];

export default function BuyPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Search Header Hero (Re-using CTASearch component logic but as a hero) */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-navy">
          <Image
            src="/cta-background.jpg"
            alt="Luxury background pattern"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>

        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center">
          <h1 className="font-serif text-white text-5xl md:text-6xl font-bold mb-6">
            Properties for Sale
          </h1>
          <p className="text-white/80 text-lg font-light mb-12 max-w-2xl mx-auto">
            Discover a curated selection of the finest luxury real estate available globally.
          </p>

          {/* SEARCH BAR FROM CTA */}
          <div className="bg-white p-2 rounded-sm shadow-xl flex flex-col md:flex-row w-full gap-2 md:gap-0 text-left">
            <input 
              type="text" 
              placeholder="Enter a location..." 
              className="flex-1 py-4 px-6 focus:outline-none text-text-dark placeholder:text-text-muted text-sm border-b md:border-b-0 md:border-r border-border-card"
            />
            
            <select className="py-4 px-6 appearance-none focus:outline-none text-text-dark text-sm border-b md:border-b-0 md:border-r border-border-card bg-transparent hidden md:block cursor-pointer">
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
            
            <div className="md:hidden relative border-b border-border-card">
              <select className="w-full py-4 px-6 appearance-none focus:outline-none text-text-dark text-sm bg-transparent cursor-pointer">
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-muted">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            <div className="flex border-b md:border-b-0 md:border-r border-border-card">
              <select className="flex-1 py-4 px-6 appearance-none focus:outline-none text-text-dark text-sm bg-transparent cursor-pointer">
                <option value="">Min Price</option>
                <option value="1m">$1,000,000</option>
                <option value="5m">$5,000,000</option>
              </select>
            </div>

            <div className="flex md:border-r border-border-card">
              <select className="flex-1 py-4 px-6 appearance-none focus:outline-none text-text-dark text-sm bg-transparent cursor-pointer">
                <option value="">Max Price</option>
                <option value="10m">$10,000,000</option>
                <option value="any">Any Price</option>
              </select>
            </div>

            <button className="bg-gold hover:bg-gold/90 transition-colors text-white text-xs font-bold uppercase tracking-[0.15em] px-8 py-5 mt-2 md:mt-0 whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Listings Section */}
      <section className="bg-warm py-24 md:py-32 flex-grow">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between mb-12 border-b border-border-card pb-6">
            <span className="text-text-dark font-medium">Showing {allProperties.length} properties</span>
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-muted">Sort by:</span>
              <select className="bg-transparent text-sm focus:outline-none cursor-pointer font-medium text-text-dark border-none">
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProperties.map((property) => (
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
                  <div className="absolute top-4 left-4 bg-gold text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                    For Sale
                  </div>
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

          <div className="mt-20 flex justify-center">
            <button className="border border-gold text-text-dark hover:bg-gold hover:text-white transition-all text-sm font-bold uppercase tracking-[0.15em] px-10 py-4">
              Load More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
