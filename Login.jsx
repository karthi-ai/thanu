import React from "react";
import logo from "./assets/Hogwarts-Logo.png";

export default function Login({ onEnter, loading }) {
  return (
    <div className="login-page">
      <div className="login-background">
        <div className="login-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
          <div className="particle particle-9"></div>
          <div className="particle particle-10"></div>
          <div className="particle particle-11"></div>
          <div className="particle particle-12"></div>
          <div className="magic-stick"></div>
        </div>
        <div className="login-star login-star-1"></div>
        <div className="login-star login-star-2"></div>
        <div className="login-star login-star-3"></div>
        <div className="login-star login-star-4"></div>
        <div className="login-star login-star-5"></div>
        <div className="login-star login-star-6"></div>
        <div className="login-star login-star-7"></div>
        <div className="login-star login-star-8"></div>
      </div>
      <div className="login-box">
        <span className="login-badge">Portfolio Access</span>
        <h1>Thanushree</h1>
        <p className="login-subtitle">Data Analyst</p>
        <p>Click enter to go to the portfolio.</p>
        <img src={logo} alt="Login logo" className="login-logo" />
        <button className="enter-btn" onClick={onEnter} disabled={loading}>
          {loading ? "Playing music..." : "Enter Portfolio"}
        </button>
      </div>
    </div>
  );
}
