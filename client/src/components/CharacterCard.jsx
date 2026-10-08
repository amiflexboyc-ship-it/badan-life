import React from 'react';
import { ShieldCheck, MapPin, Award, Bed, Sparkles, Heart } from 'lucide-react';
import { useGame } from '../context/GameContext';

const CharacterCard = () => {
  const { player, rest } = useGame();

  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 p-5 shadow-xl relative overflow-hidden backdrop-blur-md">
      {/* Background glow badge */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-400 p-0.5 shadow-lg shadow-amber-500/20">
            <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-3xl font-black text-amber-400">
              {player.gender === 'Female' ? '👩🏾' : '👨🏾'}
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 px-1.5 py-0.5 rounded-md bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow">
            LVL {player.level}
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-black text-white truncate">{player.name}</h2>
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          </div>
          <p className="text-xs text-amber-400 font-semibold italic truncate">
            "{player.nickname}"
          </p>
          <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="truncate">{player.originArea} / {player.currentLocation}</span>
          </div>
        </div>
      </div>

      {/* Badges and Sub-stats */}
      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800/80 text-center">
        <div className="p-2 rounded-xl bg-slate-800/40 border border-slate-800">
          <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
            <Award className="w-3 h-3 text-amber-400" /> Street Cred
          </div>
          <div className="text-sm font-bold text-amber-300 font-mono mt-0.5">
            {player.streetCred}
          </div>
        </div>

        <div className="p-2 rounded-xl bg-slate-800/40 border border-slate-800">
          <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
            <Heart className="w-3 h-3 text-rose-400" /> Health
          </div>
          <div className="text-sm font-bold text-rose-300 font-mono mt-0.5">
            {player.health}%
          </div>
        </div>

        <div className="p-2 rounded-xl bg-slate-800/40 border border-slate-800">
          <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
            <Sparkles className="w-3 h-3 text-blue-400" /> Day Lived
          </div>
          <div className="text-sm font-bold text-blue-300 font-mono mt-0.5">
            Day {player.stats?.daysLived || 1}
          </div>
        </div>
      </div>

      {/* Rest Quick Action */}
      <div className="mt-4">
        <button
          onClick={rest}
          className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Bed className="w-4 h-4 text-indigo-400" />
          Rest at {player.currentHouse?.title.split(' ')[0]} (+Energy)
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
