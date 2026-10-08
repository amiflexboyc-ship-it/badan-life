import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Menu, Compass } from 'lucide-react';
import MoneyDisplay from './MoneyDisplay';
import EnergyBar from './EnergyBar';
import HungerBar from './HungerBar';
import { useGame } from '../context/GameContext';

const Navbar = ({ onToggleSidebar }) => {
  const { player } = useGame();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand + Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center font-black text-slate-950 text-base shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              IB
            </div>
            <div>
              <div className="text-base font-black tracking-tight text-white flex items-center gap-1.5">
                IBADAN LIFE
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  RPG
                </span>
              </div>
              <div className="text-[10px] font-medium text-slate-400 hidden sm:block">
                City of Brown Roofs & Hustle
              </div>
            </div>
          </Link>
        </div>

        {/* Center: Current City Landmark */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Current Location:</span>
          <span className="font-bold text-amber-300">{player.currentLocation}</span>
        </div>

        {/* Right: Vitals & Money */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex items-center gap-4">
            <EnergyBar />
            <HungerBar />
          </div>

          <MoneyDisplay />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
