// import React, { useState, useEffect } from "react";
// import styles from "./ImageCarousel.module.scss";
// import Projectimg2 from "../../assets/Bosch/BoschSquare.webp";
// import Projectimg3 from "../../assets/NECC.jpg";
// import Projectimg4 from "../../assets/Lokneta/LoknetaSquare.webp";
// import Projectimg5 from "../../assets/Satvikraas/SatvikSqaure.webp";
// import gopalanimg from "../../assets/gopalan2.jpg";
// export default function ImageCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [nextIndex, setNextIndex] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const carouselImages = [
//     Projectimg2,
//     Projectimg3,
//     Projectimg4,
//     Projectimg5,
//     gopalanimg,
//   ];

//   // Auto-rotate every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       setActiveIndex((prev) => (prev + 1) % carouselImages.length);
//       setNextIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // Handle transition end
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setIsTransitioning(false);
//     }, 500);

//     return () => clearTimeout(timeout);
//   }, [activeIndex]);

//   const handlePrevClick = () => {
//     setIsTransitioning(true);
//     setActiveIndex(
//       (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
//     );
//     setNextIndex(
//       (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
//     );
//   };

//   const handleNextClick = () => {
//     setIsTransitioning(true);
//     setActiveIndex((prev) => (prev + 1) % carouselImages.length);
//     setNextIndex((prev) => (prev + 1) % carouselImages.length);
//   };

//   const handleDotClick = (index) => {
//     setIsTransitioning(true);
//     setActiveIndex(index);
//     setNextIndex((index + 1) % carouselImages.length);
//   };

//   return (
//     <section className={styles.carouselSection}>
//       <div className={styles.container}>
//         {/* Left Side - Image */}
//         <div className={styles.imageWrapper}>
//           <div className={styles.imageContainer}>
//             <div
//               className={`${styles.imageSlide} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
//               style={{
//                 backgroundImage: `url(${carouselImages[activeIndex]})`,
//               }}
//             />
//             <div
//               className={`${styles.imageSlide} ${styles.nextSlide} ${isTransitioning ? styles.fadeInNext : styles.fadeOutNext}`}
//               style={{
//                 backgroundImage: `url(${carouselImages[nextIndex]})`,
//               }}
//             />
//           </div>

//           {/* Navigation Dots */}
//           <div className={styles.dotsContainer}>
//             {carouselImages.map((_, index) => (
//               <button
//                 key={index}
//                 className={`${styles.dot} ${index === activeIndex ? styles.active : ""}`}
//                 onClick={() => handleDotClick(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Arrow Navigation */}
//           {/* <div className={styles.arrowNav}>
//             <button
//               className={styles.navButton}
//               onClick={handlePrevClick}
//               aria-label="Previous"
//             >
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <polyline points="15 18 9 12 15 6" />
//               </svg>
//             </button>
//             <button
//               className={styles.navButton}
//               onClick={handleNextClick}
//               aria-label="Next"
//             >
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <polyline points="9 18 15 12 9 6" />
//               </svg>
//             </button>
//           </div> */}
//         </div>

//         {/* Right Side - Fixed Text */}
//         <div className={styles.contentWrapper}>
//           <h2 className={styles.title}>Haraay Design Studio</h2>
//           <p className={styles.description}>
//             Haraay is a full-service design studio. We work at the intersection
//             of brand identity, digital experience, and three-dimensional craft
//             creating visual systems that don't just look extraordinary, but
//             perform.
//           </p>
//           <p className={styles.description}>
//             From a foundational identity to a full digital presence, we partner
//             with brands at every stage building systems designed to scale,
//             designed to last, and designed to win.
//           </p>
//           <button className={styles.ctaButton}>
//             Explore More
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7" />
//             </svg>
//           </button>

//           <div className={styles.slideCounter}>
//             <span className={styles.current}>
//               {String(activeIndex + 1).padStart(2, "0")}
//             </span>
//             <span className={styles.divider}>/</span>
//             <span className={styles.total}>
//               {String(carouselImages.length).padStart(2, "0")}
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import styles from "./ImageCarousel.module.scss";
import Projectimg2 from "../../assets/Bosch/BoschSquare.webp";
import Projectimg3 from "../../assets/NECC.jpg";
import Projectimg4 from "../../assets/Lokneta/LoknetaSquare.webp";
import Projectimg5 from "../../assets/Satvikraas/SatvikSqaure.webp";
import gopalanimg from "../../assets/gopalan2.jpg";
import { useNavigate } from "react-router-dom";
export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useNavigate();
  const carouselImages = [
    Projectimg2,
    Projectimg3,
    Projectimg4,
    Projectimg5,
    gopalanimg,
  ];

  // 🔥 Always derive next index (NO STATE)
  const nextIndex = (activeIndex + 1) % carouselImages.length;

  // ✅ Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // ✅ NEXT
  const handleNext = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
      setIsTransitioning(false);
    }, 500); // match CSS animation
  };

  // ✅ PREV
  const handlePrev = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveIndex(
        (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
      );
      setIsTransitioning(false);
    }, 500);
  };

  // ✅ DOT CLICK
  const handleDotClick = (index) => {
    if (index === activeIndex) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className={styles.carouselSection}>
      <div className={styles.container}>
        {/* Left Side - Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            {/* CURRENT IMAGE */}
            <div
              className={`${styles.imageSlide} ${
                isTransitioning ? styles.fadeOut : styles.fadeIn
              }`}
              style={{
                backgroundImage: `url(${carouselImages[activeIndex]})`,
              }}
            />

            {/* NEXT IMAGE */}
            <div
              className={`${styles.imageSlide} ${styles.nextSlide} ${
                isTransitioning ? styles.fadeInNext : styles.fadeOutNext
              }`}
              style={{
                backgroundImage: `url(${carouselImages[nextIndex]})`,
              }}
            />
          </div>

          {/* Dots */}
          <div className={styles.dotsContainer}>
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === activeIndex ? styles.active : ""
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          {/* Optional Arrows */}
          {/* 
          <div className={styles.arrowNav}>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div> 
          */}
        </div>

        {/* Right Content */}
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Haraay Design Studio</h2>

          <p className={styles.description}>
            Haraay is a full-service design studio. We work at the intersection
            of brand identity, digital experience, and three-dimensional craft
            creating visual systems that don't just look extraordinary, but
            perform.
          </p>

          <p className={styles.description}>
            From a foundational identity to a full digital presence, we partner
            with brands at every stage building systems designed to scale,
            designed to last, and designed to win.
          </p>

          <button
            className={styles.ctaButton}
            onClick={() => navigate("/works")}
          >
            Explore More
          </button>
          {/* Counter */}
          {/* <div className={styles.slideCounter}>
            <span className={styles.current}>
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className={styles.divider}>/</span>
            <span className={styles.total}>
              {String(carouselImages.length).padStart(2, "0")}
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
