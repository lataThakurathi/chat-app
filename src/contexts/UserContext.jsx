import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        id: 1,
        username: "user1",
        profilePicture: "url_to_profile_pic",
        preferences: {
            theme: "light",
            notifications: true,
        },
    });

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use UserContext
export const useUserContext = () => {
    return useContext(UserContext);
};
