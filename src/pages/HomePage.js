import React from "react";
import { Button, Image } from "semantic-ui-react";
import Logo from "../assets/Logo.png";
import { ButtonContainer, Main } from "./HomePageElements";

function Home() {
  return (
    <Main>
      <Image src={Logo} height="300px" />
      <ButtonContainer>
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </ButtonContainer>
    </Main>
  );
}

export default Home;
