import { useState, useRef, useEffect } from "react";
import { ChatInput } from "./componenet/ChatInput";
import { ChatMessage } from "./componenet/ChatMessage";
import { ChatMessages } from "./componenet/ChatMessages";

import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  console.log(
    chatMessages.length === 0 ? "welcom to chatbot project" : chatMessages
  );
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
