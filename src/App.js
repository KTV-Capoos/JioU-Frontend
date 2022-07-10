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
import NavBarComponent from "./components/NavBarComponent.js";

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
        <Route
          exact
          path="/event"
          element={
            <EventPage
              title="Exploring the Gardens"
              dateTime="Saturday, July 9 2022 at 10:00 PM to Sunday, July 10 2022 at 6:00 AM"
              location="Jurong Lake Gardens"
              price={10}
              organizer="NTUC Hub"
              description="Join us for a day of exploration at Jurong Lake Gardens! We will be doing many bonding activites, ranging from bonding games to portraiture sessions."
              status="Confirmed" // None, Pending, Confirmed
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
