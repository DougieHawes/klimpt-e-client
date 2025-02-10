import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import SignIn from "./components/routes/public/SignIn";
import SignUp from "./components/routes/public/SignUp";

import "./display/styles/style.scss";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className="app">
      <Header darkmode={darkmode} onClick={() => setDarkmode(!darkmode)} />
      <div
        className={`body ${darkmode ? "body-dark-mode" : "body-light-mode"}`}
      >
        <Routes>
          <Route path="/signin" element={<SignIn darkmode={darkmode} />} />
          <Route path="/signup" element={<SignUp darkmode={darkmode} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
