import React from "react";
import { useUserContext } from "../contexts/UserContext";
import users from "../data/users";

const Message = ({ message }) => {
    const { currentUser } = useUserContext();
    const isCurrentUser = currentUser.id === message.senderId;

    const sender = users.find((user) => user.id === message.senderId);

    const messageClassName = isCurrentUser
        ? "message message-left"
        : "message message-right";

    return (
        <div className={messageClassName}>
            <img
                src={sender.profilePicture}
                alt="Profile"
                className="profile-picture"
            />
            <div className="message-text">{message.text}</div>
            {/* <div className="timestamp">
                {new Date(message.timestamp).toLocaleTimeString()}
            </div> */}
        </div>
    );
};

export default Message;
