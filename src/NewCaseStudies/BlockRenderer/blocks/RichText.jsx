import { useEffect, useRef, useState, Fragment } from "react";
import styles from "./RichText.module.scss";

export default function RichText({ block }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "50px 0px -50px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${styles.textSection} ${
        isVisible ? styles.sectionVisible : ""
      }`}
    >
      <div className={styles.leftSide}>
        <h2 className={styles.sectionHeader}>{block.title}</h2>
        <div className={styles.sectionAccent}></div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.textContent}>
          <div className={styles.challengeItem}>
            <p className={styles.challengeTitle}>
              <span>
                {block.content.map((item, i) => (
                  <Fragment key={i}>
                    <b>{item.heading}:</b> {item.text}
                    {i < block.content.length - 1 && (
                      <>
                        <br />
                      </>
                    )}
                  </Fragment>
                ))}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
