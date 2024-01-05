import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar-logo" />
      </Link>
      <div className="navbar-cta">
        <Link to="/signin" className="navbar-link">
          Sign In
        </Link>
        <Link to="/signup" className="navbar-link">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
