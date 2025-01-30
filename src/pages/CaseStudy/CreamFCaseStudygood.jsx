import React, { useRef, useEffect } from "react"; // Add useRef and useEffect here
import { motion } from "framer-motion";

import styles from "./AkoyaCaseStudy.module.scss";
import { useInView } from "react-intersection-observer";

import akoyahero from "../../assets/creamforestcase_heroimg.svg";
import akoyaoverview from "../../assets/creamforest__casestudy_overview.svg";
import akoyabranding from "../../assets/creamforest_casestudy_branding.svg";
import akoyacolorpallet from "../../assets/bakers_casestudy_colorpallet.svg";
import akoyapackaging from "../../assets/creamforest_casestudy_packaging.svg";
import bakersstudiesimg1 from "../../assets/purus_casestudy_studiesimg1.svg";
import bakersstudiesimg2 from "../../assets/purus_casestudy_studiesimg2.svg";
import bakersstudiesimg3 from "../../assets/purus_casestudy_studiesimg3.svg";

const CreamforestCaseStudy = () => {
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
    { src: bakersstudiesimg1, title: "Serene Skin" },
    { src: bakersstudiesimg2, title: "Baker's Street" },
    { src: bakersstudiesimg3, title: "BMS" },
  ];

  // useEffect(() => {
  //   const heroElement = heroRef.current;
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         heroElement.style.position = "sticky";
  //         heroElement.style.top = "0";
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
    
    className={styles.akoyacasestudy}
  >
    <div className={styles.akoyahero} ref={heroRef}>
      <div className={styles.akoyaherobackground}>
        <img
          src={akoyahero}
          
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
        {/* <div className={styles.carousel}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={styles.akoyascaseimage}
          />  
        </div> */}
        
        <img
            src={akoyaoverview}
           
            className={styles.akoyascaseimage}
          />
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
        <img
          src={akoyabranding}
          alt="Branding"
          className={styles.akoyascaseapproachimage}
        />
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
  )
}

export default CreamforestCaseStudy