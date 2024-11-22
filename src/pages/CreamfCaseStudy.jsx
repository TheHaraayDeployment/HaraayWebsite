import creamfhero from "../assets/creamforestcase_heroimg.svg";
import creamfoverview from "../assets/creamforest__casestudy_overview.svg";
import creamfbranding from "../assets/creamforest__casestudy_overview.svg";
import creamfcolorpallet from "../assets/creamforest__casestudy_overview.svg";
import creamfpackaging from "../assets/creamforest__casestudy_overview.svg";
import creamfstudiesimg1 from "../assets/creamforest__casestudy_overview.svg";
import creamfstudiesimg2 from "../assets/creamforest__casestudy_overview.svg";
import creamfstudiesimg3 from "../assets/creamforest__casestudy_overview.svg";

import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import "../styles/CreamfCasestudy.scss";

import creamforesthero from "../assets/creamforestcase_heroimg.svg";
import creamforestoverview from "../assets/creamforest__casestudy_overview.svg";
import creamforestbranding from "../assets/creamforest_casestudy_branding.svg";
import creamforestcolorpallet from "../assets/creamforest__casestudy_overview.svg";
import creamforestpackaging from "../assets/creamforest_casestudy_packaging.svg";
import creamforeststudiesimg1 from "../assets/purus_casestudy_studiesimg1.svg";
import creamforeststudiesimg2 from "../assets/purus_casestudy_studiesimg2.svg";
import creamforeststudiesimg3 from "../assets/purus_casestudy_studiesimg3.svg";
const CreamforestCaseStudy = () => {
  const heroRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true, // Reveal only once
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
    { src: creamforeststudiesimg1, title: "Serene Skin" },
    { src: creamforeststudiesimg2, title: "Cream Forest" },
    { src: creamforeststudiesimg3, title: "BMS" },
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
      className="creamforest-case-study"
    >
      <section className="creamforest-hero" ref={heroRef}>
        <div className="creamforest-hero-background">
          <img src={creamforesthero} alt="Cream Forest Case Study" />
        </div>
        <div className="creamforest-hero-content">
          <h1>Cream Forest</h1>
          <p>Brand Identity | Packaging</p>
        </div>
      </section>

      <div className="creamforestcase-container">
        {/* Overview Section */}
        <section className="creamforestcase-section creamforestcase-overview">
          <div className="creamforestcase-text">
            <h2>Client Brief</h2>
            <p>
              Creamforest is a company that is dedicated to the production and
              sales and milk-delivered products in this case developing a more
              natural ice cream focused on new consumer and personal care
              trends. we created a brand identity and packaging for them.{" "}
            </p>
          </div>
          <div className="creamforestcase-text">
            <h2>Overview</h2>
            <p>
              Creamforest is a company that is dedicated to the production and
              sales and milk-delivered products in this case developing a more
              natural ice cream focused on new consumer and personal care
              trends. we created a brand identity and packaging for them.{" "}
            </p>
            {/* <a href="/creamforest-case-study-deatails">readmore</a> */}
          </div>
          <img
            src={creamforestoverview}
            alt="Overview"
            className="creamforestcase-image"
          />
        </section>

        {/* Branding Section */}
        <section className="creamforestcase-section creamforestcase-branding">
          <div className="creamforestcase-text">
            <h2>Branding</h2>
            <p>
              Our job consisted of creating a brand and its packaging for a
              product based an artisanal and more natural ice caring for our
              body as a container of life; this was transferred to the logo that
              consists of a very expensive and classic typeface after the
              packaging was made in the which we rainforce the concept with very
              striking flat colors with large texts, illustrations and abstract
              brush strokes in black have a powerful construct{" "}
            </p>
          </div>
          <img
            src={creamforestbranding}
            alt="Branding"
            className="creamforestcase-image"
          />
        </section>

        {/* Color Palette Section */}
        <section className="creamforestcase-section creamforestcase-color-palette">
          <div className="creamforestcase-text">
            <h2>Color Palette</h2>
            <p>
              For the packaging we worked on abstract strokes as well as
              Illustration based artworks, according to the flavours of the ice
              cream. Keeping it artisanal and more natural look.
            </p>
          </div>
          <img
            src={creamforestcolorpallet}
            alt="Color Palette"
            className="creamforestcase-image"
          />
        </section>

        {/* Packaging Section */}
        <section className="creamforestcase-section creamforestcase-packaging">
          <div className="creamforestcase-text">
            <h2>Packaging</h2>
            <p>
              The Packaging design for puru's is inspired by playfullness with
              variations for the different categories of sustainable products.
              With the help of Cinema 4D, each packaging has a distinct thought
              process behind it.The designs of the packaging represents the
              products inside them. from minimal formals for the adults to
              scribble art for kids, we value and understand the needs The
              design theme is purely based on the idea to make this packa..
            </p>
          </div>
          <img
            src={creamforestpackaging}
            alt="Packaging"
            className="creamforestcase-image"
          />
        </section>
      </div>
      <div className="creamforestcase-casestudies-container">
        <div className="creamforestcase-casestudies">
          <div className="creamforestcase-casestudy">
            <img
              src={creamforeststudiesimg1}
              alt="Serene Skin"
              className="creamforestcase-casestudy-image"
            />
            <p className="creamforestcase-casestudy-title">Serene Skin</p>
          </div>
          <div className="creamforestcase-casestudy">
            <img
              src={creamforeststudiesimg2}
              alt="Cream Forest"
              className="creamforestcase-casestudy-image"
            />
            <p className="creamforestcase-casestudy-title">Cream Forest</p>
          </div>
          <div className="creamforestcase-casestudy">
            <img
              src={creamforeststudiesimg3}
              alt="BMS"
              className="creamforestcase-casestudy-image"
            />
            <p className="creamforestcase-casestudy-title">BMS</p>
          </div>
        </div>
        <button className="creamforestcase-casestudies-button">
          See All Case Studies
          <span className="creamforestcase-button-icon"></span>
        </button>
      </div>
    </motion.div>
  );
};

export default CreamforestCaseStudy;
