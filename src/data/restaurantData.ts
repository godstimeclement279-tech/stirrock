import heroCuisineImg from '../assets/images/stirrock_hero_cuisine_1792921983304.jpg';
import introDiningImg from '../assets/images/stirrock_intro_dining_1792921985181.jpg';
import tableDetailImg from '../assets/images/stirrock_table_detail_1792921986378.jpg';
import signatureDishImg from '../assets/images/stirrock_signature_dish_1792921986276.jpg';
import dessertDrinksImg from '../assets/images/stirrock_dessert_drinks_1792921988043.jpg';
import jollofChickenImg from '../assets/images/stirrock_jollof_chicken_1792923293793.jpg';
import egusiPoundedYamImg from '../assets/images/stirrock_egusi_pounded_yam_1792923294600.jpg';
import grilledCatfishImg from '../assets/images/stirrock_grilled_catfish_suya_1792923296074.jpg';
import chapmanCocktailsImg from '../assets/images/stirrock_chapman_cocktails_1792923296422.jpg';
import alfredoPastaImg from '../assets/images/stirrock_alfredo_pasta_1792923297375.jpg';
import ribeyeSteakImg from '../assets/images/art_of_steak_1789203907090.jpg';
import { MenuCategory, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'STIRROCK RESTAURANT',
  wordmark: 'STIRROCK',
  tagline: 'GOOD TASTE. BEAUTIFULLY DONE.',
  heroSupporting:
    'From Nigerian favourites to international classics, discover food made for sharing, celebrating and coming back for.',
  address: {
    street: 'Innu Ugbo Street',
    city: 'Agbor 321001',
    state: 'Delta State',
    country: 'Nigeria',
    full: 'Innu Ugbo Street, Agbor 321001, Delta State, Nigeria',
  },
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Stirrock+Restaurant+Innu+Ugbo+Street+Agbor+321001+Delta+State+Nigeria',
  images: {
    heroCuisine: heroCuisineImg,
    introDining: introDiningImg,
    tableDetail: tableDetailImg,
    signatureDish: signatureDishImg,
    dessertDrinks: dessertDrinksImg,
    jollofChicken: jollofChickenImg,
    egusiPoundedYam: egusiPoundedYamImg,
    grilledCatfish: grilledCatfishImg,
    chapmanCocktails: chapmanCocktailsImg,
    alfredoPasta: alfredoPastaImg,
    ribeyeSteak: ribeyeSteakImg,
  },
};

/**
 * Editable Demonstration Menu Configuration
 * All dishes and prices below are illustrative sample items for the Stirrock website presentation.
 */
export const SAMPLE_MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'nigerian',
    name: 'Nigerian Favourites',
    groupLabel: 'Signature Kitchen',
    subtitle:
      'Proposed sample Nigerian classics — illustrative demo pricing for owner review',
    items: [
      {
        id: 'ng-1',
        name: 'Jollof Rice & Grilled Chicken',
        originTag: 'Nigerian Classic · Demo Item',
        description:
          'Smoky Nigerian-style jollof rice served with grilled chicken and a fresh side garnish.',
        samplePrice: '₦8,500',
        image: jollofChickenImg,
      },
      {
        id: 'ng-2',
        name: 'Native Rice',
        originTag: 'Traditional Preparation · Demo Item',
        description:
          'A richly flavoured Nigerian rice dish prepared with traditional-style seasoning.',
        samplePrice: '₦8,000',
        image: jollofChickenImg,
      },
      {
        id: 'ng-3',
        name: 'Egusi Soup & Pounded Yam',
        originTag: 'Signature Swallow · Demo Item',
        description:
          'A Nigerian classic featuring melon-seed soup served with smooth pounded yam.',
        samplePrice: '₦9,500',
        image: egusiPoundedYamImg,
      },
      {
        id: 'ng-4',
        name: 'Pepper Soup',
        originTag: 'Aromatic Broth · Demo Item',
        description:
          'A warming, peppery broth with a choice of fish or assorted meat.',
        samplePrice: '₦7,500',
        image: egusiPoundedYamImg,
      },
      {
        id: 'ng-5',
        name: 'Ofada Rice & Ayamase Sauce',
        originTag: 'Local Favourite · Demo Item',
        description:
          'Local rice paired with a rich green pepper sauce.',
        samplePrice: '₦8,500',
        image: jollofChickenImg,
      },
      {
        id: 'ng-6',
        name: 'Grilled Catfish',
        originTag: 'From the Grill · Demo Item',
        description:
          'Seasoned grilled catfish served with pepper sauce and a suitable side.',
        samplePrice: '₦15,000',
        image: grilledCatfishImg,
      },
      {
        id: 'ng-7',
        name: 'Suya Platter',
        originTag: 'Spiced Grill · Demo Item',
        description:
          'Spiced grilled beef served with onions, fresh tomatoes and pepper sauce.',
        samplePrice: '₦9,000',
        image: grilledCatfishImg,
      },
    ],
  },
  {
    id: 'intercontinental',
    name: 'Intercontinental Favourites',
    groupLabel: 'Signature Kitchen',
    subtitle:
      'Proposed sample international classics — illustrative demo pricing for owner review',
    items: [
      {
        id: 'ic-1',
        name: 'Grilled Ribeye Steak',
        originTag: 'Prime Grill · Demo Item',
        description:
          'A grilled ribeye steak served with a choice of side and sauce.',
        samplePrice: '₦28,000',
        image: ribeyeSteakImg,
      },
      {
        id: 'ic-2',
        name: 'Creamy Alfredo Pasta',
        originTag: 'Italian Inspired · Demo Item',
        description:
          'Pasta tossed in a creamy sauce with herbs and Parmesan-style cheese.',
        samplePrice: '₦12,000',
        image: alfredoPastaImg,
      },
      {
        id: 'ic-3',
        name: 'Grilled Chicken Breast',
        originTag: 'Light & Savoury · Demo Item',
        description:
          'Seasoned chicken breast served with vegetables and a choice of side.',
        samplePrice: '₦14,000',
        image: heroCuisineImg,
      },
      {
        id: 'ic-4',
        name: 'Beef Burger & Fries',
        originTag: 'House Favourite · Demo Item',
        description:
          'A beef burger with lettuce, tomato and sauce, served with fries.',
        samplePrice: '₦12,500',
        image: ribeyeSteakImg,
      },
      {
        id: 'ic-5',
        name: 'Grilled Salmon',
        originTag: 'Ocean Catch · Demo Item',
        description:
          'Grilled salmon served with seasonal vegetables and a suitable side.',
        samplePrice: '₦25,000',
        image: signatureDishImg,
      },
      {
        id: 'ic-6',
        name: 'Chicken Stir-Fry',
        originTag: 'Wok & Pan · Demo Item',
        description:
          'Chicken and vegetables tossed in a savoury sauce, served with rice.',
        samplePrice: '₦13,000',
        image: heroCuisineImg,
      },
      {
        id: 'ic-7',
        name: 'Margherita Pizza',
        originTag: 'Oven Baked · Demo Item',
        description:
          'A classic pizza topped with tomato sauce, mozzarella and basil.',
        samplePrice: '₦12,000',
        image: alfredoPastaImg,
      },
    ],
  },
  {
    id: 'sides',
    name: 'Sides',
    groupLabel: 'Accompaniments & Refreshments',
    subtitle:
      'Proposed sample sides — illustrative demo pricing for owner review',
    items: [
      {
        id: 'sd-1',
        name: 'French Fries',
        originTag: 'Crisp Side · Demo Item',
        description: 'Golden crisp potato fries seasoned with fine sea salt.',
        samplePrice: '₦3,500',
        image: heroCuisineImg,
      },
      {
        id: 'sd-2',
        name: 'Fried Plantain',
        originTag: 'Sweet & Golden · Demo Item',
        description: 'Caramelized ripe plantain slices fried to a warm golden finish.',
        samplePrice: '₦2,500',
        image: jollofChickenImg,
      },
      {
        id: 'sd-3',
        name: 'Steamed Vegetables',
        originTag: 'Garden Greens · Demo Item',
        description: 'Fresh seasonal vegetables lightly steamed with herb butter.',
        samplePrice: '₦3,000',
        image: signatureDishImg,
      },
      {
        id: 'sd-4',
        name: 'Coleslaw',
        originTag: 'Cool & Crisp · Demo Item',
        description: 'Finely shredded cabbage and carrots in a light creamy dressing.',
        samplePrice: '₦2,000',
        image: tableDetailImg,
      },
      {
        id: 'sd-5',
        name: 'Extra Jollof Rice',
        originTag: 'House Staple · Demo Item',
        description: 'An additional portion of smoky Nigerian-style jollof rice.',
        samplePrice: '₦3,500',
        image: jollofChickenImg,
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    groupLabel: 'Accompaniments & Refreshments',
    subtitle:
      'Proposed sample beverages — illustrative demo pricing for owner review',
    items: [
      {
        id: 'dr-1',
        name: 'Chapman',
        originTag: 'Signature Cooler · Demo Item',
        description:
          'Refreshing Nigerian citrus and ruby bitters cooler garnished with cucumber, orange and mint.',
        samplePrice: '₦3,500',
        image: chapmanCocktailsImg,
      },
      {
        id: 'dr-2',
        name: 'Fresh Fruit Juice',
        originTag: 'Cold Pressed · Demo Item',
        description: 'Chilled freshly pressed seasonal fruit juice.',
        samplePrice: '₦3,000',
        image: chapmanCocktailsImg,
      },
      {
        id: 'dr-3',
        name: 'Bottled Water',
        originTag: 'Still Water · Demo Item',
        description: 'Chilled or room-temperature purified bottled water.',
        samplePrice: '₦1,000',
        image: tableDetailImg,
      },
      {
        id: 'dr-4',
        name: 'Soft Drinks',
        originTag: 'Chilled Classic · Demo Item',
        description: 'Assorted chilled carbonated soft drinks.',
        samplePrice: '₦1,000',
        image: chapmanCocktailsImg,
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    groupLabel: 'Accompaniments & Refreshments',
    subtitle:
      'Proposed sample desserts — illustrative demo pricing for owner review',
    items: [
      {
        id: 'ds-1',
        name: 'Chocolate Cake',
        originTag: 'Rich & Indulgent · Demo Item',
        description: 'Warm, velvety chocolate sponge layered with smooth cocoa ganache.',
        samplePrice: '₦5,000',
        image: dessertDrinksImg,
      },
      {
        id: 'ds-2',
        name: 'Ice Cream',
        originTag: 'Chilled Sweet · Demo Item',
        description: 'Creamy scoops of classic vanilla, chocolate or strawberry.',
        samplePrice: '₦3,500',
        image: dessertDrinksImg,
      },
      {
        id: 'ds-3',
        name: 'Fruit Platter',
        originTag: 'Fresh Harvest · Demo Item',
        description: 'Sliced seasonal tropical fruits served chilled.',
        samplePrice: '₦4,000',
        image: tableDetailImg,
      },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Smoky Jollof Rice & Grilled Chicken',
    category: 'Nigerian Favourites',
    aspect: 'wide',
    image: jollofChickenImg,
    caption:
      'Editorial Concept — Smoky Nigerian-style jollof rice plated with char-grilled chicken and golden plantain.',
  },
  {
    id: 'gal-2',
    title: 'Intimate Table Settings',
    category: 'Dining Details',
    aspect: 'portrait',
    image: tableDetailImg,
    caption:
      'Editorial Concept — Natural linen, crystal glassware, and starter plating in soft daylight.',
  },
  {
    id: 'gal-3',
    title: 'Egusi Soup & Smooth Pounded Yam',
    category: 'Nigerian Favourites',
    aspect: 'landscape',
    image: egusiPoundedYamImg,
    caption:
      'Editorial Concept — Rich melon-seed soup with leafy greens served alongside pounded yam.',
  },
  {
    id: 'gal-4',
    title: 'Warm Architectural Dining Space',
    category: 'Restaurant Ambience',
    aspect: 'landscape',
    image: introDiningImg,
    caption:
      'Editorial Concept — Spacious warm-white and timber dining room accented with deep wine glassware.',
  },
  {
    id: 'gal-5',
    title: 'Spiced Whole Grilled Catfish',
    category: 'From the Grill',
    aspect: 'landscape',
    image: grilledCatfishImg,
    caption:
      'Editorial Concept — Seasoned whole grilled catfish with pepper sauce, fresh onions, and lime.',
  },
  {
    id: 'gal-6',
    title: 'Classic Nigerian Chapman',
    category: 'Drinks & Refreshments',
    aspect: 'landscape',
    image: chapmanCocktailsImg,
    caption:
      'Editorial Concept — Chilled ruby Chapman coolers garnished with cucumber ribbons and citrus.',
  },
];
