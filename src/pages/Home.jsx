import React from "react";
import { useChatRoomContext } from "../contexts/ChatRoomContextOld";

const Home = () => {
    const { getAllChatRooms } = useChatRoomContext();
    const chatRooms = getAllChatRooms();

    return <></>;
};

export default Home;
