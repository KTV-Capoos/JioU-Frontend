import React, { useState } from "react";
import { Main, NavBarContainer, EventContainer } from "./EventsPageElements";
import { Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import EventCardComponent from "../components/EventCardComponent";

function EventsPage() {
  const history = useHistory();

  const items = [
    { key: "JioU", name: "Jio U" },
    {
      key: "myEvents",
      onclick: () => history.push("/myevents"),
      name: "My Events",
    },
    {
      key: "profile",
      onclick: () => history.push("profile"),
      name: "Profile",
    },
  ];

  return (
    <Main>
      <NavBarContainer>
        <Menu secondary items={items} activeIndex={1} />
      </NavBarContainer>
      <EventContainer>
        <EventCardComponent />
        <EventCardComponent />
        <EventCardComponent />
      </EventContainer>
    </Main>
  );
}

export default EventsPage;
