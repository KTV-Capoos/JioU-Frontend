import React from "react";
import { Main, LeftContainer, RightContainer } from "./EventContentElements";
import EventInfoCard from "./EventInfoCard";
import EventDetailsCard from "./EventDetailsCard";

function EventContent(props) {
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

export default EventContent;
