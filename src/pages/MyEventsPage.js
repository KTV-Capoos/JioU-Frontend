import React, { useEffect, useState } from "react";
import {
  Main,
  ContentContainer,
  EventContainer,
  HeaderText,
} from "./MyEventsPageElements";
import EventCardComponent from "../components/EventCardComponent";
import NavBarComponent from "../components/NavBarComponent";
import { get } from "../utils/request";

function MyEventsPage() {
  const [myEvents, setMyEvents ] = useState(null);

  useEffect(() => {
    get("/attendance/my_events")
      .then((response) => {
        setMyEvents(response.data.events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
