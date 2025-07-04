import { useEffect, useRef, FC } from 'react';
import { ChatMessage } from '@/components/ChatMessage';
import { Message } from '@/types';

interface ChatHistoryProps {
  messages: Message[];
}

export const ChatHistory: FC<ChatHistoryProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6 space-y-4">
      {messages.length === 0 && (
        <div className="text-center py-8 md:py-12 h-full flex flex-col justify-center">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            How can I help you today?
          </h3>
          <p className="text-gray-500 text-sm md:text-base px-4">
            Ask me about our hours, products, location, lessons, or anything else!
          </p>
        </div>
      )}
      
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      
      <div ref={messagesEndRef} />
    </div>
  );
};