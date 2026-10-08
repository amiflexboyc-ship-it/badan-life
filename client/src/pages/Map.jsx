import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Search,
  Utensils,
  Briefcase,
  Car,
  MapPin,
  ArrowRight,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Crown,
  Lock,
  Unlock,
  CheckCircle2,
  Award
} from 'lucide-react';
import LocationCard from '../components/LocationCard';
import MicraVisualizer from '../components/MicraVisualizer';
import StreetViewHUD from '../components/StreetViewHUD';
import { mockLocations, mockSpecialLegendLocations } from '../services/mockData';
import { useGame } from '../context/GameContext';

const Map = () => {
  const { player, travel, reputationTier, showNotification } = useGame();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const locations = mockLocations || [];

  const filteredLocations = locations.filter((loc) => {
    const matchesFilter =
      filter === 'all' ||
      loc.zone.toLowerCase().includes(filter.toLowerCase()) ||
      (loc.type && loc.type.toLowerCase() === filter.toLowerCase());
    const matchesSearch =
      loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.zone.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <span>🗺️ Oyo State Capital Navigation</span>
            <span>•</span>
            <span>Active Position</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1 flex items-center gap-2.5">
            <Compass className="w-8 h-8 text-amber-400" />
            Ibadan City Map & Landmarks
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Navigate between Bodija (Food), Dugbe (Jobs), and Iwo Road (Yellow Micras & Transit).
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wide">You Are At</div>
            <div className="text-sm font-black text-amber-300 truncate">{player.currentLocation}</div>
          </div>
        </div>
      </div>

      {/* Cinematic 3D Street View & Yellow Nissan Micra Experience (Image 1 & 2) */}
      <StreetViewHUD />

      {/* Interactive Yellow Nissan Micra Transit System */}
      <MicraVisualizer />

      {/* The 3 Core Lifeline Districts (Bodija, Dugbe, Iwo Road) as requested */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              The Lifeline Triad
            </span>
            <h2 className="text-xl font-black text-white">Three Pillars of Ibadan Hustle</h2>
          </div>
          <span className="text-xs text-slate-400 hidden sm:block">
            Food • Jobs • Transport
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* BODIJA -> FOOD */}
          <div className="p-5 rounded-3xl bg-gradient-to-b from-orange-950/40 via-slate-900 to-slate-950 border-2 border-orange-500/40 hover:border-orange-400 transition-all space-y-4 shadow-xl group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-2.5 py-0.5 rounded-full border border-orange-500/40">
                District 1 • Food Kingdom
              </span>
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Utensils className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-white">BODIJA</h3>
              <p className="text-xs text-orange-300 font-semibold mt-0.5">
                Food • Amala Skye Bank • Produce Market
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                The food hub of Ibadan. Refuel your stamina with legendary steaming hot Amala & Abula with goat meat.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <Link
                to="/shop"
                className="px-3.5 py-2 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Utensils className="w-3.5 h-3.5" /> Buy Food
              </Link>
              <button
                onClick={() => travel('Bodija Market', 200)}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                Go to Bodija (₦200) <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* DUGBE -> JOBS */}
          <div className="p-5 rounded-3xl bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 border-2 border-blue-500/40 hover:border-blue-400 transition-all space-y-4 shadow-xl group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/20 px-2.5 py-0.5 rounded-full border border-blue-500/40">
                District 2 • CBD & Work
              </span>
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-white">DUGBE</h3>
              <p className="text-xs text-blue-300 font-semibold mt-0.5">
                Jobs • Cocoa House Skyscraper • Finance & Tech
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                The business engine of Oyo State. 26-storey Cocoa House, bank headquarters, corporate tech jobs, and trade deals.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <Link
                to="/jobs"
                className="px-3.5 py-2 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5" /> Find Work
              </Link>
              <button
                onClick={() => travel('Cocoa House & Dugbe CBD', 200)}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                Go to Dugbe (₦200) <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* IWO ROAD -> TRANSPORT */}
          <div className="p-5 rounded-3xl bg-gradient-to-b from-yellow-950/40 via-slate-900 to-slate-950 border-2 border-yellow-500/40 hover:border-yellow-400 transition-all space-y-4 shadow-xl group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 bg-yellow-500/20 px-2.5 py-0.5 rounded-full border border-yellow-500/40">
                District 3 • Transit Capital
              </span>
              <div className="w-10 h-10 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Car className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-white">IWO ROAD</h3>
              <p className="text-xs text-yellow-300 font-semibold mt-0.5">
                Transport • Yellow Micra Hub • Interstate Garage
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                The roaring transport nexus. Thousands of yellow Micras, conductors shouting fares, POS stands, and interstate buses.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <Link
                to="/business"
                className="px-3.5 py-2 rounded-xl bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <TrendingUp className="w-3.5 h-3.5" /> Micra Fleet
              </Link>
              <button
                onClick={() => travel('Iwo Road Interchange', 200)}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-yellow-500/20 transition-all cursor-pointer"
              >
                Go to Iwo Road (₦200) <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SPECIAL TYCOON & LEGEND LOCATIONS (Olubadan Palace, Cocoa House Penthouse, Alalubosa Country Club) */}
      <div className="space-y-4 p-6 rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-black border-2 border-amber-500/40 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase tracking-wider border border-amber-500/30">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              EXCLUSIVE HIGH-REPUTATION & LEGEND LOCATIONS
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Historic Seats of Ibadan Prestige
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            Your Status: <span className="font-bold text-amber-400 uppercase">{reputationTier?.tier}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {mockSpecialLegendLocations.map((loc) => {
            const tierOrder = ['UNKNOWN', 'HUSTLER', 'KNOWN', 'RESPECTED', 'INFLUENTIAL', 'BIG NAME', 'IBADAN LEGEND'];
            const userIndex = tierOrder.indexOf(reputationTier?.tier || 'UNKNOWN');
            const requiredIndex = tierOrder.indexOf(loc.requiredTier);
            const isUnlocked = userIndex >= requiredIndex;

            return (
              <div
                key={loc._id}
                className={`p-5 rounded-3xl border-2 flex flex-col justify-between transition-all space-y-4 shadow-xl ${
                  isUnlocked
                    ? 'bg-slate-900/90 border-amber-500/60 shadow-amber-500/10'
                    : 'bg-slate-950/70 border-slate-800 opacity-75'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
                      isUnlocked
                        ? 'text-emerald-300 bg-emerald-500/20 border-emerald-500/40'
                        : 'text-rose-400 bg-rose-500/10 border-rose-500/30'
                    }`}>
                      {isUnlocked ? '🔓 Access Granted' : `🔒 Requires ${loc.requiredTier}`}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                      <Crown className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white">{loc.name}</h3>
                    <p className="text-xs text-amber-300 font-medium mt-0.5">{loc.tagline}</p>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2">{loc.description}</p>
                  </div>

                  {/* Activities */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Available Activities:</span>
                    {loc.activities.map((act) => (
                      <div key={act.id} className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs space-y-1">
                        <div className="font-bold text-white flex items-center justify-between">
                          <span>{act.name}</span>
                          <span className="text-emerald-400 font-mono">{act.cost === 0 ? 'FREE' : `₦${act.cost.toLocaleString()}`}</span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-purple-300">
                          <span>+{act.credReward} Street Cred</span>
                          {act.energyGain ? <span className="text-emerald-300">+{act.energyGain} Energy</span> : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  {isUnlocked ? (
                    <button
                      onClick={() => {
                        travel(loc.name, 0);
                        showNotification(`👑 Entered ${loc.name}! Welcomed with royal fanfare!`, 'success');
                      }}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/25 cursor-pointer"
                    >
                      <Crown className="w-4 h-4" /> Enter Royal Chamber
                    </button>
                  ) : (
                    <div className="w-full py-2.5 rounded-xl bg-slate-800/40 text-slate-500 font-bold text-xs text-center border border-slate-800 flex items-center justify-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" /> Reach {loc.requiredTier} to Enter
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          {['all', 'Bodija', 'Dugbe', 'Iwo Road', 'Bere', 'UI', 'Mokola', 'Challenge', 'Alalubosa'].map((zone) => (
            <button
              key={zone}
              onClick={() => setFilter(zone)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
                filter === zone
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {zone === 'all' ? 'All Districts' : zone}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search landmarks or districts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Location Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLocations.map((loc) => (
          <LocationCard key={loc._id || loc.name} location={loc} />
        ))}
      </div>
    </div>
  );
};

export default Map;
