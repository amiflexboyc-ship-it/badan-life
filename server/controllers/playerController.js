import Player from '../models/Player.js';
import User from '../models/User.js';
import Transaction from '../models/Transaction.js';

// Default mock player for demo mode
let mockPlayer = {
  _id: 'mock-player-001',
  userId: 'demo-user-id',
  name: 'Babatunde Alao',
  nickname: 'Omo Ibadan Express',
  gender: 'Male',
  avatar: 'male_1',
  originArea: 'Bere',
  money: 7500,
  bankBalance: 25000,
  energy: 85,
  hunger: 35,
  health: 95,
  streetCred: 45,
  educationLevel: 'B.Sc Graduate',
  currentJobTitle: 'Micra Fleet Operator',
  experience: 120,
  level: 2,
  currentLocation: 'Mapo Hall',
  currentHouse: {
    title: 'Room & Parlour Self-Contain Mokola',
    rentCost: 20000,
    comfort: 40,
    isOwned: false
  },
  currentVehicle: {
    title: 'Custom Ibadan Yellow Micra Taxi',
    speedBonus: 20,
    isOwned: true
  },
  inventory: [
    { itemId: 'item-1', name: 'Amala with Gbegiri & Ewedu', category: 'food', quantity: 2, effect: { hunger: -40, energy: +25 } },
    { itemId: 'item-2', name: 'Chilled Zobo Bottle', category: 'drink', quantity: 3, effect: { energy: +15 } }
  ],
  stats: {
    shiftsWorked: 14,
    totalEarned: 84000,
    amalaConsumed: 9,
    daysLived: 4
  }
};

// Create Character
export const createCharacter = async (req, res) => {
  try {
    const { name, nickname, gender, originArea, avatar } = req.body;
    const userId = req.user?.id || 'demo-user-id';

    const player = new Player({
      userId,
      name: name || 'Adebayo',
      nickname: nickname || 'Jagaban of Bodija',
      gender: gender || 'Male',
      originArea: originArea || 'Bere',
      avatar: avatar || 'male_1',
      money: 10000,
      bankBalance: 15000,
      energy: 100,
      hunger: 10,
      health: 100,
      streetCred: 15
    });

    await player.save().catch(() => null);
    mockPlayer = { ...player.toObject(), _id: player._id || 'mock-player-001' };

    await User.findByIdAndUpdate(userId, { hasActiveCharacter: true, activePlayerId: player._id }).catch(() => null);

    return res.status(201).json({ success: true, message: 'Character created! Welcome to Ibadan!', player: mockPlayer });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get Player Stats
export const getPlayer = async (req, res) => {
  try {
    const userId = req.user?.id || 'demo-user-id';
    let player = await Player.findOne({ userId }).catch(() => null);
    if (!player) {
      player = mockPlayer;
    }
    return res.json({ success: true, player });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Rest / Sleep
export const restPlayer = async (req, res) => {
  try {
    const energyBoost = 50;
    mockPlayer.energy = Math.min(100, mockPlayer.energy + energyBoost);
    mockPlayer.hunger = Math.min(100, mockPlayer.hunger + 25);
    mockPlayer.stats.daysLived += 1;

    return res.json({
      success: true,
      message: 'You took a solid nap at your apartment. Energy restored, but you woke up hungry!',
      player: mockPlayer
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Eat Food / Use Item
export const useItem = async (req, res) => {
  try {
    const { itemName } = req.body;
    const itemIndex = mockPlayer.inventory.findIndex((i) => i.name.toLowerCase() === itemName.toLowerCase());
    
    if (itemIndex === -1) {
      return res.status(404).json({ success: false, message: 'Item not in your inventory' });
    }

    const item = mockPlayer.inventory[itemIndex];
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      mockPlayer.inventory.splice(itemIndex, 1);
    }

    mockPlayer.hunger = Math.max(0, mockPlayer.hunger - (item.effect?.hunger || 30));
    mockPlayer.energy = Math.min(100, mockPlayer.energy + (item.effect?.energy || 20));
    mockPlayer.stats.amalaConsumed += 1;

    return res.json({
      success: true,
      message: `You consumed ${item.name}. O dun gidi gan!`,
      player: mockPlayer
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Travel to location
export const travelLocation = async (req, res) => {
  try {
    const { targetLocation, fare = 200 } = req.body;
    if (mockPlayer.money < fare) {
      return res.status(400).json({ success: false, message: 'Not enough cash for Micra or Okada fare!' });
    }

    mockPlayer.money -= fare;
    mockPlayer.currentLocation = targetLocation;
    mockPlayer.energy = Math.max(0, mockPlayer.energy - 5);

    return res.json({
      success: true,
      message: `You boarded a yellow Micra and arrived at ${targetLocation}!`,
      player: mockPlayer
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Bank transactions
export const bankAction = async (req, res) => {
  try {
    const { action, amount } = req.body;
    const numAmount = Number(amount);

    if (action === 'deposit') {
      if (mockPlayer.money < numAmount) {
        return res.status(400).json({ success: false, message: 'Insufficient cash in hand' });
      }
      mockPlayer.money -= numAmount;
      mockPlayer.bankBalance += numAmount;
    } else if (action === 'withdraw') {
      if (mockPlayer.bankBalance < numAmount) {
        return res.status(400).json({ success: false, message: 'Insufficient bank balance' });
      }
      mockPlayer.bankBalance -= numAmount;
      mockPlayer.money += numAmount;
    }

    return res.json({
      success: true,
      message: `Bank ${action} of ₦${numAmount.toLocaleString()} successful!`,
      player: mockPlayer
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
