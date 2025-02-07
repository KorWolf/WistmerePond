import React from "react";

function LanguageSettings({ goBack }) {
    return (
        <div className="language-settings-screen">
            <h2>🎵 Language Settings</h2>
            <p>Adjust language options here.</p>
            <button onClick={goBack}>⬅ Back</button>
        </div>
    );
}

export default LanguageSettings;
