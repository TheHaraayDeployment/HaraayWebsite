import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import styles from "./AkoyaCaseStudy.module.scss";

import Akoyaherovid from "../../assets/Akoya/AkoyaHeroVid.mp4";
import AkoyaOverviewimg from "../../assets/Akoya/Akoyaoverview.png";
import Akoyaconclusionimg from "../../assets/Akoya/AkoyaFullimg.png";
import Akoyaimg1 from "../../assets/Akoya/Akoyaimg1.png";

import akoyastudiesimg1 from "../../assets/bakerscard.png";
import akoyastudiesimg2 from "../../assets/hyperioncard.jpg";
import akoyastudiesimg3 from "../../assets/satvikraascard.png";
import iconarrow from "../../assets/iconarrow.png";
import iconarrow2 from "../../assets/iconarrow2.png";
import brandimg1 from "../../assets/Akoya/a1.png"
import brandimg2 from "../../assets/Akoya/a2.png"
import brandimg3 from "../../assets/Akoya/a3.png"
import brandimg4 from "../../assets/Akoya/a4.png"
import brandimg5 from "../../assets/Akoya/a5.png"
import brandimg6 from "../../assets/Akoya/a6.png"

import akk1 from "../../assets/Akoya/akk1.png"
import akk2 from "../../assets/Akoya/akk2.png"
import akk3 from "../../assets/Akoya/akk3.png"
import { Link } from "react-router-dom";


import CarouselPopup from "./CarouselPopup";
const AkoyaCasestudy = ({ setIsOpen }) => {
  


  
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
    { src: akoyastudiesimg3, title: "Satvik Raas"  },
   
    { src: akoyastudiesimg1, title:  "Baker Street"},  { src: akoyastudiesimg2, title: "Coming soon" },
  ];


  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  const [isVisible1, setIsVisible1] = useState(false);
  const handleToggle1 = () => {
    setIsVisible1(!isVisible1);
  };

  const images = [
    brandimg1,brandimg2,brandimg3,brandimg4,brandimg5
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

  const images1 = [
    brandimg6,akk1,akk2,akk3,AkoyaOverviewimg
  ];

  const [currentIndex1, setCurrentIndex1] = useState(0);

  const handleNext1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev1 = () => {
    setCurrentIndex1((prevIndex) =>
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
      <div className={styles.akoyahero} >
        <div className={styles.akoyaherobackground}>
          <video
            src={Akoyaherovid}
            loop
            autoPlay
            muted
            alt="akoya Street Case Study"
          />
        </div>
        <div className={styles.akoyaherocontent}>
          <h1>Akoya</h1>
          <p>Brand Identity | Packaging | Storytelling</p>
        </div>
      </div>

       <div className={styles.akoyacasecontainer}>
        <div className={styles.akoyacasesection}>
          <div className={styles.akoyacasetext}>
            <h2>Background</h2>
           <div className={styles.rightbox}>
           <p>
              Akoya, a small but visionary company, specializes in producing an entirely unique product organic bulldriven oil. This ancient method of oil extraction, using bulls to press oil from seeds, is deeply rooted in tradition, making it both environmentally sustainable and highly differentiated from conventional, mechanized methods.
              {isVisible && (
                <>
                  Akoya approached us with the challenge of not only branding their product but also designing packaging that reflects their ecofriendly, organic process while standing out in the premium organic oils market. Their goal was to communicate authenticity, sustainability, and purity, resonating with both healthconscious and environmentallyaware consumers.
                </>
              )}
              <p className={styles.readmorebtn} onClick={handleToggle}>
                {isVisible ? (
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
          <div className={styles.akoyacasetext}>
            <h2>Challenges</h2> <div className={styles.rightbox}>
            <p>
              To be frank there are many organic oils in the market withNiche Extraction Process: The bulldriven method of oil extraction. Akoya wanted to stand out from the market, while educating the audience via branding, with Balancing Tradition with Modern Appeal.
            </p>
          </div>
          </div>
          <div className={styles.carousel}>
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className={styles.akoyascaseimage}
            />   
            <button className={styles.leftcarrow} onClick={handlePrev}><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
  <rect width="52" height="52" rx="26" fill="grey" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 25.916L21.9103 18.0038L23.1969 19.2886L17.4782 25.0073L38 25.0073V26.8246L17.4782 26.8246L23.1969 32.5415L21.9103 33.8281L14 25.916Z" fill="white"/>
</svg></button>
            <button className={styles.rightcarrow} onClick={handleNext}><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
<rect width="52" height="52" rx="26" fill="grey"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 25.9122L30.0897 33.8243L28.8031 32.5396L34.5218 26.8208H14V25.0036H34.5218L28.8031 19.2866L30.0897 18L38 25.9122Z" fill="white"/>
</svg></button>
          </div> 
          
           {/* <button className={styles.openButton} onClick={() => setIsOpen(true)}>
        Open Carousel
      </button> 
   */}

          {/* <img
              src={images[currentIndex]}
             
              className={styles.akoyascaseimage}
            /> */} 
        </div>
        <div className={styles.akoyacasebranding}>
          <div className={styles.akoyacasetext}>
            <h2>Objectives</h2>  <div className={styles.rightbox}>
            <p>
              Create a Strong Brand Identity that reflects the core values of Akoya: sustainability, organic purity, and the artisanal method of bulldriven oil extraction.
            </p>
          </div>
          </div>
          <div className={styles.akoyacasetext}>
            <h3>Branding Identity Development</h3>
            <div className={styles.rightbox}>
            <p>
              We started with indepth research into the history of bulldriven oil production, its environmental benefits, and Akoya’s mission. After several brainstorming sessions and consultations, we developed a brand concept centered around the following key pillars.
              {isVisible1 && (
                <>
                  The brand gets is strong, rich essence from its colour palette inspired by nature: Forest Green, Golden, brown beige, charcoal and light grey rousing the qualities of the brand True, Pure, Honest, Natural, Rich, Transparent to their consumers. Akoya is promoting richness in quality in a warmth and welcome way, to combine these two ends of akoya we have used Glysa and Chillax typeface in combination to meet the luxury and friendly qualities of the brand. The look and feel of the brand is authentic, natural, rich, in reference to their keywords that are Cultured, true, and pure. The brand presents itself as The SAGE one full of wisdom, with a will to share the truth with others around them, with a voice that’s welcoming, straight to point and Practical.
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
          {/* <img
            src={Akoyaimg1}
            alt="Branding"
            className={styles.akoyascaseapproachimage}
          /> */}
           <div className={styles.carousel}>
            <img
              src={images1[currentIndex1]}
              alt={`Slide ${currentIndex1 + 1}`}
              className={styles.akoyascaseimagescroll}
            />   
            <button className={styles.leftcarrow} onClick={handlePrev1}><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
  <rect width="52" height="52" rx="26" fill="grey" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 25.916L21.9103 18.0038L23.1969 19.2886L17.4782 25.0073L38 25.0073V26.8246L17.4782 26.8246L23.1969 32.5415L21.9103 33.8281L14 25.916Z" fill="white"/>
</svg></button>
            <button className={styles.rightcarrow} onClick={handleNext1}><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
<rect width="52" height="52" rx="26" fill="grey"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 25.9122L30.0897 33.8243L28.8031 32.5396L34.5218 26.8208H14V25.0036H34.5218L28.8031 19.2866L30.0897 18L38 25.9122Z" fill="white"/>
</svg></button>
          </div>
        </div>

        <div className={styles.akoyacasecolorpalette}>
          <div className={styles.akoyacasetext}>
            <h2>Packaging & 3D Animation</h2>   <div className={styles.rightbox}>
            <p>
              Worked on 3d animations and render for 3d packaging & video for it. The packaging design is simple, elegant, and ecofriendly while communicating the traditional process behind the oil. With the art style of chitrakathi and illustrations, we worked on the label design. As with the chitrakathi art form, we were able to communicate with the audience very relatable form keeping the roots intact.
            </p>
            <div className={styles.packagingakoyadiv}>
              <div>
                <h3>Sector</h3>
                <p>Food and Beverage</p>
              </div>
              <div>
                <h3>Discipline</h3>
                <p>Branding & Packaging</p>
              </div>
            </div></div>
          </div>
          <img
            src={Akoyaconclusionimg}
            alt="Color Palette" 
          
            className={styles.akoyascaseapproachimage}
          />
        </div>
      </div> 

      <div className={styles.akoyacasecasestudiescontainer}>
        <h3 className={styles.casestudyhead}>See All Projects <svg xmlns="http://www.w3.org/2000/svg" width="58" height="34" viewBox="0 0 58 34" fill="none">
  <path d="M38.6667 33.918C38.6667 32.1248 40.4381 29.4471 42.2313 27.1996C44.5368 24.2996 47.2918 21.7694 50.4503 19.8385C52.8187 18.3909 55.6897 17.0013 58 17.0013M58 17.0013C55.6897 17.0013 52.8163 15.6117 50.4503 14.1641C47.2918 12.2308 44.5368 9.70054 42.2313 6.80538C40.4381 4.55546 38.6667 1.87296 38.6667 0.0846243M58 17.0013L0 17.0013" stroke="#2B2322" stroke-width="4"/>
</svg></h3>
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

export default AkoyaCasestudy;
