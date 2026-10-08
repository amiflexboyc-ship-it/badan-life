import React from 'react';
import { Package, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import InventoryComponent from '../components/Inventory';
import { useGame } from '../context/GameContext';

const InventoryPage = () => {
  const { player } = useGame();

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Player Belongings
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1.5 flex items-center gap-2">
            <Package className="w-7 h-7 text-amber-400" />
            Inventory & Backpack
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Consume food to fill hunger, drink cold Zobo to boost energy, and inspect acquired gear.
          </p>
        </div>

        <Link
          to="/shop"
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" /> Shop New Items
        </Link>
      </div>

      <InventoryComponent />
    </div>
  );
};

export default InventoryPage;
