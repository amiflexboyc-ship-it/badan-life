import React from 'react';
import { Briefcase, Zap, Utensils, Award, PlayCircle } from 'lucide-react';
import { useGame } from '../context/GameContext';

const JobCard = ({ job }) => {
  const { player, workShift } = useGame();
  const canWork = player.energy >= job.energyCost && player.hunger < 90;
  const isCurrentJob = player.currentJobTitle === job.title;

  return (
    <div
      className={`rounded-2xl p-5 border flex flex-col justify-between transition-all duration-300 ${
        isCurrentJob
          ? 'bg-slate-900 border-amber-500/50 shadow-lg shadow-amber-500/10'
          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
            {job.category}
          </span>
          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-lg border border-amber-500/30">
            ₦{job.salaryPerShift.toLocaleString()} / shift
          </span>
        </div>

        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-amber-400 shrink-0" />
          {job.title}
        </h3>
        <p className="text-xs text-slate-400 font-medium mt-0.5">
          📍 {job.location}
        </p>

        <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-2">
          {job.description}
        </p>

        {/* Requirements & Costs */}
        <div className="grid grid-cols-3 gap-2 mt-4 p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 text-center">
          <div>
            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
              <Zap className="w-3 h-3 text-amber-400" /> Energy
            </div>
            <div className="text-xs font-bold text-amber-300 font-mono mt-0.5">
              -{job.energyCost}%
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
              <Utensils className="w-3 h-3 text-orange-400" /> Hunger
            </div>
            <div className="text-xs font-bold text-orange-300 font-mono mt-0.5">
              +{job.hungerIncrease}%
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
              <Award className="w-3 h-3 text-blue-400" /> Exp Gain
            </div>
            <div className="text-xs font-bold text-blue-300 font-mono mt-0.5">
              +{job.experienceReward} XP
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
        <div className="text-[11px] text-slate-400 truncate">
          Req: <span className="text-slate-300 font-semibold">{job.requiredEducation}</span>
        </div>

        <button
          onClick={() => workShift(job)}
          disabled={!canWork}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
            canWork
              ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
          }`}
        >
          <PlayCircle className="w-3.5 h-3.5" />
          {player.energy < job.energyCost ? 'Exhausted' : 'Work Shift'}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
