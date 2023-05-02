import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (name, pURL) => {
    console.log(auth.currentUser);
    return updateProfile(auth.currentUser, {
      displayName: `${name}`,
      photoURL: `${pURL}`
    })
  }

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const gitHubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      setUser(loggedUser);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    googleSignIn,
    gitHubSignIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
