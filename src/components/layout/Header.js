import { FaMoon, FaPalette, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./style.scss";

const Header = ({ darkmode, onClick }) => {
  return (
    <header className="header">
      <div className="header-title-container">
        <Link className="header-title-link" to="/">
          <FaPalette className="header-title-icon" size={42} />
          <h1 className="header-title">KlimptE</h1>
        </Link>
      </div>
      <div className="header-buttons-container">
        <div className="header-darkmode-toggle-container">
          {darkmode ? (
            <FaSun
              className="header-darkmode-toggle-icon"
              onClick={onClick}
              size={35}
            />
          ) : (
            <FaMoon
              className="header-darkmode-toggle-icon"
              onClick={onClick}
              size={35}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
