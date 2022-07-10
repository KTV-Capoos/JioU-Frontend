import styled from "styled-components";
import { Colors } from "../Theme";

export const Card = styled.div`
  height: 100%;
  overflow-y: auto;
  width: 100%;
  padding: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
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
