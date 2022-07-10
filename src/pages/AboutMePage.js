import React, { useState } from "react";
import {
  FormContainer,
  HeaderContainer,
  Main,
  HeaderText,
  ButtonContainer,
  ContentContainer,
} from "./AboutMePageElements";
import { Button } from "semantic-ui-react";
import NavBarComponent from "../components/NavBarComponent";
import ProfileForm from "../components/ProfileForm";
import { useHistory } from "react-router-dom";

function AboutMePage() {
  const history = useHistory();
  return (
    <Main>
      <NavBarComponent />
      <ContentContainer>
        <HeaderContainer>
          <HeaderText>Profile</HeaderText>
          <ButtonContainer>
            <Button onClick={() => history.push("/history")}>
              My Past Events
            </Button>
          </ButtonContainer>
        </HeaderContainer>
        <FormContainer>
          <ProfileForm
            fullName={"Sally"}
            userName={"sally"}
            gender={"Female"}
            DOB={"12/06/1999"}
            email={"sally@gmail.com"}
            mobile={87654568}
            emergencyContact={98765678}
            religion={"taoist"}
            nationality={"China citizen"}
            ethnicity={"asian"}
            medical={"NIL"}
            allergies={"NIL"}
            dietary={"NIL"}
          />
        </FormContainer>
      </ContentContainer>
    </Main>
  );
}

export default AboutMePage;
