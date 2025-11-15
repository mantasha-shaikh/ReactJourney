
      import robotProfile from '../assets/robot.png'
import userProfile from '../assets/Anya.jpg'
import dayjs from 'dayjs';

import './ChatMessage.css'
       export function ChatMessage({ message, sender ,time}) {
        // console.log(userProfile);
     
        

        return (
          <div className={sender === "user" ? "chat-user" : "chat-robot"}>
            {sender === "robot" && (
              <>
               <img
                src={robotProfile}
                alt="Friendly cartoon robot avatar with rounded features representing the chatbot assistant"
                width="50"
                className="profile"

              />
              
              </>
             
              
            )}
            <div className="chat-Message">{message}
              <p className='time'>{dayjs(time).format('HH:mm:ss')}</p>
            </div>
            {sender === "user" && (
              <img
                src={userProfile}
                alt="Default user profile avatar icon representing the chat participant"
                width="50"
                className="profile"
              />
            )}
          </div>
        );
      }