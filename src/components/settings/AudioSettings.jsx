import React from "react";

function AudioSettings({ goBack }) {
    return (
        <div className="audio-settings-screen">
            <h2>🎵 Audio Settings</h2>
            <p>Adjust volume and sound options here.</p>
            <button onClick={goBack}>⬅ Back</button>
        </div>
    );
}

export default AudioSettings;
