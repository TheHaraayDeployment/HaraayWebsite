import React, { useRef, useEffect } from "react"; // Add useRef and useEffect here
// import Animation
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import styles from "./SereneCaseStudy.module.scss";
// Image Import
import HeroImg from "../../assets/Bakers/Bakers.png";
import Img1 from "../../assets/Bakers/Bakersimg1.svg";
import Img2 from "../../assets/Bakers/Bakersimg2.jpg";
import Img3 from "../../assets/Bakers/Bakersimg3.jpg";
import Img4 from "../../assets/Bakers/Bakersimg4.jpg";

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
    { title: "Bakers", imgSrc: CaseStudies2 },
    { title: "Virat", imgSrc: CaseStudies3 },
  ];

  return (
    <div className={styles.CaseStudy}>
      <section className={styles.CaseStudy_Hero}>
        <div className={styles.CaseStudy_Hero_background}>
          <img src={HeroImg} alt="  Case Study" />
        </div>
        <div className={styles.CaseStudy_Hero_content}>
          <h1>Baker’s Street</h1>
          <p>Branding, Packaging, 3D</p>
        </div>
      </section>

      <div className={styles.CaseStudySectiondiv}>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Client Brief</h2>
            <p>
              The client requested a bakery website that would showcase their
              offerings in a way that is inviting, visually appealing, and
              user-friendly. They emphasized the importance of highlighting
              their freshly baked goods, seasonal specials, and unique recipes.
              The website needed to capture the warmth and charm of their
              bakery, with a focus on high-quality imagery, elegant typography,
              and seamless navigation.
            </p>
            {/* <a href="/bakers-case-study-deatails">readmore</a> */}
          </div>
          <div className={styles.case_text}>
            <h2>Overview</h2>
            <p>
              Baker’s Street is the only one stop bakery point which provides
              heavenly experience of their premium desserts to our young and
              social media savvy audience. It is designed in an elegant and
              magnificent way to create a memorable experience for everyone.
            </p>
          </div>
          <img src={Img1} alt="Branding" />
        </section>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Branding</h2>
            <p>
              Baker's Street is a high-end brand. Since their menu is inspired
              by various heritage locations throughout the world, we were tasked
              with producing branding and packaging designs for.
            </p>
          </div>

          <img src={Img2} alt="Branding" />
        </section>

        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2> Color Palette</h2>
            <p>
              When it comes to the Bakery industry, the color palette chosen is
              distinctive because these colors are not very commonly used.The
              color palette is kept bold and fun-loving while remaining
              welcoming and disruptive in its own sense.
            </p>
          </div>
          <img src={Img3} alt="Color Palette" />
        </section>
        <section className={styles.case_section}>
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
