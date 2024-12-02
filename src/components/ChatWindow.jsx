import React, { useState } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

function ChatWindow({ activeChat, toggleSidebar }) {
  const [messages, setMessages] = useState([])

  const sendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      isUser: true,
    }
    setMessages([...messages, newMessage])
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <button className="toggle-sidebar" onClick={toggleSidebar}>
          ☰
        </button>
        {activeChat && <h2>{activeChat.name}</h2>}
      </div>
      {activeChat ? (
        <>
          <MessageList messages={messages} />
          <MessageInput onSendMessage={sendMessage} />
        </>
      ) : (
        <p className="no-chat-selected">Select a chat to start messaging</p>
      )}
    </div>
  )
}

export default ChatWindow