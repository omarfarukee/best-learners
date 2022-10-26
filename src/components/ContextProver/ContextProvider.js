import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/Firebase';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const ContextProvider = ({children}) => {
    
 const [user, setUser] = useState({})
 const [loading, setLoading] = useState(true)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider =new GithubAuthProvider();

const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}
const signInWithGithub = () => {
  return  signInWithPopup(auth, gitHubProvider)
}
const registerLogin = (email, password) =>{
    setLoading(true)
  return   createUserWithEmailAndPassword(auth, email, password)
}
const login = (email, password) =>{
    setLoading(true)
 return   signInWithEmailAndPassword(auth,email, password)
}

const updateUserProfile =profile =>{
    return   updateProfile(auth.currentUser, profile)
   } 
const logOut = () => {
    setLoading(true)
   return  signOut(auth)
  }
useEffect(() => {
 const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>unSubscribe()
},[])

const authInfo = {user,loading, signInWithGoogle, logOut,login ,registerLogin,signInWithGithub,updateUserProfile }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                 {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;