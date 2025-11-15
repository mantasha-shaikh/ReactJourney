import { useState} from 'react'
import{Chatbot} from 'supersimpledev';
  import dayjs from "dayjs";
import spinnerLoad from '../assets/loading-spinner.gif'
import './ChatInput.css'

   export function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");
        const [isLoad, setLoad] = useState(false); // step 2

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        async function sendInputMess() {
          if (isLoad || inputText.trim() === "") {
            return;
          }

          setLoad(true);

          // state only update if all code is excecuted
          //setMessages 2  call here so upadate new the lost pervious messa
          //insted of this we use store in const variables

          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
               time:dayjs().valueOf(),
            },
          ];
          setChatMessages(newChatMessages);
          setInputText("");

          setChatMessages([
            ...newChatMessages,
            {
              message: <img className="loading" src={spinnerLoad} />,
              sender: "robot",
              id: crypto.randomUUID(),
               time:dayjs().valueOf(),
            },
          ]);

          const response = await Chatbot.getResponseAsync(inputText);
          // aggra response nahi aye tho jab tak loding rahe warna show
          //   console.log(response);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID(),
               time:dayjs().valueOf(),
            },
          ]);
             setLoad(false);
        }

        function HandleBtn(event) {
          if (event.key === "Enter") sendInputMess();
          else if (event.key === "Esc" || event.key === "Escape")
            setInputText("");

       
        }
        return (
          <div className="searchbar">
            <input
              placeholder="Send message to chatbot"
              type="text"
              size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={HandleBtn}
              className="inputbox"
            />
            <button onClick={sendInputMess} className="sendbtn">
              send
            </button>
          </div>
        );
      }