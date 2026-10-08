import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, MapPin, Compass, ArrowRight, Utensils, Briefcase, Car, Coins } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { sounds } from '../utils/audio';

const WelcomeModal = () => {
  const navigate = useNavigate();
  const { player, welcomeModalOpen, setWelcomeModalOpen } = useGame();

  if (!welcomeModalOpen) return null;

  const handleEnterCity = () => {
    sounds.playMicraHorn();
    setWelcomeModalOpen(false);
    navigate('/map');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border-2 border-amber-500/50 shadow-2xl p-6 sm:p-8 space-y-6 overflow-hidden">
        {/* Decorative Golden Ambient Glows */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-400" />
            OYO STATE, NIGERIA • BROWN ROOFS & YELLOW MICRAS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ẹ Káàbọ̀ sí Ìbàdàn!
          </h2>
          <p className="text-sm sm:text-base text-amber-200/90 font-medium">
            Welcome to the ancient city of warriors, poets, and millionaires, <span className="font-bold text-white">{player.name}</span>!
          </p>
        </div>

        {/* ₦5,000 Starter Grant Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-amber-950/60 border border-emerald-500/40 flex items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Coins className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                Starting Hustle Capital
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                ₦5,000.00
              </div>
            </div>
          </div>
          <div className="text-right text-xs text-slate-400 hidden sm:block">
            <span>In your pocket</span>
            <div className="text-amber-400 font-bold">Ready to Hustle!</div>
          </div>
        </div>

        {/* The 3 Core Pillars: Bodija, Dugbe, Iwo Road */}
        <div className="space-y-2 relative z-10">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Your 3 Main Lifeline Districts in Ibadan:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Bodija - Food */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-amber-500/30 space-y-1.5 hover:border-amber-400 transition-colors">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase">
                <Utensils className="w-4 h-4" /> Bodija
              </div>
              <div className="text-sm font-black text-white">Food & Produce</div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Famous Skye Bank Amala & Abula buka. Refill hunger and regain stamina.
              </p>
            </div>

            {/* Dugbe - Jobs */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-1.5 hover:border-blue-400 transition-colors">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase">
                <Briefcase className="w-4 h-4" /> Dugbe
              </div>
              <div className="text-sm font-black text-white">Jobs & Business</div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Cocoa House skyscraper & banks. Find work, earn salaries, and pitch clients.
              </p>
            </div>

            {/* Iwo Road - Transport */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-yellow-500/30 space-y-1.5 hover:border-yellow-400 transition-colors">
              <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase">
                <Car className="w-4 h-4" /> Iwo Road
              </div>
              <div className="text-sm font-black text-white">Micra Transport</div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Yellow Micra taxi park! Conduct routes, hail rides, and build vehicle fleet.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 relative z-10">
          <button
            onClick={handleEnterCity}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-amber-500/30 transition-all transform hover:scale-[1.01] cursor-pointer"
          >
            <Compass className="w-5 h-5" />
            ENTER CITY MAP & BOARD YELLOW MICRA
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
