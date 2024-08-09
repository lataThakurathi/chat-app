import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { ChatRoomProvider } from "./contexts/ChatRoomContext";
import { MessageProvider } from "./contexts/MessageContext";
import Layout from "./components/Layout"; // Import the Layout component

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Wrap routes with Layout
        children: [
            {
                path: "/",
                element: <div>Home Page</div>,
            },
            {
                path: "/chat/:roomId",
                element: <div>Chat Room Page</div>,
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
