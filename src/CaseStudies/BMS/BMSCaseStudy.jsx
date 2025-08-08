import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./BMSCaseStudy.module.scss";
import HeroImg from "./HMSHero.jpg";

import Sec2Full from "./sec2Full.jpg";
import sec2Left from "./sec2left.jpg";
import sec2Middle from "./Sec2middle.jpg";
import sec2Right from "./Sec2Right.jpg";

import Sec3Full from "./Sec3Full.jpg";

import Sec3UpLeft from "./Sec3UpLeft.jpg"
import Sec3UpRight from "./Sec3UpRight.jpg"
import Sec3DownLeft from "./Sec3Downleft.jpg"
import Sec3DownRight from "./Sec3DownRight.jpg"





import sec41 from "./Sec4UpLeft.jpg";
import sec42 from "./Sec4UpRight.jpg"
import sec43 from "./Sec4Down.jpg";
// import sec44 from "./Sec4Down.jpg";
import sec4Full from "./Sec4Full.jpg";

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
      text: "Purus",
      link: "#",
    },
    {
      image: case2,
      text: "Akoya",
      link: "/casestudy/akoya",
    },
    {
      image: case3,
      text: "Necc",
      link: "/casestudy/necc",
    },
  ];

  // Define image arrays for mobile carousels
  const sec2Images = [sec2Left, sec2Middle, sec2Right];
  const sec3UpImages = [Sec3DownLeft,Sec3DownRight , Sec3UpLeft,Sec3UpRight];
  const sec3DownImages = [sec3DownLeft, sec3DownRight];
  const sec4Images = [sec41, sec42, sec43];
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
            <h2 className={styles.mainTitle}>BMS Web Application</h2>
            {/* <span className={styles.titleAccent}>Industry :</span> */}
          </div>
          <div
            className={`${styles.services} ${
              isLoaded ? styles.servicesVisible : ""
            }`}
          >
            <p className={styles.serviceTag}>Branding & Packaging</p>
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
          <h2 className={styles.sectionHeader}>Client Overview</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p>
              The real estate industry involves complex processes such as
              property management, client relations, sales tracking, lease
              management, and inventory tracking, among others. Our client, a
              mid-sized real estate company with a growing portfolio of
              properties, faced challenges in managing multiple operational
              tasks through scattered, inefficient methods such as spreadsheets,
              emails, and disconnected systems.
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
              Property Management: Track property listings, inventory, and
              availability, and associate them with documents such as contracts
              and images. Sales Tracking:-Monitor lead generation, client
              interactions, and sales progress in real-time. <br />Finance & Lease
              Management: Automate billing, track payments, manage lease
              agreements, and generate financial reports. <br />
              Collaboration:- Provide secure internal messaging and
              notifications for team members to communicate.
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
          <h2 className={styles.sectionHeader}>
         UI/UX Design
          </h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
              
              </p>
            </div>{" "}
            <br />
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                {/* Packaging Design: */}
                <span>
               Given the complexity of the application, we focused on creating an intuitive user interface that would allow various stakeholders to easily navigate the system. The design featured:
<br /> Dashboard with Key Metrics: The main dashboard displayed key performance indicators (KPIs) such as total sales, properties under management, open leads, and financial reports. 
<br />Role-Based Access: We incorporated different user roles (administrators, property managers, sales agents) with tailored permissions and views to ensure that each user had access to the relevant features.
<br />Responsive Design: The application was designed to be fully responsive, allowing users to access the system from any device, including tablets and smartphones. With monochromatic color scheme, keeping it light & fresh over all.
<br />The successful development and implementation of the BMS have positioned the client to scale their operations seamlessly, making this solution a critical asset in their continued growth in the real estate industry.
Read less
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
