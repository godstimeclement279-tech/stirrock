import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowDown } from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';

interface HeroProps {
  onReserveClick: () => void;
  onExploreMenuClick: () => void;
}

export function Hero({ onReserveClick, onExploreMenuClick }: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Cinematic load sequence timing
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#070708]"
    >
      {/* Background Image with Cinematic Ken Burns Motion & Parallax depth */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: loaded ? 1.02 : 1.12, opacity: loaded ? 1 : 0 }}
          transition={{
            scale: { duration: 8, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 1.8, ease: 'easeOut', delay: 0.3 }
          }}
          className="w-full h-full"
        >
          <img
            src={IMAGES.hero}
            alt="ICE & STEAK prime bone-in tomahawk searing over open hardwood coals"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.15]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Cinematic Vignette & Obsidian Grading Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/30 to-black/85 pointer-events-none" />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center justify-center pt-16 sm:pt-20">
        
        {/* Subtle Wordmark Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 15 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-block text-[11px] sm:text-xs font-sans tracking-[0.4em] uppercase text-[#C5A880]/90">
            {RESTAURANT_INFO.name} · Owerri
          </span>
        </motion.div>

        {/* Dramatic Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 25 }}
          transition={{ duration: 1.4, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] font-light text-[#F4F1EA] leading-[1.08] max-w-4xl"
        >
          {RESTAURANT_INFO.tagline}
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 font-sans font-light text-sm sm:text-base md:text-lg text-[#E8E4DC]/80 max-w-2xl leading-relaxed tracking-wide"
        >
          {RESTAURANT_INFO.subheading}
        </motion.p>

        {/* Subtle Understated Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 1.2, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-8 sm:gap-14"
        >
          <button
            onClick={onReserveClick}
            className="luxury-button-underline text-xs tracking-[0.26em] text-[#F4F1EA] hover:text-[#C5A880] cursor-pointer focus:outline-none"
          >
            <span>RESERVE A TABLE</span>
            <span className="text-[#C5A880] text-sm">→</span>
          </button>

          <button
            onClick={onExploreMenuClick}
            className="luxury-button-underline text-xs tracking-[0.26em] text-[#E8E4DC]/70 hover:text-[#F4F1EA] cursor-pointer focus:outline-none"
          >
            <span>EXPLORE THE MENU</span>
          </button>
        </motion.div>
      </div>

      {/* Tiny Vertical Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] font-sans tracking-[0.35em] text-[#9C988F]/70 uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-[#C5A880]/60 via-[#E8E4DC]/30 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 36, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className="w-full h-3 bg-[#C5A880]"
          />
        </div>
      </motion.div>
    </section>
  );
}
