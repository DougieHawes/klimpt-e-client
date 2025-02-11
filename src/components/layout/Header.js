import axios from "axios";

import { useState, useEffect } from "react";
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

  const token = localStorage.getItem("token");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/auth/validate`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserSignedIn(res.data.valid);
      } catch (error) {
        setUserSignedIn(false);
      }
    };

    if (token) verifyToken();
    else setUserSignedIn(false);
  }, [token]);

  return (
    <header
      className={`header ${
        darkmode ? "header-dark-mode" : "header-light-mode"
      }`}
    >
      <div className="header-title-container">
        <Link className="header-title-link" to="/">
          <FaPalette className="header-title-icon" />
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
