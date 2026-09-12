import heroSteakImage from '../assets/images/hero_steak_fire_1789203891775.jpg';
import artOfSteakImage from '../assets/images/art_of_steak_1789203907090.jpg';
import luxuryDiningRoomImage from '../assets/images/luxury_dining_room_1789203919528.jpg';
import { MenuCategory, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'ICE & STEAK',
  tagline: 'WHERE FIRE MEETS FINESSE',
  subheading: 'An elevated dining experience shaped by exceptional cuts, refined flavours and unforgettable evenings.',
  address: {
    street: '173 Ikenegbu Layout',
    city: 'Owerri',
    state: 'Imo State',
    country: 'Nigeria',
    full: '173 Ikenegbu Layout, Owerri, Imo State, Nigeria'
  },
  phone: '+234 816 175 8771',
  phoneFormatted: '+234 816 175 8771',
  whatsappUrl: 'https://wa.me/2348161758771?text=Hello%20ICE%20%26%20STEAK%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=173+Ikenegbu+Layout+Owerri+Imo+State+Nigeria',
  hours: [
    { days: 'Tuesday — Thursday', time: '17:00 — 23:30' },
    { days: 'Friday — Sunday', time: '16:00 — 01:00' },
    { days: 'Monday', time: 'Private Dining & Events Only' }
  ]
};

export const IMAGES = {
  hero: heroSteakImage,
  artOfSteak: artOfSteakImage,
  diningRoom: luxuryDiningRoomImage,
  // Curated dark, editorial luxury imagery with deep contrast & warm highlights
  cocktailSmoked: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85',
  winePour: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85',
  grillEmbers: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
  chefFirePrep: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
  wagyuSlice: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=85',
  tableSettingDark: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85',
  oystersCaviar: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=85',
  charcuteriePlate: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=85',
  dessertDarkChoc: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=85'
};

export const STEAK_EXPERIENCE_CATEGORIES = [
  {
    title: 'SIGNATURE CUTS',
    description: 'Dry-aged in-house for minimum 35 days under Himalayan salt blocks, seared over white oak and charcoal.',
    items: [
      { name: '45-Day Dry-Aged Tomahawk', cut: 'Prime Black Angus · 1.2kg', notes: 'Bone-in, rich marbling, finished with smoked Maldon crystal salt', price: 'Market Selection' },
      { name: 'A5 Miyazaki Wagyu Ribeye', cut: 'Japanese Black Cattle · 300g', notes: 'BMS 10+, flash-seared at 900°F with fresh wasabi root and truffle butter', price: 'Chef Selection' },
      { name: 'Bone-In Kansas Strip', cut: 'USDA Prime · 600g', notes: 'Cast-iron basted with bone marrow, charred thyme, and confit garlic', price: 'Market Selection' }
    ]
  },
  {
    title: 'PREMIUM GRILLS',
    description: 'Flame-finished over aromatic hardwood embers to seal caramelized crust with tender core.',
    items: [
      { name: 'Black Angus Center-Cut Tenderloin', cut: 'Grain-Fed 250g', notes: 'Finished with pink peppercorn jus and smoked bone marrow butter', price: 'Selected Daily' },
      { name: 'Wood-Fired Picanha Steak', cut: 'Prime Sirloin Cap · 400g', notes: 'Skewered over open embers with coarse sea salt and smoked chimichurri', price: 'Selected Daily' },
      { name: 'Fire-Charred Lamb Rack', cut: 'Grass-Fed Pasture Lamb', notes: 'Crusted with wild herbs, pomegranate glaze, and ember-roasted garlic', price: 'Chef Selection' }
    ]
  },
  {
    title: "CHEF'S SPECIALS",
    description: 'Exclusive cuts and curated pairings refreshed weekly according to provenance and aging maturity.',
    items: [
      { name: 'The Owerri Fire Board', cut: 'Tasting of Three Premier Cuts', notes: 'Tenderloin, aged striploin, and wagyu slices served on charred slate', price: 'Signature Tasting' },
      { name: 'Whole Roasted Beef Rib', cut: 'Slow-Smoked 14 Hours', notes: 'Glazed with African bird’s eye reduction and aged balsamic', price: 'Limited Reserve' }
    ]
  }
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'starters',
    name: 'STARTERS',
    subtitle: 'Beginnings crafted with tension between cold and fire',
    items: [
      {
        id: 'st-1',
        name: 'Hand-Cut Wagyu Tartare',
        cutOrOrigin: 'A5 Beef · Smoked Egg Emulsion',
        description: 'Cured egg yolk, pickled mustard seed, bone marrow brioche toast points.',
        pricePlaceholder: 'Refined Opening',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
        tag: 'Signature'
      },
      {
        id: 'st-2',
        name: 'Charred Octopus Tentacle',
        cutOrOrigin: 'Atlantic Catch · Ember Grilled',
        description: 'Saffron potato mousseline, smoked paprika oil, crispy caper berries.',
        pricePlaceholder: 'Coastal Reserve',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'st-3',
        name: 'Fire-Roasted Bone Marrow',
        cutOrOrigin: 'Split Beef Canoe',
        description: 'Parsley-shallot salad, grilled sourdough, capers, smoked fleur de sel.',
        pricePlaceholder: 'House Favorite',
        image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'steaks',
    name: 'STEAKS',
    subtitle: 'Heritage breeds dry-aged and flame-kissed over selected wood coals',
    items: [
      {
        id: 'stk-1',
        name: 'Tomahawk Ribeye 45-Day Dry Aged',
        cutOrOrigin: 'Prime Black Angus · 1200g',
        description: 'Charred over white oak and charcoal, served with smoked bone marrow butter and roasted garlic.',
        pricePlaceholder: 'Tableside Carved',
        image: heroSteakImage,
        tag: 'House Masterpiece'
      },
      {
        id: 'stk-2',
        name: 'A5 Miyazaki Wagyu Ribcap',
        cutOrOrigin: 'Miyazaki Prefecture, Japan',
        description: 'Extreme marbling BMS 11, seared over binchotan coal, fresh wasabi root, smoked volcanic salt.',
        pricePlaceholder: 'Curated Reserve',
        image: artOfSteakImage,
        tag: 'Rare Import'
      },
      {
        id: 'stk-3',
        name: 'Prime Black Angus Porterhouse',
        cutOrOrigin: 'Nebraska Prime · 900g',
        description: 'The definitive union of tender tenderloin and deep-flavoured strip, finished in foaming butter.',
        pricePlaceholder: 'Ideal for Two',
        image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'stk-4',
        name: 'Center-Cut Filet Mignon',
        cutOrOrigin: 'Grain-Fed Tenderloin · 280g',
        description: 'Velvety texture, seared with rosemary, cracked telicherry black pepper, red wine reduction.',
        pricePlaceholder: 'Classic Reserve',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'mains',
    name: 'MAINS',
    subtitle: 'Beyond beef — deliberate ocean catches and hearth-roasted poultry',
    items: [
      {
        id: 'mn-1',
        name: 'Wood-Fired Whole Branzino',
        cutOrOrigin: 'Mediterranean Sea Bass',
        description: 'Stuffed with fresh lemon verbena, wild oregano, charred over embers, extra virgin olive oil.',
        pricePlaceholder: 'Catch of Day',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'mn-2',
        name: 'Ember-Smoked Duck Breast',
        cutOrOrigin: 'Dry-Aged Moulard',
        description: 'Crisp scored skin, tart blackberry reduction, parsnip puree, charred broccolini.',
        pricePlaceholder: 'Chef Signature',
        image: 'https://images.unsplash.com/photo-1514944298352-f67584100650?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'mn-3',
        name: 'Glazed Heritage Lamb Chops',
        cutOrOrigin: 'Colorado Meadow Raised',
        description: 'Charred mint chimichurri, ember-crusted baby carrots, roasted bone glaze.',
        pricePlaceholder: 'Flame Selection',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'sides',
    name: 'SIDES',
    subtitle: 'Companions designed to balance smoke and richness',
    items: [
      {
        id: 'sd-1',
        name: 'Truffle & Aged Gruyère Potato Purée',
        cutOrOrigin: 'Yukon Gold',
        description: 'Whipped with Normandy butter, shaved black winter truffle, melted aged alpine cheese.',
        pricePlaceholder: 'House Classic',
        image: 'https://images.unsplash.com/photo-1518013034458-30b0ee243591?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'sd-2',
        name: 'Charred Broccolini & Bone Marrow Butter',
        cutOrOrigin: 'Farm Grown',
        description: 'Blistered over flames, roasted almonds, lemon zest, whipped marrow emulsion.',
        pricePlaceholder: 'Hearth Side',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'sd-3',
        name: 'Wild Forest Mushrooms',
        cutOrOrigin: 'Chanterelle & King Oyster',
        description: 'Sautéed in pan drippings with shallots, thyme, and 25-year aged sherry vinegar.',
        pricePlaceholder: 'Woodland Selection',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'DESSERTS',
    subtitle: 'The closing cadence of dark chocolates, smoke, and cold creams',
    items: [
      {
        id: 'ds-1',
        name: '70% Smoked Dark Chocolate Ganache',
        cutOrOrigin: 'Single Origin Ghana Cacao',
        description: 'Warm molten center, smoked sea salt flakes, Madagascar bourbon vanilla gelato.',
        pricePlaceholder: 'Signature Finish',
        image: IMAGES.dessertDarkChoc,
        tag: 'House Masterpiece'
      },
      {
        id: 'ds-2',
        name: 'Fire-Torched Bourbon Mille-Feuille',
        cutOrOrigin: 'Caramelized Puff Pastry',
        description: 'Whipped mascarpone, charred fig compote, single-barrel bourbon drizzle.',
        pricePlaceholder: 'Pastry Selection',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'drinks',
    name: 'DRINKS',
    subtitle: 'Artisanal mixology, hand-carved ice, and vintage cellar reserves',
    items: [
      {
        id: 'dr-1',
        name: 'The Obsidian Old Fashioned',
        cutOrOrigin: 'Rare Bourbon · House Smoke',
        description: 'Single block crystal ice, Angostura & walnut bitters, charred orange peel, hickory smoke reveal.',
        pricePlaceholder: 'Signature Cocktail',
        image: IMAGES.cocktailSmoked,
        tag: 'Bespoke Ice'
      },
      {
        id: 'dr-2',
        name: 'Owerri Ember Sour',
        cutOrOrigin: 'Smoked Mezcal & Rye',
        description: 'Fresh yuzu, agave nectar, egg white foam, red wine float, flamed rosemary.',
        pricePlaceholder: 'Hearth Mixology',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'dr-3',
        name: 'Grand Cru Cellar Selections',
        cutOrOrigin: 'Bordeaux, Napa & Tuscany',
        description: 'Curated by our dining room sommelier to accentuate aged beef profiles and char notes.',
        pricePlaceholder: 'By Bottle or Coravin',
        image: IMAGES.winePour
      }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Searing Hearth',
    category: 'FIRE & CRAFT',
    aspect: 'wide',
    image: heroSteakImage,
    caption: 'White oak hardwood embers reaching 900°F for instant Maillard crystallization.'
  },
  {
    id: 'gal-2',
    title: 'Architectural Intimacy',
    category: 'ATMOSPHERE',
    aspect: 'portrait',
    image: luxuryDiningRoomImage,
    caption: 'Dark charcoal stone, acoustic leather banquettes, and ambient low-voltage illumination.'
  },
  {
    id: 'gal-3',
    title: 'The Cut',
    category: 'THE MEAT',
    aspect: 'square',
    image: artOfSteakImage,
    caption: 'Carved tableside at optimum resting temperature to retain every drop of natural jus.'
  },
  {
    id: 'gal-4',
    title: 'Hand-Carved Crystal Ice',
    category: 'MIXOLOGY',
    aspect: 'portrait',
    image: IMAGES.cocktailSmoked,
    caption: 'Dense directional-frozen ice designed to chill without dilution.'
  },
  {
    id: 'gal-5',
    title: 'Cellar Provenance',
    category: 'WINE',
    aspect: 'landscape',
    image: IMAGES.winePour,
    caption: 'Temperature-controlled cellars housing classic vintages and regional discoveries.'
  },
  {
    id: 'gal-6',
    title: 'Midnight Table',
    category: 'HOSPITALITY',
    aspect: 'landscape',
    image: IMAGES.tableSettingDark,
    caption: 'An intimate dining sanctuary situated in the heart of Owerri.'
  }
];
