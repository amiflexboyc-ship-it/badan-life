import React from 'react';
import {
  RotateCcw,
  Sparkles,
  Award,
  CheckCircle2,
  Lock,
  Clock,
  Car,
  Utensils,
  Briefcase,
  Users,
  Coins,
  ChevronRight
} from 'lucide-react';
import { mockSeasonChallenges } from '../services/mockData';
import { useGame } from '../context/GameContext';
import { sounds } from '../utils/audio';

const SeasonPass = () => {
  const { player, showNotification } = useGame();
  const season = mockSeasonChallenges;

  const handleClaimTier = (tier) => {
    sounds.playSuccessSound();
    showNotification(`🎁 Claimed Season Reward: "${tier.reward}"! Added to your collection.`, 'success');
  };

  const percent = Math.min(100, Math.floor((season.currentXP / season.targetXP) * 100));

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-yellow-500/40 bg-gradient-to-br from-yellow-950/60 via-slate-900 to-black p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-xs font-black uppercase tracking-wider">
              <RotateCcw className="w-4 h-4 text-yellow-400" />
              SEASON 1 • NEW CHALLENGES & EXCLUSIVE SKINS
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {season.seasonTitle}
            </h1>

            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Complete weekly monsoon and rush-hour challenges to earn season points, unlock exclusive Yellow Micra custom skins, and dominate the Oyo State seasonal rankings.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-yellow-500/30 text-xs">
                <span className="text-slate-400">Time Left:</span>{' '}
                <span className="font-bold text-yellow-300 font-mono">{season.daysRemaining} Days</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-emerald-500/30 text-xs">
                <span className="text-slate-400">Pass Rank:</span>{' '}
                <span className="font-bold text-emerald-400">Level {season.passLevel}</span>
              </div>
            </div>
          </div>

          {/* XP Progress Box */}
          <div className="p-6 rounded-2xl bg-black/80 border-2 border-yellow-500/40 text-center space-y-3 shrink-0 lg:w-72 shadow-xl">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Season Pass Progress
            </div>
            <div className="text-2xl font-black text-yellow-400 font-mono">
              {season.currentXP} / {season.targetXP} XP
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-amber-400 transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-400 font-mono">
              {percent}% Completed to Level {season.passLevel + 1}
            </p>
          </div>
        </div>
      </div>

      {/* Season Pass Rewards Track */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
            Seasonal Reward Tiers
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Unlockable Battle Pass Rewards
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {season.passTiers.map((tier) => (
            <div
              key={tier.tier}
              className={`p-4 rounded-2xl border-2 flex flex-col justify-between text-center space-y-3 transition-all ${
                tier.unlocked
                  ? 'bg-slate-900/90 border-emerald-500/50 shadow-lg'
                  : 'bg-slate-900/40 border-slate-800 opacity-70'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  TIER {tier.tier}
                </span>
                {tier.unlocked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                )}
              </div>

              <div className="text-xs font-bold text-white leading-tight min-h-[36px]">
                {tier.reward}
              </div>

              <button
                onClick={() => handleClaimTier(tier)}
                disabled={!tier.unlocked}
                className={`w-full py-1.5 rounded-xl text-[10px] font-black uppercase transition-all cursor-pointer ${
                  tier.unlocked
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                {tier.unlocked ? 'Claimed' : 'Locked'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Quests & Monsoon Challenges */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
            Active Season Quests
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Weekly Challenges
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {season.weeklyQuests.map((quest) => {
            const isDone = quest.progress >= quest.max;
            return (
              <div
                key={quest.id}
                className="p-5 rounded-3xl bg-slate-900/80 border-2 border-slate-800 hover:border-yellow-500/40 transition-all space-y-4 shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white">{quest.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      {quest.desc}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-xs font-black text-yellow-400">
                      +{quest.rewardXP} XP
                    </span>
                    <div className="font-mono text-xs font-bold text-emerald-400 mt-0.5">
                      +₦{quest.rewardCash.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-400">Challenge Progress</span>
                    <span className="font-mono text-amber-300">{quest.progress} / {quest.max}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-yellow-400"
                      style={{ width: `${Math.min(100, (quest.progress / quest.max) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeasonPass;
