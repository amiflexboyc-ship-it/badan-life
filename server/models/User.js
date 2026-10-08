import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    hasActiveCharacter: { type: Boolean, default: false },
    activePlayerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' }
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
