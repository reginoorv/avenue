import Image from "next/image";

export default function CTASearch() {
  return (
    <section className="relative w-full py-32 flex items-center justify-center overflow-hidden">
      {/* BACKGROUND & OVERLAY */}
      <div className="absolute inset-0 z-0 bg-navy">
        {/* Intentionally using hero-mansion for texture in the dark background */}
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
        <h2 className="font-serif text-white text-4xl md:text-5xl font-bold mb-6">
          Find Your Dream Home
        </h2>
        <p className="text-white/80 text-lg font-light mb-12">
          Search exclusive listings and connect with our expert agents.
        </p>

        {/* SEARCH BAR */}
        <div className="bg-white p-2 rounded-sm shadow-xl flex flex-col md:flex-row w-full gap-2 md:gap-0">
          
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
          
          {/* Mobile visible wrapper for Property Type */}
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
            Search Properties
          </button>
        </div>
      </div>
    </section>
  );
}
