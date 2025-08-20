import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./PurusCaseStudy.module.scss";
import HeroImg from "./HMSHero.jpg";

import Sec2Full from "./Sec2Full.jpg";

import Sec2Img1 from "./Sec2Img1.jpg";
import Sec2Img2 from "./Sec2Img2.jpg";
import Sec2Img3 from "./Sec2Img3.jpg";
import Sec2Img4 from "./Sec2Img4.jpg";

import Sec3Full from "./Sec3Full.jpg";


import Sec3Img1 from "./Sec3Img1.jpg";
import Sec3Img2 from "./Sec3Img2.jpg";
import Sec3Img3 from "./Sec3Img3.jpg";
import Sec3Img4 from "./Sec3Img4.png";

import Sec4Full from "./Sec4Full.jpg";
import Sec4Img1 from "./Sec4Img1.jpg";
import Sec4Img2 from "./Sec4Img2.jpg";
import Sec4Img3 from "./Sec4Img3.jpg";
import Sec4Img4 from "./Sec4Img4.jpg";

import Sec5Full from "./Sec5Full.jpg";
import Sec5Img1 from "./Sec5Img1.jpg";
import Sec5Img2 from "./Sec5Img2.jpg";

import Sec6Full from "./Sec6Full.jpg";
import Sec6Img1 from "./Sec6Img1.jpg";
import Sec6Img2 from "./Sec6Img2.jpg";
import Sec6Img3 from "./Sec6Img3.jpg";
import Sec6Img4 from "./Sec6Img4.jpg";

import Sec7Full from "./Sec7Full.jpg";
import Sec7Img1 from "./Sec7Img1.jpg";
import Sec7Img2 from "./Sec7Img2.jpg";


import Sec8Full from "./Sec8Full1.jpg";
import Sec8Video from "./Sec8Video.mp4";
import Sec8Img1 from "./Sec8Img1.jpg";
import Sec8Img2 from "./Sec8Img2.jpg";
import Sec8Img3 from "./Sec8Img3.jpg";

import Sec9Full from "./Sec9Full.jpg";
import Sec10Img1 from "./Sec10Img1.jpg";
import Sec10Video from "./Purus_instagram.mp4"

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
  const sec2Images = [Sec2Img1 ,Sec2Img2 ,Sec2Img3,Sec2Img4];
  const sec3UpImages = [Sec3Img1,Sec3Img2,Sec3Img3,Sec3Img4];

  const sec4Images = [Sec4Img1, Sec4Img2, Sec4Img3,Sec4Img4];
  const sec5Images = [Sec5Img1, Sec5Img2];
  const sec6Images = [Sec6Img1, Sec6Img2,Sec6Img3,Sec6Img4];
  const sec7Images = [Sec7Img1, Sec7Img2];
  const sec8Images = [Sec8Img1, Sec8Img2,Sec8Img3];
  const sec9Images = [Sec9Full];
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
            <h2 className={styles.mainTitle}>Puru’s Enterprises</h2>
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
          <h2 className={styles.sectionHeader}>
            Logo & <br /> Typography
          </h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p>
              We created a sharp, bold logotype that plays with angles and
              rounded corners, symbolizing harmony between structure and
              creativity. The type system balances geometric discipline with a
              human touch.
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
          <h2 className={styles.sectionHeader}>Client Brief</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p>
              Puru’s Enterprises approached us with a powerful mission: to build
              a consciously crafted, eco-friendly stationery brand that could
              stand out in a competitive market while staying rooted in
              sustainability. Their products—made from recycled materials like
              newspaper pencils—needed a brand voice and design system that
              resonated with environmentally aware audiences without
              compromising on modern aesthetics and market appeal. <br />
              <b>Their primary ask was bold yet clear:</b> <br />
              Create an identity that communicates sustainability and modernity.{" "}
              <br />
              Design packaging that appeals to both kids and adults.
              <br />
              Bring life to the brand through a unique, ownable character.
              <br />
              Build a consistent system that works across physical and digital
              touchpoints.
              <br />
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
          <h2 className={styles.sectionHeader}>Our Approach</h2>
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
               We started from scratch with deep discovery. Through collaborative workshops and brand strategy exercises, we identified the emotional space Puru’s should occupy—playful, conscious, and design-forward. From there, we developed a comprehensive brand identity that visually balances earthy values with contemporary edge.
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
        <img src={Sec4Full} className={styles.imageFullScreen} alt="" />
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
          <h2 className={styles.sectionHeader}>Colors & Visuals</h2>
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
              Inspired by earthy materials and primary school palettes, the brand colors use muted browns and lively pops of green, orange, and blue—symbolizing both nature and creativity. The result is a visual language that is kid-friendly, eco-conscious, and contemporary.    </span>
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* Section 5 Upper Images - Desktop only */}
      <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3down") ? styles.sectionVisible : ""
        }`}
        data-section="images3down"
      >
        {/* <img src={sec41} className={styles.imageFullScreen} alt="" /> */}
        <img src={Sec5Full} className={styles.imageFullScreen} alt="" />
      </div>

      {/* Section 5 Mobile Carousel */}
      <div
        className={`${styles.mobileCarouselWrapper} ${
          isElementVisible("carousel4") ? styles.sectionVisible : ""
        }`}
        data-section="carousel4"
      >
        <MobileCarousel images={sec5Images} />
      </div>



           <div
        className={`${styles.textSection} ${
          isElementVisible("challenges") ? styles.sectionVisible : ""
        }`}
        data-section="challenges"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader}>Branding & Packaging Design</h2>
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
           We designed a dynamic, modular logo system that is both bold and minimal. Inspired by geometric forms and patterns found in nature, the logo mark feels grounded and optimistic. The typography is clean, and the color palette features a vibrant mix of earthy and playful tones, representing creativity and sustainability in harmony.
<br /> 
<br /> 
The packaging design aimed to break away from the predictable “eco-look.” Instead, we delivered vibrant, pattern-driven boxes for their newspaper pencils that immediately catch attention on shelves while still aligning with their sustainable values. Each product pack was thoughtfully designed to communicate the purpose and quality of the product, and reflect the brand’s confident new identity.  </span>
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* Section 6 Upper Images - Desktop only */}
      <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3down") ? styles.sectionVisible : ""
        }`}
        data-section="images3down"
      >
        {/* <img src={sec41} className={styles.imageFullScreen} alt="" /> */}
        <img src={Sec6Full} className={styles.imageFullScreen} alt="" />
      </div>

      {/* Section 6 Mobile Carousel */}
      <div
        className={`${styles.mobileCarouselWrapper} ${
          isElementVisible("carousel4") ? styles.sectionVisible : ""
        }`}
        data-section="carousel4"
      >
        <MobileCarousel images={sec6Images} />
      </div>

               <div
        className={`${styles.textSection} ${
          isElementVisible("challenges") ? styles.sectionVisible : ""
        }`}
        data-section="challenges"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader}>Iconography & Graphics</h2>
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
          We designed a set of icons and graphic elements that add modularity to the brand—perfect for digital, packaging, or social content. These included visual metaphors of growth, learning, reuse, and imagination.  </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 7 Upper Images - Desktop only */}
      <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3down") ? styles.sectionVisible : ""
        }`}
        data-section="images3down"
      >
        {/* <img src={sec41} className={styles.imageFullScreen} alt="" /> */}
        <img src={Sec7Full} className={styles.imageFullScreen} alt="" />
      </div>

      {/* Section 7 Mobile Carousel */}
      <div
        className={`${styles.mobileCarouselWrapper} ${
          isElementVisible("carousel4") ? styles.sectionVisible : ""
        }`}
        data-section="carousel4"
      >
        <MobileCarousel images={sec7Images} />
      </div>

       <div
        className={`${styles.textSection} ${
          isElementVisible("challenges") ? styles.sectionVisible : ""
        }`}
        data-section="challenges"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader}>Character Design</h2>
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
        To give the brand a friendly, memorable face, we created an original 3D character—an orange, joyful personality with glasses and a hand-knit sweater. The character became a visual mascot to represent curiosity, learning, and eco-consciousness. It is adaptable across social media, product storytelling, and campaigns.  </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 8 Upper Images - Desktop only */}
      <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3down") ? styles.sectionVisible : ""
        }`}
        data-section="images3down"
      >
        {/* <img src={sec41} className={styles.imageFullScreen} alt="" /> */}
        <img src={Sec8Full} className={styles.imageFullScreen} alt="" />

      </div>


      {/* Section 4 Mobile Carousel */}
      <div
        className={`${styles.mobileCarouselWrapper} ${
          isElementVisible("carousel4") ? styles.sectionVisible : ""
        }`}
        data-section="carousel4"
      >
        <MobileCarousel images={sec8Images} />
      </div>
       <video 
  src={Sec8Video} 
  autoPlay 
  muted 
  loop 
  playsInline 
  className={styles.videoBackground} 
/>
       <div
        className={`${styles.textSection} ${
          isElementVisible("challenges") ? styles.sectionVisible : ""
        }`}
        data-section="challenges"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader}>The Outcome</h2>
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
        Puru’s Enterprises now has a brand that’s not just eco-friendly—it’s emotionally sticky, visually delightful, and strategically future-ready. Their bold new identity puts them in a strong position to expand into school kits, corporate gifting, and large-scale sustainable product lines.
Early feedback has been overwhelmingly positive—distributors, educators, and parents alike have applauded the design-centric approach that makes sustainability feel cool and collectible.
<br /> <br />
We gave a stationery startup a bold, lovable brand that makes sustainability feel cool, collectible, and kid-approved. From identity to mascot to packaging—every touchpoint was designed to educate, engage, and spark joy. </span>
              </p>
            </div>
          </div>
        </div>
      </div>
         {/* Section 9 Upper Images - Desktop only */}
      <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3down") ? styles.sectionVisible : ""
        }`}
        data-section="images3down"
      >
        {/* <img src={sec41} className={styles.imageFullScreen} alt="" /> */}
        <img src={Sec9Full} className={styles.imageFullScreen} alt="" />
      </div>

      {/* Section 7 Mobile Carousel */}
      <div
        className={`${styles.mobileCarouselWrapper} ${
          isElementVisible("carousel4") ? styles.sectionVisible : ""
        }`}
        data-section="carousel4"
      >
        <MobileCarousel images={sec9Images} />
      </div>
       <div
        className={`${styles.textSection} ${
          isElementVisible("challenges") ? styles.sectionVisible : ""
        }`}
        data-section="challenges"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader } style={{fontSize:"24px" , maxWidth:"300px"}}>A conscious brand built for curious minds.</h2>
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
                <span >
        We crafted a playful yet strategic identity system that makes eco-friendly stationery stand out and scale.  </span>
              </p>
            </div>
          </div>
        </div>
      </div>
     <div className={styles.LastSeccontainer}>
  <video
    src={Sec10Video}
    autoPlay
    muted
    loop
    playsInline
    className={styles.video}
  />
  <img src={Sec10Img1} alt="Example" className={styles.image} />
</div>

      {/* <div className={styles.testimonialSection}>
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
