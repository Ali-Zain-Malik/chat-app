import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

// Create a Provider component
export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  // Function to add a new message
  const sendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};