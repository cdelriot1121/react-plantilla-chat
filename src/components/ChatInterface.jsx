import React from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';

const ChatInterface = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default ChatInterface;