import { Button, Image } from "semantic-ui-react";
import Logo from "./assets/Logo.png";
import { Colors } from "./Theme";

function Home() {
  return (
    <div
      style={{
        backgroundColor: Colors.primary,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image src={Logo} height="300px" />
      <Button>Log In</Button>
    </div>
  );
}

export default Home;
