function ChatComponent({message,isUser}) {
    let src="src/assets/UserIcon.png";
    if (!isUser) {
        src="src/assets/ChatBotIcon.png";
    }
    return (
        <div className={isUser ? "chat-message-user" : "chat-message-bot"}>
            {!isUser && <img src="src/assets/ChatBotIcon.png" alt="Chat Image" width="40" height="40" />}
            <h4 className="chat-message-text">{message}</h4>
            {isUser && <img src="src/assets/UserIcon.png" alt="Chat Image" width="40" height="40" />}
        </div>
    );
}
export default ChatComponent;