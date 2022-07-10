import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function ProfileForm({
  fullName,
  userName,
  gender,
  DOB,
  email,
  mobile,
  emergencyContact,
  religion,
  nationality,
  ethnicity,
  medical,
  allergies,
  dietary,
}) {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input fluid label="Full Name" placeholder={fullName} readOnly />
        <Form.Input fluid label="Username" placeholder={userName} readOnly />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input fluid label="Gender" placeholder={gender} readOnly />
        <Form.Input
          fluid
          label="Date of Birth (DD/MM/YYYY)"
          placeholder={DOB}
          readOnly
        />
      </Form.Group>
      <Form.Input fluid label="Email" placeholder={email} readOnly />
      <Form.Group widths="equal">
        <Form.Input fluid label="Mobile Number" placeholder={mobile} readOnly />
        <Form.Input
          fluid
          label="Emergency Contact Number"
          placeholder={emergencyContact}
          readOnly
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input fluid label="Religion" placeholder={religion} readOnly />
        <Form.Input
          fluid
          label="Nationality"
          placeholder={nationality}
          readOnly
        />
        <Form.Input fluid label="Ethnicity" placeholder={ethnicity} readOnly />
      </Form.Group>
      <Form.Input
        fluid
        label="Medical Conditions"
        placeholder={medical}
        readOnly
      />
      <Form.Input fluid label="Allergies" placeholder={allergies} readOnly />
      <Form.Input
        fluid
        label="Dietary Requirements"
        placeholder={dietary}
        readOnly
      />
    </Form>
  );
}

export default ProfileForm;
