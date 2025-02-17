import React, { useEffect, useRef , useState } from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import styles from "./AkoyaCaseStudy.module.scss";

import akoyahero from "../../assets/Bosch/BoschHeroVid.mp4";
import akoyaoverview from "../../assets/Bosch/sec2.jpg";
import akoyaoverview1 from "../../assets/Bosch/sec22.jpg";
import akoyabranding from "../../assets/Bosch/sec3.jpg";
import akoyacolorpallet from "../../assets/bakers_casestudy_colorpallet.svg";
import akoyapackaging from "../../assets/Bosch/sec4.jpg";
import bakersstudiesimg1 from "../../assets/Akoya/AkoyaFullimg.png";
import bakersstudiesimg2 from "../../assets/Lokneta/lokneta.webp";
import bakersstudiesimg3 from "../../assets/comingsooncard.png";
const BakersCaseStudy = () => {
  const heroRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true, // Reveal only once
    threshold: 0.2, // Percentage of the section visible before triggering
  });

  // Motion variants for animation
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start state: hidden and shifted down
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // End state: visible and smooth
  };
  const variants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.8 }, // delay each card by 0.3s
    }),
  };

  const cards = [
    { src: bakersstudiesimg1, title: "Akoya" },
    { src: bakersstudiesimg2, title: "Lokneta" },
    { src: bakersstudiesimg3, title: "Coming Soon" },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const images = [akoyaoverview,akoyaoverview1
   
    ];
  // useEffect(() => {
  //   const heroElement = heroRef.current;
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         heroElement.style.position = "sticky";
  //         heroElement.style.top = "000";
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );
  //   observer.observe(heroElement);

  //   return () => {
  //     observer.unobserve(heroElement);
  //   };
  // }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={styles.akoyacasestudy}
    >
      <div className={styles.akoyahero}>
        <div className={styles.akoyaherobackground}>
          {/* <Video src={akoyahero} alt="akoya Street Case Study" /> */}
          <video className={styles.herovideo} loop src={akoyahero} autoPlay muted></video>
        </div>
        <div className={styles.akoyaherocontent}>
          <h1>Bosche air purifire</h1>
          <p>Inspiring for Innovation</p>
        </div>
      </div>
      <div className={styles.akoyacasecontainer}>
        {/* Overview Section */}
        <div className={styles.akoyacasesection}>
          <div className={styles.akoyacasetext}>
            <h2>Background</h2>{" "}
            <div className={styles.rightbox}>
              <p>
                Bosche, a brand dedicated to clean and healthy living, wanted to
                showcase its air purifier with a compelling visual narrative.
                Haraay Design stepped in to create high-quality 3D animation and
                imagery, highlighting the purifier’s sleek design, advanced
                filtration technology, and efficiency in action.
              </p>
            </div>
          </div>
          <div className={styles.akoyacasetext}>
            <h2>Challenges</h2>{" "}
            <div className={styles.rightbox}>
              <p>
                <ul>
                  <li>
                    Effectively demonstrating the air purification process
                    visually
                  </li>{" "}
                  <li>
                    Showcasing the product’s premium aesthetics and
                    functionality.
                  </li>{" "}
                  <li>
                    Creating engaging content for marketing and digital
                    platforms.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={styles.carousel}>
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className={styles.akoyascaseimage}
            />
            <button className={styles.leftcarrow} onClick={handlePrev}>
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
            </button>
            <button className={styles.rightcarrow} onClick={handleNext}>
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
                  d="M38 25.9122L30.0897 33.8243L28.8031 32.5396L34.5218 26.8208H14V25.0036H34.5218L28.8031 19.2866L30.0897 18L38 25.9122Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* <img src={akoyaoverview} alt="Overview" className={styles.akoyascaseimage} /> */}
        </div>

        {/* Branding Section */}
        <div
          className={`${styles.akoyacasesection}, ${styles.akoyacasebranding}`}
        >
          <div className={styles.akoyacasetext}>
            <h2>Objectives</h2>{" "}
            <div className={styles.rightbox}>
              <p>
                High-Quality 3D Animation – Showcased the air purifier’s
                filtration process, airflow dynamics, and real-life impact in an
                engaging format.Photorealistic 3D Renders – Created stunning
                visuals to highlight the product’s design and features.Immersive
                Storytelling – Ensured the animations weren’t just technical but
                also emotionally resonant, connecting with health-conscious
                consumers.
              </p>
            </div>
          </div>
          <img
            src={akoyabranding}
            alt="Branding"
            className={styles.akoyascaseimages}
          />
        </div>

        {/* Color Palette Section */}
        {/* <div className={`${styles.akoyacasesection}, ${styles.akoyacasecolorpalette}`}>
        <div className={styles.akoyacasetext}>
          <h2>Color Palette</h2> <div className={styles.rightbox}>
          <p>
          When it comes to the Bakery industry, the color palette chosen is distinctive because these colors are not very commonly used.The color palette is kept bold and fun-loving while remaining welcoming and disruptive in its own sense.
          </p>
        </div>
        </div>
        <img src={akoyacolorpallet} alt="Color Palette" className={styles.akoyascaseimage} />
      </div>
   */}
        {/* Packaging Section */}
        <div
          className={`${styles.akoyacasesection} ${styles.akoyacasepackaging}`}
        >
          <div className={styles.akoyacasetext}>
            <h2>Packaging & 3D Animation</h2>{" "}
            <div className={styles.rightbox}>
              <p>
                Enhanced Product Understanding : Customers could visually grasp
                the benefits and technology behind Bosche Air Purifier.Increased
                Engagement : The 3D video became a powerful asset for digital
                marketing and promotions.Premium Brand Perception : The stunning
                visuals positioned Bosche as an innovative and high-quality
                brand in the air purification industry. Through cutting-edge 3D
                animation and imagery, we didn’t just showcase a product—we
                brought it to life. This is the power of visual storytelling.
              </p>
            </div>
          </div>
          <img
            src={akoyapackaging}
            alt="Packaging"
            className={`${styles.akoyascaseimages} ,${styles.topview}`}
          />
        </div>
      </div>{" "}
      <div className={styles.akoyacasecasestudiescontainer}>
        {" "}
        <h3 className={styles.casestudyhead}>
          See All Projects{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="34"
            viewBox="0 0 58 34"
            fill="none"
          >
            <path
              d="M38.6667 33.918C38.6667 32.1248 40.4381 29.4471 42.2313 27.1996C44.5368 24.2996 47.2918 21.7694 50.4503 19.8385C52.8187 18.3909 55.6897 17.0013 58 17.0013M58 17.0013C55.6897 17.0013 52.8163 15.6117 50.4503 14.1641C47.2918 12.2308 44.5368 9.70054 42.2313 6.80538C40.4381 4.55546 38.6667 1.87296 38.6667 0.0846243M58 17.0013L0 17.0013"
              stroke="#2B2322"
              stroke-width="4"
            />
          </svg>
        </h3>
        <div className={styles.akoyacasecasestudies}>
          {cards.map((card, index) => (
            <div key={index} className={styles.akoyacasecasestudy}>
              <img
                src={card.src}
                alt={card.title}
                className={styles.akoyacasecasestudyimage}
              />
              <p className={styles.akoyacasecasestudytitle}>{card.title}</p>
            </div>
          ))}
        </div>
        <button className={styles.akoyacasecasestudiesbutton}>
          See All Case Studies
          <span className={styles.akoyacasebuttonicon}></span>
        </button>
      </div>
    </motion.div>
  );
};

export default BakersCaseStudy;
