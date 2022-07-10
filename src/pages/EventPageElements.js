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
  padding-right: 1rem;
`;

export const RightContainer = styled.div`
  flex-basis: 70%;
  height: 100%;
  overflow-y: auto;
  width: 100%;
  padding: 3rem;
`;

export const Title = styled.p`
  color: ${Colors.primary};
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
`;

export const DisplayImage = styled.img`
  width: 100%;
  height: auto;
  margin: 1rem 0;
`;

export const Description = styled.p``;
