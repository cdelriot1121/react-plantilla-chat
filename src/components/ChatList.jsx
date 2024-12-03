import React from 'react';
import ChatItem from './ChatItem';

const ChatList = () => {
  const chats = [
    { id: 1, name: 'Juan Pérez', lastMessage: 'Hola que tal' },
    { id: 2, name: 'María García', lastMessage: 'Muy Bien' },
    { id: 3, name: 'Carlos López', lastMessage: 'Gracias por la ayuda' },
  ];

  return (
    <div className="overflow-y-auto h-full">
      {chats.map((chat) => (
        <ChatItem key={chat.id} name={chat.name} lastMessage={chat.lastMessage} />
      ))}
    </div>
  );
};

export default ChatList;