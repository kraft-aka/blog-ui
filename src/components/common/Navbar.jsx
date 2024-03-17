import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import "./Navbar.scss";
import { useAuth } from "../../providers/authProvider";

export default function Navbar() {
  const { token, loggedUser, Logout } = useAuth();
  const [hover, setHover] = useState(false);

  function onHover() {
    setHover(true);
  }

  function leaveHover() {
    setHover(false);
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar-logo" />
      </Link>
      <div
        className="navbar-cta"
        onMouseEnter={onHover}
        onMouseLeave={leaveHover}
      >
        {token && (
          <Link to="/user" className="navbar-user">
            <img src={user} alt="default user icon" />
            {hover && (
              <span className="navbar-display-username">
                {loggedUser.userName}
              </span>
            )}
          </Link>
        )}
        {token && (
          <button className="navbar-btn" onClick={Logout}>
            Log Out
          </button>
        )}
        {!loggedUser && (
          <Link to="/signin" className="navbar-link">
            Sign In
          </Link>
        )}
        {!loggedUser && (
          <Link to="/signup" className="navbar-link">
            Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
}
