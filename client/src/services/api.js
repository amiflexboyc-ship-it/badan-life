const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = {
  get: async (endpoint, options = {}) => {
    const token = localStorage.getItem('ibadan_token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    };
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers,
      ...options,
    });
    const data = await response.json();
    return { data, status: response.status };
  },

  post: async (endpoint, body = {}, options = {}) => {
    const token = localStorage.getItem('ibadan_token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    };
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      ...options,
    });
    const data = await response.json();
    return { data, status: response.status };
  },
};

export default api;
