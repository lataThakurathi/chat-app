import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ChatRooms from "./pages/ChatRooms";
import MessagesDisplay from "./components/MessagesDisplay";
import { ChatRoomsProvider } from "./contexts/ChatRoomsContext";
import { MessagesProvider } from "./contexts/MessagesContext";
import { ActiveUserProvider } from "./contexts/ActiveUserContext";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>,
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
                element: <h1>User Profile Page</h1>,
            },
            {
                path: "/settings",
                element: <h1>Settings Page</h1>,
            },
        ],
    },
]);

const App = () => {
    return (
        <ActiveUserProvider>
            <MessagesProvider>
                <ChatRoomsProvider>
                    <RouterProvider router={router} />
                </ChatRoomsProvider>
            </MessagesProvider>
        </ActiveUserProvider>
    );
};

export default App;
