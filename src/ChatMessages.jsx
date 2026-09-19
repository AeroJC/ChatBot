import ChatComponent from "./ChatComponent";
import { useState,useRef,useEffect } from "react";

function ChatMessages({messages}) {
  const messageComponentRef =useRef(null);
   
  useEffect(() =>{
  const messageComponent = messageComponentRef.current;
  if (messageComponent) {
    messageComponent.scrollTop = messageComponent.scrollHeight;    
  }
  },[messages]);
  
  return(
    <div className="chat-messages-container" ref={messageComponentRef}>
      {messages.map((msg, index) => (
        <ChatComponent key={index} message={msg.message} isUser={msg.isUser} />
      )) }
    </div>
  ) ;  
}
export default ChatMessages;