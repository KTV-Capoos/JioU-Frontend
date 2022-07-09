import { Button, Image } from "semantic-ui-react";
import Logo from "../assets/Logo.png";
import { Main } from "./HomeElements";

function Home() {
  return (
    <Main>
      <Image src={Logo} height="300px" />
      <Button>Log In</Button>
    </Main>
  );
}

export default Home;
