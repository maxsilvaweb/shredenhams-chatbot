import { FC } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-44',
  };

  return (
    <img
      src="/Untitled+(1920+x+700+px).png"
      alt="Shredenhams Logo"
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
};
