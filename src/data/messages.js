const messages = [
    {
        id: 1,
        senderId: 1,
        receiverId: null,
        roomId: 1,
        text: "Hello, everyone!",
        timestamp: "2024-08-09T12:00:00Z",
    },
    {
        id: 2,
        senderId: 2,
        receiverId: null,
        roomId: 1,
        text: "Hi there!",
        timestamp: "2024-08-09T12:01:00Z",
    },
    {
        id: 3,
        senderId: 1,
        receiverId: 2, // Direct message to user2
        roomId: null,
        text: "Hey, how are you?",
        timestamp: "2024-08-09T12:05:00Z",
    },
    {
        id: 4,
        senderId: 2,
        receiverId: 1,
        roomId: null,
        text: "I'm good! You?",
        timestamp: "2024-08-09T12:06:00Z",
    },
];

export default messages;
