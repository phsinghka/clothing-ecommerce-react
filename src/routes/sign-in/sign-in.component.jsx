import {
  signInWithGooglePopup,
  createUserDocumentwithAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  //Redirect Approach
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentwithAuth(response.user);
  //     }
  //   }, []);
  const logCurrentUserPopUp = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const userDocRef = await createUserDocumentwithAuth(response.user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logCurrentUserPopUp}>Sign In with google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
