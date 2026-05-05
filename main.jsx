import React, { useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import Login from "./Login";
import "./index.css";
import "./login.css";

function RootApp() {
  const [entered, setEntered] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = () => {
    if (audioRef.current) {
      setLoading(true);
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.45;
      audioRef.current.play();
    }
  };

  const handleAudioEnd = () => {
    setLoading(false);
    setEntered(true);
  };

  return (
    <>
      {!entered && <Login onEnter={handleEnter} loading={loading} />}
      <audio
        ref={audioRef}
        src="assets/harry-potter-theme_DhbiibqD.mp3"
        preload="auto"
        onEnded={handleAudioEnd}
      />
      {entered && <App />}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
