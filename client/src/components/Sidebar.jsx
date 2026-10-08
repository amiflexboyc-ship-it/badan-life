import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Map,
  Briefcase,
  Store,
  Home,
  Package,
  User,
  UserPlus,
  Volume2,
  VolumeX,
  Sparkles,
  TrendingUp,
  Trophy,
  Globe,
  RotateCcw,
  X
} from 'lucide-react';
import { useGame } from '../context/GameContext';

const navigationItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'City Map (Micra Hub)', path: '/map', icon: Map },
  { name: 'Jobs & Careers', path: '/jobs', icon: Briefcase },
  { name: 'Street Missions', path: '/missions', icon: Sparkles },
  { name: 'Market & Stores', path: '/shop', icon: Store },
  { name: 'My Residence', path: '/house', icon: Home },
  { name: 'Business Empire', path: '/business', icon: TrendingUp },
  { name: 'Leaderboard & Badges', path: '/leaderboard', icon: Trophy },
  { name: 'Online Multiplayer', path: '/multiplayer', icon: Globe },
  { name: 'Season 1 Pass', path: '/season', icon: RotateCcw },
  { name: 'Inventory', path: '/inventory', icon: Package },
  { name: 'Character Profile', path: '/profile', icon: User },
  { name: 'New Character', path: '/character-creation', icon: UserPlus }
];

const Sidebar = ({ isOpen, onClose }) => {
  const { soundEnabled, setSoundEnabled, player } = useGame();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        className={`fixed md:sticky top-16 z-40 h-[calc(100vh-4rem)] w-64 bg-slate-950 border-r border-slate-800 p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out shrink-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between md:hidden pb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation</span>
            <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Player Status Card in Sidebar */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
            <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wide">
              Active Character
            </div>
            <div className="text-sm font-bold text-white truncate mt-0.5">
              {player.name}
            </div>
            <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between mt-1">
              <span>Lvl {player.level} Hustler</span>
              <span className="text-amber-400">Cred: {player.streetCred}</span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => onClose && onClose()}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer controls in sidebar */}
        <div className="pt-4 border-t border-slate-800/80 space-y-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-slate-400 hover:text-slate-200 text-xs font-medium transition-colors"
          >
            <span className="flex items-center gap-2">
              {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              Game Sound
            </span>
            <span className="text-[10px] font-mono uppercase text-slate-500">
              {soundEnabled ? 'ON' : 'OFF'}
            </span>
          </button>

          <div className="text-[10px] text-slate-500 text-center font-mono">
            Ibadan Life v1.0 • Oyo State RPG
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
