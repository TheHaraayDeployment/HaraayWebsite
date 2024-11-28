import React, { useRef, useEffect } from "react"; // Add useRef and useEffect here
// import Animation
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import styles from "./SereneCaseStudy.module.scss";
// Image Import
import HeroImg from "../../assets/Akoya/AkoyaFullimg.png";
import Img1 from "../../assets/Akoya/Akoyaimg2.jpg";
import Img2 from "../../assets/Akoya/Akoyaimg3.jpg";
import Img3 from "../../assets/Akoya/Akoyaimg4.svg";
import Img4 from "../../assets/Akoya/Akoyaimg3.jpg";

// Case Studies img
import CaseStudies1 from "../../assets/CaseStudyCard1.svg";
import CaseStudies2 from "../../assets/CaseStudyCard2.svg";
import CaseStudies3 from "../../assets/CaseStudyCard3.svg";
gsap.registerPlugin(ScrollTrigger);
const SereneSkinCaseStudy = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const projects = [
    { title: "Purus", imgSrc: CaseStudies1 },
    { title: "Akoya", imgSrc: CaseStudies2 },
    { title: "Virat", imgSrc: CaseStudies3 },
  ];

  return (
    <div className={styles.CaseStudy}>
      <section className={styles.CaseStudy_Hero}>
        <div className={styles.CaseStudy_Hero_background}>
          <img src={HeroImg} alt="  Case Study" />
        </div>
        <div className={styles.CaseStudy_Hero_content}>
          <h1>Akoya</h1>
          <p>Branding & Packaging</p>
        </div>
      </section>

      <div className={styles.CaseStudySectiondiv}>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Challenges</h2>
            <p>
              To be frank there are many organic oils in the market withNiche
              Extraction Process: The bull-driven method of oil extraction.
              Akoya wanted to stand out from the market, while educating the
              audience via branding, with Balancing Tradition with Modern
              Appeal.
            </p>
            {/* <a href="/bakers-case-study-deatails">readmore</a> */}
          </div>
          <div className={styles.case_text}>
            <h2>Objectives</h2>
            <p>
              Create a Strong Brand Identity that reflects the core values of
              Akoya: sustainability, organic purity, and the artisanal method of
              bull-driven oil extraction.
            </p>
          </div>
          <img src={Img1} alt="Branding" />
        </section>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2 style={{ fontSize: "32px" }}>
              Branding Identity <br /> Development
            </h2>
            <p>
              We started with in-depth research into the history of bull-driven
              oil production, its environmental benefits, and Akoya’s mission.
              After several brainstorming sessions and consultations, we
              developed a brand concept centered around the following key
              pillars.
            </p>
          </div>

          <img src={Img2} alt="Branding" />
        </section>

        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2 style={{ fontSize: "32px" }}>
              {" "}
              Packaging & <br></br> 3D Animation
            </h2>
            <p>
              Worked on 3d animations and render for 3d packaging & video for
              it. The packaging design is simple, elegant, and eco-friendly
              while communicating the traditional process behind the oil. Here’s
              how we approached the design
            </p>
          </div>
          <img src={Img3} alt="Color Palette" />
        </section>
      </div>
      {/* 
      <section className={styles.FeaturedProjects}>
        <div className={styles.ProjectsGrid}>
          {projects.map((project, index) => (
            <div
              className={styles.ProjectCard}
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <img src={project.imgSrc} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default SereneSkinCaseStudy;
