import React, { useState } from "react";
import styles from "./CarouselPopup.module.scss";

import brandimg1 from "../../assets/Akoya/a1.png";
import brandimg2 from "../../assets/Akoya/a2.png";
import brandimg3 from "../../assets/Akoya/a3.png";
import brandimg4 from "../../assets/Akoya/a4.png";
import brandimg5 from "../../assets/Akoya/a5.png";
import brandimg6 from "../../assets/Akoya/a6.png";

const CarouselPopup = ({ setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [brandimg1, brandimg2, brandimg3, ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
    

      
        <div className={styles.popupOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>✖</button>

            <div className={styles.carousel}>
              <button className={styles.prevButton} onClick={prevSlide}>‹</button>

              <div className={styles.carouselContainer}>
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`${styles.carouselSlide} 
                      ${index === currentIndex ? styles.active : ""}
                      ${index === (currentIndex - 1 + images.length) % images.length ? styles.prev : ""}
                      ${index === (currentIndex + 1) % images.length ? styles.next : ""}
                    `}
                  >
                    <img src={src} alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </div>

              <button className={styles.nextButton} onClick={nextSlide}>›</button>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default CarouselPopup;
