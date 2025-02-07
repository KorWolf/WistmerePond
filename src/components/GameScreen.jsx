import React, { useState } from "react";
import FishingArea from "./FishingArea";
import { useGameControls } from "../utils/useGameControls";
import GameMenu from "./GameMenu";
import SettingsMenu from "./settings/SettingsMenu";

function GameScreen() {
    const [fishCount, setFishCount] = useState(0);
    const [coinCount, setCoinCount] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);

    const {
        gameAreaRef,
        position,
        zoom,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp
    } = useGameControls();

    return (
        <div className="game-container">
            {/* Top Menu */}
            <div className="top-menu">
                <div className="currency-display">
                    <div className="currency-box">🐟 {fishCount}</div>
                    <div className="currency-box">💰 {coinCount}</div>
                </div>

                <div className="top-menu-right">
                    <button className="menu-box" onClick={() => setMenuOpen(!menuOpen)}>📜 Menu</button>
                    <button className="settings-box" onClick={() => setSettingsOpen(true)}>⚙</button>
                </div>
            </div>

            {/* Main Game Area */}
            <div
                className="game-world"
                ref={gameAreaRef}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp} 
            >
                <FishingArea />
            </div>

            {/* Game Menu Component */}
            <GameMenu menuOpen={menuOpen} toggleMenu={() => setMenuOpen(false)} />

            {/* Settings Menu (Only shown when open) */}
            {settingsOpen && <SettingsMenu closeSettings={() => setSettingsOpen(false)} />}
        </div>
    );
}

export default GameScreen;
