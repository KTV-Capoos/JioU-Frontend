import React from "react";
import { InputSection, Main, Title, TitleSection } from "./SignupPageElements";
import { Button, Form } from "semantic-ui-react";
import { Colors } from "../Theme";
import { useForm } from "react-hook-form";
import StyledFormField from "../components/StyledFormField";
import StyledFormSelect from "../components/StyledFormSelect";
import BackArrow from "../assets/Back Arrow.svg";
import { Link, Navigate } from "react-router-dom";
import { post } from "../utils/request";

function Signup() {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    post("/auth/signup/", data)
      .then((res) => {
        Navigate("/login", { replace: true });
      })
      .catch((err) => {
        document.getElementById("error").innerText = err.response.data.error;
      });
    console.log(data);
    console.log(errors);
  };

  return (
    <Main>
      <TitleSection>
        <Link to="/">
          <img src={BackArrow} width="25rem" alt="<" />
        </Link>
        <Title>Sign Up</Title>
      </TitleSection>
      <InputSection>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledFormField
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
          <StyledFormField
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

          <StyledFormField
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

          <StyledFormField
            name="fullName"
            type="text"
            label="Full Name (as in NRIC)"
            placeholder="Full Name"
            isRequired={true}
            error={errors.fullName}
            errorMessage="Please check the full name"
            register={register}
          />

          <StyledFormField
            name="dob"
            type="text"
            label="Date of Birth (DD/MM/YYYY)"
            placeholder="Date of Birth"
            isRequired={true}
            pattern={
              /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
            }
            error={errors.dob}
            errorMessage="Please check the date of birth"
            register={register}
          />

          <StyledFormSelect
            name="gender"
            label="Gender"
            placeholder="Gender"
            options={[
              { text: "Male", value: "male" },
              { text: "Female", value: "female" },
              { text: "Other", value: "others" },
            ]}
            setValue={setValue}
            triggerValidation={trigger}
            isRequired={true}
            register={register}
          />

          <StyledFormField
            name="mobile_number"
            type="tel"
            label="Mobile Number (8 digits)"
            placeholder="Mobile Number"
            isRequired={true}
            pattern={/^[0-9]{8}$/i}
            error={errors.mobile_number}
            errorMessage="Please check the mobile number"
            register={register}
          />

          <StyledFormField
            name="nok"
            type="tel"
            label="Emergency Contact Number (Optional, 8 digits)"
            placeholder="Emergency Contact Number"
            isRequired={false}
            pattern={/^[0-9]{8}$/i}
            error={errors.nok}
            errorMessage="Please check the emergency contact number"
            register={register}
          />

          <StyledFormSelect
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
            triggerValidation={trigger}
            isRequired={true}
            register={register}
          />

          <StyledFormSelect
            name="nationality"
            label="Nationality"
            placeholder="Nationality"
            options={[
              { text: "Singaporean", value: "singaporean" },
              { text: "Other", value: "others" },
            ]}
            setValue={setValue}
            triggerValidation={trigger}
            isRequired={true}
            register={register}
          />

          <StyledFormSelect
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
            triggerValidation={trigger}
            isRequired={true}
            register={register}
          />

          <StyledFormField
            name="anyMedicalConditions"
            type="text"
            label="Any Medical Conditions (If none, please put `NIL`)"
            placeholder="Any Medical Conditions"
            isRequired={true}
            error={errors.anyMedicalConditions}
            errorMessage="Please check any medical conditions"
            register={register}
          />

          <StyledFormField
            name="allergies"
            type="text"
            label="Allergies (If none, please put `NIL`)"
            placeholder="Allergies"
            isRequired={true}
            error={errors.allergies}
            errorMessage="Please check the allergies"
            register={register}
          />

          <StyledFormField
            name="dietaryRequirements"
            type="text"
            label="Dietary Requirements (If none, please put `NIL`)"
            placeholder="Dietary Requirements"
            isRequired={true}
            error={errors.dietaryRequirements}
            errorMessage="Please check the dietary requirements"
            register={register}
          />
          <div id="error" />
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
