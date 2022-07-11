import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import { get } from "../utils/request";

function AboutMePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    get("/auth/info")
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Main>
      <NavBarComponent />
      <ContentContainer>
        <HeaderContainer>
          <HeaderText>Profile</HeaderText>
          <ButtonContainer>
            <Link to="/history">
              <Button>My Past Events</Button>
            </Link>
          </ButtonContainer>
        </HeaderContainer>
        <FormContainer>
          {profile && (
            <ProfileForm
              fullName={profile.full_name}
              userName={profile.username}
              gender={profile.gender}
              DOB={profile.dob}
              email={profile.email}
              mobile={profile.mobile_number}
              emergencyContact={profile.nok}
              religion={profile.religion}
              nationality={profile.nationality}
              ethnicity={profile.ethnicity}
              medical={profile.medical_conditions}
              allergies={profile.allergies}
              dietary={profile.dietary_restrictions}
            />
          )}
        </FormContainer>
      </ContentContainer>
    </Main>
  );
}

export default AboutMePage;
