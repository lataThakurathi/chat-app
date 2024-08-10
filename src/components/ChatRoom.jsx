import React from "react";
import { NavLink } from "react-router-dom";

const ChatRoom = (props) => {
    const { chatRoom } = props;

    return (
        <NavLink
            to={`/chat-rooms/${chatRoom.id}`}
            className={({ isActive }) =>
                isActive ? "chat-room-link active" : "chat-room-link"
            }>
            <img
                src={chatRoom.chatRoomPicture}
                alt=""
                className="chat-room-avatar"
                height="10px"
            />
            <div className="chat-room-details">
                <p className="chat-room-name">{chatRoom.name}</p>
            </div>
        </NavLink>
    );
};

export default ChatRoom;
