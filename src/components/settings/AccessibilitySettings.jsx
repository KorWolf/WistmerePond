import React from "react";

function AccessibilitySettings({ goBack }) {
    return (
        <div className="accessibility-settings-screen">
            <h2>🎵 Accessibility Settings</h2>
            <p>Adjust accessibility and preferances options here.</p>
            <button onClick={goBack}>⬅ Back</button>
        </div>
    );
}

export default AccessibilitySettings;
