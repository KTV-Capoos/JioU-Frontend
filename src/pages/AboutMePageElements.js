import styled from "styled-components";
import { Colors } from "../Theme";

export const Main = styled.div`
  background-color: ${Colors.veryLightGrey};
  height: 100vh;
  overflow: scroll;
`;

export const ContentContainer = styled.div`
  height: 100%;
  background-color: ${Colors.veryLightGrey};
  padding-top: 40px;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const HeaderText = styled.div`
  margin: 30px 0px 0px 20px;
  font-size: 2rem;
`;

export const ButtonContainer = styled.div`
  margin: 20px;
`;

export const FormContainer = styled.div`
  margin: 40px 20px 30px 20px;
  width: 60%;
  padding-bottom: 20px;
`;
