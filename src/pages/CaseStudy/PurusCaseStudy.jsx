import React, { useRef, useEffect } from "react"; // Add useRef and useEffect here
// import Animation
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import styles from "./SereneCaseStudy.module.scss";
// Image Import
import HeroImg from "../../assets/Purus/Purusimghero.svg";
import Img1 from "../../assets/Purus/Purusimg1.svg";
import Img2 from "../../assets/Purus/Purusimg2.svg";
import Img3 from "../../assets/Purus/Purusimg3.svg";
import Img4 from "../../assets/Serene/Sereneimg3.webp";

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
          <h1>Puru’s Enterprise</h1>
          <p>Branding & Packaging</p>
        </div>
      </section>

      <div className={styles.CaseStudySectiondiv}>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Client Brief</h2>
            <p>
              The client wanted a design approach that was loud, creative, and
              aesthetically engaging to capture attention and stand out in a
              competitive landscape. They emphasized the importance of blending
              bold visual elements with a cohesive and artistic design language
              to create a striking first impression.{" "}
            </p>
          </div>
          <div className={styles.case_text}>
            <h2>Overview</h2>
            <p>
              The brand identity and packaging for Puru’s Enterprise, a brand
              that Strives for Excellence and to bring change by inspiring
              individuals, and fostering collaborations and to build impactful
              networks and prioritize human sustainability. By contributing
              personal & professional development Consulting & Sustainable
              solutions.{" "}
            </p>
          </div>
          <img src={Img1} alt="Branding" />
        </section>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Branding</h2>
            <p>
              Our job consisted of creating a strong brand identity packaging,
              and its website. Nature driven,The characters that we are
              representing have imperfect geometric shapes to celebrate the
              organic ideas of natural meetings. These subtle touches help the
              visual identity to create a concept of human sustainability.{" "}
              <a>ReadMore</a>
            </p>
          </div>

          <img src={Img2} alt="Branding" />
        </section>

        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Packaging</h2>
            <p>
              The Packaging design for puru’s is inspired by playfullness with
              variations for the different categories of sustainable products.
              With the help of Cinema 4D, each packaging has a distinct thought
              process behind it. The designs of the packaging represents the
              products inside them. from minimal formals for the adults to
              scribble art for kids, we value and understand the needs The
              design theme is purely based on the idea to make this packa..{" "}
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
