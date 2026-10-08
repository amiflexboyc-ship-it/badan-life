import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, enum: ['Informal', 'Trade', 'Corporate', 'Tech', 'Entertainment'], default: 'Informal' },
    description: { type: String, required: true },
    salaryPerShift: { type: Number, required: true },
    energyCost: { type: Number, default: 25 },
    hungerIncrease: { type: Number, default: 20 },
    requiredEducation: { type: String, default: 'Secondary School' },
    requiredCred: { type: Number, default: 0 },
    experienceReward: { type: Number, default: 15 },
    icon: { type: String, default: 'Briefcase' }
  },
  { timestamps: true }
);

export default mongoose.model('Job', jobSchema);
