import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import SignupPage from "./pages/SignupPage.js";
import LoginPage from "./pages/LoginPage.js";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
