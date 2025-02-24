import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./SatvikraasCaseStudy.module.scss";

import akoyahero from "../../assets/Satvikraas/satvikhero.mp4";

import akoyaoverview from "../../assets/Satvikraas/challanges.png";
import akoyabranding from "../../assets/Satvikraas/Satvikraas.webp";
import satvikraasimg3 from "../../assets/Satvikraas/satvikraasimg3.jpg";
import akoyacolorpallet from "../../assets/Satvikraas/packaging.svg";
import akoyapackaging from "../../assets/Satvikraas/kitchen.png";
import satvikimg4 from "../../assets/Satvikraas/satvikrassimg4.png";
import satvikimg5 from "../../assets/Satvikraas/img5.png";
import bakersstudiesimg1 from "../../assets/Akoya/AkoyaFullimg.png";
import bakersstudiesimg2 from "../../assets/Lokneta/lokneta.webp";
import bakersstudiesimg3 from "../../assets/comingsooncard.png";
import { Link } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery"
import VideoGallery from "../../components/VideoGallery"
import vid1 from "../../assets/Satvikraas/vid1.mp4"
import vid2 from "../../assets/Satvikraas/vid2.mp4"
const SatvikraasCaseStudy = () => {
const vid =[vid1, vid2];

const imagesFullSize = [akoyabranding , akoyapackaging, satvikimg4 , satvikimg5];
 const images = [
  akoyaoverview,satvikraasimg3
  ];
  const images1 = [
    akoyabranding,akoyabranding
    ];
    const images2 = [
      satvikimg4 , satvikimg5
      ];
  const heroRef = useRef(null);
  const galleryStyle = {
    backgroundColor: "#04050C",
    color: "#fff",
    borderRadius: "60px",
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
  const check = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" rx="16" fill="#04050C" />
      <path
        d="M9 18.5L12.5 22L23 11"
        stroke="#25CD34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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
  
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
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
          <video
            src={akoyahero}
            autoPlay
            loop
            muted
            alt="satvikraas Street Case Study"
          />
          {/* <img className={styles.herovideo} loop src={akoyahero} autoPlay muted></img> */}
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
            <h2 className={styles.nowrap}>Project Overview</h2>{" "}
            <div className={styles.rightbox}>
              <p>
                Satvikraas is more than just a spice brand—it’s a celebration of
                authentic Indian flavors made with{" "}
                <strong> 100% natural ingredients.</strong> Haraay Design was
                entrusted with building this brand from the ground up, ensuring
                it captured the essence of purity, tradition, and quality. Our
                primary focus?
                <strong>
                  {" "}
                  Striking packaging design and immersive 3D animation
                </strong>{" "}
                that brought the brand to life.
              </p>
            </div>
          </div>
          <div className={styles.akoyacasetext}>
            <h2>Challenges</h2>{" "}
            <div className={styles.rightbox}>
              <p>
                <strong> Creating a Unique Identity</strong> – The Indian spice
                market is highly competitive, requiring a distinct and memorable
                brand presence. <br />{" "}
                <strong>Balancing Tradition with Modern Appeal</strong> – The
                packaging needed to reflect the brand’s authenticity while
                appealing to today’s consumers. <br />
                <strong>Showcasing the Product through 3D Animation</strong> –
                Communicating the purity and richness of the spices in a
                visually engaging way.
              </p>
            </div>
          </div>
         <ImageGallery  images={images} id={"carousel1"}/>
        </div>

        {/* Branding Section */}
        <div
          className={`${styles.akoyacasesection}, ${styles.akoyacasebranding}`}
        >
          <div className={styles.akoyacasetext}>
            <h2>Objectives</h2>{" "}
            <div className={styles.rightbox}>
              <p>
                <strong>Strong Market Presence</strong> – Satvikraas launched as
                a premium spice brand with a distinct identity. <br />
                <strong>Increased Engagement</strong> – The 3D video helped in
                digital marketing, boosting customer interaction. <br />
                <strong>Authenticity & Trust</strong> – Packaging and visuals
                reinforced the brand’s promise of 100% natural ingredients.
              </p>
            </div>
          </div>
         
          {/* <ImageGallery  images={vid} id={"carousel2"}/> */}
          <VideoGallery images={vid} id={"carousel5"}/>
        </div>

        {/*Packaging & 3D Animation Section */}
        <div
          style={{ backgroundColor: "#1C1D21" }}
          className={` ${styles.akoyacasesection} ${styles.akoyacasecolorpalette}, ${styles.satviksection}`}
        >
          <div style={galleryStyle} className={styles.akoyacasecontainer}>
            <div className={styles.akoyacasetext}>
              <h2 style={{ color: "#fff" }}>Packaging & 3D Animation</h2>{" "}
              <div className={styles.rightbox}>
                <p style={{ color: "#fff" }}>
                  <strong> The Story Behind the Design :</strong> When we took
                  on Satvikraas, we knew we weren’t just designing spice
                  packaging—we were shaping a brand’s identity in a crowded
                  market. With so many spices lined up on shelves, how do you
                  make one stand out? How do you create packaging that makes
                  people stop, notice, and pick it up?
                  <br /> <br />
                  Instead of guessing,{" "}
                  <strong>
                    we hit the ground. We walked into retail stores, studied
                    shelves, observed customer behavior, and analyzed colors,
                    layouts, and what makes a spice brand pop.{" "}
                  </strong>
                </p>
                {isVisible && (
                  <> <br />
                    <p style={{ color: "#fff" }}>
                      {" "}
                      <strong>What We Discovered :</strong> <br />
                      Most packaging blends in—bold wasn’t bold enough. <br />{" "}
                      Shelf positioning matters, but so does color psychology.{" "}
                      <br />
                      Online visuals need a different approach than offline
                      shelves. <br />
                      <br />
                    </p>

                    <ul className={styles.packaginglist}>
                      <li>
                        On-Shelf Visibility – We designed with contrast,
                        clarity, and hierarchy, ensuring Satvikraas packaging
                        demanded attention on retail shelves.
                      </li>
                      <li>
                        Authenticity Meets Modern Appeal – The design kept the
                        Indian essence alive while feeling fresh and premium.
                      </li>
                      <li>
                        Optimized for Online Presence – We ensured that the
                        packaging looked just as compelling on e-commerce
                        platforms as it did in stores.
                      </li>
                      <li>
                        Consistency Across 8 Products – From Turmeric, Red Chili
                        Powder, and Garam Masala to more blends, each pack had
                        its own identity while staying cohesive with the brand.
                      </li>
                    </ul>

                    <p style={{ color: "#fff" }}>
                      <strong> The Impact :</strong> <br /> More Visibility,
                      More
                      <strong> Pickups –</strong> Satvikraas now stands out in
                      retail stores. <br />
                      <strong>Stronger Online Presence –</strong> Clean, vibrant
                      packaging makes it
                      <strong> scroll-stopping.</strong> <br />
                      <strong> Trust Through Design –</strong> The natural,
                      premium look reinforces the brand’s promise of purity.
                    </p>
                  </>
                )}
                <p className={styles.readmorebtn} style={{ color: "#fff" }} onClick={handleToggle}>
                  {isVisible ? (
                    < >
                      Read Less<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M14.5917 6.90972L10.6743 3.00767L6.77223 6.92506" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.6815 3.79688L10.6815 9.27049C10.2904 14.7441 18.5008 9.2525 18.5008 13.5712L18.5009 20.9997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </>
                  ) : (
                    <>
                      Read More <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M10.672 17.0903L14.5894 20.9923L18.4914 17.0749" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.5822 20.2031L14.5822 14.7295C14.9733 9.2559 6.76289 14.7475 6.76289 10.4288L6.76272 3.00034" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </>
                  )}
                </p>
                <br /> <br />
              </div>
            </div>
            {/* <img
              src={akoyacolorpallet}
              alt="Color Palette"
              className={styles.akoyascaseimages}
            /> */}
            <ImageGallery  images={imagesFullSize} id={"carousel4"}/>
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
                 On-Shelf Visibility – We designed with contrast, clarity, and
                hierarchy, ensuring Satvikraas packaging demanded attention on
                retail shelves. <br />  Authenticity Meets Modern Appeal – The
                design kept the Indian essence alive while feeling fresh and
                premium.
                <br /> Optimized for Online Presence – We ensured that the
                packaging looked just as compelling on e-commerce platforms as
                it did in stores.
                <br /> Consistency Across 8 Products – From Turmeric, Red
                Chili Powder, and Garam Masala to more blends, each pack had its
                own identity while staying cohesive with the brand.
                <br />
              </p>
              <p>
                {" "}
                <strong>The Impact :</strong>
                <br /> More Visibility, More Pickups – Satvikraas now stands out
                in retail stores.Stronger Online Presence – Clean, vibrant
                packaging makes it scroll-stopping.Trust Through Design – The
                natural, premium look reinforces the brand’s promise of purity.
              </p>
            </div>
          </div>
       <ImageGallery  images={images2} id={"carousel3"}/>
        </div>
      </div>{" "}
      {/* <div className={styles.reviewssec}>
        <h2 className={styles.heading}>Feedback</h2>
        <div className={styles.reviewsContainer}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <p className={styles.text}>
                <strong>Lorem ipsum dolor</strong> {review.text}
              </p>
              <div className={styles.bottomfeedback}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} color="#FFD700" />
                  ))}
                </div>
                <div>
                  <h4 className={styles.name}>{review.name}</h4>
                  <p className={styles.role}>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
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
        <Link to={"/works"} className={styles.akoyacasecasestudiesbutton}>
          See All Case Studies
          <span className={styles.akoyacasebuttonicon}></span>
        </Link>
      </div>
    </motion.div>
  );
};

export default SatvikraasCaseStudy;
