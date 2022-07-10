import React from "react";
import {
  Description,
  DisplayImage,
  DividerContent,
  DividerLine,
  DividerSection,
  DividerTitle,
  LeftContainer,
  Main,
  RightContainer,
  Title,
} from "./EventPageElements";
import { Button } from "semantic-ui-react";
import { Colors } from "../Theme";
import JurongLakeGardens from "../assets/Jurong Lake Gardens.jpg";
import DateDivider from "../assets/Date Divider.svg";
import LocationDivider from "../assets/Location Divider.svg";
import PriceDivider from "../assets/Price Divider.svg";
import OrganizerDivider from "../assets/Organizer Divider.svg";

function EventPage() {
  return (
    <Main>
      <LeftContainer>
        <DividerSection>
          <DividerLine src={DateDivider} />
          <DividerTitle>Date and Time</DividerTitle>
          <DividerContent>
            Saturday, July 9 2022 at 10:00 PM to
            <br />
            Sunday, July 10 2022 at 6:00 AM
          </DividerContent>
        </DividerSection>
        <DividerSection>
          <DividerLine src={LocationDivider} />
          <DividerTitle>Location</DividerTitle>
          <DividerContent>Jurong Lake Gardens</DividerContent>
        </DividerSection>
        <DividerSection>
          <DividerLine src={PriceDivider} />
          <DividerTitle>Price</DividerTitle>
          <DividerContent>
            $20 for public
            <br />
            $10 for JioU members
          </DividerContent>
        </DividerSection>
        <DividerSection>
          <DividerLine src={OrganizerDivider} />
          <DividerTitle>Organizer</DividerTitle>
          <DividerContent>NTUC Hub</DividerContent>
        </DividerSection>
      </LeftContainer>
      <RightContainer>
        <Title>Exploring the Gardens</Title>
        <DisplayImage src={JurongLakeGardens} />
        <Description>
          Join us for a day of exploration at Jurong Lake Gardens! We will be
          doing many bonding activites, ranging from bonding games to
          portraiture sessions.
        </Description>
        <Description>We jio you to the event!</Description>
        <Button
          style={{
            width: "100%",
            // border: "1px solid white",
            background: Colors.primary,
            color: "white",
          }}
        >
          I accept the Jio!
        </Button>
      </RightContainer>
    </Main>
  );
}

export default EventPage;
