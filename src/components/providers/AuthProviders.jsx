import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithPopup, GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";

import app from "../../firebase/firebase.config"
import axios from 'axios';

  export const AuthContext = createContext();
  const auth = getAuth(app);


const AuthProviders = ({children}) => {
  const [user, setUser] = useState([]);

    const [googleUser,setGoogleUser] = useState([]);

    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const googleSignIn = ()=>{

        return signInWithPopup(auth,provider)
    }

    const createUser = (email, password) => {
      
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email,password)=>{
      setLoading(true)
  
      return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=>{
      setLoading(true)
      return signOut(auth,provider)
    }

      // onAuthStatechange

      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  
          const userEmail = currentUser?.email || user.email;
          const loggedUser = {email: userEmail};
          console.log(currentUser);
          setGoogleUser(currentUser);
          setUser(currentUser)
          // setUser(currentUser);
          setLoading(false)
  
          if(currentUser){
            
            axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
            .then(res=>{
              console.log(res.data)
            })
          }
  
          else{
            axios.post('http://localhost:5000/logout',loggedUser,{
              withCredentials:true
            })
            .then(res=>console.log(res.data))
          }
    
        });
        return () => {
          unSubscribe();
        };
      }, []);

    const authInfo = {
        googleUser,
        user,
        loading,
        createUser,
        setUser,
        googleSignIn,
        signIn,
        logOut,
        setLoading
      };

    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    
};

export default AuthProviders;