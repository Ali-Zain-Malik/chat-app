import { useContext, useEffect, useRef, useState } from "react"
import { ChatContext } from "../../Context/context"

const ChatTools = () => {

  const { sendMessage } = useContext(ChatContext);
  const [message, setMessage] = useState("");
  const messageRef = useRef(null);

  function handleSendMessage()
  {
    if(message.trim() === undefined || message.trim() === null || message.trim() == "")
    {
      return;
    }

    sendMessage(message.trim());
    setMessage("");
    messageRef.current.focus();
  }

  function keydownfunc(event)
  {
    if(event.key === "Enter" && event.shiftKey)
    {
      event.preventDefault();
      setMessage((prev) => prev + "\n");
    }
    else if(event.key === "Enter")
    {
      event.preventDefault();
      handleSendMessage();
    }
  }

  useEffect(() => {
    messageRef.current.focus();
  }, [])

  return (
    <div className="chat-tools">
      <div className="d-flex gap-3">
        <textarea name="" className="textarea form-control" ref={messageRef} value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={keydownfunc} placeholder="Type a message"/>
        <button type="button" className='btn send-message-btn rounded-circle px-3' onClick={handleSendMessage}><i className="bi bi-send-fill text-white"></i></button>
      </div>
    </div>
  )
}

export default ChatTools
