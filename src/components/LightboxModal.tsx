import { MouseEvent, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';
import { EditorialImage } from './EditorialImage';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function LightboxModal({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (currentIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft')
        onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight')
        onNavigate((currentIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null) return null;

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
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-[#272124]/95 backdrop-blur-xs flex flex-col justify-between p-6 sm:p-10"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Gallery image viewer"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between text-[#FAF7F3]">
          <div className="text-xs font-sans tracking-[0.2em] uppercase text-[#E9E0DF] tabular-nums">
            <span>
              {String(currentIndex + 1).padStart(2, '0')} /{' '}
              {String(items.length).padStart(2, '0')}
            </span>
            <span className="mx-2.5" aria-hidden="true">
              ·
            </span>
            <span>{currentItem.category}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="editorial-btn p-2.5 bg-[#722F45] text-[#FAF7F3] hover:bg-[#481B2B] cursor-pointer"
            aria-label="Close gallery viewer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Center Image & Navigation Controls with Gentle Cross-Fade */}
        <div className="relative my-auto flex items-center justify-center max-h-[75vh]">
          <button
            type="button"
            onClick={handlePrev}
            className="editorial-btn absolute left-0 sm:left-4 z-10 p-3 bg-[#722F45]/90 text-[#FAF7F3] hover:bg-[#722F45] cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.98 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.98 }
              }
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl max-h-[72vh] overflow-hidden border border-[#FAF7F3]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <EditorialImage
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[72vh] w-auto object-contain mx-auto"
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={handleNext}
            className="editorial-btn absolute right-0 sm:right-4 z-10 p-3 bg-[#722F45]/90 text-[#FAF7F3] hover:bg-[#722F45] cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Bottom Caption */}
        <div
          className="max-w-2xl mx-auto text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-serif text-2xl text-[#FAF7F3]">
            {currentItem.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-sans text-[#E9E0DF]/80">
            {currentItem.caption}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
