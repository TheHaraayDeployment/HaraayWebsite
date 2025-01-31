import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import styles from "./AkoyaCaseStudy.module.scss";

import Akoyaherovid from "../../assets/Serene/Sereneimg1.webp";
import AkoyaOverviewimg from "../../assets/Serene/sereneim2.jpg";
import Akoyaconclusionimg from "../../assets/Serene/sereneim3.jpg"; 
import Akoyacon3 from "./sereneimg2.webp";
import Akoyacon4 from "../../assets/Serene/Sereneimg3.webp";
import Akoyaimg1 from "../../assets/Akoya/Akoyaimg1.png";

import akoyastudiesimg1 from "../../assets/purus_casestudy_studiesimg1.svg";
import akoyastudiesimg2 from "../../assets/purus_casestudy_studiesimg2.svg";
import akoyastudiesimg3 from "../../assets/purus_casestudy_studiesimg3.svg";
import iconarrow from "../../assets/iconarrow.png";
import iconarrow2 from "../../assets/iconarrow2.png";
import { Link } from "react-router-dom";

const SereneCasestudy = () => {
  const heroRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.8 },
    }),
  };

  const cards = [
    { src: akoyastudiesimg1, title: "Serene Skin" },
    { src: akoyastudiesimg2, title: "Baker's Street" },
    { src: akoyastudiesimg3, title: "BMS" },
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

  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  const [isVisible1, setIsVisible1] = useState(false);
  const handleToggle1 = () => {
    setIsVisible1(!isVisible1);
  };

  const images = [
    AkoyaOverviewimg,
    Akoyaconclusionimg,
    Akoyaimg1,
    AkoyaOverviewimg,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={styles.akoyacasestudy}
    >
      <div className={styles.akoyahero} ref={heroRef}>
        <div className={styles.akoyaherobackground}>
          <img
            src={Akoyaherovid}
            
          />
        </div>
        <div className={styles.akoyaherocontent}>
          <h1>Seren Skin</h1>
          <p>Branding & Packaging</p>
        </div>
      </div>

       <div className={styles.akoyacasecontainer}>
        <div className={styles.akoyacasesection}>
          <div className={styles.akoyacasetext}>
            <h2>Client Brief</h2>
           <div className={styles.rightbox}>
           <p>
           The client envisioned a bold yet elegant identity and packaging design that could effectively differentiate their product in a crowded marketplace. They emphasized the need for a design that exudes confidence and sophistication, appealing to their target audience's sense of quality and style.
             
              
            </p>
           </div>
          </div>
          <div className={styles.akoyacasetext}>
            <h2>Overview</h2> <div className={styles.rightbox}>
            <p>
            Serene Skin is a new skincare brand in India that encourages self-love via natural and ethical products. They distinguish themselves from other skincare firms by providing new products that every individual may use.
            </p>
          </div>
          </div>
          {/* <div className={styles.carousel}>
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className={styles.akoyascaseimage}
            />  
          </div> */}
          
          <img
              src={images[currentIndex]}
             
              className={styles.akoyascaseimage}
            />
        </div>

        <div className={styles.akoyacasebranding}>
        
          <div className={styles.akoyacasetext}>
            <h3>Branding</h3>
            <div className={styles.rightbox}>
            <p>
            Serene Skin is a brand that encourages people to feel confident and inspired; our objective was to design the brand's branding and packaging.
              {isVisible1 && (
                <>
                 
We wanted to make it a luxury and bold skincare brand that promotes diversity, inclusivity, and self-care, a brand that may encourage a positive change in how people perceive their skin
                </>
              )}
               <p className={styles.readmorebtn} onClick={handleToggle1}>
                {isVisible1 ? (
                  <>
                    Read Less <img src={iconarrow} alt="Arrow Icon" />
                  </>
                ) : (
                  <>
                    Read More <img src={iconarrow2} alt="Arrow Icon" />
                  </>
                )}
              </p>
            </p>
          </div>
          </div>
          <img
            src={ Akoyaconclusionimg}
            alt="Branding"
            className={styles.akoyascaseapproachimage}
          />
        </div>

        <div className={styles.akoyacasecolorpalette}>
          <div className={styles.akoyacasetext}>
            <h2>Color Palette</h2>   <div className={styles.rightbox}>
            <p>
            Red is not a color that is utilized universally or frequently in skincare brands. Colors often associated with skincare firms, on the other hand, are more muted, such as white, pastel tones, and shades of blue and green.
            </p>
           </div>
          </div>
          <img
            src={Akoyacon3}
            alt="Color Palette" 
          
            className={styles.akoyascaseapproachimage}
          />
        </div>  <div className={styles.akoyacasecolorpalette}>
          <div className={styles.akoyacasetext}>
            <h2>Packaging</h2>   <div className={styles.rightbox}>
            <p>
            Red is not a color that is utilized universally or frequently in skincare brands. Colors often associated with skincare firms, on the other hand, are more muted, such as white, pastel tones, and shades of blue and green. We chose the strong tone of red because Serene Skin helps people to feel bold, confident, and inspired.
            </p>
           </div>
          </div>
          <img
            src={Akoyacon4}
            alt="Color Palette" 
          
            className={styles.akoyascaseapproachimage}
          />
        </div>
      </div> 

      {/* <div className={styles.akoyacasecasestudiescontainer}>
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
      </div> */}
    </motion.div>
  );
};

export default SereneCasestudy;
