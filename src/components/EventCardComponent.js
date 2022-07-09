import React, { useState } from "react";
import {
  EventCard,
  TextContainer,
  ImageContainer,
  EventHeaderContainer,
  EventTitle,
  EventDescription,
  DurationContainer,
  DurationText,
} from "./EventCardElements";

const EventCardComponent = () => {
  return (
    <EventCard>
      <TextContainer>
        <EventHeaderContainer>
          <EventTitle>Badminton Session</EventTitle>
          <DurationContainer>
            <DurationText>2hr</DurationText>
          </DurationContainer>
        </EventHeaderContainer>
        <EventDescription>Price: $2 per person</EventDescription>
        <EventDescription>Date - 9/7/2022 </EventDescription>
        <EventDescription>Time - 08:00 AM</EventDescription>
        <EventDescription>Location - Central, Singapore</EventDescription>
      </TextContainer>
      <ImageContainer />
    </EventCard>
  );
};

export default EventCardComponent;
