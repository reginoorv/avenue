import { Home, Users, Award, Globe } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Home,
    value: "2,500+",
    label: "Properties Sold",
    description: "Successfully matched with the right buyers.",
  },
  {
    id: 2,
    icon: Users,
    value: "1,200+",
    label: "Happy Clients",
    description: "Long-term relationships built on trust.",
  },
  {
    id: 3,
    icon: Award,
    value: "18+",
    label: "Years of Experience",
    description: "Deep market knowledge you can rely on.",
  },
  {
    id: 4,
    icon: Globe,
    value: "25+",
    label: "Cities Worldwide",
    description: "A global network, local expertise.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about-us" className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        
        {/* HEADER SECTION */}
        <div className="mb-20 flex flex-col items-center">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] block mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-text-dark text-4xl md:text-5xl font-bold">
            The Results Speak for Themselves
          </h2>
          <div className="w-16 h-1 bg-gold mt-8" />
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="border border-border-card p-10 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 bg-white group cursor-default"
              >
                <div className="mb-8 text-gold group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-14 h-14" strokeWidth={1} />
                </div>
                
                <span className="font-serif text-5xl font-bold text-text-dark mb-4">
                  {stat.value}
                </span>
                
                <span className="text-text-dark text-xs font-bold uppercase tracking-[0.1em] mb-4 text-center">
                  {stat.label}
                </span>
                
                <p className="text-text-muted text-sm leading-relaxed text-balance text-center">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
