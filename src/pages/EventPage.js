import React from "react";
import { Main, ContentContainer } from "./EventPageElements";
import NavBarComponent from "../components/NavBarComponent";
import EventContent from "../components/EventContent";

function EventPage(props) {
  return (
    <Main>
      <NavBarComponent />
      <ContentContainer>
        <EventContent
          title="Exploring the Gardens"
          dateTime="Saturday, July 9 2022 at 10:00 PM to Sunday, July 10 2022 at 6:00 AM"
          location="Jurong Lake Gardens"
          price={10}
          organizer="NTUC Hub"
          description="Join us for a day of exploration at Jurong Lake Gardens! We will be doing many bonding activites, ranging from bonding games to portraiture sessions."
          status="Confirmed" // None, Pending, Confirmed
        />
      </ContentContainer>
    </Main>
  );
}

export default EventPage;
