import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./GopalanCaseStudy.module.scss";
import video from "../../assets/gopalan1.mp4"
import akoyahero from "./gopalan2.jpg";
import ClientReview from "../../components/ClientReview"
import akoyaoverview from "./gopalan1.png";
import akoyabranding from "./gopalan3.png";
import satvikraasimg3 from "./gopalan4.png";
import akoyacolorpallet from "../../assets/Satvikraas/packaging.svg";
import akoyapackaging from "../../assets/Satvikraas/kitchen.png";
import satvikimg4 from "./gopalan3.png";
import satvikimg5 from "../../assets/Satvikraas/img5.png";
import bakersstudiesimg1 from "../../assets/Akoya/AkoyaFullimg.png";
import bakersstudiesimg2 from "../../assets/Lokneta/lokneta.webp";
import bakersstudiesimg3 from "../../assets/comingsooncard.png";
import { Link } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery"
import VideoGallery from "../../components/VideoGallery"
import vid1 from "../../assets/Satvikraas/vid1.mp4"
import vid2 from "../../assets/Satvikraas/vid2.mp4"


import gopalanmobile from "./gopalan5.png"
import gopalandesktop from "./gopalan6.png"
import SEO from "../../Seo";
const SatvikraasCaseStudy = () => {
  const vid = [video];

  const imagesFullSize = [akoyabranding, akoyapackaging, satvikimg4, satvikimg5];
  const images = [
    akoyaoverview
  ];
  const images1 = [
    akoyabranding
  ];
  const images2 = [
    gopalanmobile, gopalandesktop
  ];

  const images3 = [
    satvikraasimg3
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
    <>  <SEO

      title="Gopalan Group – Real Estate Website Design | Haraay"

      description="Haraay partnered with Gopalan Group, a leading real estate developer in Bangalore, to design a high-performance website that reflects their legacy, innovation, and presence in residential, commercial, and tech park projects."

      keywords="Gopalan Group, real estate website design, Bangalore real estate, infrastructure development, commercial projects, tech parks, real estate branding, Haraay Design Studio , retail"

    />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={styles.akoyacasestudy}
      >
        <div className={styles.akoyahero}>
          <div className={styles.akoyaherobackground}>
            {/* <video
            src={akoyahero}
            autoPlay
            loop
            muted
            alt="satvikraas Street Case Study"
          /> */}
            <img className={styles.herovideo} loop src={akoyahero} autoPlay muted></img>
          </div>
          <div className={styles.akoyaherocontent}>
            <h1>Gopalan Group</h1>
            <p>Website Design & development</p>
        <p onClick={() => window.open("https://gopalangroup.com", "_blank", "noopener,noreferrer")}
  style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "5px" }}>gopalangroup.com  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
  <path d="M12 1H19V8M19 12.737V17.5C19 17.8978 18.842 18.2794 18.5607 18.5607C18.2794 18.842 17.8978 19 17.5 19H2.5C2.10218 19 1.72064 18.842 1.43934 18.5607C1.15804 18.2794 1 17.8978 1 17.5V2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H7M10.9 9.1L18.55 1.45" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
          </div>
        </div>
        <div className={styles.akoyacasecontainer}>
          {/* Overview Section */}
          <div className={styles.akoyacasesection}>
            <div className={styles.akoyacasetext}>
              <h2 className={styles.nowrap}>Client Overview</h2>{" "}
              <div className={styles.rightbox}>
                <p>
                  Gopalan Group is a reputed real estate and infrastructure development company based in Bangalore, India. With a legacy of over three decades, they have built a strong presence in residential, commercial, retail, and tech park projects. Gopalan Group approached us with a clear objective — to elevate their digital identity and create a high-performing website that reflects their legacy, vision, and innovation.
                </p>
              </div>
            </div>
            <div className={styles.akoyacasetext}>
              <h2 className={styles.smallheading}>Project Objectives</h2>{" "}
              <div className={styles.rightbox}>
                <p>
                  <ul className={styles.customlist}>

                    <li> Redesign the Gopalan Group website to reflect modern aesthetics and premium brand value</li>
                    <li>Improve user experience across desktop and mobile devices</li>
                    <li>Streamline navigation for easy access to real estate, commercial, and hospitality verticals</li>
                    <li>Integrate 3D walkthrough videos to showcase property projects</li>
                    <li>Build a high-performance, SEO-optimized, and scalable website</li>
                  </ul>
                </p>
              </div>
            </div>
            {/* <ImageGallery images={images} id={"carousel1"} /> */}
            <VideoGallery images={vid} id={"carousel5"} />
            {/* <video src={video} autoPlay muted ></video> */}
          </div>

          {/* Branding Section */}
          <div
            className={`${styles.akoyacasesection}, ${styles.akoyacasebranding}`}
          >
            <div className={styles.akoyacasetext}>
              <h2>Our Approach</h2>{" "}
              <div className={styles.rightbox}>
                <p>
                  1. Discovery & Strategy : We conducted multiple stakeholder interviews to understand brand values, business goals, and customer pain points. This was followed by competitor benchmarking and user journey mapping.
                </p>
                <p> 2. Design & User Experience : Our design team developed a clean, responsive, and immersive UI tailored for different audience segments — home buyers, investors, corporate clients, and retail partners.
                </p>
                <div className={styles.highlightCard}>
                  <p>  Key UI/UX Highlights:</p>
                  <ul className={styles.customlist}> <li>
                    Hero sections with cinematic 3D visuals</li>
                    <li>  Filterable project listings by location & category</li>
                    <li>   Interactive masterplans and amenity layouts</li>
                    <li>  Seamless mobile experience</li> </ul>
                </div>
                <p>  3. 3D Visual Integration : We produced and integrated custom 3D animation videos and walkthroughs to bring Gopalan Group’s properties to life. These visuals helped users experience project scale, architecture, and lifestyle virtually, boosting lead engagement.
                </p>
                <div className={styles.highlightCard}>
                  <p>4. Web Development</p>
                  <ul className={styles.customlist}>
                    <li>  We developed the website using modern frameworks ensuring: </li>
                    <li>  Lightning-fast page loads (Core Web Vitals optimized)</li>
                    <li>    Easy content management via a custom backend</li>
                    <li>   API integrations for CRM and lead capture</li>
                    <li> Hosting setup, security hardening, and analytics tracking</li>

                  </ul>

                </div>
              </div>
            </div>

            {/* <ImageGallery  images={images3} id={"carousel2"}/> */}
            <img src={satvikraasimg3} alt="Overview" className={styles.akoyascaseimage} />
            {/* <VideoGallery images={vid} id={"carousel5"} /> */}
          </div>

          {/*Packaging & 3D Animation Section */}


          {/* Packaging Section */}
          <div
            className={`${styles.akoyacasesection} ${styles.akoyacasepackaging}`}
          >
            <div className={styles.akoyacasetext}>
              <h2>Results </h2>{" "}
              <div className={styles.rightbox}>
                <p>

                  Since launch, the revamped website has seen:
                  <ul className={styles.customlist}>
                    <li>35% higher conversion from site visits to inquiries</li>
                    <li>Faster loading time by over 60% compared to the previous version</li>
                    <li>Significant improvement in brand perception and digital engagement</li>
                  </ul>
                </p>

              </div>
            </div>
            <ImageGallery images={images2} id={"carousel3"} />
          </div>
          <div
            className={`${styles.akoyacasesection} ${styles.akoyacasepackaging}`}
          >
            <div className={styles.akoyacasetext}>
              <h2>Client Testimonial </h2>{" "}
              <div className={styles.rightbox}>
                <p>

                  Since launch, the revamped website has seen:
                  <ul className={styles.customlist}>
                    <li>2.5x increase in average session time</li>
                    <li>35% higher conversion from site visits to inquiries</li>
                    <li>Faster loading time by over 60% compared to the previous version</li>
                    <li>Significant improvement in brand perception and digital engagement</li>
                  </ul>
                </p>

              </div>
            </div>
            {/* <ImageGallery images={images2} id={"carousel3"} /> */}
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
        <ClientReview />
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
      </motion.div> </>
  );
};

export default SatvikraasCaseStudy;
