import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "../styles/FeaturedProjects.module.scss";

import fetureimg1 from "../assets/fetrueimg1.svg";
import fetureimg2 from "../assets/fetrueimg2.svg";
import fetureimg3 from "../assets/fetrueimg3.svg";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
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
    { title: "Akoya", imgSrc: fetureimg1 },
    { title: "Lok Neta", imgSrc: fetureimg2 },
    { title: "Hathikari & Co", imgSrc: fetureimg3 },
  ];

  return (
    <section className={styles.FeaturedProjects}>
      <h2 className={styles.SectionTitle}>Featured Projects</h2>
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
    </section>
  );
};

export default FeaturedProjects;
