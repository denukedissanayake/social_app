import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext<any>(null);

export const DarkModeContextProvider = ({children} :any) => {

    const [darkmode, setDarkmode] = useState<string>(localStorage.getItem("darkmode") || "false");

    const toggleMode = () => {
        if(darkmode === 'false') setDarkmode('true');
        else setDarkmode('false');
    }

    useEffect(() => {
        localStorage.setItem("darkmode", darkmode as string);
    }, [darkmode]); 

    return (
        <DarkModeContext.Provider value={{darkmode, toggleMode}}>
            {children}
        </DarkModeContext.Provider>
    );
}