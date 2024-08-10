import Section from "./Section";
import SectionFoot from "./SectionFoot";
import SectionHead from "./SectionHead";
import SectionMain from "./SectionMain";
import SectionTitle from "./SectionTitle";
import AddItemBar from "./AddItemBar";
import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { useChatRoomsContext } from "../contexts/ChatRoomsContext";
import ChatRoom from "./ChatRoom";

const ChatRoomsList = () => {
    const [newChatRoomName, setNewChatRoomName] = useState("");
    const handleNewChatRoomInputChange = (e) => {
        setNewChatRoomName(e.target.value);
    };
    const { addRoom, selectAllRooms } = useChatRoomsContext();
    const chatRooms = selectAllRooms();

    const addChatRoom = (e) => {
        e.preventDefault();
        if (newChatRoomName === "") return;

        addRoom(newChatRoomName);

        setNewChatRoomName("");
    };

    return (
        <>
            <Section className="chat-room-list-section">
                <SectionHead>
                    <SectionTitle>Chat Rooms</SectionTitle>
                </SectionHead>
                <SectionMain className="chat-room-list-section-main">
                    {chatRooms.map((chatRoom) => (
                        <ChatRoom chatRoom={chatRoom} />
                    ))}
                </SectionMain>
                <SectionFoot>
                    <AddItemBar
                        onAddFormSubmit={addChatRoom}
                        inputValue={newChatRoomName}
                        onInputChange={handleNewChatRoomInputChange}>
                        <button
                            type="submit"
                            className="btn btn-submit btn-add">
                            <HiPlus className="add-icon" />
                        </button>
                    </AddItemBar>
                </SectionFoot>
            </Section>
        </>
    );
};

export default ChatRoomsList;
