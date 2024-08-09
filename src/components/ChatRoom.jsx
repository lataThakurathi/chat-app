import React from "react";
import { Link, useParams } from "react-router-dom";

const ChatRoom = ({ chatRoom }) => {
    const { id } = useParams();
    return (
        <Link
            to={`/chat-rooms/${chatRoom.id}`}
            className={`chat-room-link ${
                parseInt(id) === chatRoom.id ? "active" : ""
            }`}>
            <div
                className={`chat-room ${
                    parseInt(id) === chatRoom.id ? "active" : ""
                }`}>
                <img
                    src={chatRoom.chatRoomPicture}
                    className="chat-room-image"
                    alt=""
                />
                <div className="chat-room-details">
                    <p className="chat-room-name">{chatRoom.name}</p>
                </div>
            </div>
        </Link>
    );
};

export default ChatRoom;
