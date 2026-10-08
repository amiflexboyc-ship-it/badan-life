import React, { useState } from 'react';
import {
  Globe,
  Users,
  Send,
  MessageSquare,
  Gift,
  Swords,
  Car,
  Sparkles,
  MapPin,
  CheckCircle2,
  Radio
} from 'lucide-react';
import { mockMultiplayerPlayers } from '../services/mockData';
import { useGame } from '../context/GameContext';
import { sounds } from '../utils/audio';

const defaultChat = [
  { sender: 'IwoRoad_Boss', text: 'Micra drivers needed at Iwo Road under-bridge! ₦15k daily guaranteed!', time: '8:41 PM' },
  { sender: 'Tunde_Bodija99', text: 'Skye bank Amala line is reaching road today lol! But the goat meat is soft 🔥', time: '8:42 PM' },
  { sender: 'CocoaPrince_Dugbe', text: 'Just secured foreign cocoa buyers contract at Cocoa House. Ibadan to the world! 🌍', time: '8:43 PM' },
  { sender: 'QueenOfAgodi', text: 'Screen replacement in 20 minutes at Mokola roundabout shop #14.', time: '8:44 PM' }
];

const Multiplayer = () => {
  const { player, showNotification } = useGame();
  const [messages, setMessages] = useState(defaultChat);
  const [inputText, setInputText] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('Iwo Road Micra Terminal');

  const rooms = [
    { name: 'Iwo Road Micra Terminal', count: 48, icon: Car },
    { name: 'Bodija Skye Bank Amala Joint', count: 94, icon: Users },
    { name: 'Dugbe Cocoa House Tech Hub', count: 62, icon: Globe },
    { name: 'Alalubosa Tycoon Private Club', count: 18, icon: Sparkles }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    sounds.playClick();
    const newMsg = {
      sender: `${player.name.split(' ')[0]} (You)`,
      text: inputText,
      time: 'Just now',
      isMe: true
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputText('');
  };

  const handleSendGift = (targetPlayer) => {
    sounds.playCashSound();
    showNotification(`🎁 Sent a gift of Chilled Zobo to ${targetPlayer.name}! Street respect gained!`, 'success');
  };

  const handleDuel = (targetPlayer) => {
    sounds.playMicraHorn();
    const won = Math.random() > 0.4;
    if (won) {
      showNotification(`🏎️ Hustle Race Won against ${targetPlayer.name}! Your Yellow Micra bypassed the traffic! Won ₦2,500!`, 'success');
    } else {
      showNotification(`🏎️ Close sprint against ${targetPlayer.name}! He took the Agbowo shortcut first!`, 'info');
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Oyo Live Network • 1,428 Players Online
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1.5 flex items-center gap-2.5">
            <Globe className="w-8 h-8 text-amber-400" />
            Ibadan Online Multiplayer
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Connect in real-time with other hustlers, chat across motor parks, duel Micra sprints, and trade assets.
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs">
          <span className="text-slate-400">Server Ping:</span>
          <span className="font-mono font-bold text-emerald-400">18ms (Ibadan Core)</span>
        </div>
      </div>

      {/* Main Grid: Chat + Active Players */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Room Selector & Active Online Players */}
        <div className="space-y-6">
          {/* Room Selector */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Popular City Lobbies
            </h3>
            <div className="space-y-2">
              {rooms.map((r, idx) => {
                const Icon = r.icon;
                const isSelected = selectedRoom === r.name;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedRoom(r.name)}
                    className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 font-black border-amber-500 shadow-md shadow-amber-500/20'
                        : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border-slate-700/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 text-xs">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{r.name}</span>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-slate-900 text-amber-400' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {r.count} online
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Nearby Players in Lobby */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Hustlers in {selectedRoom.split(' ')[0]}</span>
              <span className="text-emerald-400 text-[10px]">{mockMultiplayerPlayers.length} Active</span>
            </h3>

            <div className="space-y-3">
              {mockMultiplayerPlayers.map((p) => (
                <div
                  key={p.id}
                  className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-2 hover:border-slate-600 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        {p.name}
                        {p.micraOwned && (
                          <span className="text-[9px] bg-yellow-500/20 text-yellow-300 px-1.5 rounded border border-yellow-500/40">
                            🚕 Micra Driver
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {p.status}
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      ₦{p.netWorth.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => handleSendGift(p)}
                      className="flex-1 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-amber-300 text-[11px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <Gift className="w-3 h-3" /> Gift
                    </button>
                    <button
                      onClick={() => handleDuel(p)}
                      className="flex-1 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-black flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <Swords className="w-3 h-3" /> Micra Duel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 2 Columns: Live City Chat Stream */}
        <div className="lg:col-span-2 rounded-3xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between shadow-xl min-h-[520px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                Live Oyo Frequency: {selectedRoom}
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Channel #02-IBADAN</span>
            </div>

            {/* Messages feed */}
            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl max-w-[85%] space-y-1 ${
                    m.isMe
                      ? 'ml-auto bg-amber-500/20 border border-amber-500/40 text-amber-100'
                      : 'bg-slate-800/70 border border-slate-700/60 text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 text-[11px]">
                    <span className="font-bold text-amber-400">{m.sender}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{m.time}</span>
                  </div>
                  <p className="text-xs leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat input box */}
          <form onSubmit={handleSendMessage} className="pt-4 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              placeholder="Broadcast to Ibadan hustlers... (e.g. 'Entering Iwo Road with change!')"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-4 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" /> Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Multiplayer;
