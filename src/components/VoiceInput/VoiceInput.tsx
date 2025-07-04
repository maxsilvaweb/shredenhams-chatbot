import { useState, useEffect, useCallback, useRef, FC } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { cn } from '@/lib/utils';

interface VoiceInputProps {
  onVoiceInput: (text: string) => void;
  onVoiceError?: (error: string) => void;
  onVoiceStart?: () => void;
}

export const VoiceInput: FC<VoiceInputProps> = ({ 
  onVoiceInput, 
  onVoiceError,
  onVoiceStart 
}) => {
  const { 
    isListening, 
    transcript, 
    startListening, 
    stopListening, 
    hasRecognitionSupport,
    error 
  } = useSpeechRecognition();

  const [isProcessing, setIsProcessing] = useState(false);
  const lastTranscriptRef = useRef<string>('');

  // Handle transcript changes
  useEffect(() => {
    if (transcript && !isListening && transcript !== lastTranscriptRef.current) {
      lastTranscriptRef.current = transcript;
      setIsProcessing(true);
      onVoiceInput(transcript);
      setTimeout(() => setIsProcessing(false), 500);
    }
  }, [transcript, isListening]);

  // Handle errors
  useEffect(() => {
    if (error && onVoiceError) {
      onVoiceError(error);
    }
  }, [error]);

  const handleStartListening = useCallback(() => {
    if (onVoiceStart) {
      onVoiceStart();
    }
    lastTranscriptRef.current = ''; // Reset the last transcript
    startListening();
  }, [onVoiceStart, startListening]);

  if (!hasRecognitionSupport) {
    return (
      <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
        <Volume2 className="h-4 w-4 mr-2 text-gray-500" />
        <span className="text-sm text-gray-600 text-center">Voice recognition not supported in this browser</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-3">
      <Button
        onClick={isListening ? stopListening : handleStartListening}
        disabled={isProcessing}
        className={cn(
          "h-14 w-14 md:h-16 md:w-16 rounded-full transition-all duration-200 shadow-lg",
          isListening 
            ? "bg-red-500 hover:bg-red-600 animate-pulse shadow-red-500/25" 
            : "bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 shadow-pink-500/25"
        )}
      >
        {isListening ? (
          <MicOff className="h-5 w-5 md:h-6 md:w-6 text-white" />
        ) : (
          <Mic className="h-5 w-5 md:h-6 md:w-6 text-white" />
        )}
      </Button>
      
      <div className="text-center min-h-[20px]">
        {isListening && (
          <p className="text-sm text-pink-600 font-medium animate-pulse">
            Listening...
          </p>
        )}
        {isProcessing && (
          <p className="text-sm text-green-600 font-medium">
            Processing your message...
          </p>
        )}
      </div>
    </div>
  );
};