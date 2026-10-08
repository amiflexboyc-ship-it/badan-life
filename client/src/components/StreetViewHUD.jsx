import React, { useState, useEffect } from 'react';
import {
  Compass,
  Navigation,
  Volume2,
  Flashlight,
  Smartphone,
  AlertTriangle,
  Radio,
  Clock,
  Sparkles,
  Zap,
  MapPin,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { useGame } from '../context/GameContext';
import { sounds } from '../utils/audio';

const destinations = [
  { name: 'Cocoa House & Dugbe CBD', fare: 200, callout: 'Dugbe! Dugbe! Last micra! Ẹ wọlé pẹlú change ẹ o!' },
  { name: 'Bodija Market', fare: 200, callout: 'Bodija straight! Owo pákó nikan! Wọlé ki o to rọ!' },
  { name: 'Iwo Road Interchange', fare: 200, callout: 'Iwo Road Express! No delay! Enter with change!' },
  { name: 'Mokola Roundabout', fare: 150, callout: 'Mokola flyover direct! One chance kò sí!' },
  { name: 'Alalubosa GRA', fare: 350, callout: 'Alalubosa Lake View! Executive ride!' }
];

const newsFeed = [
  '⚠️ HEAVY TRAFFIC BUILDING UP AROUND MOKOLA FLYOVER DUE TO RUSH HOUR...',
  '🚨 OYO STATE TRANSPORT UNION ENFORCES NEW FARE CAP ON YELLOW MICRAS...',
  '🍲 SKYE BANK BUKA BODIJA ANNOUNCES SPECIAL EVENING GOAT MEAT CONSIGNMENT...',
  '💡 IBEDC WARNS OF SCHEDULED 9:00 PM LOAD SHEDDING ACROSS BERE & MOKOLA...'
];

const StreetViewHUD = () => {
  const { player, travel, soundEnabled, reputationTier } = useGame();

  const [currentDestIdx, setCurrentDestIdx] = useState(0);
  const [flashlightOn, setFlashlightOn] = useState(false);
  const [phoneBattery, setPhoneBattery] = useState(25);
  const [flashlightBattery, setFlashlightBattery] = useState(85);
  const [newsIdx, setNewsIdx] = useState(0);
  const [blackoutSeconds, setBlackoutSeconds] = useState(19 * 60 + 24);
  const [currentTime, setCurrentTime] = useState('8:40 PM');

  const activeDest = destinations[currentDestIdx];

  // News ticker timer
  useEffect(() => {
    const timer = setInterval(() => {
      setNewsIdx((prev) => (prev + 1) % newsFeed.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Countdown timer for Blackout
  useEffect(() => {
    const timer = setInterval(() => {
      setBlackoutSeconds((prev) => (prev > 0 ? prev - 1 : 1200));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard shortcut listener for 'E' key to board Micra
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'e' || e.key === 'E') {
        handleBoardMicra();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDest]);

  const formatCountdown = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `00:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleBoardMicra = () => {
    sounds.playMicraHorn();
    travel(activeDest.name, activeDest.fare);
  };

  const cycleDestination = () => {
    sounds.playClick();
    setCurrentDestIdx((prev) => (prev + 1) % destinations.length);
  };

  const toggleFlashlight = () => {
    sounds.playClick();
    setFlashlightOn(!flashlightOn);
    if (!flashlightOn && flashlightBattery > 5) {
      setFlashlightBattery((prev) => Math.max(0, prev - 2));
    }
  };

  const tapPhone = () => {
    sounds.playClick();
    if (phoneBattery < 95) {
      setPhoneBattery((prev) => Math.min(100, prev + 15));
      sounds.playSuccessSound();
    }
  };

  const expNeeded = player.level * 100;
  const currentExp = player.experience % expNeeded;
  const expPercent = Math.min(100, Math.floor((currentExp / expNeeded) * 100));

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border-2 border-yellow-500/50 shadow-2xl bg-black select-none font-sans">
      {/* Background Cinematic Canvas */}
      <div className="relative w-full aspect-[16/9] min-h-[460px] sm:min-h-[540px] max-h-[640px] overflow-hidden">
        <img
          src="/ibadan_micra_street.jpg"
          alt="Ibadan Yellow Nissan Micra Street View"
          className={`w-full h-full object-cover object-center transform transition-transform duration-700 ${
            flashlightOn ? 'brightness-110 contrast-105' : 'brightness-90 contrast-110'
          }`}
        />

        {/* Cinematic Vignette and Atmospheric Night Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

        {flashlightOn && (
          <div className="absolute inset-0 bg-radial-flashlight pointer-events-none" />
        )}

        {/* ================= TOP HUD ================= */}
        <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-start justify-between gap-4 z-20 pointer-events-auto">
          {/* Top-Left: Mini Radar Compass */}
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/70 border-2 border-amber-500/60 p-1 flex items-center justify-center backdrop-blur-md shadow-lg shadow-black/80">
              {/* Compass Needle */}
              <div className="absolute inset-1 border border-amber-500/30 rounded-full animate-spin-slow pointer-events-none" />
              <div className="text-center">
                <span className="block text-[10px] font-black text-amber-400 font-mono">N</span>
                <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mx-auto" />
              </div>
            </div>

            <div className="hidden sm:block">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black tracking-widest uppercase text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                  GPS LIVE
                </span>
                <span className="text-[10px] font-black tracking-widest uppercase text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/40">
                  ⭐ {reputationTier?.tier || 'UNKNOWN'}
                </span>
              </div>
              <div className="text-xs font-bold text-white mt-1 drop-shadow">
                {player.currentLocation}
              </div>
            </div>
          </div>

          {/* Top-Center: Digital Time & Blackout Countdown */}
          <div className="text-center px-4 py-2 rounded-2xl bg-black/80 border border-purple-500/40 backdrop-blur-md shadow-xl">
            <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-wider flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4 text-purple-400" />
              {currentTime}
            </div>
            <div className="text-[10px] sm:text-[11px] font-black tracking-wider text-amber-400 uppercase font-mono mt-0.5">
              NEPA BLACKOUT IN: <span className="text-red-400">{formatCountdown(blackoutSeconds)}</span>
            </div>
          </div>

          {/* Top-Right: Quest Level & Money Badge */}
          <div className="space-y-2 text-right">
            {/* Money Box with Green Glow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-black/85 border-2 border-emerald-500/60 shadow-lg shadow-emerald-500/20 backdrop-blur-md">
              <span className="text-xs text-slate-400 font-bold hidden sm:inline">WALLET:</span>
              <span className="font-mono text-base sm:text-lg font-black text-emerald-400 tracking-tight">
                ₦{player.money.toLocaleString()}
              </span>
            </div>

            {/* Level & XP Bar */}
            <div className="w-36 sm:w-48 p-2 rounded-xl bg-black/80 border border-slate-700/80 backdrop-blur-md">
              <div className="flex justify-between text-[10px] font-bold text-slate-300">
                <span className="text-amber-400">LAST MICRA HOME</span>
                <span className="font-mono">LVL {player.level}</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 mt-1 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-amber-400 transition-all duration-300"
                  style={{ width: `${expPercent}%` }}
                />
              </div>
              <div className="text-[9px] text-right font-mono text-slate-400 mt-0.5">
                {currentExp}XP / {expNeeded}XP
              </div>
            </div>
          </div>
        </div>

        {/* ================= HOVERING BOARD MICRA PROMPT ================= */}
        {/* Placed prominently over the yellow Nissan Micra taxi in the scene */}
        <div className="absolute top-[48%] sm:top-[50%] right-[6%] sm:right-[15%] transform -translate-y-1/2 z-20 pointer-events-auto">
          <div className="p-4 rounded-2xl bg-black/85 border-2 border-amber-500/80 shadow-2xl shadow-amber-500/30 backdrop-blur-md max-w-xs space-y-2 animate-bounce-slight">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-amber-500 text-black font-black text-xs flex items-center justify-center shadow">
                  E
                </span>
                <span className="text-xs font-black uppercase text-amber-300 tracking-wider">
                  BOARD MICRA
                </span>
              </div>
              <button
                onClick={cycleDestination}
                className="text-[10px] text-slate-400 hover:text-white underline font-semibold cursor-pointer"
              >
                Change Route
              </button>
            </div>

            <div>
              <div className="text-sm font-black text-white">
                Destination: <span className="text-yellow-400">{activeDest.name}</span>
              </div>
              <div className="text-xs text-slate-400 flex items-center justify-between mt-0.5">
                <span>Fare: <strong className="text-emerald-400 font-mono">₦{activeDest.fare}</strong></span>
                <span className="text-[10px] text-amber-300 italic">"Wọlé pẹlú change!"</span>
              </div>
            </div>

            <button
              onClick={handleBoardMicra}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-yellow-500/25 transition-all cursor-pointer active:scale-95"
            >
              <Navigation className="w-4 h-4" />
              PRESS [ E ] OR CLICK TO ENTER
            </button>
          </div>
        </div>

        {/* ================= BOTTOM HUD ================= */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col md:flex-row items-end justify-between gap-4 z-20 pointer-events-auto">
          {/* Bottom-Left: NEWS WATCH TICKER */}
          <div className="w-full md:w-auto md:max-w-sm">
            <div className="p-3 rounded-2xl bg-black/85 border border-amber-500/40 backdrop-blur-md shadow-xl space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-400">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                NEWS WATCH • IBADAN LIVE
              </div>
              <div className="text-xs font-medium text-slate-200 line-clamp-2 leading-snug">
                {newsFeed[newsIdx]}
              </div>
            </div>
          </div>

          {/* Bottom-Center: MICRA CONDUCTOR SUBTITLES & STREET REACTION */}
          <div className="text-center w-full md:max-w-md mx-auto space-y-1.5">
            <div className="p-3.5 rounded-2xl bg-black/90 border border-yellow-500/40 backdrop-blur-md shadow-2xl space-y-1">
              <div className="text-[10px] font-black uppercase tracking-widest text-yellow-400 flex items-center justify-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5" />
                MICRA CONDUCTOR (MOKOLA - DUGBE EXPRESS)
              </div>
              <div className="text-sm font-black text-amber-200 italic drop-shadow">
                "{activeDest.callout}"
              </div>
            </div>

            {/* Dynamic Street Voice Reaction to Player's Reputation */}
            <div className="p-2 rounded-xl bg-black/85 border border-purple-500/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between text-[11px] px-3 gap-1 shadow-lg">
              <span className="text-purple-300 font-bold uppercase tracking-wider text-[10px] shrink-0">
                Street Voice ({reputationTier?.tier}):
              </span>
              <span className="text-slate-200 font-semibold italic text-center sm:text-right">
                {reputationTier?.streetQuote}
              </span>
            </div>
          </div>

          {/* Bottom-Right: STATUS (FLASHLIGHT & PHONE BATTERY) */}
          <div className="w-full md:w-auto flex md:flex-col items-center md:items-end justify-between gap-2.5">
            {/* Flashlight status */}
            <button
              onClick={toggleFlashlight}
              className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 backdrop-blur-md transition-all cursor-pointer ${
                flashlightOn
                  ? 'bg-amber-500/30 border-amber-400 text-amber-200 shadow-lg shadow-amber-500/20'
                  : 'bg-black/80 border-slate-700 text-slate-300 hover:bg-slate-900'
              }`}
              title="Click to toggle flashlight"
            >
              <Flashlight className={`w-4 h-4 ${flashlightOn ? 'text-amber-400' : 'text-slate-400'}`} />
              <span>FLASHLIGHT: <strong className="font-mono">{flashlightBattery}%</strong></span>
            </button>

            {/* Phone status */}
            <button
              onClick={tapPhone}
              className="px-3 py-2 rounded-xl bg-black/80 hover:bg-slate-900 border border-slate-700 text-xs font-bold flex items-center gap-2 backdrop-blur-md transition-all cursor-pointer text-slate-300"
              title="Click to charge phone with powerbank"
            >
              <Smartphone className={`w-4 h-4 ${phoneBattery <= 20 ? 'text-rose-400' : 'text-emerald-400'}`} />
              <span>PHONE: <strong className="font-mono">{phoneBattery}%</strong></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreetViewHUD;
