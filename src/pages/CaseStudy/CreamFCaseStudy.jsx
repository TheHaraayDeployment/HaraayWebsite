import React, { useRef, useEffect } from "react"; // Add useRef and useEffect here
// import Animation
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import styles from "./SereneCaseStudy.module.scss";
// Image Import
import HeroImg from "../../assets/CreamForest/CreamFimg1.svg";
import Img1 from "../../assets/CreamForest/CreamFimg2.svg";
import Img2 from "../../assets/CreamForest/CreamFimg3.svg";
import Img3 from "../../assets/CreamForest/CreamFimg4.svg";
import Img4 from "../../assets/CreamForest/CreamFimg1.svg";

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
    { title: "CreamForest", imgSrc: CaseStudies2 },
    { title: "Virat", imgSrc: CaseStudies3 },
  ];

  return (
    <div className={styles.CaseStudy}>
      <section className={styles.CaseStudy_Hero}>
        <div className={styles.CaseStudy_Hero_background}>
          <img src={HeroImg} alt="  Case Study" />
        </div>
        <div className={styles.CaseStudy_Hero_content}>
          <h1>Cream Forest</h1>
          <p>Inspiring for Innovation</p>
        </div>
      </section>

      <div className={styles.CaseStudySectiondiv}>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Client Brief</h2>
            <p>
              Cream Forest, an ice cream brand, envisioned a playful yet premium
              identity for their website and branding. They wanted the design to
              evoke the feeling of indulgence, freshness, and nature, aligning
              with their brand name.
            </p>
            {/* <a href="/CreamForest-case-study-deatails">readmore</a> */}
          </div>
          <div className={styles.case_text}>
            <h2>Overview</h2>
            <p>
              Creamforest is a company that is dedicated to the production and
              sales and milk-delivered products in this case developing a more
              natural ice cream focused on new consumer and personal care
              trends. we created a brand identity and packaging for them.
            </p>
          </div>
          <img src={Img1} alt="Branding" />
        </section>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Branding</h2>
            <p>
              Our job consisted of creating a brand and its packaging for a
              product based an artisanal and more natural ice caring for our
              body as a container of life; this was transferred to the logo ...
            </p>
          </div>

          <img src={Img2} alt="Branding" />
        </section>

        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2> Packaging</h2>
            <p>
              For the packaging we worked on abstract strokes as well as
              Illustration based artworks, according to the flavours of the ice
              cream. Keeping it artisanal and more natural look.
            </p>
          </div>
          <img src={Img3} alt="Color Palette" />
        </section>
        {/* <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2> Packaging</h2>
            <p>
              Keeping the packaging elegant in baker street with minimalistic
              approach, The focus remains on the brand name, clean typography,
              and shuttle design elements. this understate style reflects
              sophestication, leting the quality of the product shine through
              effortlessly.{" "}
            </p>
          </div>
          <img src={Img4} alt="Color Palette" />
        </section> */}
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
