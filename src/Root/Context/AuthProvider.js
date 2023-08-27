import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/FirebaseInit";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  //1. CREATE USER WITH EMAIL & PASSWORD
  //  ====================================================
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LOGIN WITH EMAIL & PASSWORD
  //  ====================================================
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // GOOGLE LOGIN & REGISTRATION
  //  ====================================================
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // USER INFOR AFTER LOGIN OR REGISTRATION
  //  ====================================================
  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe();
    };
  }, []);

  //   DISPLAY USER INFORMATION
  //  ====================================================
  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //  LOGOUT
  //  ====================================================
  const logout = () => {
    return signOut(auth);
  };

  //  EMAIL VERIFICATION
  //  ====================================================
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // FORGET PASSWORD
  //  ====================================================
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authinfo = {
    createUser,
    signin,
    signInWithGoogle,
    updateUserProfile,
    logout,
    user,
    verifyEmail,
    resetPassword,
    loading,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
