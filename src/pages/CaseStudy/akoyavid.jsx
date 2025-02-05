import React, { useEffect, useRef, useState } from 'react';
import akoyavid from "../../assets/1.mp4"
const ScrollVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    
    const handleScroll = () => {
      if (!video || !container) return;
      
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.max(0, Math.min(1, 
        1 - (containerTop / (containerHeight - windowHeight))
      ));
      
      // Update video currentTime based on scroll progress
      video.currentTime = progress * video.duration;
      
      // Check if video should be sticky
      setIsSticky(containerTop <= 0 && 
        containerTop > -(containerHeight - windowHeight));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative">
      <div 
        ref={containerRef} 
        className="min-h-screen"
      >
        <div className={`relative ${
          isSticky ? 'fixed top-0 left-0 w-full z-10' : ''
        }`}>
          <video
            ref={videoRef}
            className="w-full h-screen object-cover"
            src={akoyavid}
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>
      
      {/* Content that appears after the video */}
      <div className="min-h-screen bg-white p-8">
        <h2 className="text-3xl font-bold mb-4">Your Content Here</h2>
        <p className="text-lg">
          This content will scroll normally after the video section.
          Add any additional content you want to display below the video here.
        </p>
      </div>
    </div>
  );
};

export default ScrollVideo;