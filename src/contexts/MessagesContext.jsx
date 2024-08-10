import React, { createContext, useContext, useState } from "react";
import initialMessages from "../data/messages"; // Assuming this is an array of message objects

// Create the MessagesContext
export const MessagesContext = createContext();

// MessagesProvider to manage messages
export const MessagesProvider = ({ children }) => {
    const [messages, setMessages] = useState(initialMessages);

    // Function to send a new message
    const sendMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    // Function to get all messages by chat room ID
    const selectMessagesByChatRoomId = (chatRoomId) => {
        return messages.filter((message) => message.roomId === chatRoomId);
    };

    // Function to add a new message
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

    // Function to delete a message by ID
    const deleteMessage = (messageId) => {
        setMessages((prevMessages) =>
            prevMessages.filter((message) => message.id !== messageId)
        );
    };

    // Function to edit a message by ID
    const editMessage = (messageId, newText) => {
        setMessages((prevMessages) =>
            prevMessages.map((message) =>
                message.id === messageId
                    ? { ...message, text: newText }
                    : message
            )
        );
    };

    // Function to get a specific message by ID
    const selectMessageById = (messageId) => {
        return messages.find((message) => message.id === messageId);
    };

    // Function to get all messages
    const selectAllMessages = () => {
        return messages;
    };

    return (
        <MessagesContext.Provider
            value={{
                messages,
                setMessages,
                selectMessagesByChatRoomId,
                sendMessage,
                addMessage,
                deleteMessage,
                editMessage,
                selectMessageById,
                selectAllMessages,
            }}>
            {children}
        </MessagesContext.Provider>
    );
};

// Custom hook to use MessagesContext
export const useMessagesContext = () => {
    return useContext(MessagesContext);
};
