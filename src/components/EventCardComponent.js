import React from "react";
import {
  EventCard,
  TextContainer,
  ImageContainer,
  EventHeaderContainer,
  EventTitle,
  EventDescription,
} from "./EventCardElements";

const EventCardComponent = ({ name, price, date, time, location, image }) => {
  return (
    <EventCard>
      <TextContainer>
        <EventHeaderContainer>
          <EventTitle>{name}</EventTitle>
        </EventHeaderContainer>
        {price && (
          <EventDescription>Price: ${price} per person</EventDescription>
        )}
        <EventDescription>Date: {date}</EventDescription>
        <EventDescription>Time: {time}</EventDescription>
        <EventDescription>Location: {location}</EventDescription>
      </TextContainer>
      <ImageContainer />
    </EventCard>
  );
};

export default EventCardComponent;
