import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Building,
  Building2,
  Home,
  Car,
  CreditCard,
  Utensils,
  Laptop,
  Coins,
  Crown,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowDown,
  DollarSign,
  Users,
  ShieldCheck,
  UserCheck,
  Award,
  Trash2,
  MapPin,
  Flame,
  Radio,
  Lock,
  Compass,
  Trophy,
  Briefcase
} from 'lucide-react';
import {
  mockBusinesses,
  mockShopItems,
  mockStaff,
  mockReputationTiers,
  mockAchievements,
  mockSpecialLegendLocations,
  mockLegendMissions
} from '../services/mockData';
import { useGame, computeReputationTier, getDailyPassiveRevenue } from '../context/GameContext';

const Business = () => {
  const {
    player,
    netWorth,
    reputationTier,
    buyBusiness,
    buyItem,
    collectBusinessRevenue,
    hireStaff,
    fireStaff,
    claimAchievement
  } = useGame();

  const [activeTab, setActiveTab] = useState('business-empire'); // 'business-empire' | 'property-empire' | 'transport-empire' | 'reputation' | 'staff' | 'achievements'

  const ownedBusinesses = player.businesses || [];
  const hiredStaff = player.hiredStaff || [];
  const unlockedAchievements = player.unlockedAchievements || [];

  // Daily passive calculation
  const totalDailyRevenue = getDailyPassiveRevenue(player);
  const staffBonusPercent = hiredStaff.reduce((sum, s) => sum + (s.revenueBonusPercent || 0), 0);

  // Property empire items from shop
  const propertyEmpireItems = mockShopItems.filter((item) => item.category === 'house');

  // Transport empire items from shop (plus walk)
  const transportEmpireItems = [
    {
      _id: 'walk-starter',
      name: 'Walk on Foot (Trekking)',
      empireStage: 'Walk',
      category: 'vehicle',
      price: 0,
      speedRating: 10,
      streetCredBonus: 0,
      description: 'Trekking through Ibadan roads under the scorching sun. Free, but drains your energy quickly.'
    },
    ...mockShopItems.filter((item) => item.category === 'vehicle')
  ];

  // Progression milestones for city reaction
  const cityMilestones = [
    {
      id: 'start',
      tier: 'UNKNOWN',
      title: 'START',
      minMoney: '₦5,000',
      house: 'Small room',
      vehicle: 'No vehicle (Walk)',
      reputation: 'Unknown',
      cityQuote: 'Area boys harass you at Iwo Road: "Who be this one? Move commot for road!"'
    },
    {
      id: 'hustler',
      tier: 'HUSTLER',
      title: 'HUSTLER',
      minMoney: '₦50,000',
      house: 'Self-contain apartment',
      vehicle: 'Yellow Micra / Okada',
      reputation: 'Known',
      cityQuote: 'Conductors call you into the front seat: "Hustler wọlé front seat! Omo iya mi!"'
    },
    {
      id: 'biz-owner',
      tier: 'RESPECTED',
      title: 'BUSINESS OWNER',
      minMoney: '₦500,000',
      house: '2-Bedroom / Duplex',
      vehicle: 'Multiple vehicles',
      reputation: 'Respected',
      cityQuote: 'Police checkpoints salute: "Pass, Boss! Anything for the boys?" Buka tables reserved.'
    },
    {
      id: 'tycoon',
      tier: 'INFLUENTIAL',
      title: 'TYCOON',
      minMoney: '₦5,000,000+',
      house: 'Luxury Duplex & Estates',
      vehicle: 'Car fleet & Transport Co.',
      reputation: 'Influential',
      cityQuote: 'Cocoa House bankers & market leaders bow: "Chairman! Prayers are with your empire!"'
    },
    {
      id: 'legend',
      tier: 'IBADAN LEGEND',
      title: 'IBADAN LEGEND',
      minMoney: '₦75,000,000+',
      house: 'Alalubosa Gated Compound',
      vehicle: 'Statewide Transport Empire',
      reputation: 'Ibadan Legend',
      cityQuote: 'Olubadan Palace gates fling open! Royal Kakaki trumpets blast: "Kábíyèsí Otunba!"'
    }
  ];

  const getBusinessIcon = (iconName) => {
    switch (iconName) {
      case 'CreditCard':
        return CreditCard;
      case 'Car':
        return Car;
      case 'Utensils':
        return Utensils;
      case 'Laptop':
        return Laptop;
      case 'Coins':
        return Coins;
      case 'Store':
        return Building2;
      default:
        return Building;
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Tycoon Header Banner */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/50 bg-gradient-to-br from-amber-950/70 via-slate-900 to-black p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              THE TYCOON ROADMAP • FROM ₦5,000 TO IBADAN LEGEND
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ibadan Commercial & Empire Hub
            </h1>

            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Ascend to tycoon status and choose your empire path: expand thriving commercial businesses, build a lucrative property portfolio, or dominate Ibadan's transit network!
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-amber-500/40 text-xs">
                <span className="text-slate-400">Reputation Level:</span>{' '}
                <span className="font-black text-amber-400 uppercase tracking-wide">
                  ⭐ {reputationTier.tier}
                </span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-emerald-500/40 text-xs">
                <span className="text-slate-400">Total Net Worth:</span>{' '}
                <span className="font-mono font-bold text-emerald-400">₦{netWorth.toLocaleString()}</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-purple-500/40 text-xs">
                <span className="text-slate-400">Street Respect:</span>{' '}
                <span className="font-bold text-purple-300">{player.streetCred} Cred</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-blue-500/40 text-xs">
                <span className="text-slate-400">Liquid Cash:</span>{' '}
                <span className="font-mono font-bold text-blue-400">₦{player.money.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Revenue Claim Box */}
          <div className="p-6 rounded-2xl bg-black/85 border-2 border-emerald-500/50 text-center space-y-4 shrink-0 lg:w-76 shadow-2xl">
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Total Daily Passive Revenue
              </div>
              <div className="text-3xl font-black text-emerald-400 font-mono mt-1">
                ₦{totalDailyRevenue.toLocaleString()}
                <span className="text-xs text-slate-400 font-normal">/day</span>
              </div>
              {staffBonusPercent > 0 && (
                <div className="text-[10px] text-amber-400 font-bold mt-1">
                  +{staffBonusPercent}% boost from {hiredStaff.length} hired employees!
                </div>
              )}
            </div>

            <button
              onClick={collectBusinessRevenue}
              disabled={totalDailyRevenue === 0}
              className={`w-full py-3.5 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                totalDailyRevenue > 0
                  ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                  : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
              }`}
            >
              <Coins className="w-4 h-4" />
              Collect Empire Profits
            </button>

            <p className="text-[10px] text-slate-400">
              *Daily returns also collect automatically every morning when you sleep at home!
            </p>
          </div>
        </div>

        {/* Dynamic City Reaction Spotlight */}
        <div className="mt-6 pt-5 border-t border-slate-800 relative z-10 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-amber-400 font-black">🌆 THE CITY SPEAKS TO YOU:</span>
              <span className="text-white font-medium italic">"{reputationTier.cityReaction}"</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Street Voice: <span className="text-amber-300 font-bold">{reputationTier.streetQuote}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CITY EVOLUTION PROGRESSION STRIP (START -> HUSTLER -> BUSINESS OWNER -> TYCOON -> IBADAN LEGEND) */}
      <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
              Dynamic City Reaction Hierarchy
            </span>
            <h2 className="text-lg sm:text-xl font-black text-white mt-1">
              How Ibadan Reacts to Your Success
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            Current Tier: <strong className="text-amber-400">{reputationTier.title}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
          {cityMilestones.map((m, idx) => {
            const isReached = netWorth >= (idx === 0 ? 0 : idx === 1 ? 50000 : idx === 2 ? 500000 : idx === 3 ? 5000000 : 75000000);
            const isCurrent = reputationTier.tier === m.tier;

            return (
              <div
                key={m.id}
                className={`p-4 rounded-2xl border-2 flex flex-col justify-between transition-all space-y-2.5 ${
                  isCurrent
                    ? 'bg-amber-950/50 border-amber-500 shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : isReached
                    ? 'bg-slate-900/90 border-emerald-500/40'
                    : 'bg-slate-950/50 border-slate-800 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Step {idx + 1}
                    </span>
                    {isCurrent && (
                      <span className="text-[9px] font-black uppercase bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full">
                        YOU ARE HERE
                      </span>
                    )}
                    {!isCurrent && isReached && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>

                  <h3 className="text-base font-black text-white mt-1">{m.title}</h3>
                  <div className="font-mono text-xs font-bold text-amber-400">{m.minMoney}</div>

                  <div className="text-[11px] text-slate-300 space-y-1 mt-2 pt-2 border-t border-slate-800">
                    <div>🏠 {m.house}</div>
                    <div>🚗 {m.vehicle}</div>
                    <div>⭐ {m.reputation}</div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 italic bg-black/40 p-2 rounded-xl border border-slate-800/80">
                  {m.cityQuote}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* TYCOON CHOICES NAVIGATION TABS */}
      <div className="flex flex-wrap gap-2.5 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('business-empire')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer ${
            activeTab === 'business-empire'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
          }`}
        >
          <Building className="w-4 h-4" />
          🏢 Business Empire ({ownedBusinesses.length})
        </button>

        <button
          onClick={() => setActiveTab('property-empire')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer ${
            activeTab === 'property-empire'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
          }`}
        >
          <Home className="w-4 h-4" />
          🏠 Property Empire
        </button>

        <button
          onClick={() => setActiveTab('transport-empire')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer ${
            activeTab === 'transport-empire'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
          }`}
        >
          <Car className="w-4 h-4" />
          🚗 Transport Empire
        </button>

        <button
          onClick={() => setActiveTab('reputation')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer ${
            activeTab === 'reputation'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
          }`}
        >
          <Crown className="w-4 h-4" />
          ⭐ Reputation System (7 Tiers)
        </button>

        <button
          onClick={() => setActiveTab('staff')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer ${
            activeTab === 'staff'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
          }`}
        >
          <Users className="w-4 h-4" />
          👥 Staff & Employees ({hiredStaff.length})
        </button>

        <button
          onClick={() => setActiveTab('achievements')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer ${
            activeTab === 'achievements'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
          }`}
        >
          <Trophy className="w-4 h-4" />
          🏆 Achievements ({unlockedAchievements.length}/12)
        </button>
      </div>

      {/* ======================================================== */}
      {/* 1. BUSINESS EMPIRE TAB                                    */}
      {/* Small Shop -> Supermarket -> Restaurant -> Multiple Businesses -> Big Company -> Business Empire */}
      {/* ======================================================== */}
      {activeTab === 'business-empire' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                🏢 Tycoon Choice #1: Commercial Enterprises
              </span>
              <h2 className="text-2xl font-black text-white">
                Business Empire Progression
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Small Shop ➔ Supermarket ➔ Restaurant ➔ Multiple Businesses ➔ Big Company ➔ Business Empire
              </p>
            </div>
            <div className="text-xs font-bold text-slate-300 bg-black/60 px-4 py-2.5 rounded-2xl border border-slate-800">
              Active Units Owned: <span className="text-emerald-400">{ownedBusinesses.length} Enterprises</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockBusinesses.map((biz, idx) => {
              const Icon = getBusinessIcon(biz.icon);
              const ownedEntry = ownedBusinesses.find((b) => b.id === biz.id);
              const count = ownedEntry?.count || 0;
              const canAfford = player.money >= biz.cost;

              return (
                <div
                  key={biz.id}
                  className={`rounded-3xl p-6 border-2 flex flex-col justify-between transition-all space-y-4 shadow-xl group ${
                    count > 0
                      ? 'bg-slate-900/90 border-emerald-500/40'
                      : 'bg-slate-900/70 border-slate-800 hover:border-amber-500/40'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                        Level {idx + 1} • {biz.stage}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                        {biz.name}
                      </h3>
                      <div className="text-xs text-slate-400 mt-0.5">
                        District: <span className="text-slate-200 font-semibold">{biz.district}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mt-2">
                        {biz.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                      <div className="p-2.5 rounded-xl bg-slate-800/60">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Startup Cost</div>
                        <div className="text-sm font-black text-white font-mono mt-0.5">
                          ₦{biz.cost.toLocaleString()}
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20">
                        <div className="text-[10px] text-emerald-400 uppercase font-semibold">Daily Payout</div>
                        <div className="text-sm font-black text-emerald-300 font-mono mt-0.5">
                          +₦{biz.dailyProfit.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {count > 0 && (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Active: {count} {count > 1 ? 'Units Operating' : 'Unit Operating'} (+₦{(count * biz.dailyProfit).toLocaleString()}/day)
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <button
                      onClick={() => buyBusiness(biz)}
                      disabled={!canAfford}
                      className={`w-full py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        canAfford
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-md shadow-amber-500/20'
                          : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                      }`}
                    >
                      <Building className="w-4 h-4" />
                      {count > 0 ? 'Buy Another Unit' : 'Launch Enterprise'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. PROPERTY EMPIRE TAB                                    */}
      {/* Single Room -> Self-Contain -> 2-Bedroom Apartment -> Luxury House -> Multiple Houses -> Estate Owner */}
      {/* ======================================================== */}
      {activeTab === 'property-empire' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                🏠 Tycoon Choice #2: Real Estate Holdings
              </span>
              <h2 className="text-2xl font-black text-white">
                Property Empire Progression
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Single Room ➔ Self-Contain ➔ 2-Bedroom Apartment ➔ Luxury House ➔ Multiple Houses ➔ Estate Owner
              </p>
            </div>
            <div className="text-xs font-bold text-slate-300 bg-black/60 px-4 py-2.5 rounded-2xl border border-slate-800">
              Current Residence: <span className="text-amber-400">{player.currentHouse?.title || 'Single Room in Bere'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyEmpireItems.map((prop, idx) => {
              const isCurrent = player.currentHouse?.title?.includes(prop.empireStage);
              const canAfford = player.money >= prop.price;

              return (
                <div
                  key={prop._id}
                  className={`rounded-3xl p-6 border-2 flex flex-col justify-between transition-all space-y-4 shadow-xl ${
                    isCurrent
                      ? 'bg-slate-900/95 border-amber-500 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                        Stage {idx + 1} • {prop.empireStage}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                        <Home className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-white">{prop.name}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed mt-2">
                        {prop.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                      <div className="p-2.5 rounded-xl bg-slate-800/60">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Acquisition Price</div>
                        <div className="text-sm font-black text-white font-mono mt-0.5">
                          ₦{prop.price.toLocaleString()}
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20">
                        <div className="text-[10px] text-purple-400 uppercase font-semibold">Prestige & Comfort</div>
                        <div className="text-sm font-black text-purple-300 font-mono mt-0.5">
                          +{prop.comfortRating || 50} Comfort
                        </div>
                      </div>
                    </div>

                    {prop.dailyProfit && (
                      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20">
                        <div className="text-[10px] text-emerald-400 uppercase font-semibold">Landlord Rental Yield</div>
                        <div className="text-sm font-black text-emerald-300 font-mono mt-0.5">
                          +₦{prop.dailyProfit.toLocaleString()}/day passive
                        </div>
                      </div>
                    )}

                    {isCurrent && (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                        Active Residence & Compound
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    {isCurrent ? (
                      <div className="w-full py-3 text-center text-xs font-bold text-amber-400 bg-amber-500/10 rounded-xl border border-amber-500/30">
                        Currently Occupied
                      </div>
                    ) : (
                      <button
                        onClick={() => buyItem(prop)}
                        disabled={!canAfford}
                        className={`w-full py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          canAfford
                            ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-md shadow-amber-500/20'
                            : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                        }`}
                      >
                        <Home className="w-4 h-4" />
                        Acquire Property (₦{prop.price.toLocaleString()})
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. TRANSPORT EMPIRE TAB                                  */}
      {/* Walk -> Keke -> Okada -> Micra -> Personal Car -> Multiple Cars -> Transport Company */}
      {/* ======================================================== */}
      {activeTab === 'transport-empire' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                🚗 Tycoon Choice #3: Mobility & Fleets
              </span>
              <h2 className="text-2xl font-black text-white">
                Transport Empire Progression
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Walk ➔ Keke ➔ Okada ➔ Micra ➔ Personal Car ➔ Multiple Cars ➔ Transport Company
              </p>
            </div>
            <div className="text-xs font-bold text-slate-300 bg-black/60 px-4 py-2.5 rounded-2xl border border-slate-800">
              Active Vehicle: <span className="text-yellow-400">{player.currentVehicle?.title || 'Trekking on Foot'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportEmpireItems.map((veh, idx) => {
              const isCurrent = player.currentVehicle?.title?.includes(veh.empireStage);
              const canAfford = player.money >= veh.price;

              return (
                <div
                  key={veh._id}
                  className={`rounded-3xl p-6 border-2 flex flex-col justify-between transition-all space-y-4 shadow-xl ${
                    isCurrent
                      ? 'bg-slate-900/95 border-yellow-500 shadow-lg shadow-yellow-500/20'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400 bg-yellow-500/10 px-2.5 py-0.5 rounded-full border border-yellow-500/20">
                        Tier {idx + 1} • {veh.empireStage}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
                        <Car className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-white">{veh.name}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed mt-2">
                        {veh.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                      <div className="p-2.5 rounded-xl bg-slate-800/60">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Cost</div>
                        <div className="text-sm font-black text-white font-mono mt-0.5">
                          {veh.price === 0 ? 'Free (Start)' : `₦${veh.price.toLocaleString()}`}
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/20">
                        <div className="text-[10px] text-blue-400 uppercase font-semibold">Transit Speed</div>
                        <div className="text-sm font-black text-blue-300 font-mono mt-0.5">
                          {veh.speedRating}/100 Rating
                        </div>
                      </div>
                    </div>

                    {veh.dailyProfit && (
                      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20">
                        <div className="text-[10px] text-emerald-400 uppercase font-semibold">Commercial Fleet Profit</div>
                        <div className="text-sm font-black text-emerald-300 font-mono mt-0.5">
                          +₦{veh.dailyProfit.toLocaleString()}/day passive
                        </div>
                      </div>
                    )}

                    {isCurrent && (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-yellow-500/15 border border-yellow-500/40 text-yellow-300 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                        Current Active Ride / Fleet
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    {isCurrent ? (
                      <div className="w-full py-3 text-center text-xs font-bold text-yellow-400 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                        Currently In Use
                      </div>
                    ) : veh.price === 0 ? (
                      <button
                        onClick={() => buyItem(veh)}
                        className="w-full py-3 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
                      >
                        Switch to Trekking
                      </button>
                    ) : (
                      <button
                        onClick={() => buyItem(veh)}
                        disabled={!canAfford}
                        className={`w-full py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          canAfford
                            ? 'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 shadow-md shadow-yellow-500/20'
                            : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                        }`}
                      >
                        <Car className="w-4 h-4" />
                        Acquire Vehicle (₦{veh.price.toLocaleString()})
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. REPUTATION SYSTEM TAB (7 TIERS)                        */}
      {/* UNKNOWN -> HUSTLER -> KNOWN -> RESPECTED -> INFLUENTIAL -> BIG NAME -> IBADAN LEGEND */}
      {/* ======================================================== */}
      {activeTab === 'reputation' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
              Social Prestige Hierarchy & City Reactions
            </span>
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Crown className="w-6 h-6 text-amber-400" />
              The 7 Ibadan Reputation Tiers
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Even with billions in your pocket, real power in Ibadan comes from royal respect, street cred, and chieftaincy status.
            </p>
          </div>

          <div className="space-y-4">
            {mockReputationTiers.map((tier) => {
              const isCurrent = reputationTier.tier === tier.tier;
              const isReached = netWorth >= tier.minNetWorth || player.streetCred >= tier.minCred;

              return (
                <div
                  key={tier.tier}
                  className={`p-6 rounded-3xl border-2 flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition-all shadow-xl ${
                    isCurrent
                      ? 'bg-amber-950/50 border-amber-500 shadow-lg shadow-amber-500/20'
                      : isReached
                      ? 'bg-slate-900/90 border-emerald-500/40'
                      : 'bg-slate-900/50 border-slate-800 opacity-70'
                  }`}
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        LEVEL {tier.level}
                      </span>
                      <h3 className="text-xl font-black text-white">{tier.title}</h3>
                      {isCurrent && (
                        <span className="text-[10px] font-black uppercase text-amber-950 bg-amber-400 px-2.5 py-0.5 rounded-full">
                          ACTIVE RANK
                        </span>
                      )}
                    </div>

                    <div className="text-xs text-amber-300 font-medium">
                      🌆 City Reaction: "{tier.cityReaction}"
                    </div>

                    <div className="text-xs text-slate-400">
                      Street Callout: <span className="text-slate-200 italic font-semibold">{tier.streetQuote}</span>
                    </div>

                    <div className="text-xs text-emerald-400 font-semibold pt-1">
                      Perk: {tier.perk}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-xs font-mono shrink-0 bg-black/60 p-4 rounded-2xl border border-slate-800">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">REQ. NET WORTH</div>
                      <div className="text-base font-black text-emerald-400">
                        {tier.minNetWorth === 0 ? '₦0' : `₦${tier.minNetWorth.toLocaleString()}+`}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">REQ. STREET CRED</div>
                      <div className="text-base font-black text-purple-400">
                        {tier.minCred}+ Cred
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. STAFF & EMPLOYEES TAB                                  */}
      {/* ======================================================== */}
      {activeTab === 'staff' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
              Human Capital & Employment
            </span>
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-amber-400" />
              Hire Drivers, Chefs, Attendants & Managers
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              A real tycoon doesn't work alone. Hire trusted Ibadan workers to drive your yellow Micras, cook delicious Amala, secure your stores, and multiply your daily returns!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockStaff.map((staff) => {
              const isHired = hiredStaff.some((s) => s.id === staff.id);
              const canAfford = player.money >= staff.dailySalary;
              const hasCred = player.streetCred >= staff.requiredCred;

              return (
                <div
                  key={staff.id}
                  className={`rounded-3xl p-6 border-2 flex flex-col justify-between transition-all space-y-4 shadow-xl ${
                    isHired
                      ? 'bg-slate-900/90 border-emerald-500/50'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl p-2 rounded-2xl bg-slate-800/80 border border-slate-700">
                          {staff.avatar}
                        </span>
                        <div>
                          <h3 className="text-base font-bold text-white">{staff.name}</h3>
                          <div className="text-xs text-amber-400 font-semibold">{staff.role}</div>
                        </div>
                      </div>
                      {isHired && (
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                          Employed
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      "{staff.specialty}"
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                      <div className="p-2.5 rounded-xl bg-slate-800/60">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Daily Wage</div>
                        <div className="text-sm font-black text-white font-mono mt-0.5">
                          ₦{staff.dailySalary.toLocaleString()}/day
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20">
                        <div className="text-[10px] text-emerald-400 uppercase font-semibold">Profit Boost</div>
                        <div className="text-sm font-black text-emerald-300 font-mono mt-0.5">
                          +{staff.revenueBonusPercent}%
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Requires Street Cred:</span>
                      <span className={`font-bold ${hasCred ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {staff.requiredCred} Cred {hasCred ? '✓' : '(Need more cred)'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    {isHired ? (
                      <button
                        onClick={() => fireStaff(staff.id)}
                        className="w-full py-2.5 rounded-xl bg-rose-950/40 hover:bg-rose-950/70 text-rose-300 border border-rose-500/30 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Relieve of Duties
                      </button>
                    ) : (
                      <button
                        onClick={() => hireStaff(staff)}
                        disabled={!canAfford || !hasCred}
                        className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          canAfford && hasCred
                            ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-md shadow-amber-500/20'
                            : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                        }`}
                      >
                        <UserCheck className="w-4 h-4" />
                        Hire Staff
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 6. ACHIEVEMENTS TAB (12 SPECIFIC ACHIEVEMENTS)            */}
      {/* ======================================================== */}
      {activeTab === 'achievements' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                Official Hall of Fame
              </span>
              <h2 className="text-2xl font-black text-white mt-1">
                The 12 Ibadan Tycoon Achievements
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                From your first ₦10,000 to Olubadan royal chieftaincy recognition as an Ibadan Legend!
              </p>
            </div>
            <div className="text-xs font-bold text-slate-300 bg-black/60 px-4 py-2.5 rounded-2xl border border-slate-800">
              Unlocked: <span className="text-emerald-400 font-mono">{unlockedAchievements.length} / 12</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mockAchievements.map((ach) => {
              const isUnlocked = unlockedAchievements.includes(ach.id);

              // Condition checks for claiming
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
                  (ach.reqNetWorth && netWorth >= ach.reqNetWorth));

              return (
                <div
                  key={ach.id}
                  className={`p-5 rounded-3xl border-2 flex items-start justify-between gap-4 transition-all shadow-xl ${
                    isUnlocked
                      ? 'bg-slate-900/90 border-emerald-500/40'
                      : canClaim
                      ? 'bg-amber-950/50 border-amber-500 animate-pulse'
                      : 'bg-slate-900/50 border-slate-800 opacity-70'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        isUnlocked
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : canClaim
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                          : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      <Trophy className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-base font-black text-white">{ach.title}</h3>
                      <p className="text-xs text-slate-300 leading-snug mt-1">{ach.desc}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 rounded">
                          +{ach.xp} XP
                        </span>
                        {isUnlocked && (
                          <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Claimed
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
        </div>
      )}
    </div>
  );
};

export default Business;
