import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./ToothCaseStudy.module.scss";
import HeroImg from "./HMSHero.jpg";
import sec3UpLeft from "./Sec3left.jpg";
import sec3UpRight from "./Sec3right.jpg";

import Sec2Full from "./sec2Full.png";
import sec2Left from "./sec2left.jpg";
import Sec3Full from "./sec3Full.png";
import sec2Right from "./Sec2Right.jpg";
import sec41 from "./Sec4Up.png"
import sec42 from "./Sec42.png"
import sec43 from "./Sec42.png"
import sec44 from "./Sec44.png"
import sec4Full from "./Sec4down.png"


import sec3DownLeft from "./Sec3DownLeft.svg";
import sec3DownRight from "./Sec3DownRight.svg";
import sec4UpLeft from "./sec4UpLeft.svg";
import sec4UpRight from "./sec4UpRight.svg";
import sec4Down from "./sec4Down.svg";
import MobileCarousel from "../../components/MobileCarousel";
import iconarrow from "../../assets/iconarrow.png";
import iconarrow2 from "../../assets/iconarrow2.png";
import SimilarProjectsCards from "../../components/SeeMoreProjects";
import case1 from "./case1.png";
import case2 from "./case2.png";
import case3 from "./case3.png";
import sec3up from "./Sec3up.jpg";
import sec3down from "./Sec3down.jpg";
export default function HMS() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const observerRef = useRef(null);
  const sectionsRef = useRef(new Map());
 const FaStar = () => (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M11.0007 16.7494L16.1738 19.8186C17.1212 20.3811 18.2805 19.5496 18.0312 18.498L16.66 12.7264L21.2348 8.83784C22.07 8.12861 21.6213 6.78352 20.5243 6.69792L14.5035 6.19657L12.1475 0.742855C11.7237 -0.247618 10.2777 -0.247618 9.85383 0.742855L7.49785 6.18435L1.47702 6.6857C0.380054 6.77129 -0.0687042 8.11638 0.766484 8.82561L5.34132 12.7141L3.97012 18.4858C3.72081 19.5374 4.8801 20.3689 5.82747 19.8064L11.0007 16.7494Z" fill="url(#paint0_linear_3793_11456)"/>
  <defs>
    <linearGradient id="paint0_linear_3793_11456" x1="-3.40566" y1="9.78245" x2="21.5253" y2="9.78245" gradientUnits="userSpaceOnUse">
      <stop offset="0.41" stop-color="#F9DA60"/>
      <stop offset="1" stop-color="#FDCA00"/>
    </linearGradient>
  </defs>
</svg>)
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
  const sec2Images = [sec2Left, sec2Right];
  const sec3UpImages = [sec3UpLeft, sec3UpRight];
  const sec3DownImages = [sec3DownLeft, sec3DownRight];
  const sec4Images = [sec41,sec42,sec43,sec44];
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
            <h2 className={styles.mainTitle}>Toot</h2>
            <span className={styles.titleAccent}>Industry :</span>
          </div>
          <div
            className={`${styles.services} ${
              isLoaded ? styles.servicesVisible : ""
            }`}
          >
            <p className={styles.serviceTag}>
              Brand Strategy, Logo Design, Packaging Design
            </p>
            <span className={styles.serviceAccent}>
              {" "}
              Kid’s Oral Care | FMCG
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
          <h2 className={styles.sectionHeader}>Client Brief</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p>
              Toot came to us as a fresh, playful idea — a kids’ toothpaste
              brand that aimed to make brushing a fun, exciting ritual instead
              of a daily chore. As a startup brand in the oral care market, Toot
              wanted to stand out with a bold visual identity, cute mascots, and
              fun packaging that kids would instantly love and parents would
              trust.
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
          <h2 className={styles.sectionHeader}>Our Approach</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p>
              We started with one core belief: Toothpaste doesn’t have to be
              boring. From brand strategy to packaging design, we shaped Toot
              into a cheeky, confident, and ultra-fun brand. Designed for milk
              teeth, messy mornings, and tiny giggles.
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
      {/* <div
        className={`${styles.textSection} ${
          isElementVisible("features") ? styles.sectionVisible : ""
        }`}
        data-section="features"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader}>Key Features</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p className={styles.featuresIntro}>
              We led the entire product lifecycle — from UX research to
              deployment:
            </p>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureTitle}>Dashboard:</span>
                <p>Quick snapshot of project statuses and top priorities</p>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureTitle}>Project Boards:</span>
                <p>
                  Custom boards with tasks, stages, assignees, and deadlines
                </p>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureTitle}>Task View:</span>
                <p>Assign, comment, attach files, and update progress</p>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureTitle}>Timeline View:</span>
                <p>Gantt-style visualization for real-time tracking</p>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureTitle}>Activity Feed:</span>
                <p>A subtle stream of project events and user updates</p>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureTitle}>
                  Roles & Permissions:
                </span>
                <p>Admins, Project Leads, Creators, Collaborators</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div
        className={`${styles.textSection} ${
          isElementVisible("challenges") ? styles.sectionVisible : ""
        }`}
        data-section="challenges"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader}>Visual Identity <br /> & Packaging </h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
           
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Visual Identity:
                <span>
              A squishy, punchy logotype that looks like it could be chewed. Bold, edible color palette — Lemon , Blue Raspberry , Orange , Cherry . Playful typography with wobbly energy. Kid-drawn-style icons and wild doodles
                </span>
              </p>
            </div> <br />
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Packaging Design:
                <span>
               Tubes designed to pop on the shelf and bathroom counter. Custom flavor illustrations and character motifs. Fun unboxing moments with surprise graphics inside
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
        <img src={sec41} className={styles.imageFullScreen} alt="" />
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
 <div className={styles.testimonialSection}>
      <h2 className={styles.title}>Client Testimonial</h2>
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
