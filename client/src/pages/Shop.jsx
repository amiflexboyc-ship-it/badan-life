import React, { useState } from 'react';
import { Store, Utensils, Car, Home, Shirt, ShoppingBag, Check, Sparkles } from 'lucide-react';
import { mockShopItems } from '../services/mockData';
import { useGame } from '../context/GameContext';

const Shop = () => {
  const { player, buyItem } = useGame();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Items', icon: Store },
    { id: 'food', label: 'Food & Amala', icon: Utensils },
    { id: 'clothes', label: 'Clothes & Native Wear', icon: Shirt },
    { id: 'vehicle', label: 'Vehicles & Yellow Micras', icon: Car },
    { id: 'house', label: 'Real Estate & Mansions', icon: Home }
  ];

  const filteredItems = mockShopItems.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'food') return item.category === 'food' || item.category === 'drink';
    return item.category === activeTab;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Bodija Produce Market & Dugbe Commercial Boutiques
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1.5 flex items-center gap-2">
            <Store className="w-7 h-7 text-amber-400" />
            Ibadan Marketplace & Stores
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Buy steaming Amala, designer Senator wear, classic Yellow Micras, and luxury estates.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-right">
          <div className="text-[11px] text-slate-400">Available Wallet Cash</div>
          <div className="text-base sm:text-xl font-black text-emerald-300 font-mono">
            ₦{player.money.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Categories Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const canAfford = player.money >= item.price;
          const isOwnedVehicle =
            item.category === 'vehicle' && player.currentVehicle?.title === item.name;
          const isOwnedHouse =
            item.category === 'house' && player.currentHouse?.title === item.name;
          const isMicra = item.isMicra || item.name.toLowerCase().includes('micra');

          return (
            <div
              key={item._id}
              className={`rounded-3xl border-2 p-5 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                isMicra
                  ? 'bg-gradient-to-b from-yellow-950/30 to-slate-900 border-yellow-500/50'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    isMicra
                      ? 'text-yellow-300 bg-yellow-500/20 border-yellow-500/40 font-black'
                      : 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                  }`}>
                    {isMicra ? '🚕 Iconic Micra Car' : item.category}
                  </span>
                  <div className="font-mono text-sm sm:text-base font-black text-emerald-400">
                    ₦{item.price.toLocaleString()}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-1 flex items-center gap-1.5">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Stat Bonuses */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.hungerReduction > 0 && (
                    <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                      -{item.hungerReduction}% Hunger
                    </span>
                  )}
                  {item.energyBonus > 0 && (
                    <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-md">
                      +{item.energyBonus}% Energy
                    </span>
                  )}
                  {item.streetCredBonus > 0 && (
                    <span className="text-[10px] font-semibold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded-md">
                      +{item.streetCredBonus} Street Cred
                    </span>
                  )}
                  {item.speedRating > 0 && (
                    <span className="text-[10px] font-semibold text-blue-300 bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 rounded-md">
                      +{item.speedRating}% Speed
                    </span>
                  )}
                  {item.comfortRating > 0 && (
                    <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-950/60 border border-indigo-500/30 px-2 py-0.5 rounded-md">
                      +{item.comfortRating}% Comfort
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                {isOwnedVehicle || isOwnedHouse ? (
                  <button
                    disabled
                    className="w-full py-2.5 rounded-xl bg-slate-800 text-emerald-400 font-bold text-xs flex items-center justify-center gap-1.5 border border-emerald-500/30 cursor-not-allowed"
                  >
                    <Check className="w-4 h-4" /> Already Owned
                  </button>
                ) : (
                  <button
                    onClick={() => buyItem(item)}
                    disabled={!canAfford}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      canAfford
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-md shadow-amber-500/20'
                        : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {canAfford ? 'Purchase Now' : 'Insufficient Cash'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
