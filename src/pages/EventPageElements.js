import styled from "styled-components";
import { Colors } from "../Theme";

export const Main = styled.div`
  background-color: ${Colors.veryLightGrey};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftContainer = styled.div`
  flex-basis: 30%;
  height: 100%;
  width: 100%;
`;

export const RightContainer = styled.div`
  flex-basis: 70%;
  height: 100%;
  width: 100%;
`;
