import React, { useState, useEffect, useRef } from 'react';
import styles from './HeroCarousel.module.scss';

const HeroCarousel = ({ items, isLoaded }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);

  // Auto-advance carousel every 15 seconds
  useEffect(() => {
    if (isLoaded) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % items.length);
      }, 15000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items.length, isLoaded]);

  // Handle video play/pause when slide changes
  useEffect(() => {
    // Pause all videos first
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
      }
    });

    // Play current video if it exists
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo && items[currentIndex].type === 'video') {
      currentVideo.play().catch(console.error);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [currentIndex, items]);

  // Reset interval when manually changing slides
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % items.length);
      }, 15000);
    }
  };

  return (
    <div className={`${styles.heroCarousel} ${isLoaded ? styles.heroCarouselVisible : ''}`}>
      <div className={styles.carouselContainer}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className={styles.carouselSlide}>
              <div className={styles.mediaContainer}>
                {item.type === 'video' ? (
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={item.src}
                    alt={item.alt || `Video ${index + 1}`}
                    muted
                    loop
                    playsInline
                    className={styles.media}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt || `Image ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={styles.media}
                  />
                )}
                <div className={styles.mediaOverlay}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.carouselDots}>
        {items.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;