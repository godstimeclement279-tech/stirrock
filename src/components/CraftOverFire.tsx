import { IMAGES } from '../data/restaurantData';

export function CraftOverFire() {
  return (
    <section id="craft-fire" className="py-28 sm:py-36 lg:py-44 bg-[#070708] border-t border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Dominant Visual Hero Frame */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#141417] group">
          <img
            src={IMAGES.hero}
            alt="Intense flames searing prime aged beef over white oak embers"
            className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.2] transition-transform duration-1000 group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />

          {/* Obsidian Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-black/30 to-black/50 pointer-events-none" />

          {/* Integrated Typography at Lower Left */}
          <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12 max-w-2xl">
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C5A880] block mb-2">
              The Element
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA] font-light tracking-[0.05em] leading-[1.1]">
              CRAFTED OVER FIRE.
            </h2>
          </div>
        </div>

        {/* Short, Confident Philosophy Details */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pt-10 border-t border-white/[0.08]">
          
          <div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#C5A880] block mb-3">
              01 · The Wood
            </span>
            <h3 className="font-serif text-xl text-[#F4F1EA] mb-3">Hardwood & Clean Embers</h3>
            <p className="font-sans text-xs sm:text-sm text-[#9C988F] font-light leading-relaxed">
              We burn dense white oak and seasoned lump charcoal to yield high radiant heat with sweet, aromatic smoke that enhances rather than masks the beef.
            </p>
          </div>

          <div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#C5A880] block mb-3">
              02 · The Sear
            </span>
            <h3 className="font-serif text-xl text-[#F4F1EA] mb-3">900°F Thermal Shock</h3>
            <p className="font-sans text-xs sm:text-sm text-[#9C988F] font-light leading-relaxed">
              Immediate surface caramelization creates an intense, savory crust while locking moisture and rich natural rendered fats within the core.
            </p>
          </div>

          <div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#C5A880] block mb-3">
              03 · The Rest
            </span>
            <h3 className="font-serif text-xl text-[#F4F1EA] mb-3">Patience on Warm Oak</h3>
            <p className="font-sans text-xs sm:text-sm text-[#9C988F] font-light leading-relaxed">
              Every cut rests for a calculated interval relative to its thickness, allowing muscle fibers to relax and redistribute juices evenly before carving.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
