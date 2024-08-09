import React, { createContext, useContext, useState } from "react";

export const ChatRoomContext = createContext();

export const ChatRoomProvider = ({ children }) => {
    const [chatRooms, setChatRooms] = useState([
        {
            id: 1,
            name: "General",
            participants: [1, 2], // user IDs
        },
        {
            id: 2,
            name: "Sports",
            participants: [1],
        },
    ]);

    const createRoom = (roomName) => {
        const newRoom = {
            id: chatRooms.length + 1,
            name: roomName,
            participants: [1], // Assuming "user1" creates the room
        };
        setChatRooms([...chatRooms, newRoom]);
    };

    return (
        <ChatRoomContext.Provider
            value={{ chatRooms, setChatRooms, createRoom }}>
            {children}
        </ChatRoomContext.Provider>
    );
};

// Custom hook to use ChatRoomContext
export const useChatRoomContext = () => {
    return useContext(ChatRoomContext);
};
