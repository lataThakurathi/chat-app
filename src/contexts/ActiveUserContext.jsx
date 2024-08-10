import React, { createContext, useContext, useState } from "react";
import users from "../data/users"; // Importing the users data

// Create the ActiveUserContext
export const ActiveUserContext = createContext();

// ActiveUserProvider to manage the active user
export const ActiveUserProvider = ({ children }) => {
    const [activeUser, setActiveUser] = useState(users[0]); // Default to the first user

    // Function to change the active user
    const setActiveUserById = (userId) => {
        const user = users.find((user) => user.id === userId);
        if (user) setActiveUser(user);
    };

    return (
        <ActiveUserContext.Provider value={{ activeUser, setActiveUserById }}>
            {children}
        </ActiveUserContext.Provider>
    );
};

// Custom hook to use ActiveUserContext
export const useActiveUserContext = () => {
    return useContext(ActiveUserContext);
};
