import React, { useState } from "react";
import {
  Main,
  NavBarContainer,
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
  Menu,
  Form,
  Radio,
  Dropdown,
  Checkbox,
  Input,
  Icon,
} from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import EventCardComponent from "../components/EventCardComponent";

function EventsPage() {
  const history = useHistory();
  const [dateFilter, setDateFilter] = useState("");
  const [categoriesFilter, setCategoriesFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const handleDateFilter = (e, { value }) => {
    setDateFilter(value);
  };

  const items = [
    { key: "JioU", name: "Jio U" },
    {
      key: "myEvents",
      // onclick: () => history.push("/myevents"),
      name: "My Events",
    },
    {
      key: "profile",
      // onclick: () => history.push("profile"),
      name: "Profile",
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
      <NavBarContainer>
        <Menu secondary items={items} activeIndex={1} />
      </NavBarContainer>
      <ContentContainer>
        <EventContainer>
          <EventCardComponent
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
          />

          <EventCardComponent
            name={"Painting Workshop"}
            date={"21/7/2022"}
            time={"10:00-12:00"}
            location={"Central, Singapore"}
          />
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
