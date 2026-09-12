import { motion } from 'motion/react';
import { IMAGES } from '../data/restaurantData';

export function Introduction() {
  return (
    <section id="introduction" className="relative py-28 sm:py-36 lg:py-44 bg-[#070708] overflow-hidden">
      {/* Decorative architectural hairline watermark */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Asymmetric Magazine Spread Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Editorial Column: Headline + Typography */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-4 lg:sticky lg:top-32">
            <div>
              <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C5A880] block mb-4">
                Philosophy & Setting
              </span>
              
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA] font-light tracking-[0.05em] leading-[1.12]">
                A TABLE WORTH REMEMBERING.
              </h2>

              <div className="w-12 h-[1px] bg-[#C5A880]/50 my-8 sm:my-10" />

              <p className="font-sans text-sm sm:text-base text-[#E8E4DC]/80 font-light leading-[1.8] tracking-wide">
                ICE & STEAK was established with a singular conviction: that the art of open-fire grilling, when married with architectural stillness and meticulous hospitality, elevates dining into a sensory ritual. 
              </p>

              <p className="mt-6 font-sans text-sm sm:text-base text-[#9C988F] font-light leading-[1.8] tracking-wide">
                Located on Ikenegbu Layout in Owerri, our dining room provides a quiet escape from the noise—where prime cuts are aged under salt blocks, coals glow with measured heat, and the evening unfolds at an unhurried cadence.
              </p>
            </div>

            {/* Editorial Signature Element */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="block text-[11px] font-serif italic text-[#C5A880]">The Hearth Room</span>
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase">Owerri · Imo State</span>
              </div>
              <span className="font-serif text-2xl text-[#E8E4DC]/30">№ 173</span>
            </div>
          </div>

          {/* Right Imagery Column: Asymmetric Composition (One oversized, one smaller offset) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start lg:pl-6">
            
            {/* Oversized Primary Image */}
            <div className="w-full sm:w-7/12 relative group overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden bg-[#141417]">
                <img
                  src={IMAGES.diningRoom}
                  alt="Intimate dark dining room at ICE & STEAK with low-voltage warm illumination"
                  className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 flex justify-between items-center text-[10px] tracking-[0.2em] text-[#9C988F] uppercase">
                <span>The Main Salon</span>
                <span>Fig. 01</span>
              </div>
            </div>

            {/* Smaller Supporting Image with vertical offset */}
            <div className="w-full sm:w-5/12 sm:pt-20 relative group overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden bg-[#141417]">
                <img
                  src={IMAGES.wagyuSlice}
                  alt="Hand-cut wagyu with crystal sea salt"
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 flex justify-between items-center text-[10px] tracking-[0.2em] text-[#9C988F] uppercase">
                <span>Prime Marbling</span>
                <span>Fig. 02</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
