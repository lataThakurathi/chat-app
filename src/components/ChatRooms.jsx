import { Outlet } from "react-router-dom";
import { useChatRoomContext } from "../contexts/ChatRoomContext";
import ChatRoom from "./ChatRoom";

const ChatRooms = () => {
    const { getAllChatRooms } = useChatRoomContext();
    const chatRooms = getAllChatRooms();

    return (
        <>
            <aside className="chat-rooms-region">
                {chatRooms.map((chatRoom) => (
                    <ChatRoom chatRoom={chatRoom} key={chatRoom.id} />
                ))}
            </aside>
            <main className="messages-region">{<Outlet />}</main>
        </>
    );
};

export default ChatRooms;
