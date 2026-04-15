import { useEffect, useRef, useState } from "react";
import styles from "./TextSplit.module.scss";

export default function TextSplit({ block }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const isBullets = block.variant === "bullets";

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
          {isBullets ? (
            <ul className={styles.bulletList}>
              {block.body.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            block.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)
          )}
        </div>
      </div>
    </div>
  );
}
