import React from "react";
import { FormSelect } from "semantic-ui-react";
import { ErrorMessage, FieldContainer } from "./StyledFormFieldElements";

function SignupFormSelect(props) {
  return (
    <FieldContainer>
      <label>{props.label}</label>
      <FormSelect
        name={props.name}
        placeholder={props.placeholder}
        options={props.options}
        onChange={async (e, { name, value }) => {
          props.setValue(name, value);
          await props.triggerValidation({ name });
        }}
      />
      {props.error && <ErrorMessage>Error</ErrorMessage>}
    </FieldContainer>
  );
}

export default SignupFormSelect;
