import React, { createContext, useContext, useState } from "react";
import initialMessage from "../data/messages";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState(initialMessage);

    const sendMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    const getMessagesByChatRoomId = (id) => {
        return messages.filter((message) => message.roomId === id);
    };

    const addMessage = (text, senderId, chatRoomId) => {
        const newMessage = {
            id: messages.length + 1,
            senderId,
            receiverId: null,
            roomId: chatRoomId,
            text,
            timestamp: new Date().toISOString(),
        };
        sendMessage(newMessage);
    };

    return (
        <MessageContext.Provider
            value={{
                messages,
                setMessages,
                getMessagesByChatRoomId,
                sendMessage,
                addMessage,
            }}>
            {children}
        </MessageContext.Provider>
    );
};

// Custom hook to use MessageContext
export const useMessageContext = () => {
    return useContext(MessageContext);
};
