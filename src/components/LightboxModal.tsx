import { MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: LightboxModalProps) {
  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-[#070708]/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 cursor-zoom-out"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between text-xs tracking-widest text-[#E8E4DC] z-10">
          <div>
            <span className="font-serif text-lg tracking-[0.2em] text-[#F4F1EA]">
              ICE & STEAK
            </span>
            <span className="text-[10px] text-[#C5A880] ml-3 uppercase">
              {currentItem.category}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#9C988F]">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 text-[#E8E4DC] hover:text-[#C5A880] transition-colors cursor-pointer"
              aria-label="Close image viewer"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Central Display Image */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-10 p-3 bg-black/40 hover:bg-black/70 text-[#E8E4DC] hover:text-[#C5A880] transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="max-h-[75vh] max-w-[90vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[75vh] max-w-full object-contain filter brightness-[0.95] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-10 p-3 bg-black/40 hover:bg-black/70 text-[#E8E4DC] hover:text-[#C5A880] transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Caption */}
        <div
          className="max-w-2xl mx-auto text-center z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <h4 className="font-serif text-xl sm:text-2xl text-[#F4F1EA] mb-1">
            {currentItem.title}
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#9C988F] font-light">
            {currentItem.caption}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
