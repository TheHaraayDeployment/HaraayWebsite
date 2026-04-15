import { useState, useEffect, useRef } from "react";
import styles from "./MediaModal.module.scss";

export default function MediaModal({ media, onClose }) {
  const isCarousel = Array.isArray(media.items);
  const items = isCarousel ? media.items : [media];
  const initialIndex = isCarousel ? media.index : 0;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && items.length > 1) handleNext();
      if (e.key === "ArrowLeft" && items.length > 1) handlePrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [items.length, onClose]);

  // Lock body scroll while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (items.length > 1) {
      if (distance > minSwipeDistance) handleNext();
      if (distance < -minSwipeDistance) handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const current = items[currentIndex];
  const showControls = items.length > 1;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button
        className={styles.close}
        onClick={onClose}
        aria-label="Close preview"
      >
        ×
      </button>

      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.mediaWrapper} key={currentIndex}>
          {current.type === "image" && (
            <img src={current.src} alt="" className={styles.media} />
          )}

          {current.type === "video" && (
            <video
              src={current.src}
              className={styles.media}
              controls
              autoPlay
              playsInline
            />
          )}
        </div>

        {showControls && (
          <>
            <button
              className={`${styles.arrow} ${styles.prev}`}
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous"
            >
              ‹
            </button>

            <button
              className={`${styles.arrow} ${styles.next}`}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next"
            >
              ›
            </button>

            <div className={styles.counter}>
              {currentIndex + 1} / {items.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
