import React, { useState } from "react";
import UIBottomMenu from "./UIBottomMenu";
import FishingArea from "./FishingArea";

function GameScreen() {
  const [currencyMenuOpen, setCurrencyMenuOpen] = useState(true);

  return (
    <div className="game-container">
      {/* Top Menu */}
      <div className="top-menu">
        {/* Currency Menu */}
        <div className={`currency-menu ${currencyMenuOpen ? "open" : "collapsed"}`}>
          <button className="collapse-btn" onClick={() => setCurrencyMenuOpen(!currencyMenuOpen)}>
            {currencyMenuOpen ? "⮜" : "⮞"}
          </button>
          {/* Currency items will be dynamically generated */}
          <div className="currency-item">🐟 0</div>
        </div>

        {/* Settings Button */}
        <button className="settings-button">⚙</button>
      </div>

      {/* Main Game Area */}
      <div className="main-game-area">
        <FishingArea />
      </div>

      {/* Bottom UI Menu */}
      <UIBottomMenu />
    </div>
  );
}

export default GameScreen;
