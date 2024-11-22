
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./AkoyaCaseStudy.modules.scss";
import Akoyaherovid from "../../assets/Akoya/AkoyaHeroVid.mp4";
import AkoyaOverviewimg from "../../assets/Akoya/Akoyaoverview.png";
import Akoyaconclusionimg from "../../assets/Akoya/AkoyaFullimg.png";
import Akoyaimg1 from "../../assets/Akoya/Akoyaimg1.png";


import Purifier from "./HoveringModel.jsx"; //

import bakersstudiesimg1 from "../../assets/purus_casestudy_studiesimg1.svg";
import bakersstudiesimg2 from "../../assets/purus_casestudy_studiesimg2.svg";
import bakersstudiesimg3 from "../../assets/purus_casestudy_studiesimg3.svg";
import { Link } from "react-router-dom";
const BakersCaseStudy = () => {
  const heroRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: false, // Reveal only once
    threshold: 0.2, // Percentage of the section visible before triggering
  });

  // Motion variants for animation
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start state: hidden and shifted down
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // End state: visible and smooth
  };
  const variants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.8 }, // delay each card by 0.3s
    }),
  };

  const cards = [
    { src: bakersstudiesimg1, title: "Serene Skin" },
    { src: bakersstudiesimg2, title: "Baker's Street" },
    { src: bakersstudiesimg3, title: "BMS" },
  ];

  useEffect(() => {
    const heroElement = heroRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroElement.style.position = "sticky";
          heroElement.style.top = "000";
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(heroElement);

    return () => {
      observer.unobserve(heroElement);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bakers-case-study"
    >
      <section className="bakstreet-hero" ref={heroRef}>
    <Purifier/>
    <h1> Bosche </h1>
      </section>

      <div className="bakerscase-container">
        {/* Overview Section */}
        <section className="bakerscase-section bakerscase-overview">
          <div className="bakerscase-text">
            <h2>Background</h2>
            <p>
              Akoya, a small but visionary company, specializes in producing an
              entirely unique product: **organic bull-driven oil**. This ancient
              method of oil extraction, using bulls to press oil from seeds, is
              deeply rooted in tradition, making it both environmentally
              sustainable and highly differentiated from conventional,
              mechanized methods. <Link to="#">Read More</Link>
            </p>
          </div>
          <div className="bakerscase-text">
            <h2>Objectives</h2>
            <p>
              1. Create a Strong Brand Identity that reflects the core values of
              Akoya: sustainability, organic purity, and the artisanal method of
              bull-driven oil extraction. 2. Design Premium, Eco-friendly
              Packaging that conveys the uniqueness of the product while
              aligning with Akoya’s commitment to sustainability.
            </p>
            {/* <a href="/bakers-case-study-deatails">readmore</a> */}
          </div>
          <img
            src={AkoyaOverviewimg}
            alt="Overview"
            className="akoyascase-image"
          />
        </section>
{/* 
   
        <section className="bakerscase-section bakerscase-branding">
          <div className="bakerscase-text">
            <h2>Challenges</h2>
            <p>
              Niche Extraction Process: The bull-driven method of oil extraction
              is an unfamiliar process to most consumers, so we needed to
              educate while branding. Balancing Tradition with Modern Appeal:
              While the process is traditional, the brand needed to connect with
              modern consumers, both in design and messaging.
            </p>
          </div>
          <div className="bakerscase-text">
            <h2>Approach</h2>
            <p>
              1. Brand Identity Development: We started with in-depth research
              into the history of bull-driven oil production, its environmental
              benefits, and Akoya’s mission. After several brainstorming
              sessions and consultations, we developed a brand concept centered
              around the following key pillars:{" "}
            </p>
          </div>
          <img
            src={Akoyaimg1}
            alt="Branding"
            className="akoyascaseapproach-image"
          />
        </section>

        <section className="bakerscase-section bakerscase-color-palette">
          <div className="bakerscase-text">
            <h2> Conclusion</h2>
            <p>
              The branding and packaging project for Akoya was a success,
              effectively conveying the uniqueness of their organic bull-driven
              oil. Through thoughtful design and storytelling, we were able to
              differentiate Akoya in a competitive market while maintaining
              their deep commitment to
            </p>
          </div>
          <img
            src={Akoyaconclusionimg}
            alt="Color Palette"
            className="akoyascaseapproach-image"
          />
        </section> */}
      </div>
      <div className="bakerscase-casestudies-container">
        <div className="bakerscase-casestudies">
          <div className="bakerscase-casestudy">
            <img
              src={bakersstudiesimg1}
              alt="Serene Skin"
              className="bakerscase-casestudy-image"
            />
            <p className="bakerscase-casestudy-title">Serene Skin</p>
          </div>
          <div className="bakerscase-casestudy">
            <img
              src={bakersstudiesimg2}
              alt="Baker's Street"
              className="bakerscase-casestudy-image"
            />
            <p className="bakerscase-casestudy-title">Baker's Street</p>
          </div>
          <div className="bakerscase-casestudy">
            <img
              src={bakersstudiesimg3}
              alt="BMS"
              className="bakerscase-casestudy-image"
            />
            <p className="bakerscase-casestudy-title">BMS</p>
          </div>
        </div>
        <button className="bakerscase-casestudies-button">
          See All Case Studies
          <span className="bakerscase-button-icon"></span>
        </button>
      </div>
    </motion.div>
  );
};

export default BakersCaseStudy;
