import React, { useRef, useState, useEffect } from "react";
import styles from "./ScrollableSection.module.scss";
import imgSubscribe from "../pages/LandingScreen/heroSecImages/Akoya.webp";
import imgSubmit from "../pages/LandingScreen/heroSecImages/Bosch.webp";
import imgDesigns from "../pages/LandingScreen/heroSecImages/Purus.webp";
import imgRevise from "../pages/LandingScreen/heroSecImages/Satvik.webp";
import imgPause from "../pages/LandingScreen/heroSecImages/Alankar.webp";

export default function ScrollableSection() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Process steps data
  const steps = [
    {
      id: 1,
      title: "Subscribe",
      description: "Choose a plan that fits your workflow.",
      image: imgSubscribe,
    },
    {
      id: 2,
      title: "Submit Requests",
      description: "Add unlimited design tasks to your dashboard.",
      image: imgSubmit,
    },
    {
      id: 3,
      title: "Get Designs",
      description:
        "We work on one (or more) request(s) at a time depending on your plan.",
      image: imgDesigns,
    },
    {
      id: 4,
      title: "Review & Revise",
      description: "Unlimited revisions until you're satisfied.",
      image: imgRevise,
    },
    {
      id: 5,
      title: "Pause or Cancel Anytime",
      description: "No questions asked. No commitments.",
      image: imgPause,
    },
  ];

  // Check scroll position
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll function
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust scroll distance
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Update scroll buttons on scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Initial check

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, []);

  return (
    <section className={styles.scrollableSection}>
      <div className={styles.container}>
        {/* Scrollable Container */}
        <div className={styles.scrollContainer} ref={scrollContainerRef}>
          <div className={styles.cardsWrapper}>
            {steps.map((step) => (
              <div key={step.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={step.image} alt={step.title} loading="lazy" />
                  <span className={styles.stepNumber}>
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDescription}>{step.description}</p>
                </div>
              </div>
            ))}
            <div className={styles.trailingSpacer} aria-hidden="true" />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className={styles.scrollNav}>
          <button
            className={styles.scrollBtn}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={styles.scrollBtn}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
