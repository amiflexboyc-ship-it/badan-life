# Ibadan Life (Oyo State RPG & Life Simulator) 🌆🇳🇬

> **"Ibadan kìí ba onílé lẹ́rù, àjèjì ní ń ba lẹ́rù."**  
> An immersive, culturally rich Nigerian role-playing game and life simulator set in the historic city of Ibadan, Oyo State.

---

## 🏛️ Overview

**Ibadan Life** captures the authentic spirit, hustle, humor, and ambition of Nigeria's third-largest metropolitan city. Players start from humble beginnings—navigating yellow Micra taxis, eating hot Amala & Abula at Bodija or Skye Bank Buka, and climbing the socio-economic ladder from conductor or tutorial instructor to Cocoa House tech lead or wholesale agribusiness tycoon.

---

## 🛠️ Technology Stack

- **Frontend (`client/`)**:
  - **Framework**: React 19 with Vite
  - **Styling**: Tailwind CSS v4 (`@import "tailwindcss";` & `@tailwindcss/vite`)
  - **Icons**: Lucide React
  - **Routing**: React Router DOM (v7)
  - **Effects**: Canvas Confetti for level-up celebrations

- **Backend (`server/`)**:
  - **Runtime**: Node.js (ES Modules)
  - **API**: Express.js
  - **Database**: MongoDB with Mongoose (with hybrid fallback support for offline development)
  - **Auth**: JWT & bcryptjs

---

## 📁 Project Structure

```text
ibadan-life/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       │   ├── characters/
│       │   ├── locations/
│       │   ├── vehicles/
│       │   └── items/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Sidebar.jsx
│       │   ├── CharacterCard.jsx
│       │   ├── MoneyDisplay.jsx
│       │   ├── EnergyBar.jsx
│       │   ├── HungerBar.jsx
│       │   ├── LocationCard.jsx
│       │   ├── JobCard.jsx
│       │   ├── Inventory.jsx
│       │   └── Notification.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── CharacterCreation.jsx
│       │   ├── Dashboard.jsx
│       │   ├── Map.jsx
│       │   ├── Jobs.jsx
│       │   ├── Shop.jsx
│       │   ├── House.jsx
│       │   ├── Inventory.jsx
│       │   └── Profile.jsx
│       ├── services/
│       │   ├── api.js
│       │   ├── auth.js
│       │   ├── player.js
│       │   ├── jobs.js
│       │   ├── locations.js
│       │   └── mockData.js
│       ├── context/
│       │   └── GameContext.jsx
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── server/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── playerController.js
│   │   ├── jobController.js
│   │   ├── shopController.js
│   │   └── locationController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Player.js
│   │   ├── Job.js
│   │   ├── Item.js
│   │   ├── Location.js
│   │   └── Transaction.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── playerRoutes.js
│   │   ├── jobRoutes.js
│   │   ├── shopRoutes.js
│   │   └── locationRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── .env
│
├── package.json
└── README.md
```

---

## ⚡ Quick Start

### 1. Install Dependencies

```bash
# In the client directory:
cd client
npm install

# In the server directory:
cd ../server
npm install
```

### 2. Run the Development Servers

#### Client (Frontend UI)
```bash
cd client
npm run dev
```
The game will be live at `http://localhost:5173`.

#### Server (Express API)
```bash
cd server
npm run dev
```
The backend API runs on `http://localhost:5000`.

---

## 🎮 Game Features & Mechanics

1. **Vital Statistics Engine**:
   - **Energy (Stamina)**: Consumed by shifts and travel; replenished by resting at home or drinking chilled Zobo.
   - **Hunger**: Increases as you work; satisfied by eating hot Amala, Gbegiri & Ewedu, or Sabo Suya.
   - **Street Cred & Respect**: Unlocks advanced perks, deals, and social status.
   - **Levels & Experience**: Gain XP on shifts, trigger celebration confetti, and unlock higher-paying sectors.

2. **Economy & Banking**:
   - Currency in Naira (`₦`).
   - Split between **Pocket Cash** and **Bank Balance** with a realistic ATM deposit/withdraw modal.

3. **Ibadan Landmarks**:
   - **Mapo Hall**: Ancient brown roof vistas and traditional council.
   - **Cocoa House**: Dugbe CBD skyscraper and fintech innovation.
   - **Bodija Market**: Bustling wholesale trading and famous buka joints.
   - **University of Ibadan**: Premier academic campus and botanical gardens.
   - **Iwo Road**: The ultimate intercity transport crossroad.
   - **Agodi Gardens**: Serene tropical park for mental health and relaxation.

4. **Realistic Transportation**:
   - Ride yellow Micras or Okada motorbikes with realistic transport fares.
