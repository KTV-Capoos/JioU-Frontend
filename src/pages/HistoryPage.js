import React from "react";
import { Main, HeaderText } from "./MyEventsPageElements";
import EventCardComponent from "../components/EventCardComponent";
import { EventContainer, ContentContainer } from "./HistoryPageElements";
import NavBarComponent from "../components/NavBarComponent";

function HistoryPage() {
  const pastEvents = [
    {
      name: "Painting Workshop",
      date: "8/7/2022",
      time: "10:00-12:00",
      location: "Central, Singapore",
    },
    {
      name: "Zoo Photography",
      date: "4/7/2022",
      time: "10:00-12:00",
      location: "Central, Singapore",
    },
  ];
  return (
    <Main>
      <NavBarComponent />
      <ContentContainer>
        <HeaderText>My Past Events</HeaderText>
        <EventContainer>
          {pastEvents &&
            pastEvents.map((event) => {
              return (
                <EventCardComponent
                  name={event.name}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                />
              );
            })}
        </EventContainer>
      </ContentContainer>
    </Main>
  );
}

export default HistoryPage;
