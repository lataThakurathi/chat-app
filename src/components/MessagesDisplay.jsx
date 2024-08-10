import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMessagesContext } from "../contexts/MessagesContext";
import Section from "./Section";
import SectionFoot from "./SectionFoot";
import SectionHead from "./SectionHead";
import SectionMain from "./SectionMain";
import SectionTitle from "./SectionTitle";
import Message from "./Message";
import AddItemBar from "./AddItemBar"; // Assuming this is your input bar component
import { IoSendSharp } from "react-icons/io5";

const MessagesDisplay = () => {
    const { id } = useParams();
    const roomId = parseInt(id);

    const { selectMessagesByChatRoomId, addMessage } = useMessagesContext();
    const messages = selectMessagesByChatRoomId(roomId);

    // State to manage the input value
    const [newMessageText, setNewMessageText] = useState("");

    // Function to handle form submission for adding a new message
    const handleAddMessage = (e) => {
        e.preventDefault();
        if (newMessageText.trim()) {
            addMessage(newMessageText, 1, roomId); // Assuming senderId is 1 for now
            setNewMessageText(""); // Clear the input field
        }
    };

    // Function to handle input change
    const handleNewMessageInputChange = (e) => {
        setNewMessageText(e.target.value);
    };

    return (
        <Section className="messages-display-section">
            <SectionHead className="messages-display-section-head">
                <SectionTitle>Messages</SectionTitle>
            </SectionHead>
            <SectionMain className="messages-display-section-main">
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
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
