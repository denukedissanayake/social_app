import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({children} :any) => {

    const [currentUser, setCurrentUser] = useState<any>(JSON.parse(localStorage.getItem("user") || '{}'));

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]); 

    const login = () => {
        //TODO
    }

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );
}