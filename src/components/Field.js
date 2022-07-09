import React from "react";
import { FormField } from "semantic-ui-react";
import { ErrorMessage, FieldContainer } from "./FieldElements";

function Field(props) {
  return (
    <FieldContainer>
      <FormField>
        <label>{props.label}</label>
        <input
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
          {...props.register(props.name, {
            required: props.isRequired,
            maxLength: props.maxLength,
            pattern: props.pattern,
          })}
        />
      </FormField>
      {props.error && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </FieldContainer>
  );
}

export default Field;
