import React, { useState } from 'react';
import {
  Trophy,
  Award,
  Crown,
  Medal,
  CheckCircle2,
  Sparkles,
  Coins,
  Car,
  Home,
  Users,
  Briefcase,
  TrendingUp,
  Flame
} from 'lucide-react';
import { mockLeaderboard, mockAchievements } from '../services/mockData';
import { useGame } from '../context/GameContext';

const Leaderboard = () => {
  const { player, claimAchievement } = useGame();
  const [activeTab, setActiveTab] = useState('leaderboard'); // 'leaderboard' | 'achievements'

  const unlockedList = player.unlockedAchievements || ['ach-1'];

  // Calculate player's Net Worth
  const cash = player.money + player.bankBalance;
  const bizVal = (player.businesses || []).reduce((sum, b) => sum + (b.cost * (b.count || 1)), 0);
  const playerNetWorth = cash + bizVal;

  // Insert player into leaderboard
  const allEntries = [
    ...mockLeaderboard,
    {
      name: `${player.name} (${player.nickname})`,
      title: 'Active Player',
      netWorth: playerNetWorth,
      area: player.originArea,
      fleet: `${player.currentVehicle?.title.includes('Micra') ? '1 Micra' : 'No car'} • Lvl ${player.level}`,
      isPlayer: true,
      isOnline: true
    }
  ].sort((a, b) => b.netWorth - a.netWorth);

  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'Coins':
        return Coins;
      case 'Car':
        return Car;
      case 'Briefcase':
        return Briefcase;
      case 'Home':
        return Home;
      case 'Users':
        return Users;
      case 'TrendingUp':
        return TrendingUp;
      case 'Crown':
        return Crown;
      default:
        return Award;
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Hall of Fame & City Records
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1.5 flex items-center gap-2.5">
            <Trophy className="w-8 h-8 text-amber-400" />
            Ibadan Leaderboard & Achievements
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Compare your fortune against Oyo State's wealthiest merchants and unlock legendary badges.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'leaderboard'
                ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            🏆 City Leaderboard
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'achievements'
                ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            🎖️ Achievements ({unlockedList.length}/{mockAchievements.length})
          </button>
        </div>
      </div>

      {/* TAB 1: LEADERBOARD */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-6">
          {/* Top 3 Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {/* Rank 2 */}
            <div className="order-2 md:order-1 p-6 rounded-3xl bg-slate-900/80 border-2 border-slate-700 flex flex-col justify-between items-center text-center space-y-3 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-600 flex items-center justify-center text-2xl font-black text-slate-300">
                🥈 2
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{allEntries[1]?.name}</h3>
                <div className="text-xs text-amber-400 font-semibold">{allEntries[1]?.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">{allEntries[1]?.area}</div>
              </div>
              <div className="font-mono text-lg font-black text-emerald-400">
                ₦{allEntries[1]?.netWorth.toLocaleString()}
              </div>
            </div>

            {/* Rank 1 (Gold) */}
            <div className="order-1 md:order-2 p-6 rounded-3xl bg-gradient-to-b from-amber-950/60 via-slate-900 to-black border-2 border-amber-500 flex flex-col justify-between items-center text-center space-y-3 shadow-2xl relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-3xl font-black text-slate-950 shadow-lg shadow-amber-500/30">
                👑 1
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/40">
                  TOP TYCOON
                </span>
                <h3 className="text-lg font-black text-white mt-1">{allEntries[0]?.name}</h3>
                <div className="text-xs text-amber-300 font-bold">{allEntries[0]?.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">{allEntries[0]?.area}</div>
              </div>
              <div className="font-mono text-xl sm:text-2xl font-black text-emerald-400">
                ₦{allEntries[0]?.netWorth.toLocaleString()}
              </div>
            </div>

            {/* Rank 3 */}
            <div className="order-3 p-6 rounded-3xl bg-slate-900/80 border-2 border-amber-900/50 flex flex-col justify-between items-center text-center space-y-3 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-amber-950/40 border border-amber-800/60 flex items-center justify-center text-2xl font-black text-amber-500">
                🥉 3
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{allEntries[2]?.name}</h3>
                <div className="text-xs text-amber-400 font-semibold">{allEntries[2]?.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">{allEntries[2]?.area}</div>
              </div>
              <div className="font-mono text-lg font-black text-emerald-400">
                ₦{allEntries[2]?.netWorth.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Full Rankings Table */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl">
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                All Ranked Tycoons
              </span>
              <span className="text-xs text-slate-500">Updated in real-time</span>
            </div>

            <div className="divide-y divide-slate-800">
              {allEntries.map((entry, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors ${
                    entry.isPlayer
                      ? 'bg-amber-500/10 border-l-4 border-amber-500'
                      : 'hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 text-center font-mono font-bold text-slate-400 text-sm">
                      #{idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base font-bold text-white">
                          {entry.name}
                        </span>
                        {entry.isPlayer && (
                          <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                            YOU
                          </span>
                        )}
                        {entry.isOnline && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Online" />
                        )}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {entry.title} • <span className="text-slate-300">{entry.area}</span> • {entry.fleet}
                      </div>
                    </div>
                  </div>

                  <div className="font-mono text-sm sm:text-base font-black text-emerald-400 shrink-0 text-right">
                    ₦{entry.netWorth.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ACHIEVEMENTS */}
      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {mockAchievements.map((ach) => {
            const Icon = getAchievementIcon(ach.icon);
            const isUnlocked = unlockedList.includes(ach.id);

            // Auto condition checks for all 12 achievements
            const canClaim =
              !isUnlocked &&
              ((ach.reqMoney && player.money >= ach.reqMoney) ||
                (ach.reqShifts && (player.stats?.shiftsWorked || 0) >= ach.reqShifts) ||
                (ach.reqCar && player.currentVehicle?.isOwned && !player.currentVehicle?.title.includes('Trekking')) ||
                (ach.reqHouse && player.currentHouse?.isOwned) ||
                (ach.reqBiz && (player.businesses?.length || 0) >= ach.reqBiz) ||
                (ach.reqEarned && (player.stats?.totalEarned || 0) >= ach.reqEarned) ||
                (ach.reqPropOwner && (player.currentHouse?.title.includes('Luxury') || player.currentHouse?.title.includes('Multiple') || player.currentHouse?.title.includes('Estate'))) ||
                (ach.reqTransportBoss && (player.currentVehicle?.title.includes('Multiple') || player.currentVehicle?.title.includes('Company'))) ||
                (ach.reqNetWorth && playerNetWorth >= ach.reqNetWorth));

            return (
              <div
                key={ach.id}
                className={`p-5 rounded-3xl border-2 flex items-start justify-between gap-4 transition-all shadow-xl ${
                  isUnlocked
                    ? 'bg-slate-900/90 border-emerald-500/40'
                    : canClaim
                    ? 'bg-amber-950/40 border-amber-500 animate-pulse'
                    : 'bg-slate-900/50 border-slate-800 opacity-70'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    isUnlocked
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : canClaim
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">{ach.title}</h3>
                    <p className="text-xs text-slate-300 leading-snug mt-1">{ach.desc}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 rounded">
                        +{ach.xp} XP
                      </span>
                      {isUnlocked && (
                        <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Unlocked
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {canClaim && (
                  <button
                    onClick={() => claimAchievement(ach)}
                    className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer shrink-0"
                  >
                    Claim!
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
