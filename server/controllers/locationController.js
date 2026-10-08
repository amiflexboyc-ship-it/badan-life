import Location from '../models/Location.js';

export const initialLocations = [
  {
    _id: 'loc-1',
    name: 'Mapo Hall',
    zone: 'Bere / Ibadan South-East',
    tagline: 'The historic hill of kings and legendary views of brown roofs.',
    description: 'Perched high on Mapo Hill, this colonial edifice looks out across the iconic brown rusted roofs of historic Ibadan. The political heartbeat of the city.',
    transportFare: 200,
    icon: 'Landmark',
    safetyRating: 'Busy / Traditional',
    activities: [
      { id: 'act-1', name: 'Sightseeing Browns Roofs', cost: 100, energyCost: 10, credReward: 10, description: 'Climb the steps to look across the ancient horizon.' },
      { id: 'act-2', name: 'Chit-chat with Elders', cost: 0, energyCost: 15, credReward: 15, description: 'Learn Yoruba proverbs and historical folklore.' }
    ]
  },
  {
    _id: 'loc-2',
    name: 'Cocoa House',
    zone: 'Dugbe / Central Business District',
    tagline: 'Nigeria\'s first skyscraper, pride of the Western Region.',
    description: 'Built with the proceeds of agricultural cocoa wealth in 1965. Towering 26 storeys over Dugbe, hosting banks, tech startups, and the Cocoa Heritage Museum.',
    transportFare: 300,
    icon: 'Building2',
    safetyRating: 'High / Commercial',
    activities: [
      { id: 'act-3', name: 'Visit Cocoa Heritage Museum', cost: 1000, energyCost: 10, credReward: 20, description: 'Discover the rich agrarian roots of Yorubaland.' },
      { id: 'act-4', name: 'Network with Bankers & Executives', cost: 500, energyCost: 20, credReward: 25, description: 'Exchange contacts over Dugbe espresso.' }
    ]
  },
  {
    _id: 'loc-3',
    name: 'Bodija Market',
    zone: 'Bodija / Ibadan North',
    tagline: 'The largest food and produce trading market in Oyo State.',
    description: 'An electrifying labyrinth of commerce where trailers from the far north bring cattle, grains, and peppers daily. Non-stop bargaining and haggling.',
    transportFare: 250,
    icon: 'ShoppingBag',
    safetyRating: 'Vibrant / Crowded',
    activities: [
      { id: 'act-5', name: 'Wholesale Bargain Run', cost: 2000, energyCost: 25, credReward: 30, description: 'Buy provisions at dirt-cheap bulk rates.' },
      { id: 'act-6', name: 'Eat Skye Bank Amala', cost: 1500, energyCost: -30, credReward: 10, description: 'Enjoy legendary Ibadan culinary mastery.' }
    ]
  },
  {
    _id: 'loc-4',
    name: 'University of Ibadan',
    zone: 'Agbowo / UI Gate',
    tagline: 'The premier university of Nigeria, founded 1948.',
    description: 'Sprawling campus, royal palm trees, UI Zoo, love garden, and an academic culture that nurtured Nobel Laureates and literary giants.',
    transportFare: 350,
    icon: 'GraduationCap',
    safetyRating: 'Very Safe / Academic',
    activities: [
      { id: 'act-7', name: 'Study at Kenneth Dike Library', cost: 0, energyCost: 25, credReward: 25, description: 'Gain valuable intellect and knowledge points.' },
      { id: 'act-8', name: 'Stroll through UI Botanical Gardens', cost: 500, energyCost: -20, credReward: 10, description: 'Relax mind and refresh health.' }
    ]
  },
  {
    _id: 'loc-5',
    name: 'Iwo Road Interchange',
    zone: 'Iwo Road / Ibadan North-East',
    tagline: 'The ultimate transit hub connecting all corners of Nigeria.',
    description: 'Non-stop horns, yellow buses, interstate luxury coaches, bustling street food vendors, and vibrant street energy that never sleeps.',
    transportFare: 250,
    icon: 'Compass',
    safetyRating: 'Raw / Fast-Paced',
    activities: [
      { id: 'act-9', name: 'Hustle with Transport Agberos', cost: 0, energyCost: 30, credReward: 25, description: 'Master street negotiation and local lingo.' },
      { id: 'act-10', name: 'Buy Gala & Cold Lacasera in Traffic', cost: 400, energyCost: -10, credReward: 5, description: 'Classic Nigerian traveler fuel.' }
    ]
  },
  {
    _id: 'loc-6',
    name: 'Agodi Gardens',
    zone: 'Parliament Road, Mokola Hill',
    tagline: 'Serene recreational park nestled within tropical forestry.',
    description: 'Pristine forestry, tranquil lakes, animal sanctuary, and swimming pools. The ideal sanctuary for winding down after intense hustle.',
    transportFare: 300,
    icon: 'Trees',
    safetyRating: 'Peaceful / Leisure',
    activities: [
      { id: 'act-11', name: 'Afternoon Picnic & Boat Ride', cost: 2500, energyCost: -40, credReward: 15, description: 'Replenish your mental energy and relax.' }
    ]
  }
];

export const getLocations = async (req, res) => {
  try {
    return res.json({
      success: true,
      locations: initialLocations
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
