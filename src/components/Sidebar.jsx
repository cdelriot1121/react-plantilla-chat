import React from 'react';
import ChatList from './ChatList';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white border-r border-gray-300">
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Chats</h2>
      </div>
      <ChatList />
    </div>
  );
};

export default Sidebar;