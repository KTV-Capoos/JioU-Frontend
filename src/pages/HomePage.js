import { Link } from "react-router-dom";
import { Button, Image } from "semantic-ui-react";
import Logo from "../assets/Logo.png";
import { Main } from "./HomePageElements";

function Home() {
  return (
    <Main>
      <Image src={Logo} height="300px" />
      <Link to="/login">
        <Button>Log In</Button>
      </Link>
    </Main>
  );
}

export default Home;
