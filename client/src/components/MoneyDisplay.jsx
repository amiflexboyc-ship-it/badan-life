import React, { useState } from 'react';
import { Wallet, Landmark, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { useGame } from '../context/GameContext';

const MoneyDisplay = () => {
  const { player, bankAction } = useGame();
  const [showBankModal, setShowBankModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [actionType, setActionType] = useState('deposit');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0) return;
    bankAction(actionType, Number(amount));
    setAmount('');
    setShowBankModal(false);
  };

  return (
    <>
      <div className="flex items-center gap-3">
        {/* Cash in Hand */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-sm shadow-inner">
          <Wallet className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold">₦{player.money.toLocaleString()}</span>
        </div>

        {/* Bank Balance */}
        <button
          onClick={() => setShowBankModal(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-300 font-mono text-sm hover:border-blue-400 transition-colors cursor-pointer group"
          title="Click to visit Bank / ATM"
        >
          <Landmark className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">₦{player.bankBalance.toLocaleString()}</span>
        </button>
      </div>

      {/* Quick Bank Modal */}
      {showBankModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Landmark className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Ibadan OPay & Bank ATM</h3>
              </div>
              <button
                onClick={() => setShowBankModal(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-slate-800 mb-4">
              <button
                type="button"
                onClick={() => setActionType('deposit')}
                className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  actionType === 'deposit'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ArrowDownLeft className="w-4 h-4" /> Deposit Cash
              </button>
              <button
                type="button"
                onClick={() => setActionType('withdraw')}
                className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  actionType === 'withdraw'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ArrowUpRight className="w-4 h-4" /> Withdraw ATM
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Amount in Naira (₦)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 5000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-amber-500 font-mono"
                  min="100"
                  autoFocus
                />
              </div>

              <div className="flex gap-2">
                {[1000, 5000, 10000, 20000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset.toString())}
                    className="flex-1 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono border border-slate-700"
                  >
                    ₦{(preset / 1000).toFixed(0)}k
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-lg shadow-amber-500/20"
                >
                  Confirm {actionType === 'deposit' ? 'Deposit' : 'Withdrawal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MoneyDisplay;
