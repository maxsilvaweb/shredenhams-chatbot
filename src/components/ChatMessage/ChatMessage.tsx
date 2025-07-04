import { FC } from 'react';
import { Message } from '@/types';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={cn(
      "flex w-full mb-4 animate-in slide-in-from-bottom-2 duration-300",
      message.isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[85%] sm:max-w-[80%] md:max-w-[75%] rounded-2xl px-4 py-3 shadow-sm",
        message.isUser 
          ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white" 
          : "bg-white border border-gray-200 text-gray-800"
      )}>
        <p className="text-sm md:text-base leading-relaxed break-words">{message.text}</p>
        <span className={cn(
          "text-xs mt-1 block opacity-70",
          message.isUser ? "text-pink-100" : "text-gray-500"
        )}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};