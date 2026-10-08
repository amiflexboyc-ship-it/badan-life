import {
  Sparkles,
  PackageCheck,
  Megaphone,
  FileText,
  Wrench,
  Navigation,
  Coins,
  Zap,
  CheckCircle2,
  AlertCircle,
  Crown,
  Lock,
  Train
} from 'lucide-react';
import { mockMissions, mockLegendMissions } from '../services/mockData';
import { useGame } from '../context/GameContext';

const getMissionIcon = (iconName) => {
  switch (iconName) {
    case 'PackageCheck':
      return PackageCheck;
    case 'Megaphone':
      return Megaphone;
    case 'FileText':
      return FileText;
    case 'Wrench':
      return Wrench;
    case 'Train':
      return Train;
    case 'Crown':
      return Crown;
    default:
      return Navigation;
  }
};

const Missions = () => {
  const { player, completeMission, reputationTier } = useGame();
  const completedList = player.completedMissions || [];
  const isLegend = reputationTier?.tier === 'IBADAN LEGEND';

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Street Gigs & Urgent Tasks
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1.5 flex items-center gap-2.5">
            <Sparkles className="w-7 h-7 text-amber-400" />
            Ibadan City Hustles & Missions
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Pick up urgent tasks across Bodija, Dugbe, and Iwo Road to earn instant cash and boost street respect.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-right">
          <div className="text-[11px] text-slate-400">Missions Completed</div>
          <div className="text-xl font-black text-amber-400 font-mono mt-0.5">
            {player.stats?.missionsCompleted || 0}
          </div>
        </div>
      </div>

      {/* Energy Check Warning */}
      {player.energy < 25 && (
        <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
          <p className="text-xs text-amber-200">
            Your energy is running low ({player.energy}%). Rest at home or grab some Amala at Bodija before attempting tough missions.
          </p>
        </div>
      )}

      {/* Missions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockMissions.map((mis) => {
          const Icon = getMissionIcon(mis.icon);
          const isDone = completedList.includes(mis.id);
          const hasEnergy = player.energy >= mis.energyCost;

          return (
            <div
              key={mis.id}
              className={`rounded-3xl p-6 border-2 flex flex-col justify-between transition-all space-y-4 shadow-xl ${
                isDone
                  ? 'bg-slate-900/60 border-emerald-500/30 opacity-90'
                  : 'bg-slate-900/90 border-slate-800 hover:border-amber-500/50'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    {mis.district}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{mis.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                    {mis.description}
                  </p>
                </div>

                {/* Reward breakdown */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                    +₦{mis.rewardCash.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2.5 py-1 rounded-lg">
                    +{mis.rewardCred} Street Cred
                  </span>
                  <span className="text-xs font-bold text-blue-300 bg-blue-950/60 border border-blue-500/30 px-2.5 py-1 rounded-lg">
                    +{mis.rewardExp} EXP
                  </span>
                  <span className="text-xs font-bold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Zap className="w-3 h-3" /> -{mis.energyCost} Energy
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                {isDone ? (
                  <button
                    onClick={() => completeMission(mis)}
                    disabled={!hasEnergy}
                    className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      hasEnergy
                        ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800/40 text-slate-600 border border-slate-800 cursor-not-allowed'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" /> Run Mission Again (+₦{mis.rewardCash.toLocaleString()})
                  </button>
                ) : (
                  <button
                    onClick={() => completeMission(mis)}
                    disabled={!hasEnergy}
                    className={`w-full py-3.5 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      hasEnergy
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/25'
                        : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                    }`}
                  >
                    <Coins className="w-4 h-4" />
                    {hasEnergy ? 'Accept & Execute Mission' : 'Too Exhausted (Rest First)'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* SPECIAL LEGEND MISSIONS (High-Stakes Tycoon & Royal Missions) */}
      <div className="space-y-4 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-950/60 via-slate-900 to-black border-2 border-amber-500/50 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase tracking-wider border border-amber-500/30">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              SPECIAL IBADAN LEGEND MISSIONS
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Historic Oyo State Royal & Infrastructure Contracts
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Multi-million naira high-stakes missions reserved exclusively for recognized Ibadan Legends!
            </p>
          </div>
          <div className="text-xs text-slate-400">
            Current Tier: <span className="font-black text-amber-400 uppercase">{reputationTier?.tier}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
          {mockLegendMissions.map((mis) => {
            const Icon = getMissionIcon(mis.icon);
            const isDone = completedList.includes(mis.id);
            const hasEnergy = player.energy >= mis.energyCost;

            return (
              <div
                key={mis.id}
                className={`rounded-3xl p-6 border-2 flex flex-col justify-between transition-all space-y-4 shadow-2xl ${
                  isLegend
                    ? 'bg-slate-900/90 border-amber-500/70 shadow-amber-500/15'
                    : 'bg-slate-950/70 border-slate-800 opacity-75'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
                      isLegend
                        ? 'text-amber-300 bg-amber-500/20 border-amber-500/40'
                        : 'text-rose-400 bg-rose-500/10 border-rose-500/30'
                    }`}>
                      {isLegend ? '👑 Legend Mission Unlocked' : '🔒 Requires ⭐ IBADAN LEGEND'}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white">{mis.title}</h3>
                    <div className="text-xs text-amber-300 font-semibold mt-0.5">District: {mis.district}</div>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2">{mis.description}</p>
                  </div>

                  {/* High rewards */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
                    <span className="text-xs font-mono font-black text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1.5 rounded-xl">
                      +₦{mis.rewardCash.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-purple-300 bg-purple-950/80 border border-purple-500/40 px-3 py-1.5 rounded-xl">
                      +{mis.rewardCred} Street Cred
                    </span>
                    <span className="text-xs font-bold text-blue-300 bg-blue-950/80 border border-blue-500/40 px-3 py-1.5 rounded-xl">
                      +{mis.rewardExp} EXP
                    </span>
                    <span className="text-xs font-bold text-amber-400 bg-amber-950/80 border border-amber-500/40 px-3 py-1.5 rounded-xl flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" /> -{mis.energyCost} Energy
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  {isLegend ? (
                    <button
                      onClick={() => completeMission(mis)}
                      disabled={!hasEnergy}
                      className={`w-full py-3.5 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        hasEnergy
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 shadow-lg shadow-amber-500/30'
                          : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                      }`}
                    >
                      <Crown className="w-4 h-4" />
                      {hasEnergy ? 'Execute Legend Contract' : 'Need More Energy'}
                    </button>
                  ) : (
                    <div className="w-full py-3 rounded-xl bg-slate-800/40 text-slate-400 font-bold text-xs text-center border border-slate-800 flex items-center justify-center gap-2">
                      <Lock className="w-4 h-4" /> Reach ₦75M+ Net Worth & IBADAN LEGEND to Unlock
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Missions;
