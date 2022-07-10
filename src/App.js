import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import SignupPage from "./pages/SignupPage.js";
import EventsPage from "./pages/EventsPage.js";
import MyEventsPage from "./pages/MyEventsPage.js";
import LoginPage from "./pages/LoginPage.js";
import AboutMePage from "./pages/AboutMePage.js";
import HistoryPage from "./pages/HistoryPage";
import EventPage from "./pages/EventPage.js";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/events" element={<EventsPage />} />
        <Route exact path="/myevents" element={<MyEventsPage />} />
        <Route exact path="/profile" element={<AboutMePage />} />
        <Route exact path="/history" element={<HistoryPage />} />
        <Route exact path="/event" element={<EventPage />} />
      </Routes>
    </div>
  );
};

export default App;
