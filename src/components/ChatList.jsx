import React from 'react'

const chats = [
  { id: 1, name: 'Persona1', avatar: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Persona2', avatar: 'https://via.placeholder.com/40' },
  { id: 3, name: 'Persona3', avatar: 'https://via.placeholder.com/40' },
]

function ChatList({ setActiveChat }) {
  return (
    <ul className="chat-list">
      {chats.map((chat) => (
        <li key={chat.id} className="chat-item" onClick={() => setActiveChat(chat)}>
          <img width="35" height="35" src="https://img.icons8.com/fluency-systems-regular/50/user-male-circle--v2.png" alt="user-male-circle--v2"/>
          <span className="chat-name">{chat.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default ChatList