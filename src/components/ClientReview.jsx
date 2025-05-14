import React, { useEffect, useState } from "react";
import styles from "./Clientreview.module.scss";

const testimonials = [
  {
    quote:
      "The new website exceeded our expectations — it not only looks stunning but also performs incredibly well. The 3D visuals and seamless user flow have set a new standard for how we showcase our projects.",
    name: "Gopalan Group",
    role: "Marketing Head",
    stars: 5,
  },
  
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000); // 15 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`${styles.testimonial} ${
            index === currentIndex ? styles.active : ""
          }`}
        >
          <h2 className={styles.heading}>Client Testimonial</h2>
          <p className={styles.quote}>"{testimonial.quote}"</p>
         <div className={styles.bottom}>
             <div className={styles.stars}>
            {Array(testimonial.stars)
              .fill()
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
          </div>
        <div>
              <p className={styles.name}>{testimonial.name}</p>
          <p className={styles.role}>{testimonial.role}</p>
        </div>
         </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCarousel;
