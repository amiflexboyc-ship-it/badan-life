import React from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  Sparkles,
  MapPin,
  Briefcase,
  Flame,
  Compass,
  ChevronRight,
  Car,
  Utensils,
  TrendingUp,
  Crown,
  Coins,
  ArrowDown
} from 'lucide-react';
import { useGame } from '../context/GameContext';

const Home = () => {
  const { player } = useGame();

  const flowSteps = [
    { title: 'Create Character', desc: 'Pick your name, roots, and street moniker', icon: Sparkles, color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
    { title: '₦5,000 Starting Cash', desc: 'Arrive humble with only five thousand naira in hand', icon: Coins, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
    { title: '"Welcome to Ibadan"', desc: 'Ceremony of brown roofs and yellow Micra sirens', icon: Compass, color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30' },
    { title: 'City Map & Lifelines', desc: 'Bodija (Food) • Dugbe (Jobs) • Iwo Road (Micra)', icon: MapPin, color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
    { title: 'Work & Street Missions', desc: 'Micra conductor, Amala server, and Cocoa trader', icon: Briefcase, color: 'text-orange-400 bg-orange-500/10 border-orange-500/30' },
    { title: 'Earn Money & Buy Food', desc: 'Savor Skye Bank Amala & Abula with cold Zobo', icon: Utensils, color: 'text-rose-400 bg-rose-500/10 border-rose-500/30' },
    { title: 'Upgrade Life & Clothes', desc: 'Tailored Senator native wear and luxury watches', icon: Flame, color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' },
    { title: 'Own Yellow Micra & House', desc: 'From face-me-I-face-you to Alalubosa GRA villa', icon: Car, color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30' },
    { title: 'Launch Businesses', desc: 'POS stands, Micra fleets, and Cocoa export deals', icon: TrendingUp, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
    { title: 'Become Ibadan Tycoon', desc: 'Ascend to the celebrated title of Otunba of Ibadan', icon: Crown, color: 'text-amber-300 bg-amber-400/20 border-amber-400/50' }
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 bg-gradient-to-br from-amber-950/50 via-slate-900 to-black p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            THE DEFINITIVE NIGERIAN LIFE SIMULATOR • V2.0
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Rise From The Streets To The Top of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500">
              Ibadan City.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Start with <strong>₦5,000</strong>. Hail iconic <strong>Yellow Nissan Micra</strong> taxis at Iwo Road, eat piping hot <strong>Amala & Abula</strong> at Bodija, work your way up Cocoa House at Dugbe, and build an empire to become an Ibadan Tycoon!
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/character-creation"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm flex items-center gap-2 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              Create Character (₦5,000 Start)
            </Link>

            <Link
              to="/map"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <Car className="w-4 h-4 text-yellow-400" /> Explore City Map & Micra <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Complete Life Progression Flowchart */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            The Ibadan Life Progression Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            From ₦5,000 Hustler to City Tycoon
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A real simulation of everyday life, transportation, business, and wealth in Oyo State.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {flowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 flex flex-col justify-between transition-all space-y-3 group shadow-lg"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-500">
                      STEP {idx + 1}
                    </span>
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${step.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-white group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The 3 Core Lifelines (Bodija, Dugbe, Iwo Road) */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white">The Three Pillars of Ibadan</h2>
          <p className="text-sm text-slate-400">Where food, commerce, and transportation unite.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-orange-950/30 to-slate-900 border border-orange-500/30 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">BODIJA • FOOD</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Steaming Amala, spicy Abula soup with goat meat at Skye Bank buka, wholesale yam tubers, and farm produce to restore energy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-950/30 to-slate-900 border border-blue-500/30 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">DUGBE • JOBS</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              26-storey Cocoa House skyscraper, regional banks, corporate tech offices, and high-stakes business pitches.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-yellow-950/30 to-slate-900 border border-yellow-500/30 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">IWO ROAD • TRANSPORT</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              The iconic yellow Nissan Micra taxi rank, non-stop horns, interstate bus terminals, and high-profit transit fleets.
            </p>
          </div>
        </div>
      </section>

      {/* Proverb Spotlight */}
      <section className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Yoruba Proverb of the Day
          </div>
          <div className="text-sm font-semibold text-white italic">
            "Ibadan kìí ba onílé lẹ́rù, àjèjì ní ń ba lẹ́rù."
          </div>
          <div className="text-xs text-slate-400">
            (Ibadan never frightens its indigene, only the stranger fears its might.)
          </div>
        </div>
        <Link
          to="/map"
          className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold whitespace-nowrap"
        >
          View City Map
        </Link>
      </section>
    </div>
  );
};

export default Home;
