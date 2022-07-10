import React from "react";
import { InputSection, Main, Title, TitleSection } from "./SignupPageElements";
import { Button, Form } from "semantic-ui-react";
import { Colors } from "../Theme";
import { useForm } from "react-hook-form";
import StyledFormField from "../components/StyledFormField";
import BackArrow from "../assets/Back Arrow.svg";
import { Link } from "react-router-dom";

function Loginpage() {
  const {
    register,
    handleSubmit,
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
          <img src={BackArrow} width="25rem" alt="back" />
        </Link>
        <Title>Login</Title>
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

export default Loginpage;
