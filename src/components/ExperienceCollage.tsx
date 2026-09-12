import { IMAGES } from '../data/restaurantData';

export function ExperienceCollage() {
  return (
    <section id="experience" className="py-28 sm:py-36 lg:py-44 bg-[#070708] border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C5A880] block mb-3">
            Ambiance & Cadence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA] font-light tracking-[0.05em] leading-[1.12]">
            THE NIGHT BEGINS HERE.
          </h2>
          <p className="mt-6 font-sans text-sm sm:text-base text-[#9C988F] font-light leading-[1.8] max-w-xl">
            An evening at ICE & STEAK is an unhurried affair. The room dims to amber, low frequencies warm the acoustics, crystal clinks against hand-cut ice, and the air carries the faint aroma of hardwood embers and aged beef.
          </p>
        </div>

      </div>

      {/* Asymmetric Editorial Collage with Overlaps and Extended Margins */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
          
          {/* Main Large Atmosphere Image (Col 1-7) */}
          <div className="md:col-span-7 relative group z-10">
            <div className="aspect-[16/10] overflow-hidden bg-[#141417]">
              <img
                src={IMAGES.diningRoom}
                alt="Intimate candlelit dining salon at ICE & STEAK Owerri"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] transition-transform duration-1000 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex justify-between items-center text-[10px] tracking-[0.25em] text-[#9C988F] uppercase">
              <span>The Grand Salon</span>
              <span>Low-Voltage Illumination</span>
            </div>
          </div>

          {/* Overlapping Cocktail Detail (Col 7-12) with negative top margin on desktop */}
          <div className="md:col-span-5 md:-ml-12 md:-mt-16 z-20 group">
            <div className="aspect-[4/5] overflow-hidden bg-[#141417] border-4 border-[#070708] shadow-2xl">
              <img
                src={IMAGES.cocktailSmoked}
                alt="Smoked Old Fashioned with single hand-carved ice sphere"
                className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.1] transition-transform duration-1000 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex justify-between items-center text-[10px] tracking-[0.25em] text-[#9C988F] uppercase">
              <span>Directional Ice & Smoke</span>
              <span>Bar Craft</span>
            </div>
          </div>

          {/* Lower Secondary Offset Elements: Table Setting & Wine Ritual */}
          <div className="md:col-span-4 md:col-start-2 group mt-4 sm:mt-8">
            <div className="aspect-[3/4] overflow-hidden bg-[#141417]">
              <img
                src={IMAGES.tableSettingDark}
                alt="Minimalist table setting with dark linen and crystal stemware"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] transition-transform duration-1000 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 text-[10px] tracking-[0.25em] text-[#9C988F] uppercase">
              Intimate Seating for Two
            </div>
          </div>

          {/* Right Wide Cinematic Element */}
          <div className="md:col-span-6 md:col-start-7 group mt-4 sm:mt-8">
            <div className="aspect-[16/9] overflow-hidden bg-[#141417]">
              <img
                src={IMAGES.winePour}
                alt="Sommelier pouring vintage red wine into crystal glass"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] transition-transform duration-1000 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex justify-between items-center text-[10px] tracking-[0.25em] text-[#9C988F] uppercase">
              <span>Cellar Pour</span>
              <span>Reserve Vintages</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
