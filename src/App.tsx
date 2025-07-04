import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { ChatHistory } from '@/components/ChatHistory';
import { VoiceInput } from '@/components/VoiceInput';
import { TextInput } from '@/components/TextInput';
import { VideoBackground } from '@/components/VideoBackground';
import { VideoPreloader } from '@/components/VideoPreloader';
import { Logo } from '@/components/Logo';
import { Toaster } from '@/components/ui/toaster';
import { Message } from '@/types';
import { chatService } from '@/services/chatService';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { toast } = useToast();

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleUserInput = async (input: string, isVoice = false) => {
    // Add user message
    addMessage(input, true);

    // Show toast for voice input
    if (isVoice) {
      toast({
        title: 'Voice message received',
        description: 'Processing your voice input...',
        duration: 2000,
      });
    }

    // Show processing state
    setIsProcessing(true);

    // Simulate processing delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Get bot response
    const response = chatService.findResponse(input);
    const category = chatService.getResponseCategory(input);

    addMessage(response, false);

    // Show success toast with category-specific message
    const categoryMessages = {
      hours: 'Store hours information provided',
      products: 'Product information found',
      location: 'Location details shared',
      lessons: 'Lesson information provided',
      services: 'Service details shared',
      policy: 'Policy information provided',
      default: 'Response generated successfully',
    };

    toast({
      title: 'Response ready',
      description:
        categoryMessages[category as keyof typeof categoryMessages] ||
        categoryMessages.default,
      duration: 3000,
    });

    setIsProcessing(false);
  };

  const handleVoiceError = (error: string) => {
    toast({
      title: 'Voice recognition error',
      description: error,
      variant: 'destructive',
      duration: 4000,
    });
  };

  const handleVoiceStart = () => {
    toast({
      title: 'Listening...',
      description: "Speak now, I'm listening to your question",
      duration: 2000,
    });
  };

  const handleVideoLoaded = () => {
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      setIsVideoLoaded(true);
    }, 500);
  };

  return (
    <>
      {/* Video Preloader */}
      <VideoPreloader isVisible={!isVideoLoaded} />

      {/* Main App */}
      <div className="min-h-screen w-screen flex items-center justify-center p-4 md:fixed md:inset-0 md:h-screen">
        {/* Video Background */}
        <VideoBackground onVideoLoaded={handleVideoLoaded} />

        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-0"></div>

        <div
          className={`relative z-10 w-full max-w-4xl min-h-screen md:h-full md:max-h-[90vh] flex flex-col transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Header */}
          <div className="text-center py-6 flex-shrink-0">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3">
                <Logo size="xl" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              Skate Shop Assistant
            </h1>
            <p className="text-white/90 text-base md:text-lg drop-shadow-md">
              Your friendly voice and text bot
            </p>
          </div>

          {/* Main Chat Interface */}
          <div className="flex-1 min-h-[60vh] md:min-h-0 bg-transparent">
            <Card className="bg-white/95 backdrop-blur-md shadow-2xl border-0 flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 min-h-0">
                <ChatHistory messages={messages} />
              </div>

              {/* Processing Indicator */}
              {isProcessing && (
                <div className="px-4 py-3 border-t border-gray-200 flex-shrink-0">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-pink-500"></div>
                    <span>Thinking...</span>
                  </div>
                </div>
              )}

              {/* Input Section */}
              <div className="p-4 md:p-6 border-t border-gray-200 bg-gray-50/50 flex-shrink-0">
                <div className="space-y-4">
                  {/* Voice Input */}
                  <VoiceInput
                    onVoiceInput={(text) => handleUserInput(text, true)}
                    onVoiceError={handleVoiceError}
                    onVoiceStart={handleVoiceStart}
                  />

                  <div className="flex items-center space-x-4">
                    <Separator className="flex-1" />
                    <span className="text-sm text-gray-500 font-medium">
                      OR
                    </span>
                    <Separator className="flex-1" />
                  </div>

                  {/* Text Input */}
                  <TextInput
                    onTextInput={(text) => handleUserInput(text, false)}
                  />
                </div>
              </div>
            </Card>
            {/* Footer */}
            <div className="text-center py-6 text-white/80 text-sm flex-shrink-0 drop-shadow-md">
              <div className="flex items-center justify-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">
                  Click the microphone to speak or type a message for a response
                </span>
                <span className="sm:hidden">Speak or type your message</span>
              </div>
            </div>
          </div>
        </div>

        {/* Toast notifications */}
        <div className="z-50">
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;
