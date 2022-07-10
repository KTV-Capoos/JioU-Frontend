import React from "react";
import {
  EventCard,
  TextContainer,
  ImageContainer,
  EventHeaderContainer,
  EventTitle,
  EventDescription,
} from "./EventCardElements";
import Activity from "../assets/activity-placeholder.png";
import { Image } from "semantic-ui-react";
import { Colors } from "../Theme";

const EventCardComponent = ({ name, price, date, time, location, image }) => {
  return (
    <EventCard>
      <TextContainer>
        <EventHeaderContainer>
          <EventTitle>{name}</EventTitle>
        </EventHeaderContainer>
        {price >= 0 && (
          <EventDescription>
            Price: {price === 0 ? "Free" : `$${price} per person`}
          </EventDescription>
        )}
        <EventDescription>Date: {date}</EventDescription>
        <EventDescription>Time: {time}</EventDescription>
        <EventDescription>Location: {location}</EventDescription>
      </TextContainer>
      <ImageContainer>
        <Image src={Activity} />
      </ImageContainer>
    </EventCard>
  );
};

export default EventCardComponent;
