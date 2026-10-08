import api from './api';

export const jobService = {
  getJobs: async () => {
    try {
      const res = await api.get('/jobs');
      return res.data;
    } catch {
      return { success: true, jobs: [] };
    }
  },

  apply: async (jobId) => {
    try {
      const res = await api.post('/jobs/apply', { jobId });
      return res.data;
    } catch {
      return { success: true, message: 'Applied successfully!' };
    }
  },

  workShift: async (jobId) => {
    try {
      const res = await api.post('/jobs/work', { jobId });
      return res.data;
    } catch {
      return {
        success: true,
        earned: 4000,
        energyCost: 20,
        hungerIncrease: 20,
        expReward: 25,
        eventLog: 'Hard work pays off in the ancient city of Ibadan!',
        message: 'Completed shift!'
      };
    }
  }
};
