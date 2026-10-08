import React, { useState } from 'react';
import { Volume2, Navigation, AlertCircle, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { sounds } from '../utils/audio';

const micraChants = [
  { text: 'Dugbe! Dugbe! Wọlé pẹlú change ẹ o!', dest: 'Cocoa House & Dugbe CBD' },
  { text: 'Bodija! Bodija straight! Owo pákó nikan!', dest: 'Bodija Market' },
  { text: 'Iwo Road express! Gbogbo ebo lo!', dest: 'Iwo Road Interchange' },
  { text: 'Mokola roundabout bypass! Ko si go-slow!', dest: 'Mokola Roundabout' },
  { text: 'Challenge wọlé! ₦200 pérété!', dest: 'Challenge & Ring Road' }
];

const MicraVisualizer = ({ onTravel }) => {
  const { player, travel } = useGame();
  const [activeChant, setActiveChant] = useState(micraChants[0]);
  const [hornActive, setHornActive] = useState(false);

  const handleHorn = () => {
    sounds.playMicraHorn();
    setHornActive(true);
    setTimeout(() => setHornActive(false), 500);
  };

  const cycleChant = () => {
    sounds.playClick();
    const nextIdx = (micraChants.findIndex((c) => c.text === activeChant.text) + 1) % micraChants.length;
    setActiveChant(micraChants[nextIdx]);
  };

  const handleBoardFromChant = () => {
    if (activeChant.dest) {
      travel(activeChant.dest, 200);
    }
  };

  const hasMicra = player.currentVehicle?.isMicra || player.currentVehicle?.title.includes('Micra');

  return (
    <div className="rounded-3xl bg-gradient-to-br from-yellow-950/40 via-slate-900 to-slate-950 border-2 border-yellow-500/40 p-5 sm:p-6 shadow-2xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-yellow-400 animate-ping" />
          <span className="text-xs font-black uppercase tracking-wider text-yellow-400 bg-yellow-500/20 px-2.5 py-1 rounded-full border border-yellow-500/40">
            Ibadan Yellow Nissan Micra Transit System
          </span>
        </div>

        <div className="text-xs text-slate-300 font-mono">
          Rides Taken: <span className="font-bold text-yellow-400">{player.stats?.micraRides || 0}</span>
        </div>
      </div>

      {/* Micra Graphic Display */}
      <div className="p-4 rounded-2xl bg-black/60 border border-yellow-500/30 flex flex-col md:flex-row items-center justify-between gap-6 mb-5">
        {/* Animated Visual Micra Car */}
        <div className="flex items-center gap-4">
          <div className={`relative p-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-500/20 transition-transform ${hornActive ? 'scale-110' : ''}`}>
            {/* Nissan Micra Silhouette SVG */}
            <svg
              className="w-16 h-10 sm:w-20 sm:h-12"
              viewBox="0 0 100 55"
              fill="currentColor"
            >
              {/* Car Body */}
              <path d="M12,38 L18,22 C22,14 32,10 48,10 L70,10 C78,10 88,16 92,26 L96,36 C98,39 96,44 92,44 L84,44 C84,39 79,35 73,35 C67,35 62,39 62,44 L38,44 C38,39 33,35 27,35 C21,35 16,39 16,44 L10,44 C6,44 4,40 6,36 Z" fill="#FACC15" />
              {/* Black Oyo State Stripe */}
              <rect x="8" y="27" width="88" height="5" fill="#0F172A" rx="1" />
              <rect x="8" y="34" width="88" height="2" fill="#0F172A" rx="0.5" />
              {/* Windows */}
              <path d="M24,22 L45,22 L45,13 L33,13 Z" fill="#1E293B" opacity="0.9" />
              <path d="M49,22 L72,22 L68,13 L49,13 Z" fill="#1E293B" opacity="0.9" />
              {/* Wheels */}
              <circle cx="27" cy="42" r="7" fill="#0F172A" />
              <circle cx="27" cy="42" r="3.5" fill="#94A3B8" />
              <circle cx="73" cy="42" r="7" fill="#0F172A" />
              <circle cx="73" cy="42" r="3.5" fill="#94A3B8" />
              {/* Headlight & Tail light */}
              <rect x="94" y="30" width="3" height="4" fill="#FEF08A" rx="1" />
              <rect x="6" y="28" width="2" height="4" fill="#EF4444" rx="0.5" />
            </svg>

            {/* License plate */}
            <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 bg-white text-[8px] font-black text-slate-900 px-1 rounded shadow">
              OYO • AG 744 BDJ
            </div>
          </div>

          <div>
            <div className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              Yellow Nissan Micra K11
              {hasMicra && (
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/40">
                  Owned in Garage
                </span>
              )}
            </div>
            <p className="text-xs text-yellow-300/90 font-medium">
              "The king of Ibadan highways. 2 passengers front, 4 back, zero delay!"
            </p>
          </div>
        </div>

        {/* Action Controls for Micra */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleHorn}
            className="px-3.5 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-yellow-500/20 transition-all cursor-pointer active:scale-95"
            title="Honk the Ibadan Micra Horn"
          >
            <Volume2 className="w-4 h-4" /> Honk "PIP-PIP!"
          </button>

          <button
            onClick={cycleChant}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            Change Route Call
          </button>
        </div>
      </div>

      {/* Conductor Callout Banner */}
      <div className="p-4 rounded-2xl bg-yellow-950/30 border border-yellow-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="text-[10px] font-black uppercase tracking-wider text-yellow-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Micra Conductor Shouting at Motor Park:
          </div>
          <div className="text-sm font-black text-white italic">
            "{activeChant.text}"
          </div>
          <div className="text-[11px] text-slate-400">
            Route Destination: <span className="text-amber-300 font-semibold">{activeChant.dest}</span> • Fare: <span className="text-emerald-400 font-bold">₦200</span>
          </div>
        </div>

        <button
          onClick={handleBoardFromChant}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-yellow-500/20 transition-all cursor-pointer shrink-0"
        >
          <Navigation className="w-4 h-4" /> Board This Micra Now (₦200)
        </button>
      </div>
    </div>
  );
};

export default MicraVisualizer;
