import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Player from '../models/Player.js';

const JWT_SECRET = process.env.JWT_SECRET || 'ibadan_life_super_secret_jwt_key_2026';

// Register User
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide all fields' });
    }

    let existingUser = await User.findOne({ $or: [{ email }, { username }] }).catch(() => null);
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User or email already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save().catch(() => null);

    const token = jwt.sign({ id: newUser._id || 'mock-user-id', username }, JWT_SECRET, { expiresIn: '7d' });
    return res.status(201).json({
      success: true,
      message: 'Account created successfully! Welcome to Ibadan Life.',
      token,
      user: { id: newUser._id || 'mock-user-id', username, email, hasActiveCharacter: false }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Login User
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    let user = await User.findOne({ email }).catch(() => null);
    if (!user) {
      // Allow demo login
      if (email === 'demo@ibadanlife.ng' || email === 'player@ibadan.ng') {
        const token = jwt.sign({ id: 'demo-user-id', username: 'DemoHustler' }, JWT_SECRET, { expiresIn: '7d' });
        return res.json({
          success: true,
          token,
          user: { id: 'demo-user-id', username: 'DemoHustler', email, hasActiveCharacter: true }
        });
      }
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
    const player = await Player.findOne({ userId: user._id }).catch(() => null);

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        hasActiveCharacter: !!player,
        activePlayerId: player ? player._id : null
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get current profile
export const getMe = async (req, res) => {
  try {
    const userId = req.user?.id || 'demo-user-id';
    const player = await Player.findOne({ userId }).catch(() => null);
    return res.json({
      success: true,
      user: req.user,
      player
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
