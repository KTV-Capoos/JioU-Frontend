import React from "react";
import {
  Description,
  DisplayImage,
  LeftContainer,
  Main,
  RightContainer,
  Title,
} from "./EventPageElements";
import { Button } from "semantic-ui-react";
import { Colors } from "../Theme";
import JurongLakeGardens from "../assets/Jurong Lake Gardens.jpg";
import EventInfoCard from "../components/EventInfoCard";

function EventPage(props) {
  const ButtonStatusNone = () => {
    return (
      <Button
        style={{
          width: "100%",
          background: Colors.primary,
          color: "white",
        }}
      >
        I accept the Jio!
      </Button>
    );
  };
  const ButtonStatusPending = () => {
    return (
      <Button
        style={{
          width: "100%",
          border: `1px solid ${Colors.grey}`,
          background: "none",
          color: `${Colors.grey}`,
        }}
        disabled
      >
        Pending Confirmation
      </Button>
    );
  };

  function ActionButton(status) {
    switch (status) {
      case "Pending":
        return <ButtonStatusPending />;
      default:
        return <ButtonStatusNone />;
    }
  }

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
        <Title>Exploring the Gardens</Title>
        <DisplayImage src={JurongLakeGardens} />
        <Description>{props.description}</Description>
        <Description>We jio you to the event!</Description>
        {ActionButton(props.status)}
      </RightContainer>
    </Main>
  );
}

export default EventPage;
