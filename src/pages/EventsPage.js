import React, { useState } from "react";
import {
  Main,
  EventContainer,
  ContentContainer,
  FilterContainer,
  FilterCard,
  DatesFilterContainer,
  CategoriesFilterContainer,
  BudgetFilterContainer,
  FilterSectionTitle,
  MaxPriceContainer,
} from "./EventsPageElements";
import {
  Divider,
  Form,
  Radio,
  Dropdown,
  Checkbox,
  Input,
  Icon,
} from "semantic-ui-react";
import EventCardComponent from "../components/EventCardComponent";
import NavBarComponent from "../components/NavBarComponent";

function EventsPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [categoriesFilter, setCategoriesFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const handleDateFilter = (e, { value }) => {
    setDateFilter(value);
  };

  const eventDetails = [
    {
      name: "Badminton Session",
      price: 2,
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
              if (searchValue && event.name.includes(searchValue)) {
                return (
                  <EventCardComponent
                    name={event.name}
                    price={event.price}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                  />
                );
              } else if (searchValue.length < 1) {
                return (
                  <EventCardComponent
                    name={event.name}
                    price={event.price}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                  />
                );
              }
            })}
          {/* <EventCardComponent
            name={"Badminton Session"}
            price={2}
            date={"9/7/2022"}
            time={"08:00-10:00"}
            location={"Central, Singapore"}
          />
          <EventCardComponent
            name={"Totebag Workshop"}
            price={7}
            date={"21/7/2022"}
            time={"10:00-12:00"}
            location={"Central, Singapore"}
          /> */}
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
            <CategoriesFilterContainer>
              <FilterSectionTitle>Categories</FilterSectionTitle>
              <Dropdown
                placeholder="Categories"
                fluid
                selection
                options={categories}
                onChange={(e, { value }) => {
                  setCategoriesFilter(value);
                }}
              />
            </CategoriesFilterContainer>
            <Divider />
            <BudgetFilterContainer>
              <FilterSectionTitle>Budget</FilterSectionTitle>
              <Checkbox label="Free" />
              <MaxPriceContainer>
                <div>Max Price (SGD):</div>
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
