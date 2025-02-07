import React from "react";

function VideoGraphicsSettings({ goBack }) {
    return (
        <div className="video-graphics-settings-screen">
            <h2>🎵 Video and Graphics Settings</h2>
            <p>Adjust video and graphics options here.</p>
            <button onClick={goBack}>⬅ Back</button>
        </div>
    );
}

export default VideoGraphicsSettings;
