import React from "react";
import UIBottomMenu from "./UIBottomMenu";
import FishingArea from "./FishingArea";

function GameScreen() {
  return (
    <div className="game-container">
      {/* Top Bar */}
      <div className="top-bar">
        <h1>Wistmere Pond</h1>
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
