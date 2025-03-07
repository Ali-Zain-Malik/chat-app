import React from 'react'
import Conversation from './Conversation'
import ChatTools from './ChatTools'

const Body = () => {
  return (
    <>
      <div className="body col-lg-9 col-12">
        <div className="conversation-body">
         <Conversation />
         <ChatTools />
        </div>
      </div>
    </>
  )
}

export default Body
