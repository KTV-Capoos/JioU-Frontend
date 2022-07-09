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

const EventCardComponent = ({
  name,
  duration,
  price,
  date,
  time,
  location,
}) => {
  return (
    <EventCard>
      <TextContainer>
        <EventHeaderContainer>
          <EventTitle>{name}</EventTitle>
          <DurationContainer>
            <DurationText>{duration}hr</DurationText>
          </DurationContainer>
        </EventHeaderContainer>
        <EventDescription>Price: ${price} per person</EventDescription>
        <EventDescription>Date: {date} </EventDescription>
        <EventDescription>Time: {time} AM</EventDescription>
        <EventDescription>Location: {location}</EventDescription>
      </TextContainer>
      <ImageContainer />
    </EventCard>
  );
};

export default EventCardComponent;
