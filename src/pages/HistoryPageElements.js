import styled from "styled-components";
import { Colors } from "../Theme";

export const Main = styled.div`
  background-color: ${Colors.veryLightGrey};
  height: 100vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export const EventContainer = styled.div`
  margin: 30px 20px;
  width: 60%;
`;
