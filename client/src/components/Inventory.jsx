import React from 'react';
import { Package, Utensils, Coffee, Flame, Laptop, Sparkles } from 'lucide-react';
import { useGame } from '../context/GameContext';

const Inventory = () => {
  const { player, eatItem } = useGame();

  const getIcon = (item) => {
    if (item.category === 'drink') return <Coffee className="w-5 h-5 text-blue-400" />;
    if (item.name.toLowerCase().includes('suya')) return <Flame className="w-5 h-5 text-orange-400" />;
    if (item.category === 'gadget') return <Laptop className="w-5 h-5 text-purple-400" />;
    return <Utensils className="w-5 h-5 text-amber-400" />;
  };

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5 text-amber-400" />
          <h3 className="text-base font-bold text-white">Backpack & Inventory</h3>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
          {player.inventory.reduce((acc, curr) => acc + curr.quantity, 0)} Items
        </span>
      </div>

      {player.inventory.length === 0 ? (
        <div className="py-8 text-center text-slate-500 text-sm">
          <Package className="w-8 h-8 mx-auto mb-2 opacity-40 text-slate-400" />
          Your backpack is empty. Head to Bodija Market or Dugbe Shop to buy Amala, Suya, and gadgets!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {player.inventory.map((item, idx) => (
            <div
              key={item.id || idx}
              className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-3 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-700/50">
                  {getIcon(item)}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">{item.name}</div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mt-0.5">
                    <span>Qty: x{item.quantity}</span>
                    {item.hungerReduction && (
                      <span className="text-emerald-400">-{item.hungerReduction}% Hunger</span>
                    )}
                  </div>
                </div>
              </div>

              {item.category !== 'gadget' && (
                <button
                  onClick={() => eatItem(item)}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold shrink-0 transition-colors cursor-pointer"
                >
                  Consume
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inventory;
