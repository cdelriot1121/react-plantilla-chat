import React from 'react';

const ChatItem = ({ name, lastMessage }) => {
  return (
    <div className="p-4 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{lastMessage}</p>
    </div>
  );
};

export default ChatItem;