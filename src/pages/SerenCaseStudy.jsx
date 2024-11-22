import React, { useRef, useEffect } from "react"; // Add useRef and useEffect here
import { motion } from "framer-motion";
import "../styles/BakersStreet.scss";
import { useInView } from "react-intersection-observer";

import bakershero from "../assets/SereneCasestudyHero.svg";
import bakersoverview from "../assets/SereneCasestudyOverview.svg";
import bakersbranding from "../assets/SereneCasestudyBranding.svg";
import bakerscolorpallet from "../assets/SereneCasestudyColorpallet.svg";
import bakerspackaging from "../assets/SereneCasestudyPackaging.svg";
import bakersstudiesimg1 from "../assets/purus_casestudy_studiesimg1.svg";
import bakersstudiesimg2 from "../assets/purus_casestudy_studiesimg2.svg";
import bakersstudiesimg3 from "../assets/purus_casestudy_studiesimg3.svg";

const SereneSkinCaseStudy = () => {
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
          <h1>Serene Skin</h1>
          <p>Brand Identity | Packaging</p>
        </div>
      </section>

      <div className="bakerscase-container">
        {/* Overview Section */}
        <section className="bakerscase-section bakerscase-overview">
          <div className="bakerscase-text">
            <h2>Client Brief</h2>
            <p>
              Serene Skin is a new skincare brand in India that encourages
              self-love via natural and ethical products. They distinguish
              themselves from other skincare firms by providing new products
              that every individual may use.
            </p>
          </div>
          <div className="bakerscase-text">
            <h2>Overview</h2>
            <p>
              Serene Skin is a new skincare brand in India that encourages
              self-love via natural and ethical products. They distinguish
              themselves from other skincare firms by providing new products
              that every individual may use.{" "}
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
              Serene Skin is a brand that encourages people to feel confident
              and inspired; our objective was to design the brand's branding and
              packaging. We wanted to make it a luxury and bold skincare brand
              that promotes diversity, inclusivity, and self-care, a brand that
              may encourage a positive change in how people perceive their skin.
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
              Red is not a color that is utilized universally or frequently in
              skincare brands. Colors often associated with skincare firms, on
              the other hand, are more muted, such as white, pastel tones, and
              shades of blue and green. We chose the strong tone of red because
              Serene Skin helps people to feel bold, confident, and inspired.
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
              Because skincare products are mostly in liquid form, water, a
              basic form of nature, is the major inspiration for our product
              packaging design. We worked on the packaging design for the key
              skincare products, which include serum, moisturizer, and
              sunscreen. The shapes of the bottles inside the glass container
              that holds the cream are curvy but structure-based, resembling
              droplets and ripples of water. The shapes and sizes of the pumps
              on the bottle are designed to be handy and ergonomically simpler
              to use for the audience. The inside of the bottle is tinted with
              the brand's red identity. The heights of the bottles vary
              depending on the products given and the consumers' needs.
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

export default SereneSkinCaseStudy;
