/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { SteakArt } from './components/SteakArt';
import { DigitalMenu } from './components/DigitalMenu';
import { ExperienceCollage } from './components/ExperienceCollage';
import { CraftOverFire } from './components/CraftOverFire';
import { OurStory } from './components/OurStory';
import { LuxuryGallery } from './components/LuxuryGallery';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileStickyReserve } from './components/MobileStickyReserve';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const scrollToReservations = () => {
    const el = document.getElementById('reservations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Optional subtle focus after scroll
      setTimeout(() => {
        const input = el.querySelector('input');
        if (input) input.focus();
      }, 700);
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070708] text-[#E8E4DC] selection:bg-[#C5A880]/20 selection:text-[#F4F1EA] relative overflow-x-hidden">
      {/* Subtle Desktop Circular Interaction Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation onReserveClick={scrollToReservations} />

      {/* Main Sections */}
      <main>
        {/* Full-Screen Cinematic Hero */}
        <Hero
          onReserveClick={scrollToReservations}
          onExploreMenuClick={scrollToMenu}
        />

        {/* Editorial Introduction: Magazine Spread */}
        <Introduction />

        {/* The Steak Experience: The Art of Steak */}
        <SteakArt />

        {/* The Digital Menu: Physical to Digital Split Screen */}
        <DigitalMenu />

        {/* The Atmosphere: The Night Begins Here */}
        <ExperienceCollage />

        {/* The Fire: Crafted Over Fire */}
        <CraftOverFire />

        {/* Our Story: Honest Editorial Philosophy */}
        <OurStory />

        {/* Visual Studies: Fashion Editorial Gallery with Lightbox */}
        <LuxuryGallery />

        {/* Luxury Reservation Suite: Your Table Awaits */}
        <ReservationSection />

        {/* Location & Directions: 173 Ikenegbu Layout, Owerri */}
        <LocationSection />
      </main>

      {/* Spacious Dramatic Footer */}
      <Footer />

      {/* Mobile Sticky Reservation CTA */}
      <MobileStickyReserve onReserveClick={scrollToReservations} />
    </div>
  );
}

