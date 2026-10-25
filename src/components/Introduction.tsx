import { RESTAURANT_INFO } from '../data/restaurantData';
import {
  LineRevealHeadline,
  EditorialFadeUp,
  MaskedImageReveal,
} from './ScrollReveal';

export function Introduction() {
  return (
    <section
      id="our-story"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF7F3] text-[#272124] border-b border-[#E9E0DF]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Editorial Spread Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-8">
            <EditorialFadeUp>
              <p className="text-xs font-sans font-semibold tracking-[0.24em] uppercase text-[#722F45] mb-4">
                01. The Experience · Agbor, Delta State
              </p>
            </EditorialFadeUp>

            <LineRevealHeadline
              lines={['GOOD FOOD.', 'GOOD COMPANY.']}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#272124] font-normal leading-[1.06] tracking-[0.01em]"
              delay={0.08}
            />
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-[#E9E0DF] lg:pl-8">
            <EditorialFadeUp delay={0.18}>
              <p className="font-sans text-sm sm:text-base text-[#272124]/80 leading-relaxed">
                Located on Innu Ugbo Street in Agbor, Stirrock Restaurant brings
                together familiar Nigerian favourites, international classics,
                and a warm, inviting space designed for sharing memorable meals.
              </p>
            </EditorialFadeUp>
          </div>
        </div>

        {/* Asymmetric Magazine Spread Composition: 1 Large Image + 1 Smaller Supporting Image + Short Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Large Dominant Architectural/Dining Photograph with Parallax & Clip-Path Reveal (7 cols) */}
          <div className="lg:col-span-7">
            <MaskedImageReveal
              src={RESTAURANT_INFO.images.introDining}
              alt="Warm contemporary dining room setting concept for Stirrock Restaurant"
              aspectClassName="aspect-[4/3]"
              enableParallax={true}
              className="border border-[#E9E0DF]"
            />
            <EditorialFadeUp delay={0.15}>
              <div className="mt-3 flex items-center justify-between text-xs font-sans text-[#272124]/60">
                <span>Editorial Space Concept · Warm Linen & Timber</span>
                <span>Innu Ugbo Street, Agbor</span>
              </div>
            </EditorialFadeUp>
          </div>

          {/* Right: Smaller Supporting Portrait Image + Concise Editorial Copy (5 cols, offset down on desktop) */}
          <div className="lg:col-span-5 lg:mt-14 flex flex-col justify-between space-y-8">
            <div className="w-4/5 sm:w-3/4 lg:w-5/6">
              <MaskedImageReveal
                src={RESTAURANT_INFO.images.tableDetail}
                alt="Intimate table setting and plated starter detail"
                aspectClassName="aspect-[3/4]"
                delay={0.12}
                className="border border-[#E9E0DF]"
              />
            </div>

            <EditorialFadeUp delay={0.22}>
              <div className="pt-5 border-t border-[#722F45]/25 space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#722F45] font-normal">
                  A welcoming table for every occasion.
                </h3>
                <p className="font-sans text-[15px] text-[#272124]/80 leading-relaxed">
                  Whether you are stopping by for smoky jollof rice and grilled
                  catfish, enjoying pasta or steak with friends, or celebrating
                  with family in Agbor, every detail is shaped around comfort
                  and good taste.
                </p>
                <p className="text-xs font-sans text-[#722F45] tracking-wider uppercase pt-1">
                  Good Taste · Beautifully Done
                </p>
              </div>
            </EditorialFadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
