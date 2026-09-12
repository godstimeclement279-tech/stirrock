import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileStickyReserveProps {
  onReserveClick: () => void;
}

export function MobileStickyReserve({ onReserveClick }: MobileStickyReserveProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear only after scrolling down 600px past hero
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-30 sm:hidden"
        >
          <button
            onClick={onReserveClick}
            className="flex items-center gap-2.5 px-5 py-3 bg-[#0d0d10] border border-[#C5A880]/50 text-[#F4F1EA] shadow-2xl text-[11px] font-sans tracking-[0.2em] uppercase focus:outline-none cursor-pointer"
          >
            <span>RESERVE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
