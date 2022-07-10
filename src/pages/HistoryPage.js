import React, { useState } from "react";
import { Main, HeaderText } from "./MyEventsPageElements";
import EventCardComponent from "../components/EventCardComponent";
import { EventContainer, ContentContainer } from "./HistoryPageElements";
import NavBarComponent from "../components/NavBarComponent";

function HistoryPage() {
  return (
    <Main>
      <NavBarComponent />
      <ContentContainer>
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
      </ContentContainer>
    </Main>
  );
}

export default HistoryPage;
