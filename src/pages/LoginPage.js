import React from "react";
import { InputSection, Main, Title, TitleSection } from "./SignupPageElements";
import { Button, Form } from "semantic-ui-react";
import { Colors } from "../Theme";
import { useForm } from "react-hook-form";
import StyledFormField from "../components/StyledFormField";
import BackArrow from "../assets/Back Arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../utils/request";

function Loginpage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    post("/auth/login/", data).then((res) => {
      navigate("/events", {replace: true});
    }).catch((err) => {
      document.getElementById("error").innerText = err.response.data.error;
    });
  };

  return (
    <Main>
      <TitleSection>
        <Link to="/">
          <img src={BackArrow} width="25rem" alt="<" />
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
          <div id="error"></div>
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
