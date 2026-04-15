import { useEffect, useState } from "react";
import styles from "./HeroSection.module.scss";

export default function HeroSection({ hero }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.HeroSection} ${isLoaded ? styles.heroLoaded : ""}`}
    >
      <div
        className={`${styles.headerBox} ${
          isLoaded ? styles.headerVisible : ""
        }`}
      >
        <div
          className={`${styles.title} ${isLoaded ? styles.titleVisible : ""}`}
        >
          <h2 className={styles.mainTitle}>{hero.title}</h2>
          {hero.industry && (
            <span className={styles.titleAccent}>
              Industry : {hero.industry}
            </span>
          )}
        </div>

        <div
          className={`${styles.services} ${
            isLoaded ? styles.servicesVisible : ""
          }`}
        >
          {" "}
          {hero.tagline && (
            <span className={styles.serviceAccent}>{hero.tagline}</span>
          )}
          {hero.services && (
            <p className={styles.serviceTag}>{hero.services}</p>
          )}
        </div>
      </div>

      <div
        className={`${styles.heroImg} ${isLoaded ? styles.heroImgVisible : ""}`}
      >
        <div className={styles.heroImageContainer}>
          {hero.media.type === "image" && (
            <img
              src={hero.media.src}
              alt={hero.media.alt || hero.title}
              loading="eager"
            />
          )}
          {hero.media.type === "video" && (
            <video src={hero.media.src} autoPlay muted loop playsInline />
          )}
          <div className={styles.heroImageOverlay}></div>
        </div>
      </div>
    </div>
  );
}
