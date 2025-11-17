import { useState,useEffect} from "react";
import { ChatInput } from "./componenet/ChatInput";
import {Chatbot} from 'supersimpledev'
import { ChatMessages } from "./componenet/ChatMessages";

import "./App.css";


function App() {
    const [chatMessages, setChatMessages] = useState(
      JSON.parse(localStorage.getItem('message'))  ||[]
    );



    
  useEffect(()=>{
   Chatbot.addResponses({
    'goodbye':'have great day',
    'great':"appriciate it  ",
    'hi':'hello anya',
    'give me Unique Id':(()=>{
      return `sure here is unique Id :${crypto.randomUUID()}`
    })
   })
  },[])
  

    useEffect(() => {
    localStorage.setItem('message', JSON.stringify(chatMessages));
  }, [chatMessages]);


  // console.log(
  //   chatMessages.length === 0 ? "welcom to chatbot project" : chatMessages
  // );
  //

  return (
    <div className="chatApp">
      {chatMessages.length === 0 && (
        <p className="welcome">
          Welcom to chatbot Project, Lets talk with Chats yehh...{" "}
        </p>
      )}
      <ChatMessages
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      
    </div>
  );
}

export default App;
