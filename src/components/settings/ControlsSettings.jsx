import React from "react";

function ControlsSettings({ goBack }) {
    return (
        <div className="controlls-settings-screen">
            <h2>🎵 Controlls Settings</h2>
            <p>Adjust controll options here.</p>
            <button onClick={goBack}>⬅ Back</button>
        </div>
    );
}

export default ControlsSettings;
