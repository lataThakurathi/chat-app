import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatRooms from "./components/ChatRooms";
import Layout from "./components/Layout";
import MessagesDisplay from "./components/MessagesDisplay";
import { ChatRoomProvider } from "./contexts/ChatRoomContext";
import { MessageProvider } from "./contexts/MessageContext";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/chat-rooms",
                element: <ChatRooms />,
                children: [
                    {
                        path: ":id",
                        element: <MessagesDisplay />,
                    },
                ],
            },
            {
                path: "/profile",
                element: <div>User Profile Page</div>,
            },
            {
                path: "/settings",
                element: <div>Settings Page</div>,
            },
        ],
    },
]);

const App = () => {
    return (
        <UserProvider>
            <ChatRoomProvider>
                <MessageProvider>
                    <RouterProvider router={router} />
                </MessageProvider>
            </ChatRoomProvider>
        </UserProvider>
    );
};

export default App;
