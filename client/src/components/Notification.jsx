import React from 'react';
import { useGame } from '../context/GameContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const Notification = () => {
  const { notification, showNotification } = useGame();

  if (!notification) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    warning: <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-blue-400 shrink-0" />
  };

  const borderColors = {
    success: 'border-emerald-500/40 bg-emerald-950/80 text-emerald-100',
    error: 'border-rose-500/40 bg-rose-950/80 text-rose-100',
    warning: 'border-amber-500/40 bg-amber-950/80 text-amber-100',
    info: 'border-blue-500/40 bg-blue-950/80 text-blue-100'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-bounce-in">
      <div
        className={`flex items-start gap-3 p-4 rounded-xl border backdrop-blur-md shadow-2xl ${
          borderColors[notification.type] || borderColors.info
        }`}
      >
        {icons[notification.type] || icons.info}
        <div className="flex-1 text-sm font-medium leading-relaxed">
          {notification.message}
        </div>
        <button
          onClick={() => showNotification(null)}
          className="text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Notification;
