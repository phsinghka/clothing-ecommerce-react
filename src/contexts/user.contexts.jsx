import { createContext, useState, useEffect } from "react";
import {
  onAuthChangedListener,
  createUserDocumentwithAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthChangedListener((user) => {
      if (user) {
        createUserDocumentwithAuth(user);
      }
      setCurrentUser(user);
    });
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
