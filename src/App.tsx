/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { DigitalMenu } from './components/DigitalMenu';
import { SignatureMoment } from './components/SignatureMoment';
import { LuxuryGallery } from './components/LuxuryGallery';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FullMenuModal } from './components/FullMenuModal';
import { SAMPLE_MENU_CATEGORIES } from './data/restaurantData';
import { MenuCategory } from './types';

export default function App() {
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>(
    SAMPLE_MENU_CATEGORIES
  );
  const [fullMenuOpen, setFullMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveClick = () => {
    scrollToSection('reservations');
    setTimeout(() => {
      const input = document.getElementById('res-name');
      if (input) input.focus();
    }, 650);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F3] text-[#272124] selection:bg-[#722F45] selection:text-[#FAF7F3] relative overflow-x-hidden">
      {/* 3-Zone Editorial Top Bar */}
      <Navigation onReserveClick={handleReserveClick} />

      <main>
        {/* Hero Section: GOOD TASTE. BEAUTIFULLY DONE. */}
        <Hero
          onExploreMenuClick={() => scrollToSection('menu')}
          onFindUsClick={() => scrollToSection('contact')}
        />

        {/* Cinematic Introduction: GOOD FOOD. GOOD COMPANY. */}
        <Introduction />

        {/* Menu Showcase: SOMETHING TO LOOK FORWARD TO. (Nigerian & Intercontinental) */}
        <DigitalMenu
          categories={menuCategories}
          onOpenFullMenu={() => setFullMenuOpen(true)}
          onReserveClick={handleReserveClick}
        />

        {/* Signature Food Experience: LOCAL FLAVOUR. GLOBAL INSPIRATION. */}
        <SignatureMoment />

        {/* Editorial Gallery: Food, Ambience & Dining Details */}
        <LuxuryGallery />

        {/* Reservation Enquiry: LET'S SAVE YOU A SEAT. */}
        <ReservationSection />

        {/* Location & Contact: Innu Ugbo Street, Agbor 321001, Delta State */}
        <LocationSection />
      </main>

      {/* Sophisticated Wine-Red Footer */}
      <Footer />

      {/* Full Demonstration Menu Overlay with Live Sample Editing */}
      <FullMenuModal
        isOpen={fullMenuOpen}
        onClose={() => setFullMenuOpen(false)}
        categories={menuCategories}
        onUpdateCategories={setMenuCategories}
        onResetCategories={() => setMenuCategories(SAMPLE_MENU_CATEGORIES)}
        onReserveFromMenu={handleReserveClick}
      />
    </div>
  );
}
