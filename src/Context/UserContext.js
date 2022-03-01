import { createContext, useContext, useEffect, useState } from "react";
import { getAuth } from "../firebase";
export const UserContext = createContext([]);

export const UserProvider = ({children}) => {
    // const [user, setUser] = useState({
    //     email: '',
    //     password: ''
    // })

    const signUp = (email, password) => getAuth().createUserWithEmailAndPassword(email, password);


    return (
        <UserContext.Provider value={{signUp}}>
            { children }
        </UserContext.Provider>
    )
}
export const useUser = () => useContext(UserContext);