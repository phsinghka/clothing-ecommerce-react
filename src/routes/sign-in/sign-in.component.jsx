import {
  signInWithGooglePopup,
  createUserDocumentwithAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logCurrentUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const userDocRef = await createUserDocumentwithAuth(response.user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>;
      <button onClick={logCurrentUser}>Sign In with google</button>;
    </div>
  );
};

export default SignIn;
