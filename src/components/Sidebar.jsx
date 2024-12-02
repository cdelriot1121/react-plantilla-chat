import React from 'react'
import ChatList from './ChatList'

function Sidebar({ isOpen, setActiveChat }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <h2>Chats</h2>
      <ChatList setActiveChat={setActiveChat} />
    </div>
  )
}

export default Sidebar