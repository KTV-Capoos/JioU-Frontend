import React from "react";
import { InputSection, Main, Title } from "./SignupPageElements";
import { Button, Form } from "semantic-ui-react";
import { Colors } from "../Theme";
import { useForm } from "react-hook-form";
import Field from "../components/Field";

function Signup() {
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
      <Title>Sign Up</Title>
      <InputSection>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field
            name="username"
            type="text"
            isRequired={true}
            maxLength={150}
            error={errors.username}
            errorMessage="Please check the username"
            register={register}
          />

          <Field
            name="email"
            type="email"
            isRequired={true}
            pattern={
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
            error={errors.email}
            errorMessage="Please check the email"
            register={register}
          />

          <Field
            name="password"
            type="password"
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

export default Signup;
