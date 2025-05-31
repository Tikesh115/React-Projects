import { createContext, useState } from "react";

const userContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: "Jhon Doe"})

    const updateUser = (newName) => {
        setUser({name: newName})
    }

    return <userContext.Provider value={{user, updateUser}}>
        {children}      
    </userContext.Provider>         //the children prop allows a component to wrap and render any nested elements or components inside it.
}

export {userContext, UserProvider} 