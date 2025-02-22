import React, { useEffect, useRef , useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./SatvikraasCaseStudy.module.scss";

import akoyahero from "../../assets/Satvikraas/satvikhero.jpg";
import akoyaoverview1 from "../../assets/Bosch/sec2.jpg";
import akoyaoverview from "../../assets/Satvikraas/challanges.png";
import akoyabranding from "../../assets/Satvikraas/objectives.png";
import akoyacolorpallet from "../../assets/Satvikraas/packaging.svg";
import akoyapackaging from "../../assets/Satvikraas/website.svg";
import bakersstudiesimg1 from "../../assets/Akoya/AkoyaFullimg.png";
import bakersstudiesimg2 from "../../assets/Lokneta/lokneta.webp";
import bakersstudiesimg3 from "../../assets/comingsooncard.png";
const SatvikraasCaseStudy = () => {
  const heroRef = useRef(null);
  const galleryStyle = {
    backgroundColor: "#04050C",
    color: "#fff", borderRadius: "60px",
    padding: "2rem",
    textAlign: "center",
  
  };
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



  const reviews = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      name: "Shindey Thakur",
      role: "Restaurant Owner",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      name: "Shindey Thakur",
      role: "Shop Keeper",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      name: "Shindey Thakur",
      role: "Restaurant Owner",
    },
  ];
  
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
          <img className={styles.herovideo} loop src={akoyahero} autoPlay muted></img>
        </div>
        <div className={styles.akoyaherocontent}>
          <h1>Satvik Raas</h1>
          <p>Branding, Packaging & 3D Animation</p>
          <p>www.satvikraas.com</p>
        </div>
      </div>
      <div className={styles.akoyacasecontainer}>
        {/* Overview Section */}
        <div className={styles.akoyacasesection}>
          <div className={styles.akoyacasetext}>
            <h2>Project Overview</h2>{" "}
            <div className={styles.rightbox}>
              <p>
              Satvikraas is more than just a spice brand—it’s a celebration of authentic Indian flavors made with 100% natural ingredients. Haraay Design was entrusted with building this brand from the ground up, ensuring it captured the essence of purity, tradition, and quality. Our primary focus? Striking packaging design and immersive 3D animation that brought the brand to life.
              </p>
            </div>
          </div>
          <div className={styles.akoyacasetext}>
            <h2>Challenges</h2>{" "}
            <div className={styles.rightbox}>
              <p>
              Creating a Unique Identity – The Indian spice market is highly competitive, requiring a distinct and memorable brand presence.Balancing Tradition with Modern Appeal – The packaging needed to reflect the brand’s authenticity while appealing to today’s consumers.Showcasing the Product through 3D Animation – Communicating the purity and richness of the spices in a visually engaging way.
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
              Strong Market Presence – Satvikraas launched as a premium spice brand with a distinct identity.Increased Engagement – The 3D video helped in digital marketing, boosting customer interaction.Authenticity & Trust – Packaging and visuals reinforced the brand’s promise of 100% natural ingredients.
              </p>
            </div>
          </div>
          <img
            src={akoyabranding}
            alt="Branding"
            className={styles.akoyascaseimages}
          />
        </div>

        {/*Packaging & 3D Animation Section */}
        <div style={{ backgroundColor: "#1C1D21" }} className={` ${styles.akoyacasesection} ${styles.akoyacasecolorpalette}, ${styles.satviksection}`}>

      <div  style={galleryStyle} className={styles.akoyacasecontainer}>
      <div className={styles.akoyacasetext}>
          <h2 style={{ color: "#fff"}}>Packaging & 3D Animation</h2> <div className={styles.rightbox}>
          <p style={{ color: "#fff"}}>
          The Story Behind the Design :  When we took on Satvikraas, we knew we weren’t just designing spice packaging—we were shaping a brand’s identity in a crowded market. With so many spices lined up on shelves, how do you make one stand out? How do you create packaging that makes people stop, notice, and pick it up?

Instead of guessing, we hit the ground. We walked into retail stores, studied shelves, observed customer behavior, and analyzed colors, layouts, and what makes a spice brand pop.

What We Discovered :
Most packaging blends in—bold wasn’t bold enough.Shelf positioning matters, but so does color psychology.Online visuals need a different approach than offline shelves.
          </p >
          <p style={{ color: "#fff"}}>On-Shelf Visibility – We designed with contrast, clarity, and hierarchy, ensuring Satvikraas packaging demanded attention on retail shelves.
Authenticity Meets Modern Appeal – The design kept the Indian essence alive while feeling fresh and premium.
Optimized for Online Presence – We ensured that the packaging looked just as compelling on e-commerce platforms as it did in stores.
Consistency Across 8 Products – From Turmeric, Red Chili Powder, and Garam Masala to more blends, each pack had its own identity while staying cohesive with the brand.</p>
<p style={{ color: "#fff"}}>The Impact :
More Visibility, More Pickups – Satvikraas now stands out in retail stores.Stronger Online Presence – Clean, vibrant packaging makes it scroll-stopping.Trust Through Design – The natural, premium look reinforces the brand’s promise of purity.</p>
        </div>
        </div>
        <img src={akoyacolorpallet} alt="Color Palette" className={styles.akoyascaseimage} />
      </div>
      </div>
  
        {/* Packaging Section */}
        <div
          className={`${styles.akoyacasesection} ${styles.akoyacasepackaging}`}
        >
          <div className={styles.akoyacasetext}>
            <h2>Website </h2>{" "}
            <div className={styles.rightbox}>
              <p>
              ✅ On-Shelf Visibility – We designed with contrast, clarity, and hierarchy, ensuring Satvikraas packaging demanded attention on retail shelves. <br /> ✅ Authenticity Meets Modern Appeal – The design kept the Indian essence alive while feeling fresh and premium.<br />✅ Optimized for Online Presence – We ensured that the packaging looked just as compelling on e-commerce platforms as it did in stores.<br />✅ Consistency Across 8 Products – From Turmeric, Red Chili Powder, and Garam Masala to more blends, each pack had its own identity while staying cohesive with the brand.
              <br />
<strong>The Impact :</strong>
More Visibility, More Pickups – Satvikraas now stands out in retail stores.Stronger Online Presence – Clean, vibrant packaging makes it scroll-stopping.Trust Through Design – The natural, premium look reinforces the brand’s promise of purity.
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
      <div className={styles.reviewssec}>
      <h2 className={styles.heading}>Feedback</h2>
      <div className={styles.reviewsContainer}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <p className={styles.text}><strong>Lorem ipsum dolor</strong> {review.text}</p>
           <div className={styles.bottomfeedback}>
           <div className={styles.stars}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} color="#FFD700" />
              ))}
            </div>
            <div ><h4 className={styles.name}>{review.name}</h4>
            <p className={styles.role}>{review.role}</p></div>
           </div>
          </div>
        ))}
      </div>
    </div>
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

export default SatvikraasCaseStudy;
