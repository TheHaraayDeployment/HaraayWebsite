import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './MobileCarousel.module.scss';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MobileCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);
  const autoPlayRef = useRef(null);
  
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Optimized slide functions with throttling
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [currentIndex, isTransitioning]);

  // Optimized touch handlers with passive listeners
  const onTouchStart = useCallback((e) => {
    touchEndRef.current = null;
    touchStartRef.current = e.touches[0].clientX;
  }, []);

  const onTouchMove = useCallback((e) => {
    touchEndRef.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    
    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  // Auto-play with cleanup
  useEffect(() => {
    if (images.length <= 1) return;
    
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [nextSlide, images.length]);

  // Pause auto-play on user interaction
  const pauseAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  }, []);

  const resumeAutoPlay = useCallback(() => {
    if (images.length <= 1) return;
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  }, [nextSlide, images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.mobileCarousel}>
      <div 
        className={styles.carouselContainer}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        {/* Main Image Display */}
        <div className={styles.imageWrapper}>
          <img 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`}
            className={styles.carouselImage}
            loading="lazy"
            decoding="async"
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button 
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={prevSlide}
                disabled={isTransitioning}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button 
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={nextSlide}
                disabled={isTransitioning}
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className={styles.dotsContainer}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.activeDot : ''
                }`}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className={styles.counter}>
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileCarousel;