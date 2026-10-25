import { ArrowUpRight, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { LineRevealHeadline, EditorialFadeUp } from './ScrollReveal';

export function LocationSection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF7F3] text-[#272124] border-t border-[#E9E0DF]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Minimal, Elegant Address & Directions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <EditorialFadeUp>
                <p className="text-xs font-sans font-semibold tracking-[0.24em] uppercase text-[#722F45] mb-3">
                  06. Location & Contact
                </p>
              </EditorialFadeUp>

              <LineRevealHeadline
                lines={['STIRROCK', 'RESTAURANT']}
                className="font-serif text-3xl sm:text-5xl text-[#272124] font-normal tracking-[0.04em] mb-8"
                delay={0.05}
              />

              <EditorialFadeUp delay={0.14}>
                <address className="not-italic space-y-1.5 border-l border-[#722F45] pl-5 py-1">
                  <p className="font-serif text-2xl sm:text-3xl text-[#272124]">
                    {RESTAURANT_INFO.address.street}
                  </p>
                  <p className="font-sans text-base text-[#272124]/80">
                    {RESTAURANT_INFO.address.city}
                  </p>
                  <p className="font-sans text-base text-[#272124]/80">
                    {RESTAURANT_INFO.address.state},{' '}
                    {RESTAURANT_INFO.address.country}
                  </p>
                </address>
              </EditorialFadeUp>
            </div>

            {/* Direct Contact & Launch Integration Note (No invented phone numbers) */}
            <EditorialFadeUp
              delay={0.2}
              className="py-6 border-t border-b border-[#E9E0DF] space-y-2"
            >
              <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#722F45]">
                Direct Telephone & Opening Hours
              </p>
              <p className="font-sans text-sm text-[#272124]/75 leading-relaxed">
                Reserved for Stirrock Restaurant’s verified telephone number,
                service hours, and official social handles upon owner
                confirmation.
              </p>
            </EditorialFadeUp>

            {/* GET DIRECTIONS CTA */}
            <EditorialFadeUp delay={0.26}>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="editorial-btn inline-flex items-center gap-3 px-7 py-4 bg-[#722F45] text-[#FAF7F3] hover:bg-[#481B2B] text-xs font-sans font-semibold tracking-[0.2em] uppercase whitespace-nowrap shrink-0"
              >
                <span>GET DIRECTIONS</span>
                <ArrowUpRight size={16} />
              </a>
            </EditorialFadeUp>
          </div>

          {/* Right Column: Architectural Location Panel for Innu Ugbo Street, Agbor */}
          <EditorialFadeUp delay={0.16} className="lg:col-span-7">
            <div className="relative h-full min-h-[380px] bg-[#FFFFFF] border border-[#E9E0DF] p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
              {/* Architectural Street Grid Vector Illustration in Wine & Soft Neutral */}
              <div className="absolute inset-0 pointer-events-none opacity-65">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="stirrock-grid"
                      width="48"
                      height="48"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 48 0 L 0 0 0 48"
                        fill="none"
                        stroke="#E9E0DF"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#stirrock-grid)" />
                  <line
                    x1="5%"
                    y1="28%"
                    x2="95%"
                    y2="22%"
                    stroke="#E9E0DF"
                    strokeWidth="6"
                  />
                  <line
                    x1="15%"
                    y1="68%"
                    x2="92%"
                    y2="54%"
                    stroke="#722F45"
                    strokeOpacity="0.22"
                    strokeWidth="4"
                  />
                  <line
                    x1="34%"
                    y1="8%"
                    x2="46%"
                    y2="92%"
                    stroke="#E9E0DF"
                    strokeWidth="5"
                  />
                  <line
                    x1="68%"
                    y1="10%"
                    x2="62%"
                    y2="90%"
                    stroke="#722F45"
                    strokeOpacity="0.16"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              {/* Top Map Bar */}
              <div className="relative z-10 flex items-center justify-between text-xs font-sans tracking-[0.18em] uppercase text-[#722F45]">
                <span>Agbor 321001 · Delta State</span>
                <span>Innu Ugbo Street</span>
              </div>

              {/* Center Architectural Marker Card */}
              <div className="relative z-10 my-10 mx-auto max-w-sm w-full bg-[#FAF7F3] border border-[#722F45]/30 p-6 text-center shadow-xs">
                <div className="w-9 h-9 mx-auto mb-3 bg-[#722F45] text-[#FAF7F3] flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <p className="font-serif text-2xl text-[#272124] tracking-wide">
                  STIRROCK RESTAURANT
                </p>
                <p className="mt-1 font-sans text-xs text-[#272124]/75 tracking-wider uppercase">
                  Innu Ugbo Street, Agbor 321001
                </p>
                <p className="mt-0.5 font-sans text-xs text-[#722F45]">
                  Delta State, Nigeria
                </p>
              </div>

              {/* Bottom Map Bar */}
              <div className="relative z-10 pt-4 border-t border-[#E9E0DF] flex items-center justify-between gap-4 text-xs font-sans">
                <span className="text-[#272124]/70">
                  Interactive Google Maps Route Search
                </span>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="editorial-nav-link font-semibold text-[#722F45] hover:text-[#481B2B] inline-flex items-center gap-1.5 tracking-wider uppercase whitespace-nowrap shrink-0"
                >
                  <span>Open Map Search</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </EditorialFadeUp>
        </div>
      </div>
    </section>
  );
}
