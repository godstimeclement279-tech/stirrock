import { RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'MENU', href: '#menu' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'OUR STORY', href: '#our-story' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'RESERVATIONS', href: '#reservations' },
    { label: 'LOCATION', href: '#location' },
  ];

  return (
    <footer className="bg-[#050506] border-t border-white/[0.06] pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Giant Monolithic Wordmark */}
        <div className="border-b border-white/[0.08] pb-16 sm:pb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F4F1EA] font-light tracking-[0.08em] leading-none select-none">
                ICE & STEAK
              </h2>
              <p className="mt-4 text-[11px] sm:text-xs font-sans tracking-[0.35em] text-[#C5A880] uppercase">
                {RESTAURANT_INFO.tagline}
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="self-start lg:self-end flex items-center gap-3 text-xs tracking-[0.25em] text-[#9C988F] hover:text-[#F4F1EA] uppercase transition-colors group cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#C5A880] transition-colors">
                <ArrowUp size={14} className="text-[#C5A880]" />
              </div>
            </button>
          </div>
        </div>

        {/* Mid Row: Navigation + Contacts */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-b border-white/[0.06]">
          
          {/* Navigation Links */}
          <div className="md:col-span-6">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#9C988F] block mb-6">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="luxury-link text-xs tracking-[0.2em] text-[#E8E4DC]/80 hover:text-[#F4F1EA] w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Telephone */}
          <div className="md:col-span-6 md:pl-12 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#9C988F] block mb-6">
                Direct Contact
              </span>
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] hover:text-[#C5A880] transition-colors block mb-3"
              >
                {RESTAURANT_INFO.phone}
              </a>
              <p className="font-sans text-xs sm:text-sm text-[#9C988F] font-light leading-relaxed">
                {RESTAURANT_INFO.address.street} · {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state}, {RESTAURANT_INFO.address.country}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-sans tracking-[0.25em] text-[#9C988F]/60 uppercase">
          <div>
            © {new Date().getFullYear()} ICE & STEAK · All rights reserved
          </div>
          <div>
            Quiet Luxury Hospitality · Owerri
          </div>
        </div>

      </div>
    </footer>
  );
}
