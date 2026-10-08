import api from './api';

export const locationService = {
  getLocations: async () => {
    try {
      const res = await api.get('/locations');
      return res.data;
    } catch {
      return { success: true, locations: [] };
    }
  }
};
