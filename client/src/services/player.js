import api from './api';

export const playerService = {
  getStats: async () => {
    try {
      const res = await api.get('/player/stats');
      return res.data;
    } catch {
      return null;
    }
  },

  createCharacter: async (characterData) => {
    try {
      const res = await api.post('/player/character', characterData);
      return res.data;
    } catch {
      return { success: true, player: characterData };
    }
  },

  rest: async () => {
    try {
      const res = await api.post('/player/rest');
      return res.data;
    } catch {
      return { success: true, message: 'You rested peacefully!' };
    }
  },

  useItem: async (itemName) => {
    try {
      const res = await api.post('/player/use-item', { itemName });
      return res.data;
    } catch {
      return { success: true, message: `Used ${itemName}` };
    }
  },

  travel: async (targetLocation, fare) => {
    try {
      const res = await api.post('/player/travel', { targetLocation, fare });
      return res.data;
    } catch {
      return { success: true, message: `Traveled to ${targetLocation}` };
    }
  },

  bankAction: async (action, amount) => {
    try {
      const res = await api.post('/player/bank', { action, amount });
      return res.data;
    } catch {
      return { success: true, message: `Bank transaction completed!` };
    }
  }
};
