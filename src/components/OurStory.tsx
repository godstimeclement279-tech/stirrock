import { RESTAURANT_INFO } from '../data/restaurantData';

export function OurStory() {
  return (
    <section id="our-story" className="py-28 sm:py-36 bg-[#070708] border-t border-white/[0.05] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
        
        {/* Subtle Label */}
        <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C5A880] block mb-6">
          The Origin
        </span>

        {/* Central Editorial Statement */}
        <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#F4F1EA] font-light leading-[1.3] tracking-wide">
          "Every detail of ICE & STEAK is designed around one idea: exceptional food deserves an exceptional setting."
        </blockquote>

        <div className="w-12 h-[1px] bg-[#C5A880]/50 mx-auto my-10 sm:my-12" />

        {/* Honest, Restrained Narrative */}
        <div className="space-y-6 max-w-2xl mx-auto font-sans text-sm sm:text-base text-[#9C988F] font-light leading-[1.8] tracking-wide">
          <p>
            We set out to create a sanctuary in Owerri where the standards of world-class steakhouses meet the warmth of genuine Nigerian hospitality.
          </p>
          <p>
            No shortcuts, no theatrics without purpose. Just uncompromising attention to cuts, the discipline of live-fire cooking, and a space where hours slip away unnoticed.
          </p>
        </div>

        {/* Location Verification Tag */}
        <div className="mt-12 inline-flex flex-col items-center">
          <span className="font-serif text-lg tracking-widest text-[#F4F1EA]">
            {RESTAURANT_INFO.name}
          </span>
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#9C988F] mt-1">
            {RESTAURANT_INFO.address.street} · {RESTAURANT_INFO.address.city}
          </span>
        </div>

      </div>
    </section>
  );
}
