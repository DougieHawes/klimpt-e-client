import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import SignIn from "./components/routes/public/SignIn";
import SignUp from "./components/routes/public/SignUp";

import "./display/styles/style.scss";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="app">
      <Header darkmode={darkMode} onClick={() => setDarkMode(!darkMode)} />
      <div
        className={`body ${darkMode ? "body-dark-mode" : "body-light-mode"}`}
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
