import React from 'react';
import { cn } from '../lib/utils';

interface CloudProps {
  className?: string;
  opacity?: number;
  blur?: boolean;
  color?: string;
}

export const Cloud: React.FC<CloudProps & { children?: React.ReactNode }> = ({ 
  className, 
  opacity = 1, 
  blur = false, 
  color = "bg-white",
  children 
}) => {
  return (
    <div 
      className={cn(
        "relative flex items-center justify-center", 
        blur && "blur-md",
        className
      )}
      style={{ opacity }}
    >
      {/* Base */}
      <div className={cn("absolute bottom-0 left-[15%] w-[70%] h-[70%] rounded-full", color)} />
      {/* Left bump */}
      <div className={cn("absolute bottom-[10%] left-0 w-[50%] h-[75%] rounded-full", color)} />
      {/* Right bump */}
      <div className={cn("absolute bottom-[15%] right-0 w-[55%] h-[70%] rounded-full", color)} />
      {/* Top bump */}
      <div className={cn("absolute top-0 left-[25%] w-[50%] h-[80%] rounded-full", color)} />
      
      {children && (
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};
