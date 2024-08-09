import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMessageContext } from "../contexts/MessageContext";
import { useUserContext } from "../contexts/UserContext";
import Message from "./Message";
import { IoSendSharp } from "react-icons/io5";

const MessagesDisplay = () => {
    const { id } = useParams();
    const chatRoomId = parseInt(id);
    const { getMessagesByChatRoomId, addMessage } = useMessageContext();
    const { currentUser } = useUserContext(); // Assuming you have a useUserContext to get current user
    const messages = getMessagesByChatRoomId(chatRoomId);

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onAddFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addMessage(inputValue, currentUser.id, chatRoomId); // Use currentUser id and chatRoomId
            setInputValue(""); // Clear the input box after sending
        }
    };

    return (
        <div className="messages-display">
            <div className="messages-box">
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            <div className="new-message-box">
                <form
                    onSubmit={onAddFormSubmit}
                    className="input-form input-form-send">
                    <input
                        type="text"
                        className="input-box"
                        placeholder="Enter new message here"
                        value={inputValue}
                        onChange={onInputChange}
                    />
                    <button type="submit" className="btn btn-submit btn-send">
                        <IoSendSharp className="send-icon" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MessagesDisplay;
