import { Outlet } from "react-router-dom";
import { useChatRoomContext } from "../contexts/ChatRoomContext";
import Navbar from "./Navbar";

const Layout = () => {
    const { getAllChatRooms } = useChatRoomContext();

    return (
        <div className="container main-container">
            <Navbar />

            {<Outlet />}
        </div>
    );
};

export default Layout;
