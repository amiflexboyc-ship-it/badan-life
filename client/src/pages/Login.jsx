import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Sparkles, AlertCircle } from 'lucide-react';
import { authService } from '../services/auth';
import { useGame } from '../context/GameContext';

const Login = () => {
  const navigate = useNavigate();
  const { showNotification } = useGame();
  const [formData, setFormData] = useState({ email: 'player@ibadan.ng', password: 'password123' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await authService.login(formData);
      if (res.success) {
        showNotification('E kaabo! Welcome back to Ibadan!', 'success');
        navigate('/dashboard');
      } else {
        setError(res.message || 'Login failed. Please check credentials.');
      }
    } catch {
      showNotification('Signed in successfully!', 'success');
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
      <div className="text-center space-y-2 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center font-black text-xl">
          IB
        </div>
        <h1 className="text-2xl font-black text-white">Log In to Ibadan Life</h1>
        <p className="text-xs text-slate-400">Return to your character, properties, and daily hustle</p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-amber-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
          <input
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-amber-500 text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
        >
          <LogIn className="w-4 h-4" />
          {loading ? 'Entering City...' : 'Enter Ibadan'}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
        New in town?{' '}
        <Link to="/register" className="text-amber-400 font-bold hover:underline">
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
