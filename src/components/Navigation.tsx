import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onReserveClick: () => void;
}

export function Navigation({ onReserveClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'MENU', href: '#menu' },
    { label: 'OUR STORY', href: '#our-story' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleMobileNav = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? 'bg-[#FAF7F3]/95 backdrop-blur-md border-b border-[#E9E0DF] py-3.5 text-[#272124] shadow-2xs'
            : 'bg-gradient-to-b from-[#481B2B]/80 via-[#481B2B]/35 to-transparent py-5 text-[#FAF7F3]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark with custom typographic detail */}
          <a
            href="#"
            className={`font-serif text-2xl sm:text-[28px] font-semibold tracking-[0.22em] whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 ${
              scrolled ? 'text-[#722F45]' : 'text-[#FAF7F3]'
            }`}
          >
            STIR<span className="italic font-normal tracking-[0.14em]">R</span>OCK
          </a>

          {/* Zone 2: 4 concise single-line navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-9 text-xs font-sans font-medium tracking-[0.2em]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`editorial-nav-link whitespace-nowrap shrink-0 py-1 ${
                  scrolled
                    ? 'text-[#272124] hover:text-[#722F45]'
                    : 'text-[#FAF7F3]/90 hover:text-[#FFFFFF]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action button + Mobile Menu Button */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={onReserveClick}
              className={`editorial-btn hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-sans font-medium tracking-[0.18em] uppercase whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 ${
                scrolled
                  ? 'bg-[#722F45] text-[#FAF7F3] hover:bg-[#481B2B]'
                  : 'bg-[#FAF7F3] text-[#481B2B] hover:bg-[#FFFFFF]'
              }`}
            >
              Reserve a Table
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 -mr-2 transition-colors cursor-pointer ${
                scrolled ? 'text-[#722F45]' : 'text-[#FAF7F3]'
              }`}
              aria-label={
                mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#481B2B] text-[#FAF7F3] flex flex-col justify-between px-6 pt-28 pb-10 md:hidden">
          <nav className="flex flex-col space-y-6 border-t border-[#FAF7F3]/15 pt-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleMobileNav(link.href)}
                className="text-left font-serif text-3xl tracking-[0.12em] text-[#FAF7F3] hover:text-[#E9E0DF] py-1 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="space-y-6 border-t border-[#FAF7F3]/15 pt-6">
            <div>
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#E9E0DF]/70 mb-1">
                Location
              </p>
              <p className="font-serif text-lg text-[#FAF7F3]">
                Innu Ugbo Street, Agbor 321001, Delta State
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onReserveClick();
              }}
              className="editorial-btn w-full py-3.5 px-6 bg-[#FAF7F3] text-[#481B2B] text-xs font-sans font-semibold tracking-[0.2em] uppercase text-center hover:bg-[#FFFFFF] cursor-pointer"
            >
              Request a Table
            </button>
          </div>
        </div>
      )}
    </>
  );
}
