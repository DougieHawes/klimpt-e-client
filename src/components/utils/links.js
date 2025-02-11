import { Link } from "react-router-dom";

import "./style.scss";

export const Link1 = ({ darkmode, text, to }) => (
  <Link
    className={`link link1 ${
      darkmode ? "link1-dark-mode" : "link1-light-mode"
    }`}
    to={to}
  >
    {text}
  </Link>
);
