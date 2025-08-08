import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./Lokneta.module.scss";
import HeroImg from "./HMSHero.jpg";

import Sec2Full from "./sec2Full.jpg";
import sec2Left from "./sec2left.jpg";
import sec2Middle from "./Sec2middle.jpg";
import sec2Right from "./Sec2Right.jpg";

import Sec3Full from "./Sec3Full.jpg";


// import sec44 from "./Sec4Down.jpg";
import sec4Full from "./Sec4Full.jpg";


import Sec5Full from "./sec5Full.jpg";
import sec5Left from "./sec5left.jpg";
import sec5Middle from "./Sec5middle.jpg";
import sec5Right from "./Sec5Right.jpg";


import sec3DownLeft from "./Sec3DownLeft.svg";
import sec3DownRight from "./Sec3DownRight.svg";

import MobileCarousel from "../../components/MobileCarousel";
import iconarrow from "../../assets/iconarrow.png";
import iconarrow2 from "../../assets/iconarrow2.png";
import SimilarProjectsCards from "../../components/SeeMoreProjects";
import case1 from "./case1.jpg";
import case2 from "./case2.jpg";
import case3 from "./case3.jpg";

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
      text: "Bharat Verify",
      link: "#",
    },
    {
      image: case2,
      text: "Goa Job Portal",
      link: "#",
    },
    {
      image: case3,
      text: "Gopalan Group",
      link: "/casestudy/gopalan",
    },
  ];

  // Define image arrays for mobile carousels
  const sec2Images = [sec2Left, sec2Middle, sec2Right];
  const sec3UpImages = [Sec3Full];
  const sec3DownImages = [sec3DownLeft, sec3DownRight];
  const sec4Images = [sec4Full];
  const sec5Images = [sec5Left, sec5Middle, sec5Right];

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
            <h2 className={styles.mainTitle}>Amcho Dotor</h2>
            {/* <span className={styles.titleAccent}>Industry :</span> */}
          </div>
          <div
            className={`${styles.services} ${
              isLoaded ? styles.servicesVisible : ""
            }`}
          >
            <p className={styles.serviceTag}>
              Application Design & Development
            </p>
            <span className={styles.serviceAccent}>
              {" "}
              {/* Kid’s Oral Care | FMCG */}
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
          <h2 className={styles.sectionHeader}>Overview</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p>
              In today’s digital age, direct communication between citizens and
              their government is essential for transparency, accountability,
              and improved governance. The Government of Goa recognized this
              need and envisioned a platform that would allow citizens to
              directly communicate with the state’s Chief Minister (CM), voice
              their concerns, and seek solutions to pressing issues.
            </p>
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      {/* <div
        className={`${styles.textSection} ${
          isElementVisible("challenges") ? styles.sectionVisible : ""
        }`}
        data-section="challenges"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader} style={{ fontSize: "32px" }}>
            Challenges
          </h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Generic Tools Friction :
                <span>
                  Most tools had features we didn't use, and lacked what we
                  actually needed.
                </span>
              </p>
            </div>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Design-Led Workflow Needed:{" "}
                <span>
                  Our projects are creative-heavy, with dependencies across
                  branding, UI/UX, and 3D — we needed visual clarity.
                </span>
              </p>
            </div>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Speed & Simplicity :{" "}
                <span>
                  We wanted something blazing fast and beautifully simple — no
                  training required.
                </span>
              </p>
            </div>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Seamless Collaboration :{" "}
                <span>
                  Between creative leads, developers, and project managers,
                  clear task ownership was critical.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3up") ? styles.sectionVisible : ""
        }`}
        data-section="images3up"
      >
        <img src={Sec2Full} className={styles.imageFullScreen} alt="" />
      </div>
      {/* Section 2 Images - Desktop only */}
      <div
        className={`${styles.imageSection2} ${
          isElementVisible("images2") ? styles.sectionVisible : ""
        }`}
        data-section="images2"
      ></div>

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
          <h2 className={styles.sectionHeader}>Approach</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p>
              One-Tap Communication: Users can directly message the CM’s office
              with just one tap, entering their issue or concern. Guided Forms:
              A step-by-step form helps guide users through submitting
              complaints or suggestions, ensuring all necessary details are
              captured. Progress Tracking:** Citizens can track the status of
              their submission, seeing whether it is under review, in progress,
              or resolved. Multilingual Support:** The app allowed users to
              switch between languages, ensuring inclusivity for a broad
              audience.
            </p>
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

      {/* Key Features Section */}
     
      <div
        className={`${styles.textSection} ${
          isElementVisible("challenges") ? styles.sectionVisible : ""
        }`}
        data-section="challenges"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader}>Key Features</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}></p>
            </div>{" "}
            <br />
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                {/* Packaging Design: */}
                <span>
                  When it comes to the Bakery industry, the color palette chosen
                  is distinctive because these colors are not very commonly
                  used. <br />
                  The color palette is kept bold and fun-loving while remaining
                  welcoming and disruptive in its own sense.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Results & Impact Section */}

      {/* Section 4 Upper Images - Desktop only */}
      <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3down") ? styles.sectionVisible : ""
        }`}
        data-section="images3down"
      >
        {/* <img src={sec41} className={styles.imageFullScreen} alt="" /> */}
        <img src={sec4Full} className={styles.imageFullScreen} alt="" />
      </div>

      {/* Section 4 Mobile Carousel */}
      <div
        className={`${styles.mobileCarouselWrapper} ${
          isElementVisible("carousel4") ? styles.sectionVisible : ""
        }`}
        data-section="carousel4"
      >
        <MobileCarousel images={sec4Images} />
      </div>
      <div
        className={`${styles.textSection} ${
          isElementVisible("challenges") ? styles.sectionVisible : ""
        }`}
        data-section="challenges"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader}>Result</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}></p>
            </div>{" "}
            <br />
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                {/* Packaging Design: */}
                <span>
                  The result of this vision was **Lok Neta**, a mobile
                  application designed to bridge the gap between the people of
                  Goa and the CM’s office, providing a streamlined, accessible
                  platform for civic engagement. We were tasked with developing
                  the Lok Neta app, which would be both intuitive and secure,
                  ensuring ease of use for all citizens, from tech-savvy users
                  to those less familiar with digital platforms.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
         <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3up") ? styles.sectionVisible : ""
        }`}
        data-section="images3up"
      >
        <img src={Sec5Full} className={styles.imageFullScreen} alt="" />
      </div>
      {/* Section 2 Images - Desktop only */}
      <div
        className={`${styles.imageSection2} ${
          isElementVisible("images5") ? styles.sectionVisible : ""
        }`}
        data-section="images2"
      ></div>

      {/* Section 2 Mobile Carousel */}
      <div
        className={`${styles.mobileCarouselWrapper} ${
          isElementVisible("carousel2") ? styles.sectionVisible : ""
        }`}
        data-section="carousel2"
      >
        <MobileCarousel images={sec5Images} />
      </div>

      {/* <div className={styles.testimonialSection}>
        <h2 className={styles.title}>Result</h2>
        <p className={styles.text}>
          We wanted to break the mold of clinical, dull packaging — <br />
          Haraay made our brand POP with personality.”
        </p>
        <div className={styles.downContent}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className={styles.star} />
            ))}
          </div>
          <div className={styles.authorInfo}>
            <strong className={styles.name}>Toot</strong>
            <p className={styles.role}>Founders</p>
          </div>
        </div>
      </div> */}
      <SimilarProjectsCards
        title="Similar Projects"
        seeAllLink="https://example.com/all-projects"
        seeAllText="See All Projects"
        cards={demoCards}
      />
    </div>
  );
}
