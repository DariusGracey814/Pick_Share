import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logoIcon.png";

function Navigation() {
  return (
    <nav className="grid grid-cols-2">
      {/* Logo */}
      <div className="flex">
        <img src={logo} alt="logo icon" width="25" height="25" />
        <p>
          <span>Pick</span>
          <span>Share</span>
        </p>
      </div>

      {/* Mobile Menu */}

      {/* Navigation List */}
      <ul className="justify-self-end">
        <ul>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navigation;
