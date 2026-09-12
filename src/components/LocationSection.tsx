import { MapPin, Phone, ArrowUpRight, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function LocationSection() {
  return (
    <section id="location" className="py-28 sm:py-36 bg-[#070708] border-t border-white/[0.05] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Address & Details */}
          <div className="lg:col-span-5">
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C5A880] block mb-3">
              Destination
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] font-light tracking-[0.05em] mb-8">
              ICE & STEAK
            </h2>

            {/* Address */}
            <div className="space-y-1 mb-8">
              <p className="font-serif text-xl sm:text-2xl text-[#E8E4DC] font-light">
                {RESTAURANT_INFO.address.street}
              </p>
              <p className="font-sans text-sm text-[#9C988F] tracking-wide">
                {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state}
              </p>
              <p className="font-sans text-sm text-[#9C988F] tracking-wide">
                {RESTAURANT_INFO.address.country}
              </p>
            </div>

            {/* Telephone Contact */}
            <div className="mb-10 pb-8 border-b border-white/[0.08]">
              <span className="text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase block mb-2">
                Concierge Direct
              </span>
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="font-serif text-2xl text-[#F4F1EA] hover:text-[#C5A880] transition-colors inline-flex items-center gap-3"
              >
                <span>{RESTAURANT_INFO.phone}</span>
                <ArrowUpRight size={18} className="text-[#C5A880]" />
              </a>
            </div>

            {/* Hours */}
            <div className="space-y-4 mb-10">
              <span className="text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase block">
                Hours of Service
              </span>
              {RESTAURANT_INFO.hours.map((h) => (
                <div key={h.days} className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="text-[#E8E4DC]">{h.days}</span>
                  <span className="text-[#9C988F] font-light">{h.time}</span>
                </div>
              ))}
            </div>

            {/* Directions Action */}
            <div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="luxury-button-underline text-xs tracking-[0.25em] text-[#F4F1EA] hover:text-[#C5A880] inline-flex items-center gap-2 cursor-pointer"
              >
                <span>GET DIRECTIONS</span>
                <ArrowUpRight size={14} className="text-[#C5A880]" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Dark Vector Map */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] bg-[#0c0c0f] border border-white/[0.08] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group">
              
              {/* Architectural Grid & Road Network Simulation for Ikenegbu Layout, Owerri */}
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Stylized Street Lines */}
                  <line x1="10%" y1="20%" x2="90%" y2="25%" stroke="rgba(232, 228, 220, 0.12)" strokeWidth="2" />
                  <line x1="20%" y1="10%" x2="40%" y2="90%" stroke="rgba(232, 228, 220, 0.08)" strokeWidth="1.5" />
                  <line x1="5%" y1="65%" x2="95%" y2="60%" stroke="rgba(232, 228, 220, 0.15)" strokeWidth="3" />
                  <line x1="70%" y1="15%" x2="75%" y2="85%" stroke="rgba(232, 228, 220, 0.1)" strokeWidth="1.5" />
                  <line x1="45%" y1="35%" x2="85%" y2="40%" stroke="rgba(197, 168, 128, 0.2)" strokeWidth="2" />
                </svg>
              </div>

              {/* Top Map Labels */}
              <div className="relative z-10 flex items-center justify-between text-[10px] tracking-[0.25em] text-[#9C988F] uppercase">
                <span>Coordinates · 5.4891° N, 7.0336° E</span>
                <span className="text-[#C5A880]">Ikenegbu Quarter</span>
              </div>

              {/* Pinpoint in Map */}
              <div className="relative z-10 my-auto text-center flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border border-[#C5A880]/30 flex items-center justify-center animate-pulse">
                    <div className="w-3 h-3 rounded-full bg-[#C5A880]" />
                  </div>
                </div>
                <div className="mt-4 bg-[#070708]/90 backdrop-blur-md px-5 py-3 border border-white/10 shadow-xl">
                  <span className="font-serif text-sm tracking-wider text-[#F4F1EA] block">
                    ICE & STEAK
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-[#9C988F] uppercase">
                    173 Ikenegbu Layout, Owerri
                  </span>
                </div>
              </div>

              {/* Bottom Interactive Trigger */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] text-[#9C988F] tracking-wider">
                  Valet parking available at private entrance
                </span>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#C5A880] hover:text-[#F4F1EA] flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
