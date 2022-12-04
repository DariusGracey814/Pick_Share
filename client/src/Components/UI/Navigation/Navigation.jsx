import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginStateActions } from "../../../../store/loginState";

import logo from "../../../assets/logoIcon.png";
// Icons
import { FiMenu } from "react-icons/fi";

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const loginState = useSelector((state) => state.loginState.login);

  // Mobile menu click
  const menuActive = (evt) => {
    evt.preventDefault();
    setExpanded((prevState) => !prevState);
  };

  return (
    <div className="grid grid-cols-2 items-center">
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
      <button
        className="mobile-menu justify-self-end"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigationMenu"
        aria-controls="navigationMenu"
        aria-expanded={expanded}
        aria-label="Toggle navigation"
        onClick={menuActive}
      >
        <FiMenu className="text-4xl accent-dark" />
      </button>

      <nav>
        {/* Navigation List */}
        <ul className={`grid nav-list ${expanded ? "active" : null}`}>
          <li className="btn-sm justify-self-end list">
            <Link to={!loginState ? "/" : "/pick-share-signup-form"}>
              {!loginState ? "Login" : "Sign up"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
