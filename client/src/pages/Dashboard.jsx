import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Utensils,
  Home,
  Car,
  TrendingUp,
  Award,
  Zap,
  ArrowRight,
  Landmark,
  ShieldAlert,
  Sparkles,
  Coins,
  Crown
} from 'lucide-react';
import { useGame } from '../context/GameContext';
import CharacterCard from '../components/CharacterCard';
import Inventory from '../components/Inventory';

const Dashboard = () => {
  const { player, rest } = useGame();

  const ownedBiz = player.businesses || [];
  const dailyBizRevenue = ownedBiz.reduce((sum, b) => sum + (b.dailyProfit || 0), 0);
  const netWorth = player.money + player.bankBalance + ownedBiz.reduce((sum, b) => sum + (b.cost * (b.count || 1)), 0);

  return (
    <div className="space-y-8 pb-16">
      {/* Top Welcome Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <span>🌆 Oyo State Live Simulator</span>
            <span>•</span>
            <span>Day {player.stats?.daysLived || 1}</span>
            <span>•</span>
            <span className="text-emerald-400 font-mono">Net Worth: ₦{netWorth.toLocaleString()}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Ẹ kú àárọ̀, {player.name.split(' ')[0]}!
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Currently posted at <span className="text-amber-300 font-semibold">{player.currentLocation}</span>. The city is awake and hustling.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            to="/map"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg shadow-yellow-500/20 transition-all cursor-pointer"
          >
            <Car className="w-4 h-4" /> Board Yellow Micra
          </Link>
          <Link
            to="/missions"
            className="px-4 py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-purple-400" /> Street Missions
          </Link>
          <Link
            to="/jobs"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-emerald-400" /> Browse Jobs
          </Link>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Character Card & Vitals Alert */}
        <div className="space-y-6">
          <CharacterCard />

          {/* Vitals Warning if hungry or exhausted */}
          {(player.energy <= 25 || player.hunger >= 75) && (
            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-300">
                <ShieldAlert className="w-4 h-4" /> Vitals Warning
              </div>
              <p className="text-xs text-rose-200 leading-relaxed">
                {player.energy <= 25
                  ? 'Your energy is critically depleted! Rest at home or take a short nap.'
                  : 'You are starving! Visit Bodija Market to buy Amala before you collapse.'}
              </p>
            </div>
          )}

          {/* Quick Life Progression Pathways */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Quick City Shortcuts
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <Link
                to="/map"
                className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 flex items-center gap-2 text-yellow-300 transition-colors"
              >
                <Car className="w-4 h-4 shrink-0 text-yellow-400" /> Micra Transit
              </Link>
              <Link
                to="/shop"
                className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 flex items-center gap-2 text-orange-300 transition-colors"
              >
                <Utensils className="w-4 h-4 shrink-0 text-orange-400" /> Buy Amala
              </Link>
              <Link
                to="/missions"
                className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 flex items-center gap-2 text-purple-300 transition-colors"
              >
                <Sparkles className="w-4 h-4 shrink-0 text-purple-400" /> Street Gigs
              </Link>
              <Link
                to="/business"
                className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 flex items-center gap-2 text-emerald-300 transition-colors"
              >
                <Crown className="w-4 h-4 shrink-0 text-emerald-400" /> Tycoon Hub
              </Link>
            </div>
          </div>

          {/* Assets Summary */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Assets & Belongings
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{player.currentHouse?.title}</div>
                    <div className="text-[10px] text-slate-400">Comfort: {player.currentHouse?.comfort}%</div>
                  </div>
                </div>
                <Link to="/house" className="text-xs text-amber-400 font-bold hover:underline">
                  Manage
                </Link>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{player.currentVehicle?.title}</div>
                    <div className="text-[10px] text-slate-400">Speed: +{player.currentVehicle?.speedBonus}%</div>
                  </div>
                </div>
                <Link to="/shop" className="text-xs text-amber-400 font-bold hover:underline">
                  Garage
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right 2 Columns: Hustle Status, Stats & Backpack */}
        <div className="lg:col-span-2 space-y-6">
          {/* Business & Tycoon Highlight */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-black border-2 border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Commercial Empire Status
              </span>
              <h2 className="text-xl font-bold text-white mt-1.5 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                {ownedBiz.length > 0
                  ? `${ownedBiz.length} Active Business Enterprises`
                  : 'Start Your First Enterprise'}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Passive Daily Earnings:{' '}
                <span className="text-emerald-400 font-mono font-bold">
                  +₦{dailyBizRevenue.toLocaleString()}/day
                </span>
              </p>
            </div>

            <Link
              to="/business"
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1.5 self-start sm:self-center transition-all cursor-pointer"
            >
              Manage Business Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Career & Active Job Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                Current Occupation
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                {player.currentJobTitle}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Education: <span className="text-slate-200">{player.educationLevel}</span> • Level: <span className="text-amber-400 font-bold">{player.level}</span>
              </p>
            </div>

            <Link
              to="/jobs"
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 self-start sm:self-center transition-all cursor-pointer"
            >
              Browse Shifts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Player Lifetime Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-[11px] text-slate-400">Shifts Worked</div>
              <div className="text-xl font-black text-white font-mono mt-1">
                {player.stats?.shiftsWorked || 0}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-[11px] text-slate-400">Total Naira Earned</div>
              <div className="text-xl font-black text-emerald-400 font-mono mt-1">
                ₦{(player.stats?.totalEarned || 0).toLocaleString()}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-[11px] text-slate-400">Micra Rides Taken</div>
              <div className="text-xl font-black text-yellow-400 font-mono mt-1">
                {player.stats?.micraRides || 0}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-[11px] text-slate-400">Street Respect</div>
              <div className="text-xl font-black text-purple-400 font-mono mt-1">
                {player.streetCred}
              </div>
            </div>
          </div>

          {/* Inventory Component */}
          <Inventory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
