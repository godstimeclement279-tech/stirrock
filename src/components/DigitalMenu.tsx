import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { BookOpen, Calendar } from 'lucide-react';
import { MenuCategory } from '../types';
import { EditorialImage } from './EditorialImage';
import { LineRevealHeadline, EditorialFadeUp } from './ScrollReveal';

interface DigitalMenuProps {
  categories: MenuCategory[];
  onOpenFullMenu: () => void;
  onReserveClick: () => void;
}

export function DigitalMenu({
  categories,
  onOpenFullMenu,
  onReserveClick,
}: DigitalMenuProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    categories[0]?.id || 'nigerian'
  );
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  const prefersReducedMotion = useReducedMotion();

  const activeCategory =
    categories.find((cat) => cat.id === activeCategoryId) || categories[0];
  const activeItem =
    activeCategory.items[selectedItemIndex] || activeCategory.items[0];

  const signatureKitchenCategories = categories.filter(
    (c) => c.groupLabel === 'Signature Kitchen'
  );
  const accompanimentCategories = categories.filter(
    (c) => c.groupLabel === 'Accompaniments & Refreshments'
  );

  const handleCategoryChange = (id: string) => {
    setActiveCategoryId(id);
    setSelectedItemIndex(0);
  };

  return (
    <section
      id="menu"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF7F3] text-[#272124]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Heading & Clear Illustrative Demo Notice */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#722F45]/25">
          <div>
            <EditorialFadeUp>
              <p className="text-xs font-sans font-semibold tracking-[0.24em] uppercase text-[#722F45] mb-3">
                02. Culinary Selection · Nigerian & Intercontinental
              </p>
            </EditorialFadeUp>
            <LineRevealHeadline
              lines={['SOMETHING TO', 'LOOK FORWARD TO.']}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#722F45] font-normal leading-[1.06]"
              delay={0.05}
            />
          </div>

          <EditorialFadeUp delay={0.15} className="max-w-md">
            <p className="font-sans text-xs sm:text-sm text-[#272124]/75 leading-relaxed">
              <strong className="font-semibold text-[#722F45]">
                Sample Demonstration Menu:
              </strong>{' '}
              Proposed Nigerian favourites and international classics with
              illustrative demo pricing in Naira (₦). Every dish and price is
              easily editable once confirmed by Stirrock Restaurant.
            </p>
          </EditorialFadeUp>
        </div>

        {/* Category Navigation with Visual Distinction Between Main Kitchen & Accompaniments */}
        <div className="py-8 border-b border-[#E9E0DF] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Primary Signature Kitchen Pair: Nigerian vs Intercontinental */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#722F45] mr-1">
              Main Kitchen
            </span>
            <div
              role="tablist"
              aria-label="Primary Kitchen Categories"
              className="flex flex-wrap items-center gap-2.5"
            >
              {signatureKitchenCategories.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`editorial-btn px-5 py-3 text-xs font-sans font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#722F45] text-[#FAF7F3] border border-[#722F45]'
                        : 'bg-[#FFFFFF] text-[#272124] border border-[#722F45]/35 hover:border-[#722F45] hover:text-[#722F45]'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accompaniments: Sides, Drinks, Desserts */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#272124]/60 mr-1">
              More Courses
            </span>
            <div
              role="tablist"
              aria-label="Sides, Drinks and Desserts"
              className="flex flex-wrap items-center gap-2"
            >
              {accompanimentCategories.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`editorial-btn px-4 py-2.5 text-xs font-sans font-medium tracking-[0.18em] uppercase whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#481B2B] text-[#FAF7F3] border border-[#481B2B]'
                        : 'bg-transparent text-[#272124]/80 border border-[#E9E0DF] hover:border-[#722F45] hover:text-[#722F45]'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Category Featured Image (Simple tap-based visual context on mobile) */}
        <div className="mt-8 lg:hidden">
          <div className="bg-[#FFFFFF] p-3.5 border border-[#E9E0DF]">
            <div className="overflow-hidden aspect-[16/10] bg-[#E9E0DF]">
              <EditorialImage
                src={activeItem.image}
                alt={activeItem.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-3 text-xs font-sans">
              <span className="font-serif text-lg text-[#722F45]">
                {activeItem.name}
              </span>
              <span className="font-semibold text-[#722F45] tabular-nums whitespace-nowrap shrink-0">
                Demo · {activeItem.samplePrice}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Editorial Split Layout: Menu List (7 cols) + Hover-Responsive Food Photograph (5 cols) */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Menu Items List */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-[#722F45] tracking-wider">
              <span className="font-medium uppercase tracking-[0.18em]">
                {activeCategory.name}
              </span>
              <span className="text-[#272124]/60">{activeCategory.subtitle}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }
                }
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="divide-y divide-[#E9E0DF] border-t border-b border-[#E9E0DF]"
              >
                {activeCategory.items.map((item, idx) => {
                  const isSelected = idx === selectedItemIndex;
                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setSelectedItemIndex(idx)}
                      onClick={() => setSelectedItemIndex(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedItemIndex(idx);
                        }
                      }}
                      className={`group py-6 px-4 -mx-4 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#722F45] ${
                        isSelected ? 'bg-[#FFFFFF]' : 'hover:bg-[#FFFFFF]/65'
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Fine wine-red horizontal indicator */}
                          <span
                            aria-hidden="true"
                            className={`h-px bg-[#722F45] transition-all duration-200 shrink-0 ${
                              isSelected
                                ? 'w-5 opacity-100'
                                : 'w-0 opacity-0 group-hover:w-3 group-hover:opacity-60'
                            }`}
                          />
                          <h3
                            className={`font-serif text-2xl sm:text-[27px] leading-snug transition-colors ${
                              isSelected
                                ? 'text-[#722F45] font-medium'
                                : 'text-[#272124] group-hover:text-[#722F45]'
                            }`}
                          >
                            {item.name}
                          </h3>
                        </div>

                        <div className="flex items-baseline gap-2 shrink-0">
                          <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-[#272124]/45 hidden sm:inline">
                            Demo
                          </span>
                          <span className="font-sans text-sm sm:text-base font-semibold text-[#722F45] tabular-nums whitespace-nowrap">
                            {item.samplePrice}
                          </span>
                        </div>
                      </div>

                      <p className="mt-2 font-sans text-sm text-[#272124]/75 leading-relaxed max-w-xl">
                        {item.description}
                      </p>

                      <div className="mt-2.5 text-[11px] font-sans text-[#722F45]/80 tracking-wider">
                        <span>{item.originTag}</span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Prominent Reservation Enquiry CTA & Full Menu Button Below Menu */}
            <div className="mt-12 pt-8 border-t border-[#722F45]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onReserveClick}
                  className="editorial-btn inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#722F45] text-[#FAF7F3] hover:bg-[#481B2B] text-xs font-sans font-semibold tracking-[0.2em] uppercase whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Calendar size={15} />
                  <span>RESERVE A TABLE</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenFullMenu}
                  className="editorial-btn inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#FFFFFF] text-[#722F45] border border-[#722F45] hover:bg-[#722F45] hover:text-[#FAF7F3] text-xs font-sans font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <BookOpen size={15} />
                  <span>VIEW FULL MENU</span>
                </button>
              </div>

              <span className="text-xs font-sans text-[#272124]/60">
                Illustrative demo prices · Editable in Full Menu view
              </span>
            </div>
          </div>

          {/* Right Column: Sticky Editorial Dish Photograph with Hover Scale & Fade */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-[#FFFFFF] p-6 border border-[#E9E0DF] shadow-xs">
              <div className="relative overflow-hidden aspect-[4/3] bg-[#E9E0DF]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 0, scale: 1.05 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 0, scale: 0.98 }
                    }
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <EditorialImage
                      src={activeItem.image}
                      alt={activeItem.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E9E0DF] flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#722F45]">
                    {activeCategory.name} · Sample Plating
                  </p>
                  <h4 className="font-serif text-2xl text-[#272124] mt-1">
                    {activeItem.name}
                  </h4>
                  <p className="mt-1 font-sans text-xs text-[#272124]/70 line-clamp-2">
                    {activeItem.description}
                  </p>
                </div>
                <span className="font-sans text-sm font-semibold text-[#722F45] tabular-nums whitespace-nowrap shrink-0">
                  {activeItem.samplePrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
