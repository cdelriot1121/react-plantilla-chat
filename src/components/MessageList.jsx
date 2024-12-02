import React from 'react'

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message.id} className={`message ${message.isUser ? 'user' : 'other'}`}>
          {message.text}
        </div>
      ))}
    </div>
  )
}

export default MessageList