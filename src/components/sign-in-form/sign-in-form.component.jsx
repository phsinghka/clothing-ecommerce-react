import React, { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentwithAuth,
  signInWithEmailAndPasswordValue,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithEmailAndPasswordValue(email, password);
      console.log(response);

      setFormFields(defaultFormFields);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logCurrentUserPopUp = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const userDocRef = await createUserDocumentwithAuth(response.user);
  };

  return (
    <div className="sign-up-container">
      <h2>Already Have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit">SIGN IN</Button>
      </form>

      <Button onClick={logCurrentUserPopUp} buttonType="google">
        SIGN IN WITH GOOGLE
      </Button>
    </div>
  );
};

export default SignInForm;
