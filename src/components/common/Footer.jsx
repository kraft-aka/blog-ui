import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer-nav">
      <Link to="/about" className="footer-links">
        About
      </Link>
      <Link to="/privacy" className="footer-links">
        Privacy
      </Link>
      <Link to="/terms" className="footer-links">
        Terms
      </Link>
      <Link to="/write" className="footer-links">
        Write
      </Link>
      <Link to="/contact" className="footer-links">
        Contact
      </Link>
    </footer>
  );
}
