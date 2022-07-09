import styled from "styled-components";
import { Colors } from "../Theme";

export const Main = styled.div`
  background-color: ${Colors.veryLightGrey};
  height: 100vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.div`
  margin: 30px 0px 0px 20px;
  font-size: 3rem;
`;

export const EventContainer = styled.div`
  margin: 20px;
  width: 60%;
`;
