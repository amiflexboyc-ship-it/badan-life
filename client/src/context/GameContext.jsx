import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';
import { mockReputationTiers } from '../services/mockData';

const GameContext = createContext();

export const computeReputationTier = (player) => {
  if (!player) return mockReputationTiers[0];
  const cash = (player.money || 0) + (player.bankBalance || 0);
  const bizVal = (player.businesses || []).reduce((sum, b) => sum + ((b.cost || 0) * (b.count || 1)), 0);
  
  // Property valuation
  let houseVal = 0;
  const houseTitle = player.currentHouse?.title || '';
  if (houseTitle.includes('Estate Owner')) houseVal = 65000000;
  else if (houseTitle.includes('Multiple Houses')) houseVal = 20000000;
  else if (houseTitle.includes('Luxury House')) houseVal = 5500000;
  else if (houseTitle.includes('2-Bedroom')) houseVal = 850000;
  else if (houseTitle.includes('Self-Contain')) houseVal = 180000;
  else if (player.currentHouse?.isOwned) houseVal = 50000;

  // Vehicle valuation
  let vehVal = 0;
  const vehTitle = player.currentVehicle?.title || '';
  if (vehTitle.includes('Transport Company')) vehVal = 65000000;
  else if (vehTitle.includes('Multiple Cars')) vehVal = 20000000;
  else if (vehTitle.includes('Personal Car')) vehVal = 4200000;
  else if (vehTitle.includes('Micra')) vehVal = 650000;
  else if (vehTitle.includes('Okada')) vehVal = 240000;
  else if (vehTitle.includes('Keke')) vehVal = 180000;

  const netWorth = cash + bizVal + houseVal + vehVal;
  const cred = player.streetCred || 0;

  if (netWorth >= 75000000 || cred >= 1000) return mockReputationTiers[6]; // IBADAN LEGEND
  if (netWorth >= 20000000 || cred >= 600) return mockReputationTiers[5];  // BIG NAME
  if (netWorth >= 5000000 || cred >= 300) return mockReputationTiers[4];   // INFLUENTIAL
  if (netWorth >= 1000000 || cred >= 150) return mockReputationTiers[3];   // RESPECTED
  if (netWorth >= 250000 || cred >= 75) return mockReputationTiers[2];     // KNOWN
  if (netWorth >= 50000 || cred >= 25) return mockReputationTiers[1];      // HUSTLER
  return mockReputationTiers[0];                                           // UNKNOWN
};

export const getDailyPassiveRevenue = (player) => {
  if (!player) return 0;
  const bizTotal = (player.businesses || []).reduce((sum, b) => sum + (b.dailyProfit || 0), 0);
  
  let propTotal = 0;
  const houseTitle = player.currentHouse?.title || '';
  if (houseTitle.includes('Estate Owner')) propTotal = 1200000;
  else if (houseTitle.includes('Multiple Houses')) propTotal = 350000;

  let transTotal = 0;
  const vehTitle = player.currentVehicle?.title || '';
  if (vehTitle.includes('Transport Company')) transTotal = 1800000;

  const staffBonusPercent = (player.hiredStaff || []).reduce((sum, s) => sum + (s.revenueBonusPercent || 0), 0);
  const baseRevenue = bizTotal + propTotal + transTotal;
  return Math.round(baseRevenue * (1 + staffBonusPercent / 100));
};

export const DEFAULT_PLAYER = {
  _id: 'player-default',
  name: 'Babatunde Alao',
  nickname: 'Omo Ibadan Express',
  gender: 'Male',
  avatar: 'male_1',
  originArea: 'Bere',
  money: 5000, // Starts strictly with ₦5,000 as requested!
  bankBalance: 0,
  energy: 100,
  hunger: 20,
  health: 100,
  streetCred: 15,
  styleScore: 10,
  educationLevel: 'Secondary School',
  currentJobTitle: 'Street Hustler Seeking Work',
  experience: 0,
  level: 1,
  currentLocation: 'Iwo Road Interchange',
  currentHouse: {
    title: 'Face-me-I-face-you Room in Bere',
    rentCost: 1500,
    comfort: 25,
    isOwned: false
  },
  currentVehicle: {
    title: 'Trekking on Foot / Boarding Yellow Micra',
    speedBonus: 0,
    isOwned: true,
    isMicra: false
  },
  inventory: [
    {
      id: 'inv-init-1',
      name: 'Hot Amala & Abula with Goat Meat',
      category: 'food',
      quantity: 1,
      energyBonus: 45,
      hungerReduction: 50,
      healthBonus: 15
    },
    {
      id: 'inv-init-2',
      name: 'Chilled Sachet Pure Water (2 Bags)',
      category: 'food',
      quantity: 1,
      energyBonus: 10,
      hungerReduction: 10,
      healthBonus: 5
    }
  ],
  businesses: [],
  hiredStaff: [],
  unlockedAchievements: ['ach-1'],
  completedMissions: [],
  stats: {
    shiftsWorked: 0,
    totalEarned: 5000,
    amalaConsumed: 0,
    micraRides: 0,
    missionsCompleted: 0,
    businessRevenueTotal: 0,
    daysLived: 1
  }
};

export const GameProvider = ({ children }) => {
  const [player, setPlayer] = useState(() => {
    try {
      const saved = localStorage.getItem('ibadan_player_state_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure starting money is 5000 if fresh or valid
        return parsed;
      }
    } catch (e) {
      console.warn('Could not load saved state:', e);
    }
    return DEFAULT_PLAYER;
  });

  const [notification, setNotification] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);

  useEffect(() => {
    sounds.enabled = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    try {
      localStorage.setItem('ibadan_player_state_v2', JSON.stringify(player));
    } catch (e) {}
  }, [player]);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type, id: Date.now() });
    setTimeout(() => {
      setNotification((prev) => (prev?.message === message ? null : prev));
    }, 4500);
  };

  const workShift = (job) => {
    if (player.energy < job.energyCost) {
      showNotification('You are too exhausted! Go home to sleep or drink chilled Zobo!', 'error');
      return false;
    }
    if (player.hunger >= 90) {
      showNotification('You are starving! Grab some Amala at Bodija before you collapse!', 'warning');
      return false;
    }

    sounds.playCashSound();
    const newMoney = player.money + job.salaryPerShift;
    const newEnergy = Math.max(0, player.energy - job.energyCost);
    const newHunger = Math.min(100, player.hunger + job.hungerIncrease);
    const newExp = player.experience + job.experienceReward;
    let newLevel = player.level;

    // Check level up threshold
    if (newExp >= player.level * 100) {
      newLevel += 1;
      sounds.playSuccessSound();
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      showNotification(`🎉 LEVEL UP! You reached Level ${newLevel}! Ibadan street respect expanded!`, 'success');
    }

    setPlayer((prev) => ({
      ...prev,
      money: newMoney,
      energy: newEnergy,
      hunger: newHunger,
      experience: newExp,
      level: newLevel,
      streetCred: prev.streetCred + 4,
      currentJobTitle: job.title,
      stats: {
        ...prev.stats,
        shiftsWorked: prev.stats.shiftsWorked + 1,
        totalEarned: prev.stats.totalEarned + job.salaryPerShift
      }
    }));

    showNotification(`💰 Shift completed as ${job.title}! Earned ₦${job.salaryPerShift.toLocaleString()}`, 'success');
    return true;
  };

  const completeMission = (mission) => {
    if (player.energy < mission.energyCost) {
      showNotification('Not enough energy to complete this mission! Take a rest first.', 'error');
      return false;
    }

    sounds.playSuccessSound();
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });

    setPlayer((prev) => {
      const isAlreadyCompleted = prev.completedMissions?.includes(mission.id);
      return {
        ...prev,
        money: prev.money + mission.rewardCash,
        streetCred: prev.streetCred + mission.rewardCred,
        experience: prev.experience + mission.rewardExp,
        energy: Math.max(0, prev.energy - mission.energyCost),
        hunger: Math.min(100, prev.hunger + (mission.hungerCost || 15)),
        completedMissions: isAlreadyCompleted
          ? prev.completedMissions
          : [...(prev.completedMissions || []), mission.id],
        stats: {
          ...prev.stats,
          missionsCompleted: (prev.stats?.missionsCompleted || 0) + 1,
          totalEarned: prev.stats.totalEarned + mission.rewardCash
        }
      };
    });

    showNotification(
      `🎯 Mission Accomplished: "${mission.title}"! Earned ₦${mission.rewardCash.toLocaleString()} and +${mission.rewardCred} Street Cred!`,
      'success'
    );
    return true;
  };

  const rest = () => {
    sounds.playClick();
    const dailyProfits = getDailyPassiveRevenue(player);

    if (dailyProfits > 0) {
      sounds.playCashSound();
    }

    setPlayer((prev) => ({
      ...prev,
      energy: Math.min(100, prev.energy + 65),
      hunger: Math.min(100, prev.hunger + 25),
      health: Math.min(100, prev.health + 10),
      money: prev.money + dailyProfits,
      stats: {
        ...prev.stats,
        daysLived: prev.stats.daysLived + 1,
        businessRevenueTotal: (prev.stats?.businessRevenueTotal || 0) + dailyProfits,
        totalEarned: prev.stats.totalEarned + dailyProfits
      }
    }));

    if (dailyProfits > 0) {
      showNotification(
        `💤 Slept soundly! New sunrise over the brown roofs. Empires generated ₦${dailyProfits.toLocaleString()} passive revenue!`,
        'success'
      );
    } else {
      showNotification('💤 Slept well! Energy restored. The Ibadan morning sun hits the brown roofs!', 'info');
    }
  };

  const eatItem = (item) => {
    sounds.playEatSound();
    setPlayer((prev) => {
      const existing = prev.inventory.find((i) => i.name === item.name);
      if (!existing || existing.quantity <= 0) return prev;

      const updatedInventory = prev.inventory
        .map((i) => (i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0);

      const newHunger = Math.max(0, prev.hunger - (item.hungerReduction || 30));
      const newEnergy = Math.min(100, prev.energy + (item.energyBonus || 15));
      const newHealth = Math.min(100, prev.health + (item.healthBonus || 5));

      return {
        ...prev,
        hunger: newHunger,
        energy: newEnergy,
        health: newHealth,
        inventory: updatedInventory,
        stats: {
          ...prev.stats,
          amalaConsumed: item.name.toLowerCase().includes('amala')
            ? prev.stats.amalaConsumed + 1
            : prev.stats.amalaConsumed
        }
      };
    });
    showNotification(`🍲 Enjoyed ${item.name}! Belly filled with authentic Ibadan goodness.`, 'success');
  };

  const travel = (targetLocation, fare = 200) => {
    if (player.currentLocation === targetLocation) {
      showNotification(`You are already at ${targetLocation}!`, 'info');
      return;
    }

    const hasOwnVehicle = player.currentVehicle && !player.currentVehicle.title.includes('Trekking');
    const actualFare = hasOwnVehicle ? Math.max(50, Math.floor(fare * 0.25)) : fare;

    if (player.money < actualFare) {
      showNotification(`No cash for fare (₦${actualFare})! Trekking will exhaust you!`, 'error');
      return;
    }

    // Play iconic Micra horn sound
    sounds.playMicraHorn();

    const quotes = [
      'Wọlé pẹlú change ẹ! Dugbe straight!',
      'Bodija market! No ₦1,000 note o!',
      'Iwo Road express! Quick jump in!',
      'Mokola roundabout bypass cleared!'
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    setPlayer((prev) => ({
      ...prev,
      money: prev.money - actualFare,
      currentLocation: targetLocation,
      energy: Math.max(0, prev.energy - (hasOwnVehicle ? 3 : 8)),
      stats: {
        ...prev.stats,
        micraRides: (prev.stats?.micraRides || 0) + 1
      }
    }));

    showNotification(`🚕 Micra boarded! ("${quote}"). Arrived safely at ${targetLocation}!`, 'info');
  };

  const buyItem = (item) => {
    if (player.money < item.price) {
      showNotification(`Insufficient funds! You need ₦${item.price.toLocaleString()}`, 'error');
      return false;
    }

    sounds.playCashSound();

    setPlayer((prev) => {
      const newMoney = prev.money - item.price;

      if (item.category === 'vehicle') {
        const isMicra = item.isMicra || item.name.toLowerCase().includes('micra');
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        return {
          ...prev,
          money: newMoney,
          currentVehicle: {
            title: item.name,
            speedBonus: item.speedRating || 30,
            isOwned: true,
            isMicra
          },
          streetCred: prev.streetCred + (item.streetCredBonus || 30)
        };
      }

      if (item.category === 'house') {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        return {
          ...prev,
          money: newMoney,
          currentHouse: {
            title: item.name,
            comfort: item.comfortRating || 50,
            rentCost: 0,
            isOwned: true
          },
          streetCred: prev.streetCred + (item.streetCredBonus || 50)
        };
      }

      if (item.category === 'clothes') {
        return {
          ...prev,
          money: newMoney,
          streetCred: prev.streetCred + (item.streetCredBonus || 25),
          styleScore: (prev.styleScore || 10) + (item.streetCredBonus || 25)
        };
      }

      // Consumables and accessories go into inventory
      const existing = prev.inventory.find((i) => i.name === item.name);
      let newInventory;
      if (existing) {
        newInventory = prev.inventory.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        newInventory = [...prev.inventory, { ...item, quantity: 1, id: `inv-${Date.now()}` }];
      }

      return {
        ...prev,
        money: newMoney,
        streetCred: prev.streetCred + (item.streetCredBonus || 2),
        inventory: newInventory
      };
    });

    showNotification(`🛍️ Purchased ${item.name}! Added to your possession.`, 'success');
    return true;
  };

  const buyBusiness = (biz) => {
    if (player.money < biz.cost) {
      showNotification(`Insufficient capital! You need ₦${biz.cost.toLocaleString()} to launch this enterprise.`, 'error');
      return false;
    }

    sounds.playSuccessSound();
    confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 } });

    setPlayer((prev) => {
      const owned = prev.businesses || [];
      const alreadyHas = owned.find((b) => b.id === biz.id);
      let newBusinesses;
      if (alreadyHas) {
        newBusinesses = owned.map((b) =>
          b.id === biz.id ? { ...b, count: (b.count || 1) + 1, dailyProfit: b.dailyProfit + biz.dailyProfit } : b
        );
      } else {
        newBusinesses = [...owned, { ...biz, count: 1 }];
      }

      return {
        ...prev,
        money: prev.money - biz.cost,
        streetCred: prev.streetCred + 60,
        businesses: newBusinesses
      };
    });

    showNotification(`🏢 CONGRATULATIONS! You now own "${biz.name}"! Generates ₦${biz.dailyProfit.toLocaleString()}/day!`, 'success');
    return true;
  };

  const collectBusinessRevenue = () => {
    const totalProfit = getDailyPassiveRevenue(player);
    if (totalProfit === 0) {
      showNotification('You have no revenue-generating businesses or property estates yet! Visit Tycoon Empire to start.', 'warning');
      return;
    }

    sounds.playCashSound();
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });

    setPlayer((prev) => ({
      ...prev,
      money: prev.money + totalProfit,
      stats: {
        ...prev.stats,
        businessRevenueTotal: (prev.stats?.businessRevenueTotal || 0) + totalProfit,
        totalEarned: prev.stats.totalEarned + totalProfit
      }
    }));

    showNotification(`💼 Collected ₦${totalProfit.toLocaleString()} daily profit from your Ibadan business, property & transport empire!`, 'success');
  };

  const bankAction = (action, amount) => {
    const num = Number(amount);
    if (!num || num <= 0) return;

    if (action === 'deposit') {
      if (player.money < num) {
        showNotification('Not enough cash in wallet!', 'error');
        return;
      }
      sounds.playCashSound();
      setPlayer((prev) => ({
        ...prev,
        money: prev.money - num,
        bankBalance: prev.bankBalance + num
      }));
      showNotification(`🏦 Deposited ₦${num.toLocaleString()} to OPay/FirstBank Dugbe!`, 'success');
    } else if (action === 'withdraw') {
      if (player.bankBalance < num) {
        showNotification('Insufficient bank balance!', 'error');
        return;
      }
      sounds.playCashSound();
      setPlayer((prev) => ({
        ...prev,
        bankBalance: prev.bankBalance - num,
        money: prev.money + num
      }));
      showNotification(`🏧 Withdrew ₦${num.toLocaleString()} from ATM!`, 'success');
    }
  };

  const createCharacter = (charData) => {
    const freshPlayer = {
      ...DEFAULT_PLAYER,
      ...charData,
      money: 5000, // Explicitly starts with ₦5,000 as requested!
      bankBalance: 0,
      _id: `char-${Date.now()}`
    };
    setPlayer(freshPlayer);
    sounds.playSuccessSound();
    confetti({ particleCount: 130, spread: 80, origin: { y: 0.5 } });
    setWelcomeModalOpen(true);
    showNotification(`Ẹ káàbọ̀ sí Ìbàdàn, ${charData.name}! ₦5,000 in your pocket. Make your mark!`, 'success');
  };

  const hireStaff = (staff) => {
    if (player.streetCred < staff.requiredCred) {
      showNotification(`Not enough Street Cred! You need ${staff.requiredCred} Street Cred to hire ${staff.name}.`, 'warning');
      return false;
    }
    if (player.money < staff.dailySalary) {
      showNotification(`You need at least ₦${staff.dailySalary.toLocaleString()} upfront for daily wages!`, 'error');
      return false;
    }

    sounds.playSuccessSound();
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });

    setPlayer((prev) => {
      const currentHired = prev.hiredStaff || [];
      if (currentHired.find((s) => s.id === staff.id)) return prev;

      return {
        ...prev,
        money: prev.money - staff.dailySalary,
        streetCred: prev.streetCred + 15,
        hiredStaff: [...currentHired, staff],
        unlockedAchievements: prev.unlockedAchievements?.includes('ach-7')
          ? prev.unlockedAchievements
          : [...(prev.unlockedAchievements || []), 'ach-7']
      };
    });

    showNotification(`🤝 Successfully hired ${staff.name} as ${staff.role}! Business boosts active.`, 'success');
    return true;
  };

  const fireStaff = (staffId) => {
    sounds.playClick();
    setPlayer((prev) => ({
      ...prev,
      hiredStaff: (prev.hiredStaff || []).filter((s) => s.id !== staffId)
    }));
    showNotification('Staff member relieved of duties.', 'info');
  };

  const claimAchievement = (ach) => {
    sounds.playSuccessSound();
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    setPlayer((prev) => ({
      ...prev,
      experience: prev.experience + ach.xp,
      streetCred: prev.streetCred + 10,
      unlockedAchievements: [...(prev.unlockedAchievements || []), ach.id]
    }));
    showNotification(`🏆 Achievement Unlocked: "${ach.title}"! +${ach.xp} XP & +10 Street Cred!`, 'success');
  };

  const netWorth = useMemo(() => {
    const cash = (player.money || 0) + (player.bankBalance || 0);
    const bizVal = (player.businesses || []).reduce((sum, b) => sum + ((b.cost || 0) * (b.count || 1)), 0);
    
    let houseVal = 0;
    const houseTitle = player.currentHouse?.title || '';
    if (houseTitle.includes('Estate Owner')) houseVal = 65000000;
    else if (houseTitle.includes('Multiple Houses')) houseVal = 20000000;
    else if (houseTitle.includes('Luxury House')) houseVal = 5500000;
    else if (houseTitle.includes('2-Bedroom')) houseVal = 850000;
    else if (houseTitle.includes('Self-Contain')) houseVal = 180000;
    else if (player.currentHouse?.isOwned) houseVal = 50000;

    let vehVal = 0;
    const vehTitle = player.currentVehicle?.title || '';
    if (vehTitle.includes('Transport Company')) vehVal = 65000000;
    else if (vehTitle.includes('Multiple Cars')) vehVal = 20000000;
    else if (vehTitle.includes('Personal Car')) vehVal = 4200000;
    else if (vehTitle.includes('Micra')) vehVal = 650000;
    else if (vehTitle.includes('Okada')) vehVal = 240000;
    else if (vehTitle.includes('Keke')) vehVal = 180000;

    return cash + bizVal + houseVal + vehVal;
  }, [player]);

  const reputationTier = useMemo(() => {
    return computeReputationTier(player);
  }, [player]);

  const resetCharacter = () => {
    setPlayer(DEFAULT_PLAYER);
    showNotification('Game reset to default starting hustler (₦5,000).', 'info');
  };

  return (
    <GameContext.Provider
      value={{
        player,
        netWorth,
        reputationTier,
        getDailyPassiveRevenue,
        notification,
        showNotification,
        workShift,
        completeMission,
        rest,
        eatItem,
        travel,
        buyItem,
        buyBusiness,
        collectBusinessRevenue,
        bankAction,
        hireStaff,
        fireStaff,
        claimAchievement,
        createCharacter,
        resetCharacter,
        soundEnabled,
        setSoundEnabled,
        welcomeModalOpen,
        setWelcomeModalOpen
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
