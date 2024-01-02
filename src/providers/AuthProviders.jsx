import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)


const AuthProviders = ({children}) => {

 const [user,setUser]=useState(null)
 const [loading,setLoading] =useState(true)
 const axiosPublic =useAxiosPublic()

  const googleProvider = new GoogleAuthProvider()
  const googleSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }




 const createUser = (email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)

 }

 const updateUserProfile = (name,photo)=>{
  setLoading(true)
  return updateProfile (auth.currentUser,{
    displayName:name,
   photoURL: photo,
  })
}

const signIn = (email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
}

const logOut =()=>{
  setLoading(true)
  return signOut(auth)
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
    if(currentUser){
      //get token and store client
       const userInfo ={email: currentUser.email}
       axiosPublic.post('/jwt',userInfo)
       .then(res=>{
         if(res.data.token){
           localStorage.setItem('access-token',res.data.token)
         }
       })
   }
   else{
         //TODO: remove token
      localStorage.removeItem('access-token')
   }
    setLoading(false)
  })
  return ()=>{
    unsubscribe()
  }
},[])

  const authInfo ={
    user,
    loading,
    createUser,
    updateUserProfile,
    signIn,
    logOut,
    googleSignIn
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>

  );
};

export default AuthProviders;