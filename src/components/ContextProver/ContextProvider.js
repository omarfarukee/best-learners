import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/Firebase';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const ContextProvider = ({children}) => {
    
 const [user, setUser] = useState(null)
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
}
const logOut = () => {
   return  signOut(auth)
  }
useEffect(() => {
 const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return () =>unSubscribe()
},[])

const authInfo = {user, signInWithGoogle, logOut}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                 {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;