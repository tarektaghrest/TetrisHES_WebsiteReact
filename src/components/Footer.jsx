import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <img src={logo} alt="HES-SO logo" className="footer-logo" />
    </footer>
  );
}

export default Footer;
