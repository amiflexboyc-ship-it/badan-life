import React from 'react';
import { User, Award, Heart, Zap, MapPin, Briefcase, RefreshCw, Sparkles, BookOpen } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { player, resetCharacter } = useGame();

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Citizen Dossier
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1.5 flex items-center gap-2">
            <User className="w-7 h-7 text-amber-400" />
            Character Profile & Achievements
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Track your life milestones, street reputation, and net worth progress in Ibadan.
          </p>
        </div>

        <Link
          to="/character-creation"
          className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-400 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4" /> Switch / Create Persona
        </Link>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Avatar & Primary ID */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-6">
          <div className="text-center">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-400 p-1 mx-auto shadow-2xl shadow-amber-500/20">
              <div className="w-full h-full rounded-3xl bg-slate-950 flex items-center justify-center text-5xl">
                {player.gender === 'Female' ? '👩🏾' : '👨🏾'}
              </div>
            </div>
            <h2 className="text-2xl font-black text-white mt-4">{player.name}</h2>
            <p className="text-xs font-semibold text-amber-400 italic">"{player.nickname}"</p>
            <div className="mt-2 inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
              Level {player.level} Ibadan Hustler
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex justify-between py-1.5 border-b border-slate-800/60">
              <span className="text-slate-400">Origin District:</span>
              <span className="font-semibold text-white">{player.originArea}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-800/60">
              <span className="text-slate-400">Current Station:</span>
              <span className="font-semibold text-amber-400">{player.currentLocation}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-800/60">
              <span className="text-slate-400">Education:</span>
              <span className="font-semibold text-white">{player.educationLevel}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-400">Active Job:</span>
              <span className="font-semibold text-emerald-400">{player.currentJobTitle}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={resetCharacter}
              className="w-full py-2.5 rounded-xl bg-rose-950/40 hover:bg-rose-950/70 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset Game Data
            </button>
          </div>
        </div>

        {/* Right 2 Columns: Detailed Stats and Records */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Career & Financial Summary
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <div className="text-xs text-slate-400">Cash in Pocket</div>
                <div className="text-xl font-black text-emerald-400 font-mono mt-1">
                  ₦{player.money.toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <div className="text-xs text-slate-400">Bank Savings</div>
                <div className="text-xl font-black text-blue-400 font-mono mt-1">
                  ₦{player.bankBalance.toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <div className="text-xs text-slate-400">Net Worth</div>
                <div className="text-xl font-black text-amber-400 font-mono mt-1">
                  ₦{(player.money + player.bankBalance).toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <div className="text-xs text-slate-400">Shifts Completed</div>
                <div className="text-xl font-black text-white font-mono mt-1">
                  {player.stats?.shiftsWorked || 0}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <div className="text-xs text-slate-400">Total Career Earnings</div>
                <div className="text-xl font-black text-emerald-400 font-mono mt-1">
                  ₦{(player.stats?.totalEarned || 0).toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <div className="text-xs text-slate-400">Amala Ingested</div>
                <div className="text-xl font-black text-orange-400 font-mono mt-1">
                  {player.stats?.amalaConsumed || 0} wraps
                </div>
              </div>
            </div>
          </div>

          {/* Acquired Properties */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Properties & Transportation
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-xs font-bold text-slate-400">Residence</div>
                <div className="text-sm font-bold text-white mt-1">{player.currentHouse?.title}</div>
                <div className="text-xs text-slate-400 mt-1">Comfort Score: {player.currentHouse?.comfort}%</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-xs font-bold text-slate-400">Vehicle</div>
                <div className="text-sm font-bold text-white mt-1">{player.currentVehicle?.title}</div>
                <div className="text-xs text-slate-400 mt-1">Speed Boost: +{player.currentVehicle?.speedBonus}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
