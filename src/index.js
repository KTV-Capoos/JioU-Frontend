import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
