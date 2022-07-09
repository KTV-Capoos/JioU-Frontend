import React, { useState } from "react";
import { NavBarContainer } from "./EventsPageElements";
import {
  Main,
  ContentContainer,
  EventContainer,
  HeaderText,
} from "./MyEventsPageElements";
import EventCardComponent from "../components/EventCardComponent";
import { Menu } from "semantic-ui-react";

function MyEventsPage() {
  const items = [
    { key: "JioU", name: "Jio U" },
    {
      key: "myEvents",
      // onclick: () => history.push("/myevents"),
      name: "My Events",
    },
    {
      key: "profile",
      // onclick: () => history.push("profile"),
      name: "Profile",
    },
  ];
  return (
    <Main>
      <NavBarContainer>
        <Menu secondary items={items} activeIndex={1} />
      </NavBarContainer>
      <ContentContainer>
        <HeaderText>My Events</HeaderText>
        <EventContainer>
          <EventCardComponent
            name={"Painting Workshop"}
            date={"8/7/2022"}
            time={"10:00-12:00"}
            location={"Central, Singapore"}
          />
          <EventCardComponent
            name={"Zoo Photography"}
            date={"4/7/2022"}
            time={"10:00-12:00"}
            location={"Central, Singapore"}
          />
        </EventContainer>
      </ContentContainer>
    </Main>
  );
}

export default MyEventsPage;
