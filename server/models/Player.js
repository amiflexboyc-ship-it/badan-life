import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    nickname: { type: String, default: 'Omo Ibadan' },
    gender: { type: String, enum: ['Male', 'Female', 'Non-Binary'], default: 'Male' },
    avatar: { type: String, default: 'default_avatar.png' },
    originArea: { type: String, default: 'Bere' }, // Bodija, Bere, Mokola, Challenge, Dugbe, UI
    
    // Core Attributes
    money: { type: Number, default: 5000 }, // Naira ₦
    bankBalance: { type: Number, default: 15000 },
    energy: { type: Number, default: 100, min: 0, max: 100 },
    hunger: { type: Number, default: 20, min: 0, max: 100 }, // 0 is full, 100 is starving
    health: { type: Number, default: 100, min: 0, max: 100 },
    streetCred: { type: Number, default: 10 },
    educationLevel: { 
      type: String, 
      enum: ['Secondary School', 'ND / HND', 'B.Sc Graduate', 'Tech Bro / Master'],
      default: 'Secondary School' 
    },

    // Occupation & Progression
    currentJobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', default: null },
    currentJobTitle: { type: String, default: 'Unemployed / Hustler' },
    experience: { type: Number, default: 0 },
    level: { type: Number, default: 1 },

    // Location & Belongings
    currentLocation: { type: String, default: 'Mapo Hall' },
    currentHouse: {
      title: { type: String, default: 'Face-me-I-face-you in Bere' },
      rentCost: { type: Number, default: 15000 },
      comfort: { type: Number, default: 25 },
      isOwned: { type: Boolean, default: false }
    },
    currentVehicle: {
      title: { type: String, default: 'Micra Taxi Rider / Trekking' },
      speedBonus: { type: Number, default: 0 },
      isOwned: { type: Boolean, default: false }
    },
    inventory: [
      {
        itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
        name: { type: String, required: true },
        category: { type: String, default: 'consumable' },
        quantity: { type: Number, default: 1 },
        effect: { type: Object, default: {} }
      }
    ],

    // Stats tracking
    stats: {
      shiftsWorked: { type: Number, default: 0 },
      totalEarned: { type: Number, default: 0 },
      amalaConsumed: { type: Number, default: 0 },
      daysLived: { type: Number, default: 1 }
    }
  },
  { timestamps: true }
);

export default mongoose.model('Player', playerSchema);
