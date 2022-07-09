import styled from "styled-components";
import { Colors } from "../Theme";

export const Main = styled.div`
  background-color: ${Colors.secondary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  color: ${Colors.primary};
  font-size: 3rem;
  font-weight: 500;
`;

export const InputSection = styled.div`
  width: 50vw;
`;
