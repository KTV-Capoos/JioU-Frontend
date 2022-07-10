import React from "react";
import { Main, LeftContainer, RightContainer } from "./EventPageElements";
import EventInfoCard from "../components/EventInfoCard";
import EventDetailsCard from "../components/EventDetailsCard";

function EventPage(props) {
  return (
    <Main>
      <LeftContainer>
        <EventInfoCard
          dateTime={props.dateTime}
          location={props.location}
          price={props.price}
          organizer={props.organizer}
        />
      </LeftContainer>
      <RightContainer>
        <EventDetailsCard
          title={props.title}
          description={props.description}
          status={props.status}
        />
      </RightContainer>
    </Main>
  );
}

export default EventPage;
