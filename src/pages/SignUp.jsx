import React from "react";
import "./SignUp.scss";

export default function SignUp() {
  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign/Up</h2>
      <form className="signup-form">
        <label htmlFor="signup-email" className="signup-label">
          Email
        </label>
        <input
          type="email"
          id="signup-email"
          className="signup-input"
          placeholder="userName@mail.com"
        />
        <label htmlFor="signup-user-password" className="signup-label">
          Password
        </label>
        <input
          type="password"
          id="signup-user-password"
          className="signup-input"
          placeholder="enter your password"
        />
        <div className="signup-cta">
          <button type="submit" className="signup-btn">
            Sign up
          </button>
    
        </div>
      </form>
    </div>
  );
}
