import React from "react";
import { InputSection, Main, Title } from "./SignupPageElements";
import { Button, Form } from "semantic-ui-react";
import { Colors } from "../Theme";
import { useForm } from "react-hook-form";

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
          <Form.Field>
            <label>Username</label>
            <input
              name="username"
              placeholder="Username"
              type="text"
              {...register("username", {
                required: true,
                maxLength: 150,
              })}
            />
          </Form.Field>
          {errors.username && <p>Please check the username</p>}
          <Form.Field>
            <label>Email</label>
            <input
              name="email"
              placeholder="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </Form.Field>
          {errors.email && <p>Please check the Email</p>}
          <Form.Field>
            <label>Password</label>
            <input
              name="password"
              placeholder="Password"
              type="password"
              {...register("password", {
                required: true,
                pattern: /^[a-zA-Z0-9]{6,}$/,
              })}
            />
          </Form.Field>
          {errors.password && <p>Please check the Password</p>}
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
