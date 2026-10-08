import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { 
      type: String, 
      enum: ['food', 'drink', 'vehicle', 'house', 'gadget', 'clothing'], 
      required: true 
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    energyBonus: { type: Number, default: 0 },
    hungerReduction: { type: Number, default: 0 },
    healthBonus: { type: Number, default: 0 },
    streetCredBonus: { type: Number, default: 0 },
    comfortRating: { type: Number, default: 0 },
    speedRating: { type: Number, default: 0 },
    image: { type: String, default: '' },
    isAvailableInShop: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model('Item', itemSchema);
