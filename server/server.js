import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import playerRoutes from './routes/playerRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import shopRoutes from './routes/shopRoutes.js';
import locationRoutes from './routes/locationRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/player', playerRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/locations', locationRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    game: 'Ibadan Life RPG Simulator',
    city: 'Ibadan, Oyo State, Nigeria',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`\n===========================================`);
  console.log(`🚀 Ibadan Life Server running on port ${PORT}`);
  console.log(`📍 Ibadan API: http://localhost:${PORT}/api/health`);
  console.log(`===========================================\n`);
});
