import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import styles from  "./AkoyaCaseStudy.module.scss";

import akoyahero from "../../assets/bakers_casestudy_hero.jpg";
import akoyaoverview from "../../assets/bakers_casestudy_overview.jpg";
import akoyabranding from "../../assets/bakers_casestudy_branding.svg";
import akoyacolorpallet from "../../assets/bakers_casestudy_colorpallet.svg";
import akoyapackaging from "../../assets/bakers_casestudy_packaging.svg";
import bakersstudiesimg1 from "../../assets/CreamForest/CreamFimg1.svg";
import bakersstudiesimg2 from "../../assets/Akoya/AkoyaFullimg.png";
import bakersstudiesimg3 from "../../assets/purus_casestudy_studiesimg3.svg";
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
    { src: bakersstudiesimg1, title: "Cream Forest" },
    { src: bakersstudiesimg2, title: "Akoya" },
    { src: bakersstudiesimg3, title: "Serene Skin" },
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
    <div className={styles.akoyahero} >
      <div className={styles.akoyaherobackground}>
        <img src={akoyahero} alt="akoya Street Case Study" />
      </div>
      <div className={styles.akoyaherocontent}>
        <h1>Baker’s Street</h1>
        <p>Brand Identity | Packaging</p>
      </div>
    </div>
  
    <div className={styles.akoyacasecontainer}>
      {/* Overview Section */}
      <div className={styles.akoyacasesection}>
        <div className={styles.akoyacasetext}>
          <h2>Client Brief</h2> <div className={styles.rightbox}>
          <p>
          The client requested a bakery website that would showcase their offerings in a way that is inviting, visually appealing, and user-friendly. They emphasized the importance of highlighting their freshly baked goods, seasonal specials, and unique recipes. The website needed to capture the warmth and charm of their bakery, with a focus on high-quality imagery, elegant typography, and seamless navigation.
          </p>
        </div>
        </div>
        <div className={styles.akoyacasetext}>
          <h2>Overview</h2> <div className={styles.rightbox}>
          <p>
          Baker’s Street is the only one stop bakery point which provides heavenly experience of their premium desserts to our young and social media savvy audience. It is designed in an elegant and magnificent way to create a memorable experience for everyone.
          </p>
        </div>
        </div>
        <img src={akoyaoverview} alt="Overview" className={styles.akoyascaseimage} />
      </div>
  
      {/* Branding Section */}
      <div className={`${styles.akoyacasesection}, ${styles.akoyacasebranding}`}>
        <div className={styles.akoyacasetext}>
          <h2>Branding</h2> <div className={styles.rightbox}>
          <p>
            Baker's Street is a highend brand. Since their menu is inspired
            by various heritage locations throughout the world, we were tasked
            with producing branding and packaging designs for the same. For
            the entire brand, we took a friendly, clean, and minimal approach,
            coupled with some customized typefaces that would relate to the
            bite mark, which resembles a cookie bite, and the bits and pieces
            of crumbs that would tie to the whole brand's aesthetics and
            audience. 
          </p>
        </div>
        </div>
        <img src={akoyabranding} alt="Branding" className={styles.akoyascaseimage} />
      </div>
  
      {/* Color Palette Section */}
      <div className={`${styles.akoyacasesection}, ${styles.akoyacasecolorpalette}`}>
        <div className={styles.akoyacasetext}>
          <h2>Color Palette</h2> <div className={styles.rightbox}>
          <p>
          When it comes to the Bakery industry, the color palette chosen is distinctive because these colors are not very commonly used.The color palette is kept bold and fun-loving while remaining welcoming and disruptive in its own sense.
          </p>
        </div>
        </div>
        <img src={akoyacolorpallet} alt="Color Palette" className={styles.akoyascaseimage} />
      </div>
  
      {/* Packaging Section */}
      <div className={`${styles.akoyacasesection} ${styles.akoyacasepackaging}`}>
        <div className={styles.akoyacasetext}>
          <h2>Packaging</h2> <div className={styles.rightbox}>
          <p>
          Keeping the packaging elegant in baker street with minimalistic approach, The focus remains on the brand name, clean typography, and shuttle design elements. this understate style reflects sophestication, leting the quality of the product shine through effortlessly.
          </p>
        </div>
        </div>
        <img src={akoyapackaging} alt="Packaging" className={styles.akoyascaseimage} />
      </div>
    </div>   <div className={styles.akoyacasecasestudiescontainer}>
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
