import React, { useRef, useEffect } from "react"; // Add useRef and useEffect here
// import Animation
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import styles from "./SereneCaseStudy.module.scss";
// Image Import
import HeroImg from "../../assets/Virat/ViratHero.jpeg";
import Img1 from "../../assets/Virat/Viratimg1.webp";
import Img2 from "../../assets/Virat/Viratimg2.svg";
import Img3 from "../../assets/Virat/Viratimg3.webp";
import Img4 from "../../assets/Virat/Viratimg4.webp";

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
      <section
        className={styles.CaseStudy_Hero}
        style={{ marginBottom: "50px" }}
      >
        <div className={styles.CaseStudy_Hero_background}>
          <img src={HeroImg} alt="  Case Study" />
        </div>
        <div className={styles.CaseStudy_Hero_content}>
          <h1>Virat</h1>
          <p>Branding & Website</p>
        </div>
      </section>

      <div className={styles.CaseStudySectiondiv}>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Overview</h2>
            <p>
              Virat, a growing facility management services provider, approached
              us with the need to develop a bold, modern, and distinctive brand
              identity that reflects their reliability, professionalism, and
              competitive edge in the industry. The goal was to create a strong
              visual presence through
            </p>
          </div>

          <img src={Img1} alt="Branding" />
        </section>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Brand Identity Development</h2>
            <p>
              We designed a striking, edgy brand identity that positioned Virat
              as a leader in the facility management industry. The new logo and
              color palette Red-Orange to emphasis on the character of the brand
              that is Impactful, Tendy and Confident. And Black-Blue to showcase
              the Corporate Professional side of ...<a>ReadMore</a>
            </p>
          </div>

          <img src={Img2} alt="Branding" />
        </section>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Color Palette</h2>
            <p>
              Our job consisted of creating a strong brand identity packaging,
              and it’s website. Nature driven,The characters that we are
              representing have imperfect geometric shapes to celebrate the
              organic ideas of natural meetings. These subtle touches help the
              visual identity to create a concept of human sustainability.{" "}
              <a> ReadMore</a>
            </p>
          </div>
          <img src={Img3} alt="Color Palette" />
        </section>{" "}
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Website Design & Development</h2>
            <p>
              The website was designed to be an extension of the new brand
              identity, with a focus on easy navigation, clear service
              categorization, and interactive elements. We created a
              responsive,featuring high-quality 3D visuals and d...{" "}
              <a> ReadMore</a>
            </p>
          </div>
          <img src={Img4} alt="Color Palette" />
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
