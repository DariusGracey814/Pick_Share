import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logoIcon.png";

function Navigation() {
  return (
    <nav className="grid grid-cols-2 items-center">
      {/* Logo */}
      <Link to="/">
        <div className="flex justify-items-center items-center">
          <img src={logo} alt="logo icon" width="27" height="23" />
          <p className="uppercase russo font-bold text-base">
            <span className="dark-light">Pick</span>
            <span className="accent-dark">Share</span>
          </p>
        </div>
      </Link>

      {/* Mobile Menu */}

      {/* Navigation List */}
      <ul className="justify-self-end">
        <ul>
          <li className="btn-sm flex justify-content-center items-center">
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navigation;
