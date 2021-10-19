import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup,  FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import authInit from '../../Firebase/Firebase.init';

authInit();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    setUser(user)

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    
  });
    }
    const facebookProvider = new FacebookAuthProvider();
    const signInUsingFacebook = () => {
        signInWithPopup(auth,  facebookProvider )
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message)
            console.log(setError)
        })
    }

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
   }
   useEffect( () => {
       onAuthStateChanged (auth, user=> {
           if(user){
               console.log('inside state changed', user);
               setUser(user);

           }
       })
   }, [])
    return{
        user,
        googleSignIn,
        signInUsingFacebook,
        logout,

    }






};

export default useFirebase;