import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Log/In</h2>
      <form className="login-form">
        <label htmlFor="login-email" className="login-label">
          Email
        </label>
        <input
          type="email"
          id="login-email"
          className="login-input"
          placeholder="userName@mail.com"
        />
        <label htmlFor="login-user-password" className="login-label">
          Password
        </label>
        <input
          type="password"
          id="login-user-password"
          className="login-input"
          placeholder="enter your password"
        />
        <div className="login-cta">
          <button type="submit" className="login-btn">
            Login
          </button>
          <p>or</p>
          <Link to="signup" className="login-btn">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
