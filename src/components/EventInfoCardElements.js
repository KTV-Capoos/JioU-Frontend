import styled from "styled-components";
import { Colors } from "../Theme";

export const Card = styled.div`
  height: 100%;
  overflow-y: auto;
  width: 100%;
  padding: 3rem;
  div:last-child {
    margin-bottom: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DividerSection = styled.div`
  margin-bottom: 1rem;
`;

export const DividerLine = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

export const DividerTitle = styled.p`
  color: ${Colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const DividerContent = styled.p`
  color: ${Colors.primary};
  font-size: 1rem;
  font-weight: 400;
`;
