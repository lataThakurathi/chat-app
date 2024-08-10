import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useMessagesContext } from "../contexts/MessagesContext";
import Section from "./Section";
import SectionFoot from "./SectionFoot";
import SectionHead from "./SectionHead";
import SectionMain from "./SectionMain";
import SectionTitle from "./SectionTitle";
import Message from "./Message";
import AddItemBar from "./AddItemBar"; // Assuming this is your input bar component
import { IoSendSharp } from "react-icons/io5";
import { useActiveUserContext } from "../contexts/ActiveUserContext";

const MessagesDisplay = () => {
    const { id } = useParams();
    const roomId = parseInt(id);

    const { selectMessagesByChatRoomId, addMessage } = useMessagesContext();
    const messages = selectMessagesByChatRoomId(roomId);

    const { activeUser } = useActiveUserContext();

    const [newMessageText, setNewMessageText] = useState("");

    const handleAddMessage = (e) => {
        e.preventDefault();
        if (newMessageText.trim()) {
            addMessage(newMessageText, activeUser.id, roomId);
            setNewMessageText("");
        }
    };

    const handleNewMessageInputChange = (e) => {
        setNewMessageText(e.target.value);
    };

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <Section className="messages-display-section">
            <SectionHead className="messages-display-section-head">
                <SectionTitle>Messages</SectionTitle>
            </SectionHead>
            <SectionMain className="messages-display-section-main">
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
                <div ref={messagesEndRef}></div>
            </SectionMain>
            <SectionFoot>
                <AddItemBar
                    onAddFormSubmit={handleAddMessage}
                    inputValue={newMessageText}
                    onInputChange={handleNewMessageInputChange}>
                    <button type="submit" className="btn btn-submit btn-send">
                        <IoSendSharp className="send-icon" />
                    </button>
                </AddItemBar>
            </SectionFoot>
        </Section>
    );
};

export default MessagesDisplay;
