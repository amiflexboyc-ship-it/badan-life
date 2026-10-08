export const mockLocations = [
  {
    _id: 'loc-bodija',
    name: 'Bodija Market',
    zone: 'Bodija / North',
    tagline: 'The Food and Produce Kingdom of Ibadan.',
    description: 'Home of the legendary Amala Skye Bank, steaming pots of Abula (Gbegiri & Ewedu), and endless rows of wholesale yams, peppers, and cattle from northern Nigeria.',
    transportFare: 200,
    safetyRating: 'Bustling & Vibrant',
    type: 'food',
    bgTheme: 'from-amber-900/40 to-orange-950/60',
    icon: 'Utensils',
    landmarks: ['Amala Skye Bank Buka', 'Bodija Produce Shed', 'Omi-Adio Yam Depot'],
    activities: [
      { id: 'act-amala', name: 'Eat Famous Skye Bank Amala & Goat Meat', cost: 1500, energyGain: 40, hungerCut: 50, credReward: 5 },
      { id: 'act-wholesale', name: 'Bargain wholesale peppers & plantains', cost: 1000, energyCost: 15, credReward: 15 },
      { id: 'act-market-stroll', name: 'Network with market women leaders (Iyaloja)', cost: 0, energyCost: 10, credReward: 12 }
    ]
  },
  {
    _id: 'loc-dugbe',
    name: 'Cocoa House & Dugbe CBD',
    zone: 'Dugbe / Central',
    tagline: 'Nigeria\'s First Skyscraper & Commercial Engine.',
    description: 'Towering 26 storeys into the sky since 1965, Cocoa House anchors the Central Business District alongside banks, tech companies, corporate chambers, and bustling electronics marts.',
    transportFare: 200,
    safetyRating: 'Corporate & Secure',
    type: 'jobs',
    bgTheme: 'from-blue-900/40 to-slate-950/60',
    icon: 'Building2',
    landmarks: ['Cocoa House (26 Floors)', 'Heritage Mall Dugbe', 'FirstBank Western Regional HQ'],
    activities: [
      { id: 'act-cocoa-view', name: 'Take Elevator to Cocoa Heritage Museum', cost: 800, energyCost: 10, credReward: 20 },
      { id: 'act-pitch', name: 'Pitch Business Proposals to Corporate Bankers', cost: 500, energyCost: 20, credReward: 25 },
      { id: 'act-tech-meetup', name: 'Attend Dugbe Tech Ecosystem Hub Meetup', cost: 0, energyCost: 15, credReward: 18 }
    ]
  },
  {
    _id: 'loc-iworoad',
    name: 'Iwo Road Interchange',
    zone: 'Iwo Road / Transit Hub',
    tagline: 'The Epicenter of Yellow Micra Taxis & Interstate Transport.',
    description: 'The roaring transit gateway connecting Ibadan to Lagos, Ife, and the rest of Nigeria. Yellow Nissan Micras honking non-stop with conductors hanging out shouting destinations!',
    transportFare: 200,
    safetyRating: 'Fast-Paced & Gritty',
    type: 'transport',
    bgTheme: 'from-yellow-950/50 to-amber-950/60',
    icon: 'Car',
    landmarks: ['Yellow Micra Taxi Central Rank', 'Under-bridge Interstate Garage', 'Electronics Spare Parts Plaza'],
    activities: [
      { id: 'act-micra-rank', name: 'Chat with Micra Taxi Drivers & Union Elders', cost: 0, energyCost: 15, credReward: 20 },
      { id: 'act-traffic-snack', name: 'Buy Gala & Chilled Lacasera in Traffic', cost: 350, energyGain: 10, hungerCut: 15, credReward: 2 },
      { id: 'act-hustle-park', name: 'Assist Motor Park Dispatchers for Tips', cost: 0, energyCost: 25, credReward: 25, cashReward: 1500 }
    ]
  },
  {
    _id: 'loc-bere',
    name: 'Mapo Hall & Bere',
    zone: 'Bere / Heritage',
    tagline: 'Hill of Ancient Kings and Sea of Brown Roofs.',
    description: 'The historic heart of ancient Ibadan perched atop Mapo Hill. Colonial neo-classical columns overlooking the historic red-brown iron roofs where Ibadan began.',
    transportFare: 200,
    safetyRating: 'Traditional & Lively',
    type: 'heritage',
    bgTheme: 'from-amber-950/40 to-stone-900',
    icon: 'Landmark',
    landmarks: ['Mapo Hall Pillars', 'Olubadan Palace Bere', 'Oja\'ba Ancient Shrine'],
    activities: [
      { id: 'act-brown-roofs', name: 'Climb Mapo steps for legendary panoramic view', cost: 200, energyCost: 15, credReward: 20 },
      { id: 'act-elders', name: 'Pay respects to Bere Community Elders', cost: 500, energyCost: 10, credReward: 30 }
    ]
  },
  {
    _id: 'loc-ui',
    name: 'University of Ibadan (UI)',
    zone: 'Agbowo / Education',
    tagline: 'Nigeria\'s Premier University, Founded 1948.',
    description: 'Iconic Trenchard Hall, serene botanical gardens, royal palm avenues, Kenneth Dike central library, and vibrant student innovators shaping modern Nigeria.',
    transportFare: 250,
    safetyRating: 'Peaceful & Academic',
    type: 'education',
    bgTheme: 'from-emerald-950/40 to-teal-950/50',
    icon: 'GraduationCap',
    landmarks: ['Trenchard Hall Tower', 'Kenneth Dike Library', 'UI Zoological Gardens'],
    activities: [
      { id: 'act-library', name: 'Read Business Books at Kenneth Dike Library', cost: 0, energyCost: 20, credReward: 25 },
      { id: 'act-zoo', name: 'Relax at UI Botanical & Zoo Gardens', cost: 1000, energyGain: 25, credReward: 10 }
    ]
  },
  {
    _id: 'loc-mokola',
    name: 'Mokola Roundabout',
    zone: 'Mokola / Commercial',
    tagline: 'Gadget Tech Repairs & Agodi Gardens Greenery.',
    description: 'Major crossroads known for skilled phone & computer engineers, bustling food outlets along Queen Elizabeth Road, and the lush Agodi Gardens park.',
    transportFare: 200,
    safetyRating: 'Commercial',
    type: 'commercial',
    bgTheme: 'from-violet-950/40 to-slate-900',
    icon: 'Wrench',
    landmarks: ['Mokola Flyover', 'Queen Elizabeth Road Stores', 'Agodi Gardens Resort'],
    activities: [
      { id: 'act-agodi', name: 'Afternoon Boat Ride & Picnic at Agodi Gardens', cost: 2000, energyGain: 40, credReward: 15 },
      { id: 'act-gadgets', name: 'Inspect latest smartphones & UK-used laptops', cost: 0, energyCost: 10, credReward: 10 }
    ]
  },
  {
    _id: 'loc-challenge',
    name: 'Challenge & Ring Road',
    zone: 'Challenge / South',
    tagline: 'Southern Gateway, Nightlife & Modern Lounges.',
    description: 'Thriving arterial strip featuring shopping plazas, car showrooms, vibrant open-air lounges, high-volume POS terminals, and direct links to the Lagos-Ibadan expressway.',
    transportFare: 250,
    safetyRating: 'Active & Busy',
    type: 'commercial',
    bgTheme: 'from-rose-950/40 to-slate-900',
    icon: 'Compass',
    landmarks: ['Challenge Bus Terminal', 'Ring Road Shopping Strips', 'Liberty Stadium nearby'],
    activities: [
      { id: 'act-lounge', name: 'Lounge networking & grilled fish by Ring Road', cost: 3500, energyGain: 25, hungerCut: 30, credReward: 25 }
    ]
  },
  {
    _id: 'loc-alalubosa',
    name: 'Alalubosa GRA & Oluyole',
    zone: 'Alalubosa / Luxury',
    tagline: 'Private Mansions of Ibadan Billionaires & Tycoons.',
    description: 'Paved tree-lined avenues, armed security checkpoints, luxury mansions with swimming pools, and the quiet opulence of Oyo State\'s industrial elite.',
    transportFare: 400,
    safetyRating: 'High Security VIP',
    type: 'tycoon',
    bgTheme: 'from-amber-900/30 via-yellow-950/30 to-black',
    icon: 'Crown',
    landmarks: ['Alalubosa Lake View Estates', 'Oluyole Industrial Club', 'Governor\'s Protocol Enclave'],
    activities: [
      { id: 'act-tycoon-club', name: 'Attend Ibadan Elite Golf & Business Club', cost: 10000, energyCost: 15, credReward: 80 }
    ]
  }
];

export const mockJobs = [
  {
    _id: 'job-1',
    title: 'Yellow Micra Taxi Conductor',
    location: 'Iwo Road to Dugbe',
    category: 'Informal',
    tier: 1,
    description: 'Hang out the front window of a yellow Nissan Micra shouting "Dugbe! Dugbe wọlé pẹlú change ẹ!". Collect paper naira fares.',
    salaryPerShift: 3500,
    energyCost: 20,
    hungerIncrease: 25,
    requiredEducation: 'Secondary School',
    requiredCred: 0,
    experienceReward: 20
  },
  {
    _id: 'job-2',
    title: 'Bodija Market Alabaru (Porter)',
    location: 'Bodija Market Pepper Shed',
    category: 'Informal',
    tier: 1,
    description: 'Carry heavy baskets of fresh tomatoes, peppers, and sacks of yam tubers offloading from northern trailers.',
    salaryPerShift: 4500,
    energyCost: 30,
    hungerIncrease: 35,
    requiredEducation: 'Secondary School',
    requiredCred: 0,
    experienceReward: 25
  },
  {
    _id: 'job-3',
    title: 'Amala Skye Buka Plate Server',
    location: 'Bodija Market Buka',
    category: 'Trade',
    tier: 1,
    description: 'Dish out piping hot Amala, pour generous ladlefuls of Gbegiri and Ewedu, and serve goat meat to loyal customers.',
    salaryPerShift: 6500,
    energyCost: 22,
    hungerIncrease: 15,
    requiredEducation: 'Secondary School',
    requiredCred: 5,
    experienceReward: 30
  },
  {
    _id: 'job-4',
    title: 'Yellow Micra Route Driver',
    location: 'Iwo Road ⇄ Challenge ⇄ Mokola',
    category: 'Trade',
    tier: 2,
    description: 'Drive the classic yellow Nissan Micra through Ibadan traffic shortcuts, avoiding potholes and delivering passengers smoothly.',
    salaryPerShift: 11000,
    energyCost: 25,
    hungerIncrease: 20,
    requiredEducation: 'Secondary School',
    requiredCred: 15,
    experienceReward: 35
  },
  {
    _id: 'job-5',
    title: 'Mokola Smartphone & Laptop Technician',
    location: 'Mokola Roundabout',
    category: 'Tech',
    tier: 2,
    description: 'Replace iPhone screens, solder capacitors, unlock network locks, and service student laptops for quick cash.',
    salaryPerShift: 16500,
    energyCost: 25,
    hungerIncrease: 15,
    requiredEducation: 'ND / HND',
    requiredCred: 25,
    experienceReward: 40
  },
  {
    _id: 'job-6',
    title: 'UI Agbowo Tutorial Instructor',
    location: 'University of Ibadan Gate',
    category: 'Corporate',
    tier: 3,
    description: 'Prepare ambitious students for JAMB, WAEC, and university exams in Mathematics, Physics, and Economics.',
    salaryPerShift: 24000,
    energyCost: 20,
    hungerIncrease: 15,
    requiredEducation: 'B.Sc Graduate',
    requiredCred: 35,
    experienceReward: 45
  },
  {
    _id: 'job-7',
    title: 'Cocoa House Software Engineer',
    location: 'Cocoa House, 14th Floor, Dugbe',
    category: 'Tech',
    tier: 4,
    description: 'Engineer fintech payment gateways and cloud applications overlooking the Dugbe skyline from Cocoa House.',
    salaryPerShift: 55000,
    energyCost: 30,
    hungerIncrease: 15,
    requiredEducation: 'Tech Bro / Master',
    requiredCred: 60,
    experienceReward: 70
  },
  {
    _id: 'job-8',
    title: 'Bodija Agricultural Commodity Broker',
    location: 'Bodija Produce Exchange',
    category: 'Trade',
    tier: 4,
    description: 'Negotiate bulk contracts for trailer-loads of cocoa beans, soya beans, and palm oil for nationwide distribution.',
    salaryPerShift: 85000,
    energyCost: 30,
    hungerIncrease: 20,
    requiredEducation: 'ND / HND',
    requiredCred: 75,
    experienceReward: 80
  },
  {
    _id: 'job-9',
    title: 'Corporate Bank Branch Head',
    location: 'Dugbe Financial Hub',
    category: 'Corporate',
    tier: 5,
    description: 'Supervise commercial credit facilities, corporate accounts, and foreign exchange portfolios for major Oyo State enterprises.',
    salaryPerShift: 180000,
    energyCost: 35,
    hungerIncrease: 20,
    requiredEducation: 'B.Sc Graduate',
    requiredCred: 120,
    experienceReward: 110
  },
  {
    _id: 'job-10',
    title: 'Cocoa & Real Estate Managing Director',
    location: 'Alalubosa / Cocoa House Penthouse',
    category: 'Corporate',
    tier: 6,
    description: 'Direct multi-million naira real estate developments in Alalubosa GRA and international cocoa shipping consignments.',
    salaryPerShift: 450000,
    energyCost: 40,
    hungerIncrease: 25,
    requiredEducation: 'B.Sc Graduate',
    requiredCred: 250,
    experienceReward: 200
  }
];

export const mockShopItems = [
  // Food & Drinks
  {
    _id: 'shop-item-water',
    name: 'Chilled Sachet Pure Water (2 Bags)',
    category: 'food',
    description: 'Ice cold pure water from a neighborhood distributor in Bodija. Instantly quenches dry throat.',
    price: 100,
    energyBonus: 10,
    hungerReduction: 10,
    healthBonus: 5,
    streetCredBonus: 0
  },
  {
    _id: 'shop-item-zobo',
    name: 'Chilled Hibiscus Zobo with Ginger',
    category: 'drink',
    description: 'Sweet iced zobo drink brewed with cloves, ginger, and pineapple chunks.',
    price: 400,
    energyBonus: 18,
    hungerReduction: 15,
    healthBonus: 8,
    streetCredBonus: 1
  },
  {
    _id: 'shop-item-amala',
    name: 'Hot Amala & Abula with Goat Meat',
    category: 'food',
    description: 'Steaming fluffy black yam flour amala immersed in green ewedu and yellow gbegiri, topped with tender goat meat.',
    price: 1500,
    energyBonus: 45,
    hungerReduction: 50,
    healthBonus: 15,
    streetCredBonus: 5
  },
  {
    _id: 'shop-item-ewa',
    name: 'Ewa Aganyin & Fresh Agege Bread',
    category: 'food',
    description: 'Mashed spicy beans cooked with dark caramelized pepper sauce alongside hot soft Agege bread.',
    price: 1200,
    energyBonus: 35,
    hungerReduction: 40,
    healthBonus: 10,
    streetCredBonus: 2
  },
  {
    _id: 'shop-item-suya',
    name: 'Sabo Beef Suya with Spicy Yaji',
    category: 'food',
    description: 'Tender thinly sliced beef roasted over hot coals at Sabo market, dusted with fiery peanut yaji spice.',
    price: 2500,
    energyBonus: 30,
    hungerReduction: 35,
    healthBonus: 5,
    streetCredBonus: 8
  },
  {
    _id: 'shop-item-special',
    name: 'Executive Seafood Abula Special',
    category: 'food',
    description: 'Triple wrap Amala with large Oku Eja (smoked fish), Bokoto cow leg, and fried snale in rich Abula soup.',
    price: 4500,
    energyBonus: 65,
    hungerReduction: 75,
    healthBonus: 20,
    streetCredBonus: 15
  },

  // Clothes & Lifestyle Items (Improve character street cred & prestige)
  {
    _id: 'shop-clothes-senator',
    name: 'Tailored Senator Native Attire',
    category: 'clothes',
    description: 'Crisp black senator wear custom-made by top Dugbe tailors. Commands respect at bank meetings.',
    price: 35000,
    streetCredBonus: 30
  },
  {
    _id: 'shop-clothes-agbada',
    name: 'Royal Heavy Agbada with Fila Cap',
    category: 'clothes',
    description: 'Three-piece embroidered Agbada made from authentic Aso-Oke. You walk into weddings like a true Ibadan Otunba.',
    price: 110000,
    streetCredBonus: 85
  },
  {
    _id: 'shop-clothes-gold',
    name: 'Solid Gold Cuban Chain & Sunglasses',
    category: 'clothes',
    description: 'Shiny neckwear and dark designer shades. Instant street respect across Iwo Road and Bodija.',
    price: 280000,
    streetCredBonus: 130
  },
  {
    _id: 'shop-clothes-watch',
    name: 'Swiss Chronograph Luxury Watch',
    category: 'clothes',
    description: 'Prestigious automatic timepiece purchased from a high-end Dugbe jeweler. A true badge of success.',
    price: 650000,
    streetCredBonus: 220
  },

  // Transport Empire Progression: Walk -> Keke -> Okada -> Micra -> Personal Car -> Multiple Cars -> Transport Company
  {
    _id: 'shop-veh-keke',
    name: 'Keke (Tricycle Keke Marwa)',
    category: 'vehicle',
    empireStage: 'Keke',
    description: 'Yellow 3-wheeled passenger shuttle for short trips between Mokola and Agbowo gate.',
    price: 180000,
    speedRating: 30,
    streetCredBonus: 10
  },
  {
    _id: 'shop-veh-okada',
    name: 'Okada (Bajaj Boxer Motorcycle)',
    category: 'vehicle',
    empireStage: 'Okada',
    description: 'Fast two-wheeler to cut through morning gridlock between Mokola and Dugbe with zero delays.',
    price: 240000,
    speedRating: 45,
    streetCredBonus: 15
  },
  {
    _id: 'shop-veh-micra',
    name: 'Micra (Classic Ibadan Yellow Nissan Micra K11)',
    category: 'vehicle',
    isMicra: true,
    empireStage: 'Micra',
    description: 'The legendary yellow taxi of Ibadan! Incredibly nimble, fuel-efficient, and revered by every commuter. Enables taxi missions and daily passive fleet earnings!',
    price: 650000,
    speedRating: 65,
    streetCredBonus: 50
  },
  {
    _id: 'shop-veh-car',
    name: 'Personal Car (Toyota Camry "Muscle")',
    category: 'vehicle',
    empireStage: 'Personal Car',
    description: 'Crisp air conditioning, tinted windows, alloy rims. Cruising down Queen Elizabeth road in comfortable personal style.',
    price: 4200000,
    speedRating: 85,
    streetCredBonus: 130
  },
  {
    _id: 'shop-veh-multi-cars',
    name: 'Multiple Cars (Fleet: Benz E350 + Range Rover + Camry)',
    category: 'vehicle',
    empireStage: 'Multiple Cars',
    description: 'A private multi-car garage convoy that commands immediate right-of-way and respect on all Oyo State expressways.',
    price: 20000000,
    speedRating: 98,
    streetCredBonus: 450
  },
  {
    _id: 'shop-veh-company',
    name: 'Transport Company (Interstate Micra & Luxury Bus Fleet)',
    category: 'vehicle',
    isTransportCompany: true,
    empireStage: 'Transport Company',
    description: 'A full-scale commercial transport monopoly at Iwo Road terminal operating 20 yellow Micras and 6 interstate luxury buses.',
    price: 65000000,
    speedRating: 100,
    streetCredBonus: 1000,
    dailyProfit: 1800000
  },

  // Property Empire Progression: Single Room -> Self-Contain -> 2-Bedroom Apartment -> Luxury House -> Multiple Houses -> Estate Owner
  {
    _id: 'shop-house-room',
    name: 'Single Room (Face-me-I-face-you Bere)',
    category: 'house',
    empireStage: 'Single Room',
    description: 'Humble starter room with shared compound well, local gossip, and views of ancient brown roofs.',
    price: 25000,
    comfortRating: 25,
    streetCredBonus: 5
  },
  {
    _id: 'shop-house-self',
    name: 'Self-Contain (Mokola Roundabout)',
    category: 'house',
    empireStage: 'Self-Contain',
    description: 'Private bathroom, prepaid meter, running borehole water, and close to Mokola commercial roundabout.',
    price: 180000,
    comfortRating: 48,
    streetCredBonus: 25
  },
  {
    _id: 'shop-house-2bed',
    name: '2-Bedroom Apartment (Bodija Estate Modern Flat)',
    category: 'house',
    empireStage: '2-Bedroom Apartment',
    description: 'Quiet residential estate, perimeter fence, 24/7 security guard, steady electricity, and spacious living room.',
    price: 850000,
    comfortRating: 75,
    streetCredBonus: 90
  },
  {
    _id: 'shop-house-luxury',
    name: 'Luxury House (Oluyole Detached Duplex)',
    category: 'house',
    empireStage: 'Luxury House',
    description: 'Private compound with generator house, interlocked driveway, CCTV cameras, and solar power backup.',
    price: 5500000,
    comfortRating: 90,
    streetCredBonus: 250
  },
  {
    _id: 'shop-house-multi',
    name: 'Multiple Houses (Cluster of Rental Properties in Bodija & Jericho)',
    category: 'house',
    empireStage: 'Multiple Houses',
    description: 'A portfolio of 4 multi-tenant residential rental blocks generating reliable long-term landlord revenue.',
    price: 20000000,
    comfortRating: 96,
    streetCredBonus: 550,
    dailyProfit: 350000
  },
  {
    _id: 'shop-house-estate',
    name: 'Estate Owner (Private Gated Estate in Alalubosa GRA)',
    category: 'house',
    empireStage: 'Estate Owner',
    description: 'Private sprawling luxury estate with swimming pool, tennis court, guest chalets, armed police protocol, and personal helipad.',
    price: 65000000,
    comfortRating: 100,
    streetCredBonus: 1200,
    dailyProfit: 1200000
  }
];

// Business Empire Progression: Small Shop -> Supermarket -> Restaurant -> Multiple Businesses -> Big Company -> Business Empire
export const mockBusinesses = [
  {
    id: 'biz-small-shop',
    name: 'Small Shop (Iwo Road Provision & POS Kiosk)',
    stage: 'Small Shop',
    district: 'Iwo Road',
    category: 'Retail & POS Agency',
    cost: 50000,
    dailyProfit: 4500,
    description: 'Dispense quick cash withdrawals and sell chilled drinks and Gala to commuters under the Iwo Road pedestrian bridge.',
    icon: 'CreditCard'
  },
  {
    id: 'biz-supermarket',
    name: 'Supermarket (Bodija Daily Mart & Supermarket)',
    stage: 'Supermarket',
    district: 'Bodija Market',
    category: 'Commercial Grocery & Goods',
    cost: 450000,
    dailyProfit: 32000,
    description: 'A bustling multi-aisle grocery store stocking provisions, toiletries, frozen foods, and student essentials.',
    icon: 'Store'
  },
  {
    id: 'biz-restaurant',
    name: 'Restaurant (Mama Put Amala Skye Buka)',
    stage: 'Restaurant',
    district: 'Bodija / Dugbe',
    category: 'Hospitality & Food',
    cost: 1400000,
    dailyProfit: 85000,
    description: 'A legendary bustling restaurant dishing out steaming amala, gbegiri, ewedu, and tender goat meat to hundreds daily.',
    icon: 'Utensils'
  },
  {
    id: 'biz-multiple',
    name: 'Multiple Businesses (Chain of Electronics Stores & Eateries)',
    stage: 'Multiple Businesses',
    district: 'Mokola & Dugbe',
    category: 'Multi-Retail Chain',
    cost: 5000000,
    dailyProfit: 280000,
    description: 'Own and operate 3 gadget repair stores and 2 fast-food joints spanning Mokola roundabout and Dugbe CBD.',
    icon: 'Laptop'
  },
  {
    id: 'biz-big-company',
    name: 'Big Company (Cocoa House Agro-Export & Commodities Firm)',
    stage: 'Big Company',
    district: 'Cocoa House Dugbe',
    category: 'Agro-Export & Corporate',
    cost: 18000000,
    dailyProfit: 950000,
    description: 'Direct international cocoa bean and cashew consignments from Oyo farmers to European chocolate companies.',
    icon: 'Coins'
  },
  {
    id: 'biz-empire',
    name: 'Business Empire (Conglomerate & Real Estate Empire)',
    stage: 'Business Empire',
    district: 'Alalubosa GRA & Dugbe',
    category: 'Multi-Industry Conglomerate',
    cost: 70000000,
    dailyProfit: 3800000,
    description: 'An unstoppable economic conglomerate spanning logistics, agricultural processing, banking shares, and real estate development.',
    icon: 'Building'
  }
];

export const mockMissions = [
  {
    id: 'mis-1',
    title: 'Bodija Pepper Sack Offloading',
    district: 'Bodija Market',
    description: 'Help Mama Bose offload 3 heavy sacks of fresh rodo and tatase pepper from a newly arrived Sokoto trailer.',
    rewardCash: 4000,
    rewardCred: 10,
    rewardExp: 25,
    energyCost: 20,
    hungerCost: 15,
    icon: 'PackageCheck'
  },
  {
    id: 'mis-2',
    title: 'Iwo Road Micra Rush Hour Call-out',
    district: 'Iwo Road',
    description: 'Stand at the front of the motor park and fill 5 Yellow Micras bound for Dugbe and Challenge before rain starts!',
    rewardCash: 6500,
    rewardCred: 20,
    rewardExp: 35,
    energyCost: 25,
    hungerCost: 20,
    icon: 'Megaphone'
  },
  {
    id: 'mis-3',
    title: 'Urgent Document Dispatch to Cocoa House',
    district: 'Dugbe CBD',
    description: 'Sprint through traffic to deliver land registry deeds to the 18th floor legal chambers in Cocoa House.',
    rewardCash: 9500,
    rewardCred: 25,
    rewardExp: 45,
    energyCost: 20,
    hungerCost: 15,
    icon: 'FileText'
  },
  {
    id: 'mis-4',
    title: 'Fix UI Professor\'s MacBook Screen',
    district: 'Mokola / UI',
    description: 'Professor\'s laptop screen went black right before an international webinar. Diagnose and fix the ribbon cable.',
    rewardCash: 18000,
    rewardCred: 35,
    rewardExp: 60,
    energyCost: 22,
    hungerCost: 15,
    icon: 'Wrench'
  },
  {
    id: 'mis-5',
    title: 'VIP Micra Express Escort to Airport',
    district: 'Iwo Road / Alakia',
    description: 'A wealthy trader needs an expert Micra driver who knows every backroad to beat the traffic to Ibadan Alakia Airport.',
    rewardCash: 35000,
    rewardCred: 50,
    rewardExp: 90,
    energyCost: 30,
    hungerCost: 20,
    icon: 'Navigation'
  }
];

export const mockStaff = [
  {
    id: 'staff-driver',
    name: 'Alagba Tajudeen',
    role: 'Veteran Yellow Micra Driver',
    specialty: 'Knows every Mokola shortcut and police checkpoint bypass',
    dailySalary: 3500,
    revenueBonusPercent: 35,
    requiredCred: 25,
    avatar: '👨🏾‍✈️'
  },
  {
    id: 'staff-chef',
    name: 'Iya Moria (Master Cook)',
    role: 'Head Amala Buka Chef',
    specialty: 'Legendary soft amala and thick bubbling gbegiri recipes',
    dailySalary: 6000,
    revenueBonusPercent: 45,
    requiredCred: 40,
    avatar: '👩🏾‍🍳'
  },
  {
    id: 'staff-pos',
    name: 'Sikiru "Sharp Fingers"',
    role: 'Iwo Road POS Attendant',
    specialty: 'Lightning-fast finger speed, dispenses cash in 15 seconds flat',
    dailySalary: 2800,
    revenueBonusPercent: 30,
    requiredCred: 15,
    avatar: '👨🏾‍💼'
  },
  {
    id: 'staff-security',
    name: 'Sunday "Agbo-Jedi"',
    role: 'Chief of Security & Bouncer',
    specialty: 'Former Liberty Stadium bouncer, stops area agberos from disturbing business',
    dailySalary: 7500,
    revenueBonusPercent: 20,
    requiredCred: 60,
    avatar: '👮🏾‍♂️'
  },
  {
    id: 'staff-accountant',
    name: 'Bukola Adeyemi, ACA',
    role: 'Chartered Corporate Accountant',
    specialty: 'UI First-Class graduate, handles Oyo State tax audits and payroll optimization',
    dailySalary: 18000,
    revenueBonusPercent: 55,
    requiredCred: 100,
    avatar: '👩🏾‍💻'
  },
  {
    id: 'staff-manager',
    name: 'Otunba Bamidele',
    role: 'Chief Operations Officer',
    specialty: 'Manages multi-district fleet and automated passive returns collection',
    dailySalary: 45000,
    revenueBonusPercent: 75,
    requiredCred: 200,
    avatar: '👔'
  }
];

// The 12 Official Ibadan Life Achievements requested
export const mockAchievements = [
  { id: 'ach-10k', title: 'First ₦10,000', desc: 'Reach a wallet cash balance of ₦10,000 through grit and work', icon: 'Coins', xp: 50, reqMoney: 10000, unlocked: false },
  { id: 'ach-first-job', title: 'First Job', desc: 'Complete your first work shift in Ibadan', icon: 'Briefcase', xp: 50, reqShifts: 1, unlocked: false },
  { id: 'ach-first-car', title: 'First Car', desc: 'Purchase your first vehicle (Keke, Okada, or Micra)', icon: 'Car', xp: 100, reqCar: true, unlocked: false },
  { id: 'ach-first-house', title: 'First House', desc: 'Rent or purchase your first personal accommodation', icon: 'Home', xp: 100, reqHouse: true, unlocked: false },
  { id: 'ach-first-biz', title: 'First Business', desc: 'Launch your very first commercial enterprise', icon: 'Building', xp: 150, reqBiz: 1, unlocked: false },
  { id: 'ach-100k', title: '₦100,000 Made', desc: 'Accumulate a lifetime total earnings of ₦100,000', icon: 'TrendingUp', xp: 200, reqEarned: 100000, unlocked: false },
  { id: 'ach-1m', title: '₦1,000,000 Made', desc: 'Cross the millionaire mark with ₦1,000,000 in total earnings', icon: 'DollarSign', xp: 500, reqEarned: 1000000, unlocked: false },
  { id: 'ach-prop-owner', title: 'Property Owner', desc: 'Own a luxury house or multiple apartment properties', icon: 'Home', xp: 600, reqPropOwner: true, unlocked: false },
  { id: 'ach-biz-owner', title: 'Business Owner', desc: 'Operate at least 3 active business enterprises simultaneously', icon: 'Building2', xp: 750, reqBiz: 3, unlocked: false },
  { id: 'ach-trans-boss', title: 'Transport Boss', desc: 'Own multiple cars or operate a commercial transport fleet', icon: 'Award', xp: 1000, reqTransportBoss: true, unlocked: false },
  { id: 'ach-big-boy', title: 'Ibadan Big Boy', desc: 'Reach ₦20,000,000 net worth with top-tier native wear and luxury cars', icon: 'Sparkles', xp: 2000, reqNetWorth: 20000000, unlocked: false },
  { id: 'ach-legend', title: 'IBADAN LEGEND', desc: 'Achieve legendary status with ₦75,000,000+ net worth & Olubadan royal honor', icon: 'Crown', xp: 5000, reqNetWorth: 75000000, unlocked: false }
];

// The 7 Reputation Tiers with Dynamic City Reaction System
export const mockReputationTiers = [
  {
    tier: 'UNKNOWN',
    level: 1,
    minNetWorth: 0,
    minCred: 0,
    title: 'Unknown Grassroots Hustler',
    cityReaction: 'Area boys harass you at Iwo Road; conductors bark "Wọlé jọ̀ọ́, no wasting time!"; VIP gates firmly locked.',
    streetQuote: '"Who be this one? Move commot for road!"',
    perk: 'Humble beginning with ₦5,000. Every single kobo counts.',
    unlockedLocations: []
  },
  {
    tier: 'HUSTLER',
    level: 2,
    minNetWorth: 50000,
    minCred: 25,
    title: 'Recognized Hustler',
    cityReaction: 'Conductors call you into the front seat; Bodija pepper sellers give you extra servings; neighbors say "Ẹ kú àárọ̀".',
    streetQuote: '"Hustler wọlé front seat! Omo iya mi!"',
    perk: '10% discount on transport fares; access to Tier 2 jobs.',
    unlockedLocations: []
  },
  {
    tier: 'KNOWN',
    level: 3,
    minNetWorth: 250000,
    minCred: 75,
    title: 'Known Figure',
    cityReaction: 'Motor park dispatchers hail your alias; shopkeepers offer goods on credit; area boys greet you with respect.',
    streetQuote: '"Omo Ibadan! Respect your hustle!"',
    perk: 'Unlocks hiring of local staff; access to Bank credit.',
    unlockedLocations: []
  },
  {
    tier: 'RESPECTED',
    level: 4,
    minNetWorth: 1000000,
    minCred: 150,
    title: 'Respected Merchant',
    cityReaction: 'Police checkpoints wave you through with a salute: "Pass, Boss!"; Skye Bank Buka reserves VIP tables for you.',
    streetQuote: '"Boss! Welldone sir! Anything for the boys?"',
    perk: 'Zero harassment from Agberos; 20% bonus on business earnings.',
    unlockedLocations: ['loc-club']
  },
  {
    tier: 'INFLUENTIAL',
    level: 5,
    minNetWorth: 5000000,
    minCred: 300,
    title: 'Influential Tycoon',
    cityReaction: 'Dugbe bank managers come down to greet you; market union leaders seek your advice on commodity prices.',
    streetQuote: '"Chairman! Our prayers are with your empire!"',
    perk: 'Automated staff management; VIP meetings at Cocoa House.',
    unlockedLocations: ['loc-penthouse']
  },
  {
    tier: 'BIG NAME',
    level: 6,
    minNetWorth: 20000000,
    minCred: 600,
    title: 'Ibadan Big Boy',
    cityReaction: 'Crowds chant your nickname at Ring Road lounges; sirens blare when your convoy moves; billboards feature your brand.',
    streetQuote: '"Ibadan Big Boy! Otunba in the making! 👑"',
    perk: 'Exclusive luxury real estate; state contract missions.',
    unlockedLocations: ['loc-penthouse', 'loc-polo']
  },
  {
    tier: 'IBADAN LEGEND',
    level: 7,
    minNetWorth: 75000000,
    minCred: 1000,
    title: 'The Living Ibadan Legend',
    cityReaction: 'Olubadan Palace gates open for you! Royal Kakaki trumpets blast! City celebrates your philanthropic dominance.',
    streetQuote: '"Kábíyèsí! The King of Kings in Ibadan Commerce! 👑"',
    perk: 'Olubadan Royal Chieftaincy, Golden Micra skin, Special Legend Missions unlocked.',
    unlockedLocations: ['loc-palace', 'loc-penthouse', 'loc-polo']
  }
];

// Special Locations unlocked for High Reputation & Legends
export const mockSpecialLegendLocations = [
  {
    _id: 'loc-palace',
    name: 'Olubadan Royal Palace Chamber',
    zone: 'Bere / Royal Seat',
    tagline: 'Ancient Sacred Throne of the Kings of Ibadan.',
    description: 'Adorned with royal brass carvings, centuries-old warrior staffs, and traditional beaded crowns. Only Ibadan Legends are granted audience with the Council of Chiefs.',
    transportFare: 0,
    requiredTier: 'IBADAN LEGEND',
    icon: 'Crown',
    activities: [
      { id: 'act-royal-audience', name: 'Private Audience with the Olubadan of Ibadan', cost: 0, energyGain: 50, credReward: 200 },
      { id: 'act-chieftaincy', name: 'Confer Royal Chieftaincy Title & Traditional Beads', cost: 5000000, energyCost: 10, credReward: 500 }
    ]
  },
  {
    _id: 'loc-penthouse',
    name: 'Cocoa House 26th Floor Penthouse Lounge',
    zone: 'Dugbe / Sky Tower',
    tagline: 'The Pinnacle of Nigeria\'s Premier Skyscraper.',
    description: 'Panoramic 360-degree glass view above all of Ibadan. Private helipad access, imported cigars, and confidential multi-billion naira agro-commodity contracts.',
    transportFare: 500,
    requiredTier: 'INFLUENTIAL',
    icon: 'Building2',
    activities: [
      { id: 'act-private-pitch', name: 'Host Multi-National Investor Consortium Dinner', cost: 250000, energyCost: 20, credReward: 150 }
    ]
  },
  {
    _id: 'loc-polo',
    name: 'Alalubosa Elite Country & Polo Club',
    zone: 'Alalubosa GRA',
    tagline: 'The Ultra-Exclusive Enclave of Ibadan Billionaires.',
    description: 'Manicured polo grounds, olympic swimming pools, and private chalets where Oyo State\'s industrial moguls unwind.',
    transportFare: 400,
    requiredTier: 'BIG NAME',
    icon: 'Sparkles',
    activities: [
      { id: 'act-polo-match', name: 'Sponsor the Annual Oyo State Governors Cup Polo Match', cost: 1500000, energyGain: 40, credReward: 250 }
    ]
  }
];

// Special Legend Missions
export const mockLegendMissions = [
  {
    id: 'mis-legend-1',
    title: 'Bankroll Oyo State Interstate Railway Fleet',
    district: 'Cocoa House Dugbe / Secretariat',
    description: 'Co-finance 10 new commercial railway wagons connecting Ibadan dry port to Lagos Apapa harbor.',
    rewardCash: 12000000,
    rewardCred: 300,
    rewardExp: 1500,
    energyCost: 35,
    hungerCost: 25,
    requiredTier: 'IBADAN LEGEND',
    icon: 'Train'
  },
  {
    id: 'mis-legend-2',
    title: 'The Olubadan Golden Jubilee Royal Banquet',
    district: 'Olubadan Palace Bere',
    description: 'Provide 500 cattle and 10,000 wraps of Bodija Amala to celebrate the royal coronation anniversary with city elders.',
    rewardCash: 8500000,
    rewardCred: 500,
    rewardExp: 2000,
    energyCost: 40,
    hungerCost: 20,
    requiredTier: 'IBADAN LEGEND',
    icon: 'Crown'
  }
];

export const mockLeaderboard = [
  { rank: 1, name: 'Otunba Kolawole Agbaje', title: 'Ibadan Cocoa Legend', netWorth: 185000000, area: 'Alalubosa GRA', fleet: '12 Micras • 4 Duplexes', isOnline: true },
  { rank: 2, name: 'Chief Mrs. Folashade Adeleke', title: 'Bodija Market Queen', netWorth: 124500000, area: 'Bodija Estate', fleet: '8 Amala Bukas • 5 Trucks', isOnline: true },
  { rank: 3, name: 'Alhaji Rasheed "Jagaban"', title: 'Iwo Road Transport Don', netWorth: 78000000, area: 'Iwo Road / Oluyole', fleet: '25 Micras • 10 Buses', isOnline: false },
  { rank: 4, name: 'Engr. Dapo Balogun', title: 'Cocoa House Tech Pioneer', netWorth: 52000000, area: 'Jericho / Dugbe', fleet: 'Tech Hub • Benz E350', isOnline: true },
  { rank: 5, name: 'Madam Bisi Ologun', title: 'Mokola Gadget Empress', netWorth: 34000000, area: 'Mokola / Agodi', fleet: '4 Phone Stores • Camry', isOnline: true }
];

export const mockSeasonChallenges = {
  seasonNumber: 1,
  seasonTitle: 'Oyo Rainstorm & Rush Hour Rush',
  daysRemaining: 18,
  passLevel: 4,
  currentXP: 1450,
  targetXP: 2000,
  weeklyQuests: [
    { id: 'wq-1', title: 'Mokola Bypass Master', desc: 'Hail or drive a Yellow Micra through Mokola 5 times during rush hour', rewardXP: 400, rewardCash: 12000, progress: 3, max: 5 },
    { id: 'wq-2', title: 'Heavy Rain Feeder', desc: 'Eat 4 wraps of steaming Amala with Abula to withstand monsoon cold', rewardXP: 300, rewardCash: 8000, progress: 2, max: 4 },
    { id: 'wq-3', title: 'Motor Park Hustle King', desc: 'Complete 3 missions at Iwo Road interchange', rewardXP: 500, rewardCash: 25000, progress: 1, max: 3 },
    { id: 'wq-4', title: 'Staff Expansion Drive', desc: 'Hire 2 staff employees to keep enterprises running in bad weather', rewardXP: 600, rewardCash: 35000, progress: 0, max: 2 }
  ],
  passTiers: [
    { tier: 1, reward: '₦10,000 Starter Bonus', unlocked: true },
    { tier: 2, reward: 'Vintage Ibadan Fila Cap (+20 Cred)', unlocked: true },
    { tier: 3, reward: 'Free Micra Fuel Voucher (5 Rides)', unlocked: true },
    { tier: 4, reward: 'Exclusive Skye Bank Amala VIP Pass', unlocked: true },
    { tier: 5, reward: 'Custom Chrome Rims for Yellow Micra', unlocked: false },
    { tier: 6, reward: 'Executive Office at Cocoa House', unlocked: false },
    { tier: 7, reward: 'Golden Yellow Micra K11 Taxi Skin', unlocked: false }
  ]
};

export const mockMultiplayerPlayers = [
  { id: 'mp-1', name: 'Tunde_Bodija99', level: 4, location: 'Bodija Market', status: 'Hustling wholesale peppers', netWorth: 1250000, micraOwned: true },
  { id: 'mp-2', name: 'IwoRoad_Boss', level: 6, location: 'Iwo Road Interchange', status: 'Managing 3 Yellow Micras', netWorth: 4800000, micraOwned: true },
  { id: 'mp-3', name: 'QueenOfAgodi', level: 3, location: 'Mokola Roundabout', status: 'Fixing laptops at tech shop', netWorth: 620000, micraOwned: false },
  { id: 'mp-4', name: 'CocoaPrince_Dugbe', level: 8, location: 'Cocoa House & Dugbe CBD', status: 'Pitching fintech startup seed round', netWorth: 22000000, micraOwned: true },
  { id: 'mp-5', name: 'BereBoy_Express', level: 2, location: 'Mapo Hall & Bere', status: 'Looking for conductor shift', netWorth: 18000, micraOwned: false }
];

