import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { NavBarContainer } from "./NavBarElements";

function NavBarComponent() {
  const history = useHistory();

  const items = [
    { key: "JioU", name: "Jio U" },
    {
      key: "myEvents",
      onclick: () => history.push("/myevents"),
      name: "My Events",
    },
    {
      key: "profile",
      onclick: () => history.push("/profile"),
      name: "Profile",
    },
  ];

  return (
    <NavBarContainer>
      <Menu secondary items={items} />
    </NavBarContainer>
  );
}

export default NavBarComponent;
