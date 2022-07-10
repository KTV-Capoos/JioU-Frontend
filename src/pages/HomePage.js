import { Link } from "react-router-dom";
import { Button, Image } from "semantic-ui-react";
import Logo from "../assets/Logo.png";
import { Main } from "./HomePageElements";

function Home() {
  return (
    <Main>
      <Image src={Logo} height="300px" />
      <Link to="/login">
        <Button style={{ width: "10rem" }}>Log In</Button>
      </Link>
      <br />
      <Link to="/signup">
        <Button
          style={{
            width: "10rem",
            border: "1px solid white",
            background: "none",
            color: "white",
          }}
        >
          Sign Up
        </Button>
      </Link>
    </Main>
  );
}

export default Home;
