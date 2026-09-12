import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { LightboxModal } from './LightboxModal';
import { Maximize2 } from 'lucide-react';

export function LuxuryGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-[#070708] border-t border-white/[0.05] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C5A880] block mb-3">
              Visual Studies
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA] font-light tracking-[0.05em]">
              THE GALLERY
            </h2>
          </div>
          <span className="mt-4 md:mt-0 text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase">
            Curated Scenes · Click to expand
          </span>
        </div>

        {/* Fashion Editorial Layout: Asymmetric compositions */}
        <div className="space-y-8 sm:space-y-12">
          
          {/* Row 1: One Oversized Horizontal + One Narrow Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* 01: Searing Hearth (Wide - 8 cols) */}
            <div
              onClick={() => openLightbox(0)}
              className="lg:col-span-8 group relative overflow-hidden bg-[#141417] cursor-pointer aspect-[16/10]"
            >
              <img
                src={GALLERY_ITEMS[0].image}
                alt={GALLERY_ITEMS[0].title}
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] transition-transform duration-1000 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-8 flex flex-col justify-end">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
                  {GALLERY_ITEMS[0].category}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <h3 className="font-serif text-2xl text-[#F4F1EA]">
                    {GALLERY_ITEMS[0].title}
                  </h3>
                  <Maximize2 size={18} className="text-[#E8E4DC]" />
                </div>
              </div>
            </div>

            {/* 02: Architectural Intimacy (Portrait - 4 cols) */}
            <div
              onClick={() => openLightbox(1)}
              className="lg:col-span-4 group relative overflow-hidden bg-[#141417] cursor-pointer aspect-[3/4] lg:aspect-auto"
            >
              <img
                src={GALLERY_ITEMS[1].image}
                alt={GALLERY_ITEMS[1].title}
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] transition-transform duration-1000 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
                  {GALLERY_ITEMS[1].category}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <h3 className="font-serif text-xl text-[#F4F1EA]">
                    {GALLERY_ITEMS[1].title}
                  </h3>
                  <Maximize2 size={16} className="text-[#E8E4DC]" />
                </div>
              </div>
            </div>

          </div>

          {/* Row 2: Three Distinct Textures & Details (4 cols each with varied aspects) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* 03: The Cut (4 cols) */}
            <div
              onClick={() => openLightbox(2)}
              className="md:col-span-4 group relative overflow-hidden bg-[#141417] cursor-pointer aspect-square"
            >
              <img
                src={GALLERY_ITEMS[2].image}
                alt={GALLERY_ITEMS[2].title}
                className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.1] transition-transform duration-1000 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
                  {GALLERY_ITEMS[2].category}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <h3 className="font-serif text-lg text-[#F4F1EA]">
                    {GALLERY_ITEMS[2].title}
                  </h3>
                  <Maximize2 size={16} className="text-[#E8E4DC]" />
                </div>
              </div>
            </div>

            {/* 04: Hand-Carved Ice (3 cols, offset) */}
            <div
              onClick={() => openLightbox(3)}
              className="md:col-span-3 group relative overflow-hidden bg-[#141417] cursor-pointer aspect-[3/4]"
            >
              <img
                src={GALLERY_ITEMS[3].image}
                alt={GALLERY_ITEMS[3].title}
                className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.1] transition-transform duration-1000 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
                  {GALLERY_ITEMS[3].category}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <h3 className="font-serif text-base text-[#F4F1EA]">
                    {GALLERY_ITEMS[3].title}
                  </h3>
                  <Maximize2 size={16} className="text-[#E8E4DC]" />
                </div>
              </div>
            </div>

            {/* 05: Cellar Provenance (5 cols) */}
            <div
              onClick={() => openLightbox(4)}
              className="md:col-span-5 group relative overflow-hidden bg-[#141417] cursor-pointer aspect-[16/11]"
            >
              <img
                src={GALLERY_ITEMS[4].image}
                alt={GALLERY_ITEMS[4].title}
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] transition-transform duration-1000 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
                  {GALLERY_ITEMS[4].category}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <h3 className="font-serif text-lg text-[#F4F1EA]">
                    {GALLERY_ITEMS[4].title}
                  </h3>
                  <Maximize2 size={16} className="text-[#E8E4DC]" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={selectedImageIndex !== null}
        onClose={closeLightbox}
        items={GALLERY_ITEMS}
        currentIndex={selectedImageIndex || 0}
        onNavigate={(newIndex) => setSelectedImageIndex(newIndex)}
      />
    </section>
  );
}
