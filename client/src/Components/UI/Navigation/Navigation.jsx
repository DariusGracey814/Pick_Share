import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginStateActions } from "../../../../store/loginState";
import { FaUserCircle } from "react-icons/fa";

import logo from "../../../assets/logoIcon.png";

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const loginState = useSelector((state) => state.loginState.login);
  const userAccess = useSelector((state) => state.loginState.userAccess);

  return (
    <div className="grid grid-cols-2 items-center">
      {/* Logo */}
      {/* Change logo home route based if user is logged in status */}
      <Link to={userAccess ? "/pick-share-homeDarius" : "/"}>
        <div className="flex justify-items-center items-center">
          <img src={logo} alt="logo icon" width="27" height="23" />
          <p className="uppercase russo font-bold text-base logo-text">
            <span className="dark-light">Pick</span>
            <span className="accent-dark">Share</span>
          </p>
        </div>
      </Link>

      <nav>
        {/* Navigation List */}
        <ul className="grid nav-list">
          {/* If user has access to page show account btn else login or sign up btn */}
          {userAccess ? (
            <li className="btn-sm justify-self-end list">
              <Link
                className="flex items-center justify-center"
                to="/pick-share-homeDarius"
              >
                <FaUserCircle className="icon-mr" /> Account
              </Link>
            </li>
          ) : (
            <li className="btn-sm justify-self-end list">
              <Link to={!loginState ? "/" : "/pick-share-signup-form"}>
                {!loginState ? "Login" : "Sign up"}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
