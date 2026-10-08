import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    zone: { type: String, required: true }, // e.g. Ibadan North, Ibadan South-West
    tagline: { type: String, default: '' },
    description: { type: String, required: true },
    image: { type: String, default: '' },
    availableJobs: [{ type: String }],
    activities: [
      {
        actionName: { type: String, required: true },
        cost: { type: Number, default: 0 },
        energyCost: { type: Number, default: 10 },
        rewardCred: { type: Number, default: 5 },
        description: { type: String }
      }
    ],
    transportCostFromCenter: { type: Number, default: 300 }
  },
  { timestamps: true }
);

export default mongoose.model('Location', locationSchema);
