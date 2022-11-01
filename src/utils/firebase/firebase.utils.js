import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdvKj2JMmYSqSR7ez3kYiihGtpqbM6S1E",
  authDomain: "clothing-ecommerce-db-884e5.firebaseapp.com",
  projectId: "clothing-ecommerce-db-884e5",
  storageBucket: "clothing-ecommerce-db-884e5.appspot.com",
  messagingSenderId: "379196745228",
  appId: "1:379196745228:web:5d7314df83ccbe813a3029",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentwithAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log("There was an error creating the User", e.message);
    }
  }

  return userDocRef;
};
