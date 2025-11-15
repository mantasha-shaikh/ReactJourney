
    import { useAutoScroll } from "./UseAutoScroll";
    import { ChatMessage } from "./ChatMessage";
    import dayjs from "dayjs";
    import './ChatMessages.css'
  export  function ChatMessages({ chatMessages }) {
   const time = dayjs().valueOf();
        const getTime = dayjs(time).format('h:mm:ssa')
        // console.log(getTime);

        const chatMessagesRef = useAutoScroll([chatMessages]);

    
        return (
          <div className="update-container" ref={chatMessagesRef}>
            {chatMessages.map((data) => {
              return (
                <ChatMessage
                  key={data.id}
                  message={data.message}
                  sender={data.sender}
                  time={getTime}
                />
              );
            })}
          </div>
        );
      }