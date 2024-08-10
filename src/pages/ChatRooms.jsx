import { Outlet } from "react-router-dom";
import ChatRoomsList from "../components/ChatRoomsList";

const ChatRooms = () => {
    return (
        <div className="chat-rooms">
            <ChatRoomsList />
            {<Outlet />}
        </div>
    );
};

export default ChatRooms;
