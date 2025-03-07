import React, { useContext } from 'react'
import Message from './Message'
import { ChatContext } from '../../Context/context'

const Conversation = () => {

  const { messages } = useContext(ChatContext);
  return (
    <ul className='conversation-messages'>
      <div className='d-flex justify-content-center'>Loading older messages</div>
      {messages.map((message, index) => 
        <Message message={message} key={index} />
      )}
    </ul>
  )
}

export default Conversation
