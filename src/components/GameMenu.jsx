import React from "react";

function GameMenu({ menuOpen, toggleMenu }) {
    if (!menuOpen) return null; // Don't render if menu is closed

    return (
        <div className="game-menu">
            <h2>📜 Game Menu</h2>
            <button>🏡 Buildings</button>
            <button>🏪 Shops</button>
            <button>👥 NPCs</button>
            <button>🌱 Farms</button>
            <button onClick={toggleMenu}>❌ Close</button>
        </div>
    );
}

export default GameMenu;
