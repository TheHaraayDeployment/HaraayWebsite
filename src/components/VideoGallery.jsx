import React, { useState, useEffect } from 'react';
import  styles from  "./ImageGallery.module.scss";
const Carousel = ({ images, id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [activeFullscreenId, setActiveFullscreenId] = useState(null);
 const [isFullscreen, setActiveFullscreenId] = useState(false);
  const openFullscreen = (carouselId) => {
    setActiveFullscreenId(carouselId);
    document.body.classList.add("no-scroll");
  };

  const closeFullscreen = () => {
    setActiveFullscreenId(null);
    document.body.classList.remove("no-scroll");
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className={styles.carouselWrapper}>
                   
    <div className={styles.carousel}>
      <video
        src={images[0]} autoPlay loop muted
        alt={`Slide ${currentIndex + 1}`}
        className={styles.akoyascaseimage}
        onClick={openFullscreen} // Opens full-screen when clicked
      />{" "}
      <button className={styles.leftcarrow} onClick={openFullscreen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
        >
          <rect width="52" height="52" rx="26" fill="grey" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 25.916L21.9103 18.0038L23.1969 19.2886L17.4782 25.0073L38 25.0073V26.8246L17.4782 26.8246L23.1969 32.5415L21.9103 33.8281L14 25.916Z"
            fill="white"
          />
        </svg>
      </button>{" "}
      <button className={styles.rightcarrow} onClick={openFullscreen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
        >
          <rect width="52" height="52" rx="26" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38 25.9122L30.0897 33.8243L28.8031 32.5396L34.5218 26.8208H14V25.0036H34.5218L28.8031 19.2866L30.0897 18L38 25.9122Z"
            fill="white"
          />
        </svg>
      </button>
  
    </div>

  
    {isFullscreen && (
      <div className={styles.fullscreenOverlay}>
        <button
          className={styles.closeButton}
          onClick={closeFullscreen}
        >
          ✖
        </button>
        <video  autoPlay loop muted
          src={images[currentIndex]}
          className={styles.fullscreenImage}
          alt={`Slide ${currentIndex + 1}`}
        />
        <button className={styles.leftcarrow} onClick={handlePrev}>
          ◀
        </button>
        <button className={styles.rightcarrow} onClick={handleNext}>
          ▶
        </button>
      </div>
    )}
  </div>
  );
};

export default Carousel;