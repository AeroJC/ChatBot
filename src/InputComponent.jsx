import { useState } from 'react';

function InputComponent({messages, setMessages}) {

    const [enteredText, setEnteredText] = useState('');
    const [isloading, setIsloading] = useState(false);

    function getTheEnteredText(event) {
      setEnteredText(event.target.value);
    }
    async function handleSend() {
      if (enteredText.trim() === '' || isloading) {
        return;
      }
      setIsloading(true);
      const newMessage =[...messages,{ message: enteredText, isUser: true }];
      setMessages(newMessage);
      setEnteredText('');
      setMessages([...newMessage,{ message: 'loading...', isUser: false }]);
      const response=await Chatbot.getResponseAsync(enteredText);
      const newMessageWithResponse=[...newMessage,{ message: response, isUser: false }];
      setMessages(newMessageWithResponse);
       setIsloading(false);
    } 

 return (
   <div className="input-container">
      <input type="text" placeholder="Enter your message" className="input-field"
      size="50" onChange={getTheEnteredText} value={enteredText}/>
      <button onClick={handleSend} className="button-send">send</button>
    </div>
 );
}
export default InputComponent;