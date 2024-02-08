import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import "./Navbar.scss";
import { useAuth } from "../../providers/authProvider";

export default function Navbar() {
  const { token, loggedUser } = useAuth();
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar-logo" />
      </Link>
      <div className="navbar-cta">
        {token && (
          <Link to="/user" className="navbar-user">
            <img src={user} alt="default user icon" />
          </Link>
        )}
        {token && <button className="navbar-btn">Log Out</button>}
        {loggedUser && (
          <Link to="/signin" className="navbar-link">
            Sign In
          </Link>
        )}
        {loggedUser && (
          <Link to="/signup" className="navbar-link">
            Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
}
