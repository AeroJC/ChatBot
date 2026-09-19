import { useState } from 'react'
import './App.css'
import InputComponent from './InputComponent'
import ChatMessages from './ChatMessages'

function App() {

  const [messages, setMessages] = useState([
    { message: "Hello, How I can help you?", isUser: false },
  ]);

  return (
    <div className="app-container">
      <ChatMessages messages={messages} />
      <InputComponent messages={messages} setMessages={setMessages} />
    </div>
  )
}

export default App
