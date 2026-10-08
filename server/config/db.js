import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ibadan_life');
    console.log(`[Ibadan Life DB] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[Ibadan Life DB] MongoDB Connection Warning: ${error.message}`);
    console.warn('[Ibadan Life DB] Running in mock/hybrid fallback mode if local Mongo is offline.');
  }
};
