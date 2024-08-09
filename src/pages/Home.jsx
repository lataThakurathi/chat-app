import React from "react";
import { useChatRoomContext } from "../contexts/ChatRoomContext";

const Home = () => {
    const { getAllChatRooms } = useChatRoomContext();
    const chatRooms = getAllChatRooms();

    return <></>;
};

export default Home;
