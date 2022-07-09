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
`;

export const NavButton = styled.img`
  width: 2rem;
  position: absolute;
  left: 0;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  position: relative;
`;

export const InputSection = styled.div`
  width: 50vw;
`;
