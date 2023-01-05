import { createContext, useEffect, useState } from "react";

type input = {
    id: number,
    username: string,
    password: string,
    email: string,
    name: string,
    profilepic: string | null,
    coverpic: string | null,
    city: string | null,
}

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({children} :any) => {

    const [currentUser, setCurrentUser] = useState<any>(JSON.parse(localStorage.getItem("user") || '{}'));

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]); 

    const login = (input : input) => {
        setCurrentUser(input);
    }

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );
}