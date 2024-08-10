import React, { createContext, useContext, useState } from "react";

// Create the ChatRoomsContext
export const ChatRoomsContext = createContext();

// ChatRoomsProvider to manage chat rooms
export const ChatRoomsProvider = ({ children }) => {
    const [chatRooms, setChatRooms] = useState([
        {
            id: 1,
            name: "General",
            chatRoomPicture: "/chat-rooms/img7.jpg",
            participants: [1, 2],
        },
        {
            id: 2,
            name: "Sports",
            chatRoomPicture: "/chat-rooms/img11.jpg",
            participants: [1],
        },
    ]);

    // Function to create a new chat room
    const addRoom = (
        roomName,
        chatRoomPicture = "/chat-rooms/img7.jpg",
        participants = [1]
    ) => {
        const newRoom = {
            id: chatRooms.length + 1,
            name: roomName,
            chatRoomPicture,
            participants,
        };
        setChatRooms([...chatRooms, newRoom]);
    };

    // Function to remove a chat room by id
    const removeRoom = (roomId) => {
        setChatRooms(chatRooms.filter((room) => room.id !== roomId));
    };

    // Function to add a user to a chat room by id
    const addUserToRoom = (roomId, userId) => {
        setChatRooms(
            chatRooms.map((room) =>
                room.id === roomId
                    ? { ...room, participants: [...room.participants, userId] }
                    : room
            )
        );
    };

    // Function to remove a user from a chat room by id
    const removeUserFromRoom = (roomId, userId) => {
        setChatRooms(
            chatRooms.map((room) =>
                room.id === roomId
                    ? {
                          ...room,
                          participants: room.participants.filter(
                              (id) => id !== userId
                          ),
                      }
                    : room
            )
        );
    };

    // Function to select all chat rooms
    const selectAllRooms = () => chatRooms;

    // Function to select a specific chat room by id
    const selectRoomById = (roomId) => {
        return chatRooms.find((room) => room.id === roomId);
    };

    return (
        <ChatRoomsContext.Provider
            value={{
                chatRooms,
                addRoom,
                removeRoom,
                addUserToRoom,
                removeUserFromRoom,
                selectAllRooms,
                selectRoomById,
            }}>
            {children}
        </ChatRoomsContext.Provider>
    );
};

// Custom hook to use ChatRoomsContext
export const useChatRoomsContext = () => {
    return useContext(ChatRoomsContext);
};
