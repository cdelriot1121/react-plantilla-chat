import React from 'react'

function ChatItem({ chat, setActiveChat }) {
  return (
    <li className="chat-item" onClick={() => setActiveChat(chat)}>
      {chat.name}
    </li>
  )
}

export default ChatItem
