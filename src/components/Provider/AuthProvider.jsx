import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export  const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const auth = getAuth(app);

    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name,imgUrl)=>{
        setLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgUrl
          })
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            console.log(loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })

        return ()=> unsubscribe();
    })


    


  const authInfo = {
    user,
    createUser,
    loginUser,
    updateUser,
    logOut,
    loading
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;