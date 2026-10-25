import { ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'MENU', href: '#menu' },
    { label: 'OUR STORY', href: '#our-story' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'RESERVATIONS', href: '#reservations' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-[#481B2B] text-[#FAF7F3] pt-20 pb-14 border-t border-[#FAF7F3]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Wordmark & Tagline */}
        <div className="pb-14 border-b border-[#FAF7F3]/15 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#FAF7F3] font-normal tracking-[0.16em] leading-none">
              STIR<span className="italic font-normal tracking-[0.1em]">R</span>OCK
            </h2>
            <p className="mt-4 text-xs font-sans tracking-[0.28em] uppercase text-[#E9E0DF]">
              {RESTAURANT_INFO.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="self-start lg:self-end inline-flex items-center gap-3 text-xs font-sans tracking-[0.2em] uppercase text-[#E9E0DF] hover:text-[#FFFFFF] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Back to Top</span>
            <span className="p-2 border border-[#FAF7F3]/25 hover:border-[#FAF7F3] transition-colors">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>

        {/* Middle Columns: Navigation & Location */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#FAF7F3]/15">
          <div className="md:col-span-6 space-y-4">
            <p className="text-xs font-sans tracking-[0.24em] uppercase text-[#E9E0DF]/70">
              Navigation
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="editorial-nav-link text-xs font-sans tracking-[0.2em] text-[#FAF7F3] hover:text-[#E9E0DF] whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 space-y-2">
            <p className="text-xs font-sans tracking-[0.24em] uppercase text-[#E9E0DF]/70">
              Address
            </p>
            <p className="font-serif text-xl sm:text-2xl text-[#FAF7F3]">
              STIRROCK RESTAURANT
            </p>
            <p className="font-sans text-sm text-[#E9E0DF]/85">
              {RESTAURANT_INFO.address.street} · {RESTAURANT_INFO.address.city},{' '}
              {RESTAURANT_INFO.address.state}, {RESTAURANT_INFO.address.country}
            </p>
          </div>
        </div>

        {/* Bottom Copyright Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#E9E0DF]/70">
          <div>
            © {new Date().getFullYear()} STIRROCK RESTAURANT · All rights reserved.
          </div>
          <div>
            Premium Website Concept Demonstration · Agbor, Delta State
          </div>
        </div>
      </div>
    </footer>
  );
}
