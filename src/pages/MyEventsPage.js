import React from "react";
import {
  Main,
  ContentContainer,
  EventContainer,
  HeaderText,
} from "./MyEventsPageElements";
import EventCardComponent from "../components/EventCardComponent";
import NavBarComponent from "../components/NavBarComponent";

function MyEventsPage() {
  const myEvents = [
    {
      name: "Rose Making Workshop",
      price: 7,
      date: "11/7/2022",
      time: "10:00-12:00",
      location: "Central, Singapore",
    },
  ];

  return (
    <Main>
      <NavBarComponent />
      <ContentContainer>
        <HeaderText>My Events</HeaderText>
        <EventContainer>
          {myEvents &&
            myEvents.map((event) => {
              return (
                <EventCardComponent
                  name={event.name}
                  price={event.price}
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

export default MyEventsPage;
