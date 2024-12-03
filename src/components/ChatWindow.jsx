import React from 'react';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const messages = [
    { id: 1, sender: 'Persona', content: 'Hola, ¿cómo estás?' },
    { id: 2, sender: 'Tú', content: 'Bien, gracias. ¿Y tú?' },
    { id: 3, sender: 'Persona', content: 'Todo bien, gracias por preguntar.' },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Chat con Persona x</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === 'Tú' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                message.sender === 'Tú'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-black'
              }`}
            >
              <p className="font-semibold">{message.sender}</p>
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatWindow;