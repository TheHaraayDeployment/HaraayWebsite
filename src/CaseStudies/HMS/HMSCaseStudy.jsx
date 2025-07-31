import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./HMSCaseStudy.module.scss";
import HeroImg from "./HMSHero.jpg";
import sec2Left from "./sec2left.jpg";
import sec2Middle from "./sec2middle.jpg";
import sec2Right from "./sec2Right.jpg";
import sec3UpLeft from "./Sec3UpLeft.svg";
import sec3UpRight from "./Sec3UpRight.svg";
import sec3DownLeft from "./Sec3DownLeft.svg";
import sec3DownRight from "./Sec3DownRight.svg";
import sec4UpLeft from "./Sec4UpLeft.svg";
import sec4UpRight from "./Sec4UpRight.svg";
import sec4Down from "./Sec4Down.svg";
import MobileCarousel from "../../components/MobileCarousel";

export default function HMS() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const observerRef = useRef(null);
  const sectionsRef = useRef(new Map());

  // Define image arrays for mobile carousels
  const sec2Images = [sec2Left, sec2Middle, sec2Right];
  const sec3UpImages = [sec3UpLeft, sec3UpRight];
  const sec3DownImages = [sec3DownLeft, sec3DownRight];
  const sec4Images = [sec4UpLeft, sec4UpRight, sec4Down];

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
            <h2 className={styles.mainTitle}>Haraay's Project Management</h2>
            <span className={styles.titleAccent}></span>
          </div>
          <div
            className={`${styles.services} ${
              isLoaded ? styles.servicesVisible : ""
            }`}
          >
            <p className={styles.serviceTag}>Web Application</p>
            <span className={styles.serviceAccent}></span>
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
              At Haraay Design Studio, managing multiple clients, deadlines, and
              design workflows required a tool that fit exactly how we work.
              Existing project management platforms felt cluttered, slow, or too
              generic. So, we decided to design and develop our own custom
              web-based project management application, tailored specifically
              for the creative processes and fast-paced collaboration we thrive
              on.
            </p>
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div
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
      </div>

      {/* Section 2 Images - Desktop only */}
      <div
        className={`${styles.imageSection2} ${
          isElementVisible("images2") ? styles.sectionVisible : ""
        }`}
        data-section="images2"
      >
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img
              src={sec2Left}
              className={styles.leftimg}
              alt="Dashboard Overview"
            />
            {/* <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>Dashboard</span>
            </div> */}
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={sec2Middle}
              className={styles.rightimg}
              alt="Project Board View"
            />
            {/* <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>Project Board</span>
            </div> */}
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={sec2Right}
              className={styles.rightimg}
              alt="Task Management"
            />
            {/* <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>Task View</span>
            </div> */}
          </div>
        </div>
      </div>

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
          isElementVisible("approach") ? styles.sectionVisible : ""
        }`}
        data-section="approach"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader} style={{ textWrap: "wrap" }}>
            Our Approach
          </h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p className={styles.approachIntro}>
              We led the entire product lifecycle — from UX research to
              deployment:
            </p>

            <div className={styles.approachSection}>
              <span className={styles.approachTitle}>Design:</span>
              <div className={styles.approachDetails}>
                <div className={styles.approachItem}>
                  <strong>User-Centered UI:</strong> Designed with empathy for
                  designers, developers, and managers
                </div>
                <div className={styles.approachItem}>
                  <strong>Minimalist Interface:</strong> Clean whites, soft
                  greys, and subtle accent colors
                </div>
                <div className={styles.approachItem}>
                  <strong>Kanban + Timeline Views:</strong> Visually fluid and
                  intuitive layouts
                </div>
              </div>
            </div>

            <div className={styles.approachSection}>
              <span className={styles.approachTitle}>Development:</span>
              <div className={styles.approachDetails}>
                <div className={styles.approachItem}>
                  <strong>Frontend:</strong> React.js with TailwindCSS for
                  ultra-fast UI rendering
                </div>
                <div className={styles.approachItem}>
                  <strong>Backend:</strong> Java Springboot with SQL for
                  flexibility and speed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 Upper Images - Desktop only */}
      <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3up") ? styles.sectionVisible : ""
        }`}
        data-section="images3up"
      >
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img
              src={sec3UpLeft}
              className={styles.leftimg}
              alt="Timeline View"
            />
            {/* <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>Timeline View</span>
            </div> */}
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={sec3UpRight}
              className={styles.rightimg}
              alt="Collaboration Features"
            />
            {/* <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>Team Collaboration</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Section 3 Upper Mobile Carousel */}
      <div
        className={`${styles.mobileCarouselWrapper} ${
          isElementVisible("carousel3up") ? styles.sectionVisible : ""
        }`}
        data-section="carousel3up"
      >
        <MobileCarousel images={sec3UpImages} />
      </div>

      {/* Section 3 Lower Images - Desktop only */}
      <div
        className={`${styles.imageSection3} ${
          isElementVisible("images3down") ? styles.sectionVisible : ""
        }`}
        data-section="images3down"
      >
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img
              src={sec3DownLeft}
              className={styles.rightimg}
              alt="Activity Feed"
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>Activity Feed</span>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={sec3DownRight}
              className={styles.leftimg}
              alt="User Management"
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>User Roles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 Lower Mobile Carousel */}
      <div
        className={`${styles.mobileCarouselWrapper} ${
          isElementVisible("carousel3down") ? styles.sectionVisible : ""
        }`}
        data-section="carousel3down"
      >
        <MobileCarousel images={sec3DownImages} />
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
          <h2 className={styles.sectionHeader}>Key Features</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <p className={styles.featuresIntro}>
              We led the entire product lifecycle — from UX research to
              deployment
            </p>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Dashboard : {" "}
                <span>
                    Quick snapshot of project statuses and top priorities
                </span>
              </p>
            </div>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Project Boards :{" "}
                <span>
                  Custom boards with tasks, stages, assignees, and deadlines
                </span>
              </p>
            </div>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Task View :{" "}
                <span>Assign, comment, attach files, and update progress</span>
              </p>
            </div>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Timeline View :{" "}
                <span>Gantt-style visualization for real-time tracking</span>
              </p>
            </div>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Activity Feed :{" "}
                <span>A subtle stream of project events and user updates</span>
              </p>
            </div>
            <div className={styles.challengeItem}>
              <p className={styles.challengeTitle}>
                Roles & Permissions :{" "}
                <span>Admins, Project Leads, Creators, Collaborators</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Results & Impact Section */}
      <div
        className={`${styles.textSection} ${
          isElementVisible("results") ? styles.sectionVisible : ""
        }`}
        data-section="results"
      >
        <div className={styles.leftSide}>
          <h2 className={styles.sectionHeader}>Results & Impact</h2>
          <div className={styles.sectionAccent}></div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textContent}>
            <div className={styles.resultsList}>
              <div className={styles.resultItem}>
                <p>
                  {" "}
                  60% Faster Project Updates With real-time editing and fewer
                  sync-up calls
                </p>
              </div>
              <div className={styles.resultItem}>
                <p>
                  {" "}
                  Internal Communication Boost Chat, mentions, and notifications
                  reduced Slack clutter
                </p>
              </div>
              <div className={styles.resultItem}>
                <p>
                  {" "}
                  Focus-Driven Workflows Designers say the interface "keeps them
                  in flow"
                </p>
              </div>
              <div className={styles.resultItem}>
                <p>
                  Streamlined Delivery Clear visibility helped hit 90% of
                  deadlines in the last 6 months
                </p>
              </div>
            </div>

            <p className={styles.conclusionText}>
              By designing and developing our own project management web app, we
              didn't just solve a workflow issue — we redefined how Haraay
              operates. This in-house tool now sits at the heart of our studio,
              empowering designers and developers alike to do their best work —
              in the most organized, minimal, and Haraay way possible.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 Upper Images - Desktop only */}
      <div
        className={`${styles.imageSection4} ${
          isElementVisible("images4up") ? styles.sectionVisible : ""
        }`}
        data-section="images4up"
      >
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img
              src={sec4UpLeft}
              className={styles.leftimg}
              alt="Final Interface"
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>Final Interface</span>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={sec4UpRight}
              className={styles.rightimg}
              alt="Mobile Version"
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>Mobile Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 Lower Images - Desktop only */}
      <div
        className={`${styles.imageSection5} ${
          isElementVisible("images4down") ? styles.sectionVisible : ""
        }`}
        data-section="images4down"
      >
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img
              src={sec4Down}
              className={styles.leftimg}
              alt="Complete System"
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>Complete System</span>
            </div>
          </div>
        </div>
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
    </div>
  );
}
