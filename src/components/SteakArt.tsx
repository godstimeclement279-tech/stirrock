import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STEAK_EXPERIENCE_CATEGORIES, IMAGES } from '../data/restaurantData';

export function SteakArt() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = STEAK_EXPERIENCE_CATEGORIES[activeCategoryIndex];

  return (
    <section id="steak-art" className="py-28 sm:py-36 bg-[#070708] border-t border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.08]">
          <div>
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C5A880] block mb-3">
              The Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA] font-light tracking-[0.05em]">
              THE ART OF STEAK
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-sans text-xs sm:text-sm text-[#9C988F] max-w-sm tracking-wide leading-relaxed">
            Heritage breeds, meticulous dry-aging, and exact thermal sear. Presented on charred oak and volcanic slate.
          </p>
        </div>

        {/* Editorial Layout: Large Cinematic Steak Image (Left) + Refined Physical Menu Categories (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large Cinematic Steak Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#141417] relative group">
              <img
                src={IMAGES.artOfSteak}
                alt="Carved dry-aged prime steak on dark stone with coarse salt flakes"
                className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.1] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 pointer-events-none" />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs text-[#E8E4DC]">
                <div>
                  <span className="block font-serif text-lg tracking-wider text-[#F4F1EA]">45-Day Bone-In Tomahawk</span>
                  <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase">Maldon Salt · White Oak Fire</span>
                </div>
                <span className="text-[10px] tracking-[0.25em] text-[#9C988F] uppercase">Table 01</span>
              </div>
            </div>
          </div>

          {/* Right Side: Physical Menu Style Layout */}
          <div className="lg:col-span-6 flex flex-col">
            
            {/* Category Switcher Tabs - Restrained Typography */}
            <div className="flex flex-wrap gap-6 sm:gap-10 border-b border-white/[0.08] pb-4 mb-8">
              {STEAK_EXPERIENCE_CATEGORIES.map((cat, idx) => {
                const isActive = activeCategoryIndex === idx;
                return (
                  <button
                    key={cat.title}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`text-xs font-sans tracking-[0.25em] uppercase transition-all pb-2 -mb-[17px] cursor-pointer focus:outline-none ${
                      isActive
                        ? 'text-[#F4F1EA] border-b-2 border-[#C5A880] font-medium'
                        : 'text-[#9C988F] hover:text-[#E8E4DC]'
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>

            {/* Category Description */}
            <p className="text-xs sm:text-sm text-[#9C988F] italic font-serif mb-8 leading-relaxed">
              "{activeCategory.description}"
            </p>

            {/* Menu Items with physical menu formatting */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col divide-y divide-white/[0.06]"
              >
                {activeCategory.items.map((item) => (
                  <div key={item.name} className="py-6 first:pt-0 last:pb-0 group">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-serif text-lg sm:text-xl text-[#F4F1EA] tracking-wide group-hover:text-[#C5A880] transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex-1 border-b border-dotted border-white/15 mx-2 hidden sm:block" />
                      <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A880]/90 shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                      <p className="text-[#9C988F] font-sans font-light leading-relaxed">
                        {item.notes}
                      </p>
                      <span className="text-[10px] tracking-[0.15em] text-[#E8E4DC]/60 uppercase sm:text-right shrink-0">
                        {item.cut}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Subtle Market Notice */}
            <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#9C988F]/70">
              <span className="tracking-wider">All steaks aged in-house</span>
              <span className="tracking-wider">Carved tableside on request</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
