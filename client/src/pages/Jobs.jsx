import React, { useState } from 'react';
import { Briefcase, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';
import JobCard from '../components/JobCard';
import { mockJobs } from '../services/mockData';
import { useGame } from '../context/GameContext';

const Jobs = () => {
  const { player } = useGame();
  const [filter, setFilter] = useState('all');

  const jobs = mockJobs;

  const filteredJobs = jobs.filter((j) => {
    if (filter === 'all') return true;
    return j.category.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Work & Career Market
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1.5 flex items-center gap-2">
            <Briefcase className="w-7 h-7 text-amber-400" />
            Ibadan Hustles & Employment
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            From the bustling motor parks of Iwo Road to the air-conditioned tech hubs of Cocoa House.
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-right">
          <div className="text-[11px] text-slate-400">Current Title</div>
          <div className="text-sm font-bold text-amber-300 truncate mt-0.5">
            {player.currentJobTitle}
          </div>
          <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
            Level {player.level} Worker
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2">
        {['all', 'Informal', 'Trade', 'Corporate', 'Tech'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
              filter === cat
                ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            {cat === 'all' ? 'All Hustles' : `${cat} Sector`}
          </button>
        ))}
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>

      {/* Hustle Advice Card */}
      <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-4">
        <Sparkles className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <div className="font-bold text-white uppercase tracking-wider">
            Ibadan Hustler's Tip:
          </div>
          <p className="text-slate-300 leading-relaxed">
            Every shift consumes stamina and builds up hunger. Head over to <strong>Bodija Market</strong> or buy <strong>Hot Amala & Abula</strong> from the store to refill your stomach and keep your stamina high.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
