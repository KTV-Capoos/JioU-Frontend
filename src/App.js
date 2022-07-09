import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import SignupPage from "./pages/SignupPage.js";
import EventsPage from "./pages/EventsPage.js";

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
        <Route exact path="/signup">
          <SignupPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
