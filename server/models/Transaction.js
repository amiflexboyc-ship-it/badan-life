import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    type: { type: String, enum: ['income', 'expense', 'transfer', 'rent', 'purchase'], required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, default: 'general' }
  },
  { timestamps: true }
);

export default mongoose.model('Transaction', transactionSchema);
