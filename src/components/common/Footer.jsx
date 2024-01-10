import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer-nav">
    <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "footer-active-link" : "footer-links"
    }
  >
    Home
  </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "footer-active-link" : "footer-links"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/privacy"
        className={({ isActive }) =>
          isActive ? "footer-active-link" : "footer-links"
        }
      >
        Privacy
      </NavLink>
      <NavLink
        to="/terms"
        className={({ isActive }) =>
          isActive ? "footer-active-link" : "footer-links"
        }
      >
        Terms
      </NavLink>
      <NavLink
        to="/write"
        className={({ isActive }) =>
          isActive ? "footer-active-link" : "footer-links"
        }
      >
        Write
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "footer-active-link" : "footer-links"
        }
      >
        Contact
      </NavLink>
    </footer>
  );
}
