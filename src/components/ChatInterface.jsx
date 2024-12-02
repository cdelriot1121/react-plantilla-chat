import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ChatWindow from './ChatWindow'
import '../ChatInterface.css'

function ChatInterface() {
  const [activeChat, setActiveChat] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={`chat-interface ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar isOpen={isSidebarOpen} setActiveChat={setActiveChat} />
      <ChatWindow activeChat={activeChat} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default ChatInterface