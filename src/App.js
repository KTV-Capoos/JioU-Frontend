import * as React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import SignupPage from "./pages/SignupPage.js";
import LoginPage from "./pages/LoginPage.js";
import EventPage from "./pages/EventPage.js";

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/event">
          <EventPage
            dateTime="Saturday, July 9 2022 at 10:00 PM to Sunday, July 10 2022 at 6:00 AM"
            location="Jurong Lake Gardens"
            price={10}
            organizer="NTUC Hub"
            description="Join us for a day of exploration at Jurong Lake Gardens! We will be doing many bonding activites, ranging from bonding games to portraiture sessions."
            status="Pending" // None, Pending, Confirmed
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
