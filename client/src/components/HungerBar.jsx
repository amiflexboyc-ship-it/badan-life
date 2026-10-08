import React from 'react';
import { Utensils } from 'lucide-react';
import { useGame } from '../context/GameContext';

const HungerBar = () => {
  const { player } = useGame();
  const hunger = player.hunger; // 0 is full, 100 is starving

  // Inverted color: high hunger is dangerous
  const getColor = () => {
    if (hunger < 40) return 'from-emerald-400 to-green-500 shadow-green-500/20';
    if (hunger < 75) return 'from-amber-400 to-orange-500 shadow-orange-500/20';
    return 'from-rose-500 to-red-600 shadow-red-500/40 animate-pulse';
  };

  return (
    <div className="flex items-center gap-2">
      <Utensils className={`w-4 h-4 ${hunger >= 75 ? 'text-rose-400 animate-bounce' : 'text-orange-400'}`} />
      <div className="w-24 sm:w-32 bg-slate-800/80 rounded-full h-3 p-0.5 border border-slate-700/60 overflow-hidden shadow-inner">
        <div
          className={`h-full rounded-full bg-gradient-to-r transition-all duration-500 shadow-sm ${getColor()}`}
          style={{ width: `${Math.min(100, Math.max(0, hunger))}%` }}
        />
      </div>
      <span className="text-xs font-mono text-slate-300 font-semibold">{hunger}%</span>
    </div>
  );
};

export default HungerBar;
