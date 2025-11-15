
    import { useAutoScroll } from "./UseAutoScroll";
    import { ChatMessage } from "./ChatMessage";
    import './ChatMessages.css'
  export  function ChatMessages({ chatMessages }) {
        const chatMessagesRef = useAutoScroll([chatMessages]);

    
        return (
          <div className="update-container" ref={chatMessagesRef}>
            {chatMessages.map((data) => {
              return (
                <ChatMessage
                  key={data.id}
                  message={data.message}
                  sender={data.sender}
                />
              );
            })}
          </div>
        );
      }