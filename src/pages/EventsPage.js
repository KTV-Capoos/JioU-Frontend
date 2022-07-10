import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Main,
  EventContainer,
  ContentContainer,
  FilterContainer,
  FilterCard,
  DatesFilterContainer,
  BudgetFilterContainer,
  FilterSectionTitle,
  MaxPriceContainer,
} from "./EventsPageElements";
import { Divider, Form, Radio, Checkbox, Input, Icon } from "semantic-ui-react";
import EventCardComponent from "../components/EventCardComponent";
import NavBarComponent from "../components/NavBarComponent";

function EventsPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");
  const [freeFilter, setFreeFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const handleDateFilter = (e, { value }) => {
    setDateFilter(value);
  };

  const eventDetails = [
    {
      name: "Badminton Session",
      price: 0,
      date: "9/7/2022",
      time: "08:00-10:00",
      location: "Central, Singapore",
    },
    {
      name: "Totebag Workshop",
      price: 7,
      date: "21/7/2022",
      time: "10:00-12:00",
      location: "Central, Singapore",
    },
    {
      name: "Photography Workshop",
      price: 10,
      date: "22/7/2022",
      time: "10:00-12:00",
      location: "Central, Singapore",
    },
  ];
  const categories = [
    {
      key: "sports",
      text: "sports",
      value: "sports",
    },
    {
      key: "food",
      text: "food",
      value: "food",
    },
    {
      key: "outdoors",
      text: "outdoors",
      value: "outdoors",
    },
    {
      key: "workshops",
      text: "workshops",
      value: "workshops",
    },
  ];

  return (
    <Main>
      <NavBarComponent />
      <ContentContainer>
        <EventContainer>
          {eventDetails &&
            eventDetails.map((event) => {
              let temp = event;
              if (searchValue && event.name.includes(searchValue)) {
                temp = event;
              }
              if (freeFilter && event.price === 0) {
                temp = event;
              }
              if (temp) {
                return (
                  <Link to="/events">
                    <EventCardComponent
                      name={temp.name}
                      price={temp.price}
                      date={temp.date}
                      time={temp.time}
                      location={temp.location}
                    />
                  </Link>
                );
              }
            })}
        </EventContainer>
        <FilterContainer>
          <Input
            style={{ width: "100%", borderRadius: "20px" }}
            icon={<Icon name="search" />}
            onChange={(e, { value }) => {
              setSearchValue(value);
            }}
          />
          <FilterCard>
            <DatesFilterContainer>
              <FilterSectionTitle>Dates</FilterSectionTitle>
              <Form>
                <Form.Field>
                  <Radio
                    label="Tomorrow"
                    name="radioGroup"
                    value="tomorrow"
                    checked={dateFilter === "tomorrow"}
                    onChange={handleDateFilter}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label="This Week"
                    name="radioGroup"
                    value="thisWeek"
                    checked={dateFilter === "thisWeek"}
                    onChange={handleDateFilter}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label="This Month"
                    name="radioGroup"
                    value="thisMonth"
                    checked={dateFilter === "thisMonth"}
                    onChange={handleDateFilter}
                  />
                </Form.Field>
              </Form>
            </DatesFilterContainer>
            <Divider />

            <BudgetFilterContainer>
              <FilterSectionTitle>Budget</FilterSectionTitle>
              <Checkbox
                label="Free"
                value={"true"}
                onChange={(e, { value }) => {
                  if (value === "true") setFreeFilter(true);
                  else setFreeFilter(false);
                }}
              />
              <MaxPriceContainer>
                <div>Max Price (SGD): </div>
                <Input
                  placeholder="50"
                  onChange={(e, { value }) => setBudgetFilter(value)}
                  type="number"
                />
              </MaxPriceContainer>
            </BudgetFilterContainer>
          </FilterCard>
        </FilterContainer>
      </ContentContainer>
    </Main>
  );
}

export default EventsPage;
