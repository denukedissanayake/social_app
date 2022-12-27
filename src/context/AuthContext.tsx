import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({children} :any) => {

    const [currentUser, setCurrentUser] = useState<any>(JSON.parse(localStorage.getItem("user") || '{}'));

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]); 

    const login = () => {
        setCurrentUser({
            id : "1",
            name: "Jake Bill",
            profileImage : "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
        })
    }

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );
}