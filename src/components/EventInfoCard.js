import React from "react";
import DateDivider from "../assets/Date Divider.svg";
import LocationDivider from "../assets/Location Divider.svg";
import PriceDivider from "../assets/Price Divider.svg";
import OrganizerDivider from "../assets/Organizer Divider.svg";
import {
  Card,
  DividerContent,
  DividerLine,
  DividerSection,
  DividerTitle,
} from "./EventInfoCardElements";

function EventInfoCard(props) {
  const startDateTime = props.dateTime.split("to")[0] + " to";
  const endDateTime = props.dateTime.split("to")[1];

  return (
    <Card>
      <DividerSection>
        <DividerLine src={DateDivider} />
        <DividerTitle>Date and Time</DividerTitle>
        <DividerContent>
          {startDateTime}
          <br />
          {endDateTime}
        </DividerContent>
      </DividerSection>
      <DividerSection>
        <DividerLine src={LocationDivider} />
        <DividerTitle>Location</DividerTitle>
        <DividerContent>{props.location}</DividerContent>
      </DividerSection>
      <DividerSection>
        <DividerLine src={PriceDivider} />
        <DividerTitle>Price</DividerTitle>
        <DividerContent>${props.price}</DividerContent>
      </DividerSection>
      <DividerSection>
        <DividerLine src={OrganizerDivider} />
        <DividerTitle>Organizer</DividerTitle>
        <DividerContent>{props.organizer}</DividerContent>
      </DividerSection>
    </Card>
  );
}

export default EventInfoCard;
