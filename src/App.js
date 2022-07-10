import React from "react";
import { Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/events">
          <EventsPage />
        </Route>
        <Route exact path="/myevents">
          <MyEventsPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/profile">
          <AboutMePage />
        </Route>
        <Route exact path="/history">
          <HistoryPage />
        </Route>
        <Route exact path="/event">
          <EventPage
            title="Exploring the Gardens"
            dateTime="Saturday, July 9 2022 at 10:00 PM to Sunday, July 10 2022 at 6:00 AM"
            location="Jurong Lake Gardens"
            price={10}
            organizer="NTUC Hub"
            description="Join us for a day of exploration at Jurong Lake Gardens! We will be doing many bonding activites, ranging from bonding games to portraiture sessions."
            status="Confirmed" // None, Pending, Confirmed
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
