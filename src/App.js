import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import SignIn from "./components/routes/public/SignIn";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
