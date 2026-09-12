import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavigationProps {
  onReserveClick: () => void;
}

export function Navigation({ onReserveClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'MENU', href: '#menu' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'THE STEAK', href: '#steak-art' },
    { label: 'OUR STORY', href: '#our-story' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'LOCATION', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#070708]/90 backdrop-blur-md py-4 border-b border-white/[0.06] shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-7 sm:py-9'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex flex-col tracking-normal focus:outline-none"
            aria-label="ICE & STEAK Home"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.25em] text-[#F4F1EA] group-hover:text-[#C5A880] transition-colors duration-400">
              ICE & STEAK
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#9C988F] uppercase -mt-0.5">
              Owerri
            </span>
          </a>

          {/* Desktop Center Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="luxury-link text-[#E8E4DC]/80 hover:text-[#F4F1EA] transition-colors py-1 cursor-pointer focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Reserve CTA & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <button
              onClick={onReserveClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-medium tracking-[0.22em] text-[#F4F1EA] border border-[#C5A880]/40 hover:border-[#C5A880] hover:bg-[#C5A880]/10 transition-all duration-300 rounded-none cursor-pointer focus:outline-none"
            >
              <span>RESERVE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#E8E4DC] p-2 hover:text-[#C5A880] transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#070708] flex flex-col justify-between p-8 sm:p-12 lg:hidden"
          >
            {/* Mobile Nav Header */}
            <div className="flex items-center justify-between">
              <div>
                <span className="font-serif text-2xl tracking-[0.25em] text-[#F4F1EA]">
                  ICE & STEAK
                </span>
                <p className="text-[10px] tracking-[0.3em] text-[#9C988F] uppercase">
                  Owerri, Imo State
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#E8E4DC] p-2 hover:text-[#C5A880] focus:outline-none cursor-pointer"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Large Editorial Links */}
            <nav className="flex flex-col gap-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-serif text-3xl sm:text-4xl text-[#E8E4DC] hover:text-[#C5A880] tracking-[0.1em] transition-colors focus:outline-none cursor-pointer flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={20}
                    className="opacity-0 group-hover:opacity-100 text-[#C5A880] transition-opacity"
                  />
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.4 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReserveClick();
                }}
                className="mt-4 py-4 text-center font-sans tracking-[0.25em] text-xs uppercase bg-[#C5A880]/15 border border-[#C5A880]/60 text-[#F4F1EA] hover:bg-[#C5A880]/25 transition-all cursor-pointer"
              >
                RESERVE A TABLE
              </motion.button>
            </nav>

            {/* Mobile Footer with Direct Line */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.25em] text-[#9C988F] uppercase">
                Direct Concierge
              </span>
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-sm tracking-wider text-[#F4F1EA] hover:text-[#C5A880] transition-colors"
              >
                <Phone size={14} className="text-[#C5A880]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
              <span className="text-xs text-[#9C988F] mt-1">
                173 Ikenegbu Layout, Owerri
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
