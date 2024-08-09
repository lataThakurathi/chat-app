import React from "react";
import { Outlet } from "react-router-dom";
import ChatRoom from "./ChatRoom";
import { useChatRoomContext } from "../contexts/ChatRoomContext";

const Layout = () => {
    useChatRoomContext;
    const { getAllChatRooms } = useChatRoomContext();
    const chatRooms = getAllChatRooms();

    return (
        <>
            <div className="container main-container">
                <aside className="chat-rooms-region">
                    {chatRooms.map((chatRoom) => (
                        <ChatRoom chatRoom={chatRoom} key={chatRoom.id} />
                    ))}
                </aside>

                <main className="messages-region">{<Outlet />}</main>
            </div>
        </>
    );
};

export default Layout;
