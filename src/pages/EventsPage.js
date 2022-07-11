import React, { useEffect, useState } from "react";
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
import { Divider, Form, Radio, Input, Icon } from "semantic-ui-react";
import EventCardComponent from "../components/EventCardComponent";
import NavBarComponent from "../components/NavBarComponent";
import { get } from "../utils/request";

function EventsPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");
  const [freeFilter, setFreeFilter] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [eventDetails, setEventDetails] = useState(null);
  const handleDateFilter = (e, { value }) => {
    setDateFilter(value);
  };

  useEffect(() => {
    get("/events")
      .then((response) => {
        setEventDetails(response.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const checkFreeFilter = () => {
    const checkBox = document.getElementById("freefilter");
    if (checkBox.checked === true) {
      setFreeFilter(true);
    } else {
      setFreeFilter(false);
    }
  };

  return (
    <Main>
      <NavBarComponent />
      <ContentContainer>
        <EventContainer>
          {eventDetails &&
            eventDetails.map((event) => {
              let temp = event;
              if (searchValue && !event.name.includes(searchValue)) {
                return null;
              }
              if (freeFilter && event.price > 0) {
                return null;
              }
              if (budgetFilter && event.price > budgetFilter) {
                return null;
              }
              if (temp) {
                return (
                  <Link to={`/event/${temp.event_id}`} key={temp.event_id}>
                    <EventCardComponent
                      name={temp.event_name}
                      price={temp.event_price}
                      date={temp.event_date}
                      time={temp.event_time}
                      location={temp.event_location}
                      image={temp.event_image}
                    />
                  </Link>
                );
              } else return null;
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
              <input
                type="checkbox"
                id="freefilter"
                label="Free"
                value={"free"}
                onClick={checkFreeFilter}
                style={{ marginRight: "8px" }}
              />
              Free
              <MaxPriceContainer>
                <div>Max Price (SGD): </div>
                <Input
                  placeholder="50"
                  onChange={(e, { value }) => setBudgetFilter(value)}
                  type="number"
                  disabled={!!freeFilter}
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
