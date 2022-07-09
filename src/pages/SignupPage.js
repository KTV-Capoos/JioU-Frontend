import React from "react";
import {
  InputSection,
  Main,
  NavButton,
  Title,
  TitleSection,
} from "./SignupPageElements";
import { Button, Form } from "semantic-ui-react";
import { Colors } from "../Theme";
import { useForm } from "react-hook-form";
import SignupFormField from "../components/SignupFormField";
import SignupFormSelect from "../components/SignupFormSelect";
import BackArrow from "../assets/Back Arrow.svg";
import { Link } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    setValue,
    triggerValidation,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
    console.log(errors);
  };

  return (
    <Main>
      <TitleSection>
        <Link to="/">
          <img src={BackArrow} width="25rem" />
        </Link>
        <Title>Sign Up</Title>
      </TitleSection>
      <InputSection>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <SignupFormField
            name="username"
            type="text"
            label="Username"
            placeholder="Username"
            isRequired={true}
            maxLength={150}
            error={errors.username}
            errorMessage="Please check the username"
            register={register}
          />

          <SignupFormField
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            isRequired={true}
            pattern={
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
            error={errors.email}
            errorMessage="Please check the email"
            register={register}
          />

          <SignupFormField
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            isRequired={true}
            pattern={/^[a-zA-Z0-9]{6,}$/}
            error={errors.password}
            errorMessage="Please check the password"
            register={register}
          />

          <SignupFormField
            name="fullName"
            type="text"
            label="Full Name (as in NRIC)"
            placeholder="Full Name"
            isRequired={true}
            error={errors.fullName}
            errorMessage="Please check the full name"
            register={register}
          />

          <SignupFormField
            name="dateOfBirth"
            type="text"
            label="Date of Birth (DD/MM/YYYY)"
            placeholder="Date of Birth"
            isRequired={true}
            pattern={
              /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
            }
            error={errors.dateOfBirth}
            errorMessage="Please check the date of birth"
            register={register}
          />

          <SignupFormSelect
            name="gender"
            label="Gender"
            placeholder="Gender"
            options={[
              { text: "Male", value: "male" },
              { text: "Female", value: "female" },
              { text: "Other", value: "others" },
            ]}
            setValue={setValue}
            triggerValidation={triggerValidation}
            isRequired={true}
            register={register}
          />

          <SignupFormField
            name="mobileNumber"
            type="tel"
            label="Mobile Number (8 digits)"
            placeholder="Mobile Number"
            isRequired={true}
            pattern={/^[0-9]{8}$/i}
            error={errors.mobileNumber}
            errorMessage="Please check the mobile number"
            register={register}
          />

          <SignupFormField
            name="emergencyContactNumber"
            type="tel"
            label="Emergency Contact Number (Optional, 8 digits)"
            placeholder="Emergency Contact Number"
            isRequired={false}
            pattern={/^[0-9]{8}$/i}
            error={errors.emergencyContactNumber}
            errorMessage="Please check the emergency contact number"
            register={register}
          />

          <SignupFormSelect
            name="religion"
            label="Religion"
            placeholder="Religion"
            options={[
              { text: "Buddhist", value: "buddhist" },
              { text: "Taoist", value: "taoist" },
              { text: "Christian", value: "christian" },
              { text: "Muslim", value: "muslim" },
              { text: "Hindi", value: "hindi" },
              { text: "No Religion", value: "no religion" },
              { text: "Other", value: "others" },
            ]}
            setValue={setValue}
            triggerValidation={triggerValidation}
            isRequired={true}
            register={register}
          />

          <SignupFormSelect
            name="nationality"
            label="Nationality"
            placeholder="Nationality"
            options={[
              { text: "Singaporean", value: "singaporean" },
              { text: "Other", value: "others" },
            ]}
            setValue={setValue}
            triggerValidation={triggerValidation}
            isRequired={true}
            register={register}
          />

          <SignupFormSelect
            name="ethnicity"
            label="Ethnicity"
            placeholder="Ethnicity"
            options={[
              { text: "Chinese", value: "chinese" },
              { text: "Malay", value: "malay" },
              { text: "Indian", value: "indian" },
              { text: "Other", value: "others" },
            ]}
            setValue={setValue}
            triggerValidation={triggerValidation}
            isRequired={true}
            register={register}
          />

          <SignupFormField
            name="anyMedicalConditions"
            type="text"
            label="Any Medical Conditions (If none, please put `NIL`)"
            placeholder="Any Medical Conditions"
            isRequired={true}
            error={errors.anyMedicalConditions}
            errorMessage="Please check any medical conditions"
            register={register}
          />

          <SignupFormField
            name="allergies"
            type="text"
            label="Allergies (If none, please put `NIL`)"
            placeholder="Allergies"
            isRequired={true}
            error={errors.allergies}
            errorMessage="Please check the allergies"
            register={register}
          />

          <SignupFormField
            name="dietaryRequirements"
            type="text"
            label="Dietary Requirements (If none, please put `NIL`)"
            placeholder="Dietary Requirements"
            isRequired={true}
            error={errors.dietaryRequirements}
            errorMessage="Please check the dietary requirements"
            register={register}
          />

          <Button
            primary
            style={{ backgroundColor: `${Colors.primary}`, width: "100%" }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </InputSection>
    </Main>
  );
}

export default Signup;
