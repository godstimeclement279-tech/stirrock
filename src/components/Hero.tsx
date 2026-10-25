import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { ArrowDownRight, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { EditorialImage } from './EditorialImage';

interface HeroProps {
  onExploreMenuClick: () => void;
  onFindUsClick: () => void;
}

export function Hero({ onExploreMenuClick, onFindUsClick }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 1.07]
  );

  const headlineLines = ['GOOD TASTE.', 'BEAUTIFULLY DONE.'];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[94vh] lg:min-h-screen w-full overflow-hidden bg-[#481B2B] flex items-end"
    >
      {/* Initial Wine-Red Screen with Clip-Path Mask Reveal of Hero Food Photograph */}
      <motion.div
        initial={
          prefersReducedMotion
            ? { opacity: 1 }
            : { clipPath: 'inset(6% 3% 6% 3%)', opacity: 0 }
        }
        animate={
          prefersReducedMotion
            ? { opacity: 1 }
            : { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }
        }
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <motion.div style={{ scale: bgScale }} className="w-full h-full">
          <EditorialImage
            src={RESTAURANT_INFO.images.heroCuisine}
            alt="Beautifully plated restaurant cuisine at Stirrock Restaurant"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Restrained Deep-Wine Overlay strictly where needed for text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#481B2B]/90 via-[#481B2B]/40 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#481B2B]/75 via-[#481B2B]/20 to-transparent"
          aria-hidden="true"
        />
      </motion.div>

      {/* Editorial Hero Composition — Keeps Food Photography Dominant */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-40 pb-14 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          {/* Small Uppercase Location Kicker */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-sans font-medium tracking-[0.28em] uppercase text-[#E9E0DF] mb-4"
          >
            STIRROCK RESTAURANT · AGBOR, DELTA STATE
          </motion.p>

          {/* Staggered Line-by-Line Hero Headline */}
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-[68px] text-[#FAF7F3] font-normal leading-[1.04] tracking-[0.02em] mb-6"
            aria-label="GOOD TASTE. BEAUTIFULLY DONE."
          >
            {headlineLines.map((line, idx) => (
              <span
                key={line}
                className="block overflow-hidden pb-[0.06em] -mb-[0.06em]"
              >
                <motion.span
                  initial={
                    prefersReducedMotion
                      ? { y: '0%', opacity: 1 }
                      : { y: '108%', opacity: 0 }
                  }
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.32 + idx * 0.14,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Supporting Copy Fade Reveal */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base sm:text-lg text-[#FAF7F3]/90 font-normal leading-relaxed max-w-xl mb-10"
          >
            {RESTAURANT_INFO.heroSupporting}
          </motion.p>

          {/* Primary & Secondary CTAs with Subtle Upward Reveal */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <button
              type="button"
              onClick={onExploreMenuClick}
              className="editorial-btn inline-flex items-center gap-3 px-7 py-4 bg-[#722F45] text-[#FAF7F3] hover:bg-[#FAF7F3] hover:text-[#481B2B] border border-[#722F45] hover:border-[#FAF7F3] text-xs font-sans font-semibold tracking-[0.2em] uppercase whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <span>EXPLORE THE MENU</span>
              <ArrowDownRight size={16} />
            </button>

            <button
              type="button"
              onClick={onFindUsClick}
              className="editorial-btn inline-flex items-center gap-2.5 px-7 py-4 bg-transparent text-[#FAF7F3] border border-[#FAF7F3]/55 hover:border-[#FAF7F3] hover:bg-[#FAF7F3]/10 text-xs font-sans font-medium tracking-[0.2em] uppercase whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <MapPin size={15} />
              <span>FIND US</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Architectural Metadata Strip */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-14 pt-5 border-t border-[#FAF7F3]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#E9E0DF]/85 tracking-wider"
        >
          <div>
            <span>Innu Ugbo Street, Agbor 321001, Delta State</span>
            <span className="mx-2.5" aria-hidden="true">
              ·
            </span>
            <span>Nigerian & Intercontinental Dining</span>
          </div>
          <div className="text-[#E9E0DF]/70">
            <span>Stirrock Restaurant · Digital Experience Concept</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
