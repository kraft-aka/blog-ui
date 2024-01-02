import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/write">Write</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Outlet />
      </nav>
    </div>
  );
}
