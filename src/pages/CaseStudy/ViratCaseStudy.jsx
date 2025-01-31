import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import styles from "./AkoyaCaseStudy.module.scss";

import Akoyaherovid from "../../assets/Virat/ViratHero.jpeg";
import AkoyaOverviewimg from "../../assets/virat/Viratimg1.webp";
import Akoyaconclusionimg from "../../assets/virat/Viratimg2.svg"; 
import Akoyacon3 from "../../assets/virat/Viratimg3.webp";
import Akoyacon4 from "../../assets/virat/Viratimg4.webp";
import Akoyaimg1 from "../../assets/Akoya/Akoyaimg1.png";

import akoyastudiesimg1 from "../../assets/purus_casestudy_studiesimg1.svg";
import akoyastudiesimg2 from "../../assets/purus_casestudy_studiesimg2.svg";
import akoyastudiesimg3 from "../../assets/purus_casestudy_studiesimg3.svg";
import iconarrow from "../../assets/iconarrow.png";
import iconarrow2 from "../../assets/iconarrow2.png";
import { Link } from "react-router-dom";

const ViratCasestudy = () => {
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
          <h1>Virat</h1>
          <p>Branding & Website</p>
        </div>
      </div>

       <div className={styles.akoyacasecontainer}>
        <div className={styles.akoyacasesection}>
        
          <div className={styles.akoyacasetext}>
            <h2>Overview</h2> <div className={styles.rightbox}>
            <p>
            Virat, a growing facility management services provider, approached us with the need to develop a bold, modern, and distinctive brand identity that reflects their reliability, professionalism, and competitive edge in the industry. The goal was to create a strong visual presence through 
              {isVisible1 && (
                <>
 a cohesive brand identity and an engaging website that captures their core values and service offerings.
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
          {/* <div className={styles.carousel}>
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className={styles.akoyascaseimage}
            />  
          </div> */}
          
          <img
              src={images[currentIndex]}
             
              className={styles.akoyascaseimages}
            />
        </div>

        <div className={styles.akoyacasebranding}>
        
          <div className={styles.akoyacasetext}>
            <h3>Brand Identity Development</h3>
            <div className={styles.rightbox}>
            <p>
            We designed a striking, edgy brand identity that positioned Virat as a leader in the facility management industry. The new logo and color palette Red-Orange to emphasis on the character of the brand that is Impactful, Tendy and Confident. And Black-Blue to showcase the Corporate Professional side of 
              {isVisible1 && (
                <>
               the brand. And Neutral colour palette to balance out the overall visual indentity of the brand. strength and professionalism, while clean typography and a modern design language reflected their efficiency and reliability. The brand tone was made bold yet approachable, appealing to both corporate and residential clients. The Brand is inspired by logo comes from Geometry like the values of the Brand Confident Organised,
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
            Our job consisted of creating a strong brand identity packaging, and it’s website. Nature driven,The characters that we are representing have imperfect geometric shapes to celebrate the organic ideas of natural meetings. These subtle touches help the visual identity to create a concept of human sustainability. 
            </p>
           </div>
          </div>
          <img
            src={Akoyacon3}
            alt="Color Palette" 
          
            className={styles.akoyascaseimages}
          />
        </div>  <div className={styles.akoyacasecolorpalette}>
          <div className={styles.akoyacasetext}>
            <h2>Website Design & Development</h2>   <div className={styles.rightbox}>
            <p>
            The website was designed to be an extension of the new brand identity, with a focus on easy navigation, clear service categorization, and interactive elements. We created a responsive,featuring high-quality 3D visuals and detailed service descriptions to engage and inform potential clients.
            </p>
           </div>
          </div>
          <img
            src={Akoyacon4}
            alt="Color Palette" 
          
            className={styles.akoyascaseimages}
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

export default ViratCasestudy;
