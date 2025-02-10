import "./style.scss";

export const Button1 = ({ darkmode, onClick, text }) => (
  <button
    className={`button button1 ${
      darkmode ? "button1-dark-mode" : "button1-light-mode"
    }`}
    darkmode={darkmode}
    onClick={onClick}
  >
    {text}
  </button>
);
