import { RESTAURANT_INFO } from '../data/restaurantData';
import {
  LineRevealHeadline,
  EditorialFadeUp,
  MaskedImageReveal,
} from './ScrollReveal';

export function SignatureMoment() {
  return (
    <section className="relative bg-[#722F45] text-[#FAF7F3] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Editorial Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <EditorialFadeUp>
              <p className="text-xs font-sans font-medium tracking-[0.24em] uppercase text-[#E9E0DF] mb-4">
                03. Culinary Variety · Two Worlds at One Table
              </p>
            </EditorialFadeUp>

            <LineRevealHeadline
              lines={['LOCAL FLAVOUR.', 'GLOBAL INSPIRATION.']}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F3] font-normal leading-[1.06]"
              delay={0.08}
            />
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-[#FAF7F3]/20 lg:pl-8">
            <EditorialFadeUp delay={0.18}>
              <p className="font-sans text-base text-[#FAF7F3]/90 leading-relaxed">
                Every gathering brings different tastes to the table. From rich
                Nigerian staples to familiar international dishes, everyone in
                your party can look forward to something satisfying.
              </p>
            </EditorialFadeUp>
          </div>
        </div>

        {/* Asymmetric Split Composition: Nigerian Cuisine (Left) vs Intercontinental Cuisine (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Nigerian Cuisine Showcase (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#481B2B] p-4 sm:p-6 border border-[#FAF7F3]/20 shadow-xl">
              <MaskedImageReveal
                src={RESTAURANT_INFO.images.jollofChicken}
                alt="Smoky Nigerian Jollof Rice with Grilled Chicken and Plantain"
                aspectClassName="aspect-[4/3]"
                enableParallax={true}
              />
              <div className="mt-5 pt-4 border-t border-[#FAF7F3]/15 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#E9E0DF]/80">
                    Nigerian Favourites
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F3] mt-1">
                    Homegrown Classics, Richly Prepared
                  </h3>
                </div>
                <span className="text-xs font-sans text-[#E9E0DF]/75 whitespace-nowrap shrink-0">
                  Jollof · Egusi · Catfish · Suya
                </span>
              </div>
              <p className="mt-3 font-sans text-sm text-[#E9E0DF]/85 leading-relaxed">
                Smoky jollof rice, smooth pounded yam with egusi soup, warming
                pepper soup, and whole spiced grilled catfish—plated for
                unhurried enjoyment.
              </p>
            </div>
          </div>

          {/* Right Column: Intercontinental Cuisine Showcase (6 cols, offset down on desktop for editorial rhythm) */}
          <div className="lg:col-span-6 lg:mt-16 space-y-6">
            <div className="bg-[#481B2B] p-4 sm:p-6 border border-[#FAF7F3]/20 shadow-xl">
              <MaskedImageReveal
                src={RESTAURANT_INFO.images.alfredoPasta}
                alt="Creamy Alfredo Pasta with Herbs and Parmesan"
                aspectClassName="aspect-[4/3]"
                enableParallax={true}
                delay={0.14}
              />
              <div className="mt-5 pt-4 border-t border-[#FAF7F3]/15 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#E9E0DF]/80">
                    Intercontinental Favourites
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F3] mt-1">
                    International Dishes Done Well
                  </h3>
                </div>
                <span className="text-xs font-sans text-[#E9E0DF]/75 whitespace-nowrap shrink-0">
                  Steaks · Pasta · Salmon · Grill
                </span>
              </div>
              <p className="mt-3 font-sans text-sm text-[#E9E0DF]/85 leading-relaxed">
                Grilled ribeye steaks, creamy Alfredo pasta, seared salmon, and
                handcrafted favourites prepared for guests who enjoy variety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
