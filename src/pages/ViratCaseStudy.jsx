import React, { useRef, useEffect } from "react"; // Add useRef and useEffect here
import { motion } from "framer-motion";
import "../styles/BakersStreet.scss";
import { useInView } from "react-intersection-observer";

import bakershero from "../assets/ViratCasestudyHero.svg";
import bakersoverview from "../assets/ViratCasestudyOverview.svg";
import bakersbranding from "../assets/ViratCasestudyBranding.svg";
import bakerscolorpallet from "../assets/ViratCasestudyColorpallet.svg";
import bakerspackaging from "../assets/ViratCasestudyPackaging.svg";
import bakersstudiesimg1 from "../assets/purus_casestudy_studiesimg1.svg";
import bakersstudiesimg2 from "../assets/purus_casestudy_studiesimg2.svg";
import bakersstudiesimg3 from "../assets/purus_casestudy_studiesimg3.svg";

const ViratCaseStudy = () => {
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
          heroElement.style.top = "0";
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
        <div className="bakstreet-hero-background">
          <img src={bakershero} alt="Bakers Street Case Study" />
        </div>
        <div className="bakstreet-hero-content">
          <h1>Virat</h1>
          <p>Brand Identity | Packaging</p>
        </div>
      </section>

      <div className="bakerscase-container">
        {/* Overview Section */}
        <section className="bakerscase-section bakerscase-overview">
          <div className="bakerscase-text">
            <h2>Client Brief</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
            </p>
          </div>
          <div className="bakerscase-text">
            <h2>Overview</h2>
            <p>
              Virat is the only one stop bakery point which provides heavenly
              experience of their premium desserts to our young and social media
              savvy audience. It is designed in an elegant and magnificent way
              to create a memorable experience for everyone.
            </p>
          </div>
          <img
            src={bakersoverview}
            alt="Overview"
            className="bakerscase-image"
          />
        </section>

        {/* Branding Section */}
        <section className="bakerscase-section bakerscase-branding">
          <div className="bakerscase-text">
            <h2>Branding</h2>
            <p>
              Virat is a high-end brand. Since their menu is inspired by various
              heritage locations throughout the world, we were tasked with
              producing branding and packaging designs for the same.
            </p>
          </div>
          <img
            src={bakersbranding}
            alt="Branding"
            className="bakerscase-image"
          />
        </section>
        {/* Color Palette Section */}
        <section className="bakerscase-section bakerscase-color-palette">
          <div className="bakerscase-text">
            <h2>Color Palette</h2>
            <p>
              When it comes to the Bakery industry, the color palette chosen is
              distinctive because these colors are not very commonly used.The
              color palette is kept bold and fun-loving while remaining
              welcoming and disruptive in its own sense.
            </p>
          </div>
          <img
            src={bakerscolorpallet}
            alt="Color Palette"
            className="bakerscase-image"
          />
        </section>
        {/* Packaging Section */}
        <section className="bakerscase-section bakerscase-packaging">
          <div className="bakerscase-text">
            <h2>Packaging</h2>
            <p>
              The Packaging design for puru’s is inspired by playfullness with
              variations for the different categories of sustainable products.
              With the help of Cinema 4D, each packaging has a distinct thought
              process behind it.The designs of the packaging represents the
              products inside them. from minimal formals for the adults to
              scribble art for kids, we value and understand the needs The
              design theme is purely based on the idea to make this packa..
            </p>
          </div>
          <img
            src={bakerspackaging}
            alt="Packaging"
            className="bakerscase-image"
          />
        </section>
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

export default ViratCaseStudy;
