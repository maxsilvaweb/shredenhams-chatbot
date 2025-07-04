import { useState, useEffect, FC } from 'react';

interface VideoBackgroundProps {
  onVideoLoaded: () => void;
}

export const VideoBackground: FC<VideoBackgroundProps> = ({
  onVideoLoaded,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleVideoLoad = () => {
    setIsLoaded(true);
    onVideoLoaded();
  };

  const handleVideoError = () => {
    setHasError(true);
    onVideoLoaded(); // Still call onVideoLoaded to show the app
  };

  useEffect(() => {
    // Preload the video
    const video = document.createElement('video');
    video.src = '/bg.mp4';
    video.addEventListener('loadeddata', handleVideoLoad);
    video.addEventListener('error', handleVideoError);
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleVideoLoad);
      video.removeEventListener('error', handleVideoError);
    };
  }, []);

  if (hasError) {
    // Fallback to the static image if video fails to load
    return (
      <div
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('/Screenshot 2025-03-21 at 13_47_59.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/bg.mp4"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </div>
  );
};
