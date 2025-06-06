import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext()

const auth = getAuth(app);
const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);

  {/* Register/ Signup */ }
  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  {/* Login / signin */ }
  const loginUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  {/*lOG-OUT/SIGN-OUT*/ }
  const logOut= () => {
    return signOut(auth)
  }

  {/*observer*/ }
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
   });
    return () => {
      unsubscribe()
    }
  },[])
  

  const authData = {
    user,
    setUser, 
    
    createUser,
    loginUser,
    logOut,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;