import api from './api';

export const authService = {
  login: async (credentials) => {
    try {
      const res = await api.post('/auth/login', credentials);
      if (res.data.token) {
        localStorage.setItem('ibadan_token', res.data.token);
      }
      return res.data;
    } catch {
      // Offline / fallback demo simulation
      const fallbackUser = {
        id: 'demo-user-1',
        username: credentials.email.split('@')[0] || 'OmoIbadan',
        email: credentials.email,
        hasActiveCharacter: true,
      };
      localStorage.setItem('ibadan_token', 'mock-jwt-token');
      return { success: true, token: 'mock-jwt-token', user: fallbackUser };
    }
  },

  register: async (userData) => {
    try {
      const res = await api.post('/auth/register', userData);
      if (res.data.token) {
        localStorage.setItem('ibadan_token', res.data.token);
      }
      return res.data;
    } catch {
      const fallbackUser = {
        id: 'demo-user-2',
        username: userData.username,
        email: userData.email,
        hasActiveCharacter: false,
      };
      localStorage.setItem('ibadan_token', 'mock-jwt-token');
      return { success: true, token: 'mock-jwt-token', user: fallbackUser };
    }
  },

  getCurrentUser: async () => {
    try {
      const res = await api.get('/auth/me');
      return res.data;
    } catch {
      return {
        success: true,
        user: { username: 'Babatunde Alao', email: 'player@ibadan.ng' }
      };
    }
  },

  logout: () => {
    localStorage.removeItem('ibadan_token');
  }
};
