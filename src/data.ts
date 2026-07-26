import { MenuItem, GalleryItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'm1',
    name: 'Golden Hour Latte',
    category: 'coffee',
    price: 5.50,
    description: 'House espresso, oat milk, honey drizzle, cinnamon sprinkle. Served hot or iced.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600',
    tag: 'Best Seller'
  },
  {
    id: 'm2',
    name: 'Matcha Green Tea Latte',
    category: 'coffee',
    price: 6.00,
    description: 'Ceremonial grade matcha, steamed almond milk, touch of maple syrup. Rich and earthy.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600',
    tag: 'Vegetarian'
  },
  {
    id: 'm3',
    name: 'Cold Brew',
    category: 'coffee',
    price: 4.50,
    description: 'Slow-steeped for 24 hours, smooth, low acidity, notes of chocolate and caramel.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm4',
    name: 'Iced Vanilla Bean Latte',
    category: 'coffee',
    price: 5.75,
    description: 'House made vanilla bean syrup, espresso, milk of choice, over ice.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm5',
    name: 'Drip Coffee',
    category: 'coffee',
    price: 3.50,
    description: 'Daily rotating single-origin coffee, locally roasted in East Austin.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm6',
    name: 'Loose Leaf Tea',
    category: 'coffee',
    price: 4.00,
    description: 'Selection of organic teas: Earl Grey, Chamomile, Peppermint, Jasmine Green.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600'
  },

  // BRUNCH
  {
    id: 'm7',
    name: 'Avocado Toast',
    category: 'brunch',
    price: 12.00,
    description: 'Sourdough toast, smashed avocado, poached egg, chili flakes, microgreens.',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm8',
    name: 'Whipped Ricotta Toast',
    category: 'brunch',
    price: 11.00,
    description: 'Sourdough, local honey, fresh figs, thyme, cracked black pepper.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600',
    tag: 'Vegetarian'
  },
  {
    id: 'm9',
    name: 'Cinnamon Roll Skillet',
    category: 'brunch',
    price: 9.00,
    description: 'Baked to order, cream cheese glaze, warm and gooey.',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600',
    tag: "Chef's Pick"
  },
  {
    id: 'm10',
    name: 'Breakfast Burrito',
    category: 'brunch',
    price: 13.50,
    description: 'Scrambled eggs, chorizo, potatoes, cheese, avocado, salsa verde.',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=600'
  },

  // LUNCH
  {
    id: 'm11',
    name: 'Grilled Cheese & Tomato Soup',
    category: 'lunch',
    price: 14.00,
    description: 'Aged cheddar and gruyère on sourdough, with creamy roasted tomato soup.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm12',
    name: 'Harvest Bowl',
    category: 'lunch',
    price: 15.50,
    description: 'Quinoa, roasted sweet potato, kale, avocado, chickpeas, tahini dressing.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    tag: 'Vegetarian'
  },
  {
    id: 'm13',
    name: 'Chicken Pesto Sandwich',
    category: 'lunch',
    price: 16.00,
    description: 'Grilled chicken, house-made basil pesto, mozzarella, tomato, on focaccia.',
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&q=80&w=600'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600',
    alt: 'Sunlit cafe corner with plants and rustic tables'
  },
  {
    id: 'g2',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
    alt: 'Avocado toast with a perfectly poached egg and fresh microgreens'
  },
  {
    id: 'g3',
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=600',
    alt: 'Brick walls with hanging pothos plants basking in the sun'
  },
  {
    id: 'g4',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600',
    alt: 'Barista preparing a fresh pour-over coffee'
  },
  {
    id: 'g5',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600',
    alt: 'Cozy yellow velvet armchair in the corner of the shop'
  },
  {
    id: 'g6',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600',
    alt: 'A heap of warm, freshly glazed cinnamon rolls'
  },
  {
    id: 'g7',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
    alt: 'East Austin store exterior with wide open double doors'
  },
  {
    id: 'g8',
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&q=80&w=600',
    alt: 'Group of happy local friends sharing coffee and pastries'
  }
];

export const INSTAGRAM_POSTS: GalleryItem[] = [
  {
    id: 'ig1',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400',
    alt: 'Friends enjoying brunch together in the sunlit lounge',
    isInstagram: true
  },
  {
    id: 'ig2',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400',
    alt: 'Whipped ricotta toast close up with figs and thyme',
    isInstagram: true
  },
  {
    id: 'ig3',
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=400',
    alt: 'Cozy interior hanging plants',
    isInstagram: true
  },
  {
    id: 'ig4',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400',
    alt: 'Pour over coffee being brewed',
    isInstagram: true
  },
  {
    id: 'ig5',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=400',
    alt: 'Perfect latte art in a clay cup',
    isInstagram: true
  },
  {
    id: 'ig6',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400',
    alt: 'Chef Leo checking the daily specials in the kitchen',
    isInstagram: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    text: 'The Golden Hour Latte with oat milk is pure heaven. I love sitting near the front window with my laptop — the sunlight is absolutely magical.',
    rating: 5,
    date: 'July 15, 2026'
  },
  {
    id: 't2',
    name: 'Marcus K.',
    text: 'Hands down the best whipped ricotta toast I have ever had! Beautifully rustic space and great neighborhood vibes.',
    rating: 5,
    date: 'June 28, 2026'
  },
  {
    id: 't3',
    name: 'Elena R.',
    text: 'The Cinnamon Roll Skillet is a must-try. The cream cheese glaze is warm and delicious, and the coffee is always perfectly brewed.',
    rating: 5,
    date: 'May 12, 2026'
  }
];
