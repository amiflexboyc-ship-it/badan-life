import React from 'react';
import { Home, Bed, Zap, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { useGame } from '../context/GameContext';

const House = () => {
  const { player, rest } = useGame();
  const house = player.currentHouse;

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Accommodation & Sanctuary
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1.5 flex items-center gap-2">
            <Home className="w-7 h-7 text-amber-400" />
            My Ibadan Residence
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Where you rest, escape the heat, and recharge energy after grueling shifts.
          </p>
        </div>

        <button
          onClick={rest}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition-all cursor-pointer"
        >
          <Bed className="w-4 h-4" /> Sleep & Recharge (+60 Energy)
        </button>
      </div>

      {/* Current Residence Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                Current Home
              </span>
              <h2 className="text-2xl font-black text-white mt-1">{house?.title}</h2>
              <p className="text-xs text-slate-400 mt-1">
                Located near {player.originArea} district • Status: {house?.isOwned ? 'Fully Owned' : 'Rented'}
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Home className="w-6 h-6" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
              <div className="text-xs text-slate-400">Comfort Rating</div>
              <div className="text-xl font-black text-amber-400 font-mono mt-1">
                {house?.comfort}%
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
              <div className="text-xs text-slate-400">Rent Cost</div>
              <div className="text-xl font-black text-emerald-400 font-mono mt-1">
                {house?.rentCost ? `₦${house.rentCost.toLocaleString()}/mo` : 'Free (Owned)'}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
              <div className="text-xs text-slate-400">Restoration Bonus</div>
              <div className="text-xl font-black text-indigo-400 font-mono mt-1">
                +60 Stamina
              </div>
            </div>
          </div>

          {/* House Amenities */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wide">
              Installed Amenities & Utilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Ibadan IBEDC Prepaid Meter', desc: 'Light is steady for 14 hours daily' },
                { name: 'Borehole Running Water Tank', desc: 'No need to queue at neighbor well' },
                { name: 'Tiger Generator ("I better pass my neighbor")', desc: 'Emergency night power' },
                { name: 'Iron Security Burglary Proof', desc: 'Safe from midnight area disturbances' }
              ].map((amenity, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/40 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">{amenity.name}</div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{amenity.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upgrade Advice */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wide">
              <Sparkles className="w-4 h-4" /> Housing Upgrades
            </div>
            <h3 className="text-lg font-bold text-white">Upgrade to Bodija Estate or Oluyole Villa</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tired of noisy neighbors banging doors in the morning? Visit the Market & Stores to rent or buy luxury apartments in Bodija or Jericho.
            </p>
          </div>

          <a
            href="/shop"
            className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-400 font-bold text-xs text-center transition-colors block"
          >
            Browse Real Estate in Store →
          </a>
        </div>
      </div>
    </div>
  );
};

export default House;
