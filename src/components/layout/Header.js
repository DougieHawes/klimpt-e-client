import { useState } from "react";
import {
  FaMoon,
  FaPalette,
  FaSignInAlt,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "./style.scss";

const Header = ({ darkmode, onClick }) => {
  const [userSignedIn, setUserSignedIn] = useState(false);

  return (
    <header
      className={`header ${
        darkmode ? "header-dark-mode" : "header-light-mode"
      }`}
    >
      <div className="header-title-container">
        <Link className="header-title-link" to="/">
          <FaPalette className="header-title-icon" size={42} />
          <h1 className="header-title">KlimptE</h1>
        </Link>
      </div>
      <div className="header-buttons-container">
        <div className="header-user-button-container">
          {userSignedIn ? (
            <Link to="/dashboard">
              <FaUserCircle className="header-button" />
            </Link>
          ) : (
            <Link to="/signin">
              <FaSignInAlt className="header-button" />
            </Link>
          )}
        </div>
        <div className="header-darkmode-toggle-container">
          {darkmode ? (
            <FaSun className="header-button" onClick={onClick} />
          ) : (
            <FaMoon className="header-button" onClick={onClick} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
