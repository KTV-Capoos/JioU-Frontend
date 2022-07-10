import React, { useState } from "react";
import { Main, HeaderText } from "./MyEventsPageElements";
import EventCardComponent from "../components/EventCardComponent";
import { EventContainer } from "./HistoryPageElements";
function HistoryPage() {
  return (
    <Main>
      <HeaderText>My Past Events</HeaderText>
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
    </Main>
  );
}

export default HistoryPage;
