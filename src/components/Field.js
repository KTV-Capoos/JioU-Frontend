import React from "react";
import { FormField } from "semantic-ui-react";
import { ErrorMessage, FieldContainer } from "./FieldElements";

function Field(props) {
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  return (
    <FieldContainer>
      <FormField>
        <label>{capitalize(props.name)}</label>
        <input
          name={props.name}
          placeholder={capitalize(props.name)}
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
