import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/overview">Overview</Link>
        </li>
        <li>
          <Link to="/logbook">Logbook</Link>
        </li>
        <li>
          <Link to="/detailedgamedescription">Detailed Game Description</Link>
        </li>
        <li>
          <Link to="/result">Result</Link>
        </li>
        <li>
          <Link to="/links">Links</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
