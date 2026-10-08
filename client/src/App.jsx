import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './context/GameContext';

import { Analytics } from '@vercel/analytics/react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Notification from './components/Notification';
import WelcomeModal from './components/WelcomeModal';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CharacterCreation from './pages/CharacterCreation';
import Dashboard from './pages/Dashboard';
import Map from './pages/Map';
import Jobs from './pages/Jobs';
import Missions from './pages/Missions';
import Shop from './pages/Shop';
import House from './pages/House';
import Business from './pages/Business';
import Leaderboard from './pages/Leaderboard';
import Multiplayer from './pages/Multiplayer';
import SeasonPass from './pages/SeasonPass';
import InventoryPage from './pages/Inventory';
import Profile from './pages/Profile';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <GameProvider>
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
          {/* Global Header */}
          <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          {/* Main App Layout */}
          <div className="flex-1 flex max-w-7xl w-full mx-auto">
            {/* Sidebar navigation */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Dynamic Page View */}
            <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/character-creation" element={<CharacterCreation />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/map" element={<Map />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/missions" element={<Missions />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/house" element={<House />} />
                <Route path="/business" element={<Business />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/multiplayer" element={<Multiplayer />} />
                <Route path="/season" element={<SeasonPass />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>

          {/* Global Toast Notification System */}
          <Notification />

          {/* 'Welcome to Ibadan' Initial Grant Modal */}
          <WelcomeModal />

          {/* Vercel Web Analytics (Visitors, Page views, Referrers, Geo-locations, Devices) */}
          <Analytics />
        </div>
      </GameProvider>
    </Router>
  );
}

export default App;
