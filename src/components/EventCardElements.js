import styled from "styled-components";
import { Colors } from "../Theme";

export const EventCard = styled.div`
  background-color: ${Colors.veryLightGrey};
  max-width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
  border: 3px solid ${Colors.primary};
  box-shadow: 1px 1px 15px #888888;
  margin: 20px 0px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EventHeaderContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-content: center;
`;

export const DurationContainer = styled.div`
  background-color: ${Colors.lightGrey};
  border-radius: 8px;
  padding: 5px 5px;
`;

export const DurationText = styled.div`
  font-color: ${Colors.grey};
  font-size: 1.5rem;
`;

export const EventTitle = styled.div`
  font-size: 2rem;
  font-color: ${Colors.primary};
`;

export const EventDescription = styled.div`
  font-size: 1.2rem;
  font-color: ${Colors.primary};
  padding: 3px 0px;
`;

export const ImageContainer = styled.div`
  background-color: white;
  width: 150px;
`;
