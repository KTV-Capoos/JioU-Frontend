import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { NavBarContainer } from "./NavBarElements";

function NavBarComponent() {
  return (
    <NavBarContainer>
      <Menu style={{ width: "100%" }}>
        <Link to="/events">
          <Menu.Item name="Jio U" />
        </Link>
        <Menu.Menu position="right">
          <Link to="/myevents">
            <Menu.Item name="My Events" />
          </Link>
          <Link to="/profile">
            <Menu.Item name="Profile" />
          </Link>
        </Menu.Menu>
      </Menu>
    </NavBarContainer>
  );
}

export default NavBarComponent;
