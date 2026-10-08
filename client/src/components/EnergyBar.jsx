import React from 'react';
import { Zap } from 'lucide-react';
import { useGame } from '../context/GameContext';

const EnergyBar = () => {
  const { player } = useGame();
  const energy = player.energy;

  // Determine bar color based on percentage
  const getColor = () => {
    if (energy > 60) return 'from-amber-400 to-yellow-500 shadow-yellow-500/30';
    if (energy > 25) return 'from-amber-500 to-orange-600 shadow-orange-500/30';
    return 'from-rose-500 to-red-600 shadow-red-500/40 animate-pulse';
  };

  return (
    <div className="flex items-center gap-2">
      <Zap className={`w-4 h-4 ${energy <= 25 ? 'text-rose-400 animate-bounce' : 'text-amber-400'}`} />
      <div className="w-24 sm:w-32 bg-slate-800/80 rounded-full h-3 p-0.5 border border-slate-700/60 overflow-hidden shadow-inner">
        <div
          className={`h-full rounded-full bg-gradient-to-r transition-all duration-500 shadow-sm ${getColor()}`}
          style={{ width: `${Math.min(100, Math.max(0, energy))}%` }}
        />
      </div>
      <span className="text-xs font-mono text-slate-300 font-semibold">{energy}%</span>
    </div>
  );
};

export default EnergyBar;
