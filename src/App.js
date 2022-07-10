import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import SignupPage from "./pages/SignupPage.js";
import EventsPage from "./pages/EventsPage.js";
import MyEventsPage from "./pages/MyEventsPage.js";
import LoginPage from "./pages/LoginPage.js";
import AboutMePage from "./pages/AboutMePage.js";

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
          <AboutMePage />
        </Route>
        <Route exact path="/history">
          <AboutMePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
