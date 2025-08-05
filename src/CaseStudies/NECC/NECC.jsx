import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./NECC.module.scss";
import HeroImg from "./HMSHero.jpg";
import sec3UpLeft from "./Sec3left.jpg";
import sec3UpRight from "./Sec3right.jpg";

import Sec2Full1 from "./sec2Full1.png";
import Sec2Full2 from "./sec2Full2.png";
import Sec2Full3 from "./sec2Full3.png";
import Sec2Mid1 from "./Sec2Mid1.png";
import Sec2Mid2 from "./Sec2Mid2.png";
import Sec2Mid3 from "./Sec2Mid3.png";

import sec2Left from "./sec2left.jpg";
import Sec3Full from "./sec3Full.png";
import sec2Right from "./Sec2Right.jpg";
import sec41 from "./Sec4Up.png";
import sec42 from "./Sec42.png";
import sec43 from "./Sec42.png";
import sec44 from "./Sec44.png";
import sec4Full from "./Sec4down.png";

import sec3DownLeft from "./Sec3DownLeft.svg";
import sec3DownRight from "./Sec3DownRight.svg";

import MobileCarousel from "../../components/MobileCarousel";
import iconarrow from "../../assets/iconarrow.png";
import iconarrow2 from "../../assets/iconarrow2.png";
import SimilarProjectsCards from "../../components/SeeMoreProjects";
import case1 from "./case1.png";
import case2 from "./case2.png";
import case3 from "./case3.png";

export default function HMS() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const observerRef = useRef(null);
  const sectionsRef = useRef(new Map());


  const FaStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
    >
      <path
        d="M11.0007 16.7494L16.1738 19.8186C17.1212 20.3811 18.2805 19.5496 18.0312 18.498L16.66 12.7264L21.2348 8.83784C22.07 8.12861 21.6213 6.78352 20.5243 6.69792L14.5035 6.19657L12.1475 0.742855C11.7237 -0.247618 10.2777 -0.247618 9.85383 0.742855L7.49785 6.18435L1.47702 6.6857C0.380054 6.77129 -0.0687042 8.11638 0.766484 8.82561L5.34132 12.7141L3.97012 18.4858C3.72081 19.5374 4.8801 20.3689 5.82747 19.8064L11.0007 16.7494Z"
        fill="url(#paint0_linear_3793_11456)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3793_11456"
          x1="-3.40566"
          y1="9.78245"
          x2="21.5253"
          y2="9.78245"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.41" stop-color="#F9DA60" />
          <stop offset="1" stop-color="#FDCA00" />
        </linearGradient>
      </defs>
    </svg>
  );
  const demoCards = [
    {
      image: case1,
      text: "Akoya",
      link: "https://example.com/akoya",
    },
    {
      image: case2,
      text: "Amcho Dotor",
      link: "https://example.com/amcho-dotor",
    },
    {
      image: case3,
      text: "Coming Soon",
      link: "https://example.com/coming-soon",
    },
  ];

  // Define image arrays for mobile carousels
  const sec2Images = [Sec2Full1, Sec2Mid1, Sec2Mid2, Sec2Mid3, Sec2Full3];
  const sec3UpImages = [sec3UpLeft, sec3UpRight];
  const sec3DownImages = [sec3DownLeft, sec3DownRight];
  const sec4Images = [sec41, sec42, sec43, sec44];
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  // Persistent intersection observer callback
  const handleIntersection = useCallback(
    (entries) => {
      requestAnimationFrame(() => {
        const newVisibleSections = new Set(visibleSections);
        const newAnimatedElements = new Set(animatedElements);
        let sectionsChanged = false;
        let elementsChanged = false;

        entries.forEach((entry) => {
          const sectionId = entry.target.dataset.section;

          if (entry.isIntersecting && !newVisibleSections.has(sectionId)) {
            newVisibleSections.add(sectionId);
            sectionsChanged = true;

            // Mark element as animated once it becomes visible
            if (!newAnimatedElements.has(sectionId)) {
              newAnimatedElements.add(sectionId);
              elementsChanged = true;
            }
          }
        });

        if (sectionsChanged) {
          setVisibleSections(newVisibleSections);
        }
        if (elementsChanged) {
          setAnimatedElements(newAnimatedElements);
        }
      });
    },
    [visibleSections, animatedElements]
  );

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Create optimized intersection observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.15,
      rootMargin: "50px 0px -50px 0px",
    });

    // Observe sections with delay to prevent initial render blocking
    const sectionsTimer = setTimeout(() => {
      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((section) => {
        sectionsRef.current.set(section.dataset.section, section);
        observerRef.current.observe(section);
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearTimeout(sectionsTimer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      sectionsRef.current.clear();
    };
  }, [handleIntersection]);

  // Helper function to check if element should be visible
  const isElementVisible = (sectionId) => {
    return animatedElements.has(sectionId);
  };

  return (
    <div
      className={`${styles.caseStudyMainPage} ${isLoaded ? styles.loaded : ""}`}
    >
      {/* Hero Section */}
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
            <h2 className={styles.mainTitle}>NECC</h2>
            <span className={styles.titleAccent}>Industry :</span>
          </div>
          <div
            className={`${styles.services} ${
              isLoaded ? styles.servicesVisible : ""
            }`}
          >
            <p className={styles.serviceTag}>
              Event Branding, Environmental Graphics, Print & Digital
              Communication, Social Media, Award Collaterals, Photo Booth
            </p>
            <span className={styles.serviceAccent}>
              {" "}
              NECC Women’s Tennis Championships 2025
            </span>
          </div>
        </div>
        <div
          className={`${styles.heroImg} ${
            isLoaded ? styles.heroImgVisible : ""
          }`}
        >
          <div className={styles.heroImageContainer}>
            <img
              src={HeroImg}
              alt="HMS Project Management Interface"
              loading="eager"
            />
            <div className={styles.heroImageOverlay}></div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div
        className={`${styles.textSection} ${
          isElementVisible("overview") ? styles.sectionVisible : ""
        }`}
        data-section="overview"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader}>The Challenge</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p>
              The NECC Women’s Tennis Tournament isn’t just a competition — it’s
              a celebration of athletic excellence, ambition, and fearless
              spirit. With a legacy rooted in empowering women through sports,
              the 2025 edition aimed to deliver an unforgettable visual and
              emotional experience. Our task at Haraay Design Studio: Create a
              cohesive, bold, and empowering brand identity system that could
              carry across stadiums, screens, signage, and souvenirs — and
              elevate the tournament’s growing national presence.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3up") ? styles.sectionVisible : ""
        }`}
        data-section="images3up"
      >
        <img src={Sec2Full1} className={styles.imageFullScreen} alt="" />
        <img src={Sec2Full2} className={styles.imageFullScreen} alt="" />
        <img src={Sec2Full3} className={styles.imageFullScreen} alt="" />
      </div>
      {/* Section 2 Images - Desktop only */}

      {/* Section 2 Mobile Carousel */}
      <div
        className={`${styles.mobileCarouselWrapper} ${
          isElementVisible("carousel2") ? styles.sectionVisible : ""
        }`}
        data-section="carousel2"
      >
        <MobileCarousel images={sec2Images} />
      </div>

      {/* Our Approach Section */}
      <div
        className={`${styles.textSection} ${
          isElementVisible("overview") ? styles.sectionVisible : ""
        }`}
        data-section="overview"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader}>
            Our Creative <br /> Approach
          </h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p>
              We built the entire brand identity with movement, energy, and
              elegance at its core.
            </p>
            <div className={styles.approachCards}>
              <div className={styles.aCard}>
                <span> Core Brand System:</span>A striking wordmark +
                W-symbol representing strength and motion <br /> Vibrant gradients and
                athletic typography<br />A consistent brand language across
                billboards, banners, backdrops, and court-side graphics
              </div>
                 {expanded && (
            <>
  <div className={styles.aCard}>
                <span>    Environmental Design:</span>
           
Entrance archways, directional signage, stadium hoardings, and media backdrops<br />Court-side banners and stands designed for visual impact on-ground and on-screen<br />Branded press zones, player waiting lounges, and VIP areas
              </div>
                <div className={styles.aCard}>
                <span> Award & Collateral Design:</span>
Custom certificates, badges, and award packaging<br />On-brand merchandise & athlete kits<br />Instagram-worthy Photo Booths for fan engagement and brand recall
              </div>
                <div className={styles.aCard}>
              The 2025 edition of the NECC Women’s Tennis Tournament saw a record uptick in fan engagement, media coverage, and sponsor visibility. The branding gave the event a world-class visual identity that matched the talent and energy on court.
              </div>

</>
            )}{" "}
            <span
              className={styles.readmorebtn}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <>
                  Read Less <img src={iconarrow} alt="Arrow Icon" />
                </>
              ) : (
                <>
                  Read More <img src={iconarrow2} alt="Arrow Icon" />
                </>
              )}
            </span>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 Upper Images - Desktop only */}

      {/* Section 3  Mobile Carousel */}
      <div
        className={`${styles.mobileCarouselWrapper} ${
          isElementVisible("carousel3up") ? styles.sectionVisible : ""
        }`}
        data-section="carousel3up"
      >
        <MobileCarousel images={sec3UpImages} />
      </div>

      {/* Section 3 Images - Desktop only */}
      <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3down") ? styles.sectionVisible : ""
        }`}
        data-section="images3down"
      >
        <img src={Sec3Full} className={styles.imageFullScreen} alt="" />
      </div>

      <div className={styles.testimonialSection}>
        <h2 className={styles.title}>Client Testimonial</h2>
        <p className={styles.text}>
        “The branding elevated everything —  from how we looked <br /> to how we were remembered.”
        </p>
        <div className={styles.downContent}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className={styles.star} />
            ))}
          </div>
          <div className={styles.authorInfo}>
            <strong className={styles.name}>NECC</strong>
            <p className={styles.role}>Tournament Team</p>
          </div>
        </div>
      </div>
      <SimilarProjectsCards
        title="Similar Projects"
        seeAllLink="https://example.com/all-projects"
        seeAllText="See All Projects"
        cards={demoCards}
      />
    </div>
  );
}
