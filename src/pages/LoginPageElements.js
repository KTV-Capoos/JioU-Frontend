import styled from "styled-components";
import { Colors } from "../Theme";

export const Main = styled.div`
  background-color: ${Colors.secondary};
  min-height: 100vh;
  height: auto;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  color: ${Colors.primary};
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  margin-left: 1.5rem;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50vw;
`;

export const InputSection = styled.div`
  width: 50vw;
`;
