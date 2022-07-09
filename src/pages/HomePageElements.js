import styled from "styled-components";
import { Colors } from "../Theme";

export const Main = styled.div`
  background-color: ${Colors.primary};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BottomText = styled.p`
  margin: 2rem;
  text-decoration: none;
  color: white;
  text-decoration: underline;
`;
