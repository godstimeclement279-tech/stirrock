import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_CATEGORIES } from '../data/restaurantData';
import { MenuItem } from '../types';

export function DigitalMenu() {
  const [activeCategoryId, setActiveCategoryId] = useState('steaks');
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);

  const activeCategory =
    MENU_CATEGORIES.find((cat) => cat.id === activeCategoryId) || MENU_CATEGORIES[0];

  // Default display image is either the hovered item's image or the first item's image
  const displayImage =
    hoveredItem?.image ||
    activeCategory.items[0]?.image ||
    MENU_CATEGORIES[1].items[0].image;

  return (
    <section id="menu" className="py-28 sm:py-36 bg-[#070708] border-t border-white/[0.05] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Editorial Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C5A880] block mb-3">
              The Carte
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA] font-light tracking-[0.05em]">
              DIGITAL MENU
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <span className="text-[11px] font-serif italic text-[#C5A880] block">
              Dinner Service from 17:00
            </span>
            <span className="text-[10px] font-sans tracking-[0.2em] text-[#9C988F] uppercase">
              173 Ikenegbu Layout, Owerri
            </span>
          </div>
        </div>

        {/* Categories Bar: Pure Typography with Subtle Spacing */}
        <div className="flex items-center overflow-x-auto no-scrollbar gap-8 sm:gap-12 border-b border-white/[0.08] pb-4 mb-12">
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setHoveredItem(null);
                }}
                className={`text-xs sm:text-sm font-sans tracking-[0.25em] uppercase whitespace-nowrap transition-all pb-2 -mb-[17px] cursor-pointer focus:outline-none ${
                  isSelected
                    ? 'text-[#F4F1EA] border-b-2 border-[#C5A880] font-medium'
                    : 'text-[#9C988F] hover:text-[#E8E4DC]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Desktop Split Screen: Left Menu List, Right Large Reactive Dish Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Menu Items list */}
          <div className="lg:col-span-7">
            {/* Category Subtitle */}
            <div className="mb-8">
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#C5A880]">
                {activeCategory.name}
              </span>
              <p className="font-serif text-sm sm:text-base text-[#9C988F] italic mt-1">
                {activeCategory.subtitle}
              </p>
            </div>

            {/* Items List */}
            <div className="divide-y divide-white/[0.06]">
              {activeCategory.items.map((item) => {
                const isHovered = hoveredItem?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredItem(item)}
                    className="py-6 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <h3 className="font-serif text-xl sm:text-2xl text-[#F4F1EA] group-hover:text-[#C5A880] transition-colors font-light tracking-wide">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-[#C5A880] border border-[#C5A880]/30 px-2 py-0.5 rounded-none">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-sans tracking-[0.2em] text-[#C5A880]/90 uppercase shrink-0">
                        {item.pricePlaceholder}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <p className="font-sans text-xs sm:text-sm text-[#9C988F] font-light leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                      {item.cutOrOrigin && (
                        <span className="text-[10px] tracking-[0.18em] uppercase text-[#E8E4DC]/50 shrink-0">
                          {item.cutOrOrigin}
                        </span>
                      )}
                    </div>

                    {/* Inline Image for Mobile Screens */}
                    <div className="lg:hidden mt-4 overflow-hidden aspect-[16/9] bg-[#141417]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Menu Disclaimer & Transparency */}
            <div className="mt-12 pt-6 border-t border-white/[0.06] text-xs text-[#9C988F]/70 leading-relaxed font-sans font-light">
              <p>
                * Note: ICE & STEAK sources premier aged cuts and seasonal ingredients. Current market cuts and daily specials are presented tableside by our dining room captain.
              </p>
            </div>
          </div>

          {/* Right Column (Desktop): Large Changing Cinematic Dish Image */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#141417]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayImage}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <img
                    src={displayImage}
                    alt={hoveredItem?.name || activeCategory.name}
                    className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Minimal caption over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#C5A880] block mb-1">
                    Visual Selection
                  </span>
                  <span className="font-serif text-lg text-[#F4F1EA] block">
                    {hoveredItem ? hoveredItem.name : activeCategory.items[0]?.name}
                  </span>
                </div>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#9C988F]">
                  ICE & STEAK
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
