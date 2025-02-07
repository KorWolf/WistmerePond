import React, { useState } from "react";
import AudioSettings from "./AudioSettings";
import VideoGraphicsSettings from "./VideoGraphicsSettings";
import ControlsSettings from "./ControlsSettings";
import LanguageSettings from "./LanguageSettings";
import AccessibilitySettings from "./AccessibilitySettings";
import "../../styles/SettingsMenu.css";

function SettingsMenu({ closeSettings }) {
    const [activeScreen, setActiveScreen] = useState("main");

    const renderScreen = () => {
        switch (activeScreen) {
            case "audio": return <AudioSettings goBack={() => setActiveScreen("main")} />;
            case "video": return <VideoGraphicsSettings goBack={() => setActiveScreen("main")} />;
            case "controls": return <ControlsSettings goBack={() => setActiveScreen("main")} />;
            case "language": return <LanguageSettings goBack={() => setActiveScreen("main")} />;
            case "accessibility": return <AccessibilitySettings goBack={() => setActiveScreen("main")} />;
            default: return (
                <div className="settings-main">
                    <h2>⚙ Settings</h2>
                    <button onClick={() => setActiveScreen("audio")}>🎵 Audio</button>
                    <button onClick={() => setActiveScreen("video")}>🖥 Video/Graphics</button>
                    <button onClick={() => setActiveScreen("controls")}>🎮 Controls</button>
                    <button onClick={() => setActiveScreen("language")}>🌍 Language</button>
                    <button onClick={() => setActiveScreen("accessibility")}>🛠 Accessibility/Preferences</button>
                    <button onClick={closeSettings}>❌ Close</button>
                </div>
            );
        }
    };

    return <div className="settings-menu">{renderScreen()}</div>;
}

export default SettingsMenu;
