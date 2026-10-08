import React from 'react';
import { MapPin, Navigation, Compass, CheckCircle } from 'lucide-react';
import { useGame } from '../context/GameContext';

const LocationCard = ({ location }) => {
  const { player, travel } = useGame();
  const isHere = player.currentLocation === location.name;

  return (
    <div
      className={`rounded-2xl p-5 border transition-all duration-300 relative flex flex-col justify-between ${
        isHere
          ? 'bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border-amber-500/50 shadow-xl shadow-amber-500/10'
          : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              {location.zone}
            </span>
            <h3 className="text-xl font-bold text-white mt-1.5 flex items-center gap-2">
              <MapPin className={`w-5 h-5 ${isHere ? 'text-amber-400' : 'text-slate-400'}`} />
              {location.name}
            </h3>
          </div>
          {isHere && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/40">
              <CheckCircle className="w-3.5 h-3.5" /> Here Now
            </span>
          )}
        </div>

        <p className="text-xs text-amber-200/80 font-medium italic mb-2">
          "{location.tagline}"
        </p>
        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
          {location.description}
        </p>

        {/* Activities preview */}
        {location.activities && location.activities.length > 0 && (
          <div className="mb-4 space-y-1.5">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
              Activities & Perks:
            </div>
            {location.activities.map((act) => (
              <div
                key={act.id || act.name}
                className="text-xs bg-slate-800/60 rounded-lg p-2 border border-slate-700/50 flex justify-between items-center text-slate-200"
              >
                <span>{act.name}</span>
                <span className="text-[10px] font-mono text-amber-400">
                  {act.cost > 0 ? `₦${act.cost}` : 'Free'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <div className="text-xs font-mono text-slate-400">
          Fare: <span className="text-emerald-400 font-bold">₦{location.transportFare || 250}</span>
        </div>

        {isHere ? (
          <button
            disabled
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-400 text-xs font-bold cursor-not-allowed border border-slate-700"
          >
            Currently Exploring
          </button>
        ) : (
          <button
            onClick={() => travel(location.name, location.transportFare || 250)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" /> Board Micra (₦{location.transportFare || 250})
          </button>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
