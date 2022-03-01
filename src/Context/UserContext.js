import { createContext, useContext, useEffect, useState } from "react";
import { getAuth } from "../firebase";
// GoogleAuthProvider not working with getAuth
import firebase from "firebase/app";
import "firebase/auth";
// --   --   --   --
export const UserContext = createContext([]);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const signUp = (email, password) => getAuth().createUserWithEmailAndPassword(email, password);
    const logIn = (email,password) => getAuth().signInWithEmailAndPassword(email, password);
    const logOut = () => getAuth().signOut();
    const loginWithGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        return getAuth().signInWithPopup(googleProvider);
    }

    useEffect(() => {
        const unsuscribe = getAuth().onAuthStateChanged( currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        })

        return () => unsuscribe();
    },[])
    // user se puede utilizar para mostrar los datos del usuario logeado

    return (
        <UserContext.Provider value={{signUp, logIn, user, logOut, isLoading, loginWithGoogle}}>
            { children }
        </UserContext.Provider>
    )
}
export const useUser = () => useContext(UserContext);