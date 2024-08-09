import React, { createContext, useContext, useState } from "react";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            senderId: 1,
            receiverId: null,
            roomId: 1,
            text: "Hello, everyone!",
            timestamp: "2024-08-09T12:00:00Z",
        },
        {
            id: 2,
            senderId: 2,
            receiverId: null,
            roomId: 1,
            text: "Hi there!",
            timestamp: "2024-08-09T12:01:00Z",
        },
        {
            id: 3,
            senderId: 1,
            receiverId: 2,
            roomId: null,
            text: "Hey, how are you?",
            timestamp: "2024-08-09T12:05:00Z",
        },
        {
            id: 4,
            senderId: 2,
            receiverId: 1,
            roomId: null,
            text: "I'm good! You?",
            timestamp: "2024-08-09T12:06:00Z",
        },
    ]);

    const sendMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return (
        <MessageContext.Provider value={{ messages, setMessages, sendMessage }}>
            {children}
        </MessageContext.Provider>
    );
};

// Custom hook to use MessageContext
export const useMessageContext = () => {
    return useContext(MessageContext);
};
