import {
  createAuthuserwithEmailandPassword,
  createUserDocumentwithAuth,
} from "../../utils/firebase/firebase.utils";
import React, { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("Password and Confirm Password doesn't Match");
      return;
    }
    try {
      const response = await createAuthuserwithEmailandPassword(
        email,
        password
      );
      console.log(response);
      const userDocRef = await createUserDocumentwithAuth(response.user, {
        displayName,
      });
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
