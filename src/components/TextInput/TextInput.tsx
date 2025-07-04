import { useState, FC } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface TextInputProps {
  onTextInput: (text: string) => void;
}

export const TextInput: FC<TextInputProps> = ({ onTextInput }) => {
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onTextInput(message.trim());
      setMessage('');
      
      // Show toast for text input
      toast({
        title: "Message sent",
        description: "Processing your question...",
        duration: 2000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 border-gray-300 focus:border-pink-500 focus:ring-pink-500 text-sm md:text-base h-10 md:h-11"
      />
      <Button 
        type="submit" 
        disabled={!message.trim()}
        className="bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 shadow-lg shadow-pink-500/25 h-10 md:h-11 px-3 md:px-4"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};