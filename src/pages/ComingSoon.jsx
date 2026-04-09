import React, { useState, useEffect } from "react";
import styles from "./ComingSoon.module.scss";

const ComingSoon = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "we are Revamping the website !";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.comingSoonContainer}>
      {/* Main content */}
      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          {/* Animated heading */}
          <div className={styles.headingSection}>
            <h1 className={styles.mainTitle}>
              <span className={styles.typingText}>{displayText}</span>
              <span className={styles.cursor}></span>
            </h1>
          </div>

          {/* Subheading */}
          <div className={styles.subheadingSection}>
            <p className={styles.subtitle}>
              upcoming projects are on the horizon
            </p>
            <div className={styles.accentLine}></div>
          </div>

          {/* Description */}
          <div className={styles.descriptionSection}>
            <p className={styles.descriptionText}>
              We're crafting something extraordinary. Stay tuned for exciting
              new Projects and innovations coming your way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
