import React from 'react';
import { createContext } from 'react';
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  // const user = { displayName: 'asif' };
  const user = null;

  const googleSignin = (email, passw)

  const authInfo = { user };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
