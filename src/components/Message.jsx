import React from "react";
import { useActiveUserContext } from "../contexts/ActiveUserContext";
import clsx from "clsx";
import users from "../data/users";

const Message = (props) => {
    const { message } = props;

    const { activeUser } = useActiveUserContext();

    const sender = users.find((user) => user.id === message.senderId);

    return (
        <div
            className={clsx(
                "message",
                message.senderId === activeUser.id
                    ? "message-right"
                    : "message-left"
            )}>
            <img
                src={sender.profilePicture}
                className="message-sender-image"
                alt=""
            />
            <p className="message-text">{message.text}</p>
        </div>
    );
};

export default Message;
