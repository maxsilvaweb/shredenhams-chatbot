import { FC } from 'react';
import { Logo } from '@/components/Logo';

interface VideoPreloaderProps {
  isVisible: boolean;
}

export const VideoPreloader: FC<VideoPreloaderProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
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

        <div className="flex items-center justify-center space-x-2 text-white/80">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-pink-500"></div>
          <span className="text-lg">Loading experience...</span>
        </div>

        <div className="mt-6 w-64 bg-gray-800 rounded-full h-2 mx-auto">
          <div
            className="bg-gradient-to-r from-pink-500 to-fuchsia-500 h-2 rounded-full animate-pulse"
            style={{ width: '70%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};
