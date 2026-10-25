import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { LightboxModal } from './LightboxModal';
import {
  LineRevealHeadline,
  EditorialFadeUp,
  MaskedImageReveal,
} from './ScrollReveal';

export function LuxuryGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF7F3] text-[#272124] border-t border-[#E9E0DF]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <EditorialFadeUp>
              <p className="text-xs font-sans font-semibold tracking-[0.24em] uppercase text-[#722F45] mb-3">
                04. Visual Campaign · Food, Ambience & Details
              </p>
            </EditorialFadeUp>
            <LineRevealHeadline
              lines={['A GLIMPSE OF', 'THE TABLE.']}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#272124] font-normal leading-[1.06]"
              delay={0.05}
            />
          </div>

          <EditorialFadeUp delay={0.16} className="max-w-md">
            <p className="font-sans text-xs sm:text-sm text-[#272124]/70 leading-relaxed">
              Curated editorial photography showcasing Nigerian and
              intercontinental plating, Chapman refreshments, and dining room
              warmth—structured for seamless replacement with on-site
              photographs of Stirrock Restaurant.
            </p>
          </EditorialFadeUp>
        </div>

        {/* Row 1: Asymmetric 7-Col Wide Landscape + 5-Col Vertical Portrait */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Item 0: Wide Landscape (7 cols) */}
          <div
            className="md:col-span-7 group cursor-pointer"
            onClick={() => setLightboxIndex(0)}
          >
            <div className="relative">
              <MaskedImageReveal
                src={GALLERY_ITEMS[0].image}
                alt={GALLERY_ITEMS[0].title}
                aspectClassName="aspect-[16/10]"
                enableParallax={true}
                className="border border-[#E9E0DF]"
              />
              <div className="absolute inset-0 bg-[#481B2B]/0 group-hover:bg-[#481B2B]/20 transition-colors duration-300 flex items-end justify-end p-5 pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#FAF7F3] text-[#481B2B] p-2.5 shadow-sm">
                  <Maximize2 size={16} />
                </span>
              </div>
            </div>
            <div className="mt-3.5 flex items-baseline justify-between gap-4 text-xs font-sans">
              <span className="font-serif text-xl text-[#272124] group-hover:text-[#722F45] transition-colors">
                {GALLERY_ITEMS[0].title}
              </span>
              <span className="text-[#722F45] tracking-wider uppercase text-[11px]">
                {GALLERY_ITEMS[0].category}
              </span>
            </div>
          </div>

          {/* Item 1: Vertical Portrait (5 cols, offset slightly on desktop) */}
          <div
            className="md:col-span-5 md:mt-10 group cursor-pointer"
            onClick={() => setLightboxIndex(1)}
          >
            <div className="relative">
              <MaskedImageReveal
                src={GALLERY_ITEMS[1].image}
                alt={GALLERY_ITEMS[1].title}
                aspectClassName="aspect-[3/4]"
                delay={0.1}
                className="border border-[#E9E0DF]"
              />
              <div className="absolute inset-0 bg-[#481B2B]/0 group-hover:bg-[#481B2B]/20 transition-colors duration-300 flex items-end justify-end p-5 pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#FAF7F3] text-[#481B2B] p-2.5 shadow-sm">
                  <Maximize2 size={16} />
                </span>
              </div>
            </div>
            <div className="mt-3.5 flex items-baseline justify-between gap-4 text-xs font-sans">
              <span className="font-serif text-xl text-[#272124] group-hover:text-[#722F45] transition-colors">
                {GALLERY_ITEMS[1].title}
              </span>
              <span className="text-[#722F45] tracking-wider uppercase text-[11px]">
                {GALLERY_ITEMS[1].category}
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Asymmetric 5-Col Landscape + 7-Col Wide Landscape */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Item 2: Egusi & Pounded Yam (5 cols) */}
          <div
            className="md:col-span-5 group cursor-pointer"
            onClick={() => setLightboxIndex(2)}
          >
            <div className="relative">
              <MaskedImageReveal
                src={GALLERY_ITEMS[2].image}
                alt={GALLERY_ITEMS[2].title}
                aspectClassName="aspect-[4/3]"
                className="border border-[#E9E0DF]"
              />
              <div className="absolute inset-0 bg-[#481B2B]/0 group-hover:bg-[#481B2B]/20 transition-colors duration-300 flex items-end justify-end p-5 pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#FAF7F3] text-[#481B2B] p-2.5 shadow-sm">
                  <Maximize2 size={16} />
                </span>
              </div>
            </div>
            <div className="mt-3.5 flex items-baseline justify-between gap-4 text-xs font-sans">
              <span className="font-serif text-xl text-[#272124] group-hover:text-[#722F45] transition-colors">
                {GALLERY_ITEMS[2].title}
              </span>
              <span className="text-[#722F45] tracking-wider uppercase text-[11px]">
                {GALLERY_ITEMS[2].category}
              </span>
            </div>
          </div>

          {/* Item 3: Warm Architectural Dining Space (7 cols) */}
          <div
            className="md:col-span-7 group cursor-pointer"
            onClick={() => setLightboxIndex(3)}
          >
            <div className="relative">
              <MaskedImageReveal
                src={GALLERY_ITEMS[3].image}
                alt={GALLERY_ITEMS[3].title}
                aspectClassName="aspect-[16/10]"
                enableParallax={true}
                delay={0.1}
                className="border border-[#E9E0DF]"
              />
              <div className="absolute inset-0 bg-[#481B2B]/0 group-hover:bg-[#481B2B]/20 transition-colors duration-300 flex items-end justify-end p-5 pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#FAF7F3] text-[#481B2B] p-2.5 shadow-sm">
                  <Maximize2 size={16} />
                </span>
              </div>
            </div>
            <div className="mt-3.5 flex items-baseline justify-between gap-4 text-xs font-sans">
              <span className="font-serif text-xl text-[#272124] group-hover:text-[#722F45] transition-colors">
                {GALLERY_ITEMS[3].title}
              </span>
              <span className="text-[#722F45] tracking-wider uppercase text-[11px]">
                {GALLERY_ITEMS[3].category}
              </span>
            </div>
          </div>
        </div>

        {/* Row 3: Editorial Pair (6 cols + 6 cols with offset) */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Item 4: Grilled Catfish */}
          <div
            className="md:col-span-6 group cursor-pointer"
            onClick={() => setLightboxIndex(4)}
          >
            <div className="relative">
              <MaskedImageReveal
                src={GALLERY_ITEMS[4].image}
                alt={GALLERY_ITEMS[4].title}
                aspectClassName="aspect-[4/3]"
                className="border border-[#E9E0DF]"
              />
              <div className="absolute inset-0 bg-[#481B2B]/0 group-hover:bg-[#481B2B]/20 transition-colors duration-300 flex items-end justify-end p-5 pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#FAF7F3] text-[#481B2B] p-2.5 shadow-sm">
                  <Maximize2 size={16} />
                </span>
              </div>
            </div>
            <div className="mt-3.5 flex items-baseline justify-between gap-4 text-xs font-sans">
              <span className="font-serif text-xl text-[#272124] group-hover:text-[#722F45] transition-colors">
                {GALLERY_ITEMS[4].title}
              </span>
              <span className="text-[#722F45] tracking-wider uppercase text-[11px]">
                {GALLERY_ITEMS[4].category}
              </span>
            </div>
          </div>

          {/* Item 5: Classic Nigerian Chapman */}
          <div
            className="md:col-span-6 md:mt-8 group cursor-pointer"
            onClick={() => setLightboxIndex(5)}
          >
            <div className="relative">
              <MaskedImageReveal
                src={GALLERY_ITEMS[5].image}
                alt={GALLERY_ITEMS[5].title}
                aspectClassName="aspect-[4/3]"
                delay={0.1}
                className="border border-[#E9E0DF]"
              />
              <div className="absolute inset-0 bg-[#481B2B]/0 group-hover:bg-[#481B2B]/20 transition-colors duration-300 flex items-end justify-end p-5 pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#FAF7F3] text-[#481B2B] p-2.5 shadow-sm">
                  <Maximize2 size={16} />
                </span>
              </div>
            </div>
            <div className="mt-3.5 flex items-baseline justify-between gap-4 text-xs font-sans">
              <span className="font-serif text-xl text-[#272124] group-hover:text-[#722F45] transition-colors">
                {GALLERY_ITEMS[5].title}
              </span>
              <span className="text-[#722F45] tracking-wider uppercase text-[11px]">
                {GALLERY_ITEMS[5].category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Viewer */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </section>
  );
}
