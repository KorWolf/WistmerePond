import React, { useState } from "react";
import FishingArea from "./FishingArea";

function GameScreen() {
    const [fishCount, setFishCount] = useState(0);
    const [coinCount, setCoinCount] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="game-container">
            {/* Top Menu */}
            <div className="top-menu">
                {/* Left: Currency Display */}
                <div className="currency-display">
                    <div className="currency-box">🐟 {fishCount}</div>
                    <div className="currency-box">💰 {coinCount}</div>
                </div>

                {/* Right: Menu + Settings */}
                <div className="top-menu-right">
                    <button className="menu-box" onClick={() => setMenuOpen(!menuOpen)}>📜 Menu</button>
                    <button className="settings-box">⚙</button>
                </div>
            </div>

            {/* Main Game Area */}
            <div className="main-game-area">
                <FishingArea />
            </div>

            {/* Expanded Menu (Only visible when menuOpen is true) */}
            {menuOpen && (
                <div className="game-menu">
                    <h2>📜 Game Menu</h2>
                    <button>🏡 Buildings</button>
                    <button>🏪 Shops</button>
                    <button>👥 NPCs</button>
                    <button>🌱 Farms</button>
                </div>
            )}
        </div>
    );
}

export default GameScreen;
