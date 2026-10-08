import Item from '../models/Item.js';

export const initialItems = [
  // Food & Drinks
  {
    _id: 'shop-item-1',
    name: 'Hot Amala & Abula (Skye Bank Buka)',
    category: 'food',
    description: 'Fresh steaming amala doused with gbegiri, ewedu, and tender goat meat.',
    price: 1500,
    energyBonus: 35,
    hungerReduction: 45,
    healthBonus: 10,
    streetCredBonus: 2,
    icon: 'Utensils'
  },
  {
    _id: 'shop-item-2',
    name: 'Chilled Hibiscus Zobo Bottle',
    category: 'drink',
    description: 'Sweet iced zobo brewed with ginger, clove, and pineapple zest.',
    price: 400,
    energyBonus: 15,
    hungerReduction: 10,
    healthBonus: 5,
    streetCredBonus: 0,
    icon: 'Coffee'
  },
  {
    _id: 'shop-item-3',
    name: 'Sabo Suya with Spicy Yaji & Onions',
    category: 'food',
    description: 'Charcoal-grilled beef suya from the legendary Sabo market.',
    price: 2500,
    energyBonus: 25,
    hungerReduction: 35,
    healthBonus: 5,
    streetCredBonus: 5,
    icon: 'Flame'
  },

  // Vehicles
  {
    _id: 'shop-item-4',
    name: 'Bajaj Boxer Okada',
    category: 'vehicle',
    description: 'Nimble motorcycle to beat any traffic between Mokola and Challenge effortlessly.',
    price: 320000,
    speedRating: 30,
    streetCredBonus: 15,
    icon: 'Bike'
  },
  {
    _id: 'shop-item-5',
    name: 'Classic Ibadan Yellow Micra',
    category: 'vehicle',
    description: 'The heartbeat of Ibadan transport. Indestructible, fast, and revered.',
    price: 1200000,
    speedRating: 60,
    streetCredBonus: 40,
    icon: 'Car'
  },
  {
    _id: 'shop-item-6',
    name: 'Tokunbo Toyota Camry "Muscle"',
    category: 'vehicle',
    description: 'Chilling with AC on Queen Elizabeth road. Peak young baller status.',
    price: 4800000,
    speedRating: 85,
    streetCredBonus: 120,
    icon: 'Car'
  },

  // Housing
  {
    _id: 'shop-item-7',
    name: 'Room & Parlour Self-Contain Mokola',
    category: 'house',
    description: 'Decent water running, prepaid NEPA meter, close to Mokola roundabout.',
    price: 180000, // Annual or buy
    comfortRating: 45,
    streetCredBonus: 20,
    icon: 'Home'
  },
  {
    _id: 'shop-item-8',
    name: '3-Bedroom Modern Flat Bodija Estate',
    category: 'house',
    description: 'Serene estate, paved roads, security guards, uninterrupted serenity.',
    price: 850000,
    comfortRating: 80,
    streetCredBonus: 90,
    icon: 'Building'
  },
  {
    _id: 'shop-item-9',
    name: 'Luxury Villa in Oluyole / Jericho',
    category: 'house',
    description: 'High perimeter fence, swimming pool, 24/7 solar inverter power.',
    price: 4500000,
    comfortRating: 100,
    streetCredBonus: 300,
    icon: 'Castle'
  },

  // Gadgets
  {
    _id: 'shop-item-10',
    name: 'London-Used MacBook Pro',
    category: 'gadget',
    description: 'Essential gear for high-paying remote tech and digital agency gigs.',
    price: 450000,
    streetCredBonus: 35,
    icon: 'Laptop'
  }
];

export const getShopItems = async (req, res) => {
  try {
    const { category } = req.query;
    let items = initialItems;
    if (category && category !== 'all') {
      items = items.filter((item) => item.category === category);
    }
    return res.json({ success: true, items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const purchaseItem = async (req, res) => {
  try {
    const { itemId } = req.body;
    const item = initialItems.find((i) => i._id === itemId);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found in store' });
    }

    return res.json({
      success: true,
      message: `Successfully purchased ${item.name}!`,
      item
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
