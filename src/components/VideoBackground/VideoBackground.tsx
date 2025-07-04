import { useState, useEffect, FC } from 'react';

interface VideoBackgroundProps {
  onVideoLoaded: () => void;
}

export const VideoBackground: FC<VideoBackgroundProps> = ({
  onVideoLoaded,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword)) || window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleVideoLoad = () => {
    setIsLoaded(true);
    onVideoLoaded();
  };

  const handleVideoError = () => {
    setHasError(true);
    onVideoLoaded(); // Still call onVideoLoaded to show the app
  };

  useEffect(() => {
    // On mobile, skip video loading and use static image
    if (isMobile) {
      setIsLoaded(true);
      onVideoLoaded();
      return;
    }

    // Preload the video for desktop
    const video = document.createElement('video');
    video.src = '/bg.mp4';
    video.addEventListener('loadeddata', handleVideoLoad);
    video.addEventListener('error', handleVideoError);
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleVideoLoad);
      video.removeEventListener('error', handleVideoError);
    };
  }, [isMobile]);

  // Show static image on mobile or if video fails to load
  if (isMobile || hasError) {
    return (
      <div
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('/Screenshot 2025-03-21 at 13_47_59.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: isLoaded ? 1 : 0,
        }}
      />
    );
  }

  // Show video on desktop
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
