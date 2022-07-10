import React from "react";
import {
  Main,
  LeftContainer,
  RightContainer,
  ContainerA,
  ContainerB,
  ContainerC,
} from "./EventPageElements";
import EventInfoCard from "../components/EventInfoCard";
import EventDetailsCard from "../components/EventDetailsCard";

function EventPage(props) {
  function Content(status) {
    if (status === "None" || status === "Pending") {
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
    } else if (status === "Confirmed") {
      return (
        <Main>
          <ContainerA>
            <EventDetailsCard
              title={props.title}
              description={props.description}
              status={props.status}
            />
          </ContainerA>
          <ContainerB>
            <EventInfoCard
              dateTime={props.dateTime}
              location={props.location}
              price={props.price}
              organizer={props.organizer}
            />
          </ContainerB>
          <ContainerC>Hi</ContainerC>
        </Main>
      );
    } else {
      return <></>;
    }
  }
  return Content(props.status);
}

export default EventPage;
