import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Sparkles, MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { useGame } from '../context/GameContext';

const nicknames = [
  'Omo Ibadan Express',
  'Jagaban of Bodija',
  'Mokola Tech Whiz',
  'Sabo Suya Master',
  'Cocoa House Tycoon',
  'Queen of Agodi',
  'Challenge Transit Boss'
];

const originAreas = [
  { name: 'Bere', desc: 'Heart of ancient Ibadan near Mapo Hall. High street grit & heritage.' },
  { name: 'Bodija', desc: 'Commercial epicenter with famous produce market and upscale estates.' },
  { name: 'Mokola', desc: 'Central junction of tech repairs, bustling roundabouts and eateries.' },
  { name: 'UI / Agbowo', desc: 'Youthful university vibe, academia, and student innovation hubs.' },
  { name: 'Dugbe', desc: 'Central Business District housing Cocoa House and banking towers.' },
  { name: 'Challenge', desc: 'Key southern transport link to Lagos and interstate motor parks.' }
];

const CharacterCreation = () => {
  const navigate = useNavigate();
  const { createCharacter } = useGame();

  const [form, setForm] = useState({
    name: 'Babatunde Alao',
    nickname: 'Omo Ibadan Express',
    gender: 'Male',
    originArea: 'Bere',
    educationLevel: 'Secondary School',
    money: 5000,
    bankBalance: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCharacter(form);
    navigate('/map');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <Sparkles className="w-7 h-7 text-amber-400" />
          Create Your Ibadan Character
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Define your roots, identity, and starting stats in Oyo State's ancient capital.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Form */}
        <div className="lg:col-span-2 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide mb-2">
                Character Full Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold focus:outline-none focus:border-amber-500"
                placeholder="e.g. Babatunde Alao"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide mb-2">
                Street Nickname / Alias
              </label>
              <input
                type="text"
                required
                value={form.nickname}
                onChange={(e) => setForm({ ...form, nickname: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold focus:outline-none focus:border-amber-500"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {nicknames.map((nick) => (
                  <button
                    key={nick}
                    type="button"
                    onClick={() => setForm({ ...form, nickname: nick })}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300/80 hover:text-amber-300 transition-colors"
                  >
                    {nick}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide mb-2">
                  Gender
                </label>
                <div className="flex gap-2">
                  {['Male', 'Female'].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setForm({ ...form, gender: g })}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                        form.gender === g
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {g === 'Male' ? '👨🏾 Male' : '👩🏾 Female'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide mb-2">
                  Education Background
                </label>
                <select
                  value={form.educationLevel}
                  onChange={(e) => setForm({ ...form, educationLevel: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-amber-500"
                >
                  <option value="Secondary School">Secondary School (WAEC)</option>
                  <option value="ND / HND">The Polytechnic Ibadan (ND/HND)</option>
                  <option value="B.Sc Graduate">University of Ibadan (B.Sc)</option>
                  <option value="Tech Bro / Master">Self-Taught Tech / Master</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide mb-2">
                Origin Neighborhood in Ibadan
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {originAreas.map((area) => (
                  <button
                    key={area.name}
                    type="button"
                    onClick={() => setForm({ ...form, originArea: area.name })}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      form.originArea === area.name
                        ? 'bg-amber-500/10 border-amber-500 text-white ring-1 ring-amber-500'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="text-sm font-bold text-amber-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {area.name}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {area.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-all cursor-pointer"
            >
              Begin Ibadan Life Journey <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Live Character Preview Card */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Identity Card Preview
          </div>

          <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 p-0.5 shadow-lg shadow-amber-500/30">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-4xl">
                  {form.gender === 'Female' ? '👩🏾' : '👨🏾'}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-white">{form.name || 'Your Name'}</h3>
                <p className="text-xs text-amber-400 font-semibold italic">"{form.nickname}"</p>
                <div className="inline-block mt-1 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                  {form.originArea} Indigene
                </div>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800 pt-4">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Starting Wallet:</span>
                <span className="font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  ₦5,000 START
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Bank Account:</span>
                <span className="font-mono text-slate-400 font-bold">₦0 (Fresh Start)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Starting Residence:</span>
                <span className="text-slate-200 font-semibold">Face-me-I-face-you ({form.originArea})</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Initial Transport:</span>
                <span className="text-amber-300 font-semibold">Yellow Micra / Trekking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCreation;
