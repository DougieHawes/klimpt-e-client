import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import SignIn from "./components/routes/public/SignIn";
import SignUp from "./components/routes/public/SignUp";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
