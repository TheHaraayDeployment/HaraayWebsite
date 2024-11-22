import React, { useEffect, useRef } from "react";
import "../styles/BakersCaseStudyDetail.scss";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import heroImage from "../assets/SereneCasestudyHero.svg"; // Make sure this path is correct
import bakershero from "../assets/bakers_casestudy_hero.svg";
import bakersoverview1 from "../assets/Serenecaseoverviewimg1.svg";
import bakersoverview2 from "../assets/Serenecaseoverviewimg2.svg";
import bakersoverview3 from "../assets/SereneCasestudyOverview.svg";

import brandingimg1 from "../assets/Serenecasebranding1.svg";
import brandingimg2 from "../assets/Serenecasebranding2.svg";
import brandingimg3 from "../assets/SereneCasestudyBranding.svg";

import palletimg1 from "../assets/Serenecasecolor1.svg";
import palletimg2 from "../assets/Serenecasecolor2.svg";
import palletimg3 from "../assets/SereneCasestudyColorpallet.svg";
// bakers_casestudy_details_packaging1.svg;

import packagingimg1 from "../assets/Serenecasepackaging1.svg";
import packagingimg2 from "../assets/Serenecasepackaging2.svg";
import packagingimg3 from "../assets/SereneCasestudyPackaging.svg";

import bakerscolorpallet from "../assets/bakers_casestudy_colorpallet.svg";
import bakerspackaging from "../assets/bakers_casestudy_packaging.svg";
import bakersstudiesimg1 from "../assets/purus_casestudy_studiesimg1.svg";
import bakersstudiesimg2 from "../assets/purus_casestudy_studiesimg2.svg";
import bakersstudiesimg3 from "../assets/purus_casestudy_studiesimg3.svg";

import AnimatedCursor from "react-animated-cursor";

const ViratCaseStudyDetail = () => {
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
    { src: bakersstudiesimg2, title: "Cream Forest" },
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
    <div className="bakerscase-detail-page">
      {/* Hero Section */}
      <AnimatedCursor
        innerSize={34}
        outerSize={0}
        innerScale={1}
        // outerScale={0.2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#011351",
        }}
      />
      <section className="bakstreetdet-hero" ref={heroRef}>
        <div className="bakstreetdet-hero-background">
          <img src={heroImage} alt="Bakers Street Case Study" />
        </div>
        <div className="bakstreetdet-hero-content">
          <h1>Cream Forest</h1>
          <p>Brand Identity | Packaging</p>
        </div>
      </section>
      {/* Blank Section */}

      <div className="bakstreetdet-mainsections">
        <section className="responsive-section">
          <div className="responsive-section__left">
            <div className="bakerdetail-client-brief-text">
              <h2>Client Brief</h2>
              <p>
                Serene Skin is a new skincare brand in India that encourages
                self-love via natural and ethical products. They distinguish
                themselves from other skincare firms by providing new products
                that every individual may use.
              </p>
            </div>
            <div className="bakerdetail-client-brief-text">
              <h2>Overview</h2>
              <p>
                Serene Skin is a new skincare brand in India that encourages
                self-love via natural and ethical products. They distinguish
                themselves from other skincare firms by providing new products
                that every individual may use.{" "}
              </p>
            </div>
          </div>

          <motion.div
            ref={ref} // Ref to trigger the intersection observer
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className="reveal-image"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            {" "}
            <div className="responsive-section__right imgscroll-section">
              <div className="imgscroll-section-overlay"></div>
              <img
                src={bakersoverview1}
                alt="Image 1"
                className="responsive-section__image responsive-section__image--top"
              />
              <img
                src={bakersoverview2}
                alt="Image 2"
                className="responsive-section__image responsive-section__image--bottom"
              />
              <img
                src={bakersoverview1}
                alt="Image 2"
                className="responsive-section__image responsive-section__image--bottom"
              />
              <img
                src={bakersoverview2}
                alt="Image 2"
                className="responsive-section__image responsive-section__image--bottom"
              />
            </div>{" "}
          </motion.div>
        </section>{" "}
        <img
          className="bakers-full-width-image"
          src={bakersoverview3}
          alt="Cream Forest"
        />{" "}
        {/* Branding Section */}
        <section className="responsive-section">
          <div className="responsive-section__left">
            <div className="bakerdetail-client-brief-text">
              <h2>Branding</h2>
              <p>
                Serene Skin is a brand that encourages people to feel confident
                and inspired; our objective was to design the brand's branding
                and packaging. We wanted to make it a luxury and bold skincare
                brand that promotes diversity, inclusivity, and self-care, a
                brand that may encourage a positive change in how people
                perceive their skin.
              </p>
            </div>
          </div>{" "}
          <div className="responsive-section__right imgscroll-section">
            <img
              src={brandingimg1}
              alt="Image 1"
              className="responsive-section__image responsive-section__image--top"
            />
            <img
              src={brandingimg2}
              alt="Image 2"
              className="responsive-section__image responsive-section__image--bottom"
            />
          </div>
        </section>{" "}
        <img
          className="bakers-full-width-image"
          src={brandingimg3}
          alt="Cream Forest"
        />
        {/* ------------------------------------------------------------------------------------------------color pallet */}
        {/* Overview Section */}
        <section className="responsive-section">
          <div className="responsive-section__left">
            <div className="bakerdetail-client-brief-text">
              <h2>Color Palette</h2>
              <p>
                Red is not a color that is utilized universally or frequently in
                skincare brands. Colors often associated with skincare firms, on
                the other hand, are more muted, such as white, pastel tones, and
                shades of blue and green. We chose the strong tone of red
                because Serene Skin helps people to feel bold, confident, and
                inspired.{" "}
              </p>
            </div>
          </div>

          <div className="responsive-section__right imgscroll-section">
            <img
              src={palletimg1}
              alt="Image 1"
              className="responsive-section__image responsive-section__image--top"
            />
            <img
              src={palletimg2}
              alt="Image 2"
              className="responsive-section__image responsive-section__image--bottom"
            />
          </div>
        </section>{" "}
        <img
          className="bakers-full-width-image"
          src={palletimg3}
          alt="Cream Forest"
        />
        {/* ------------------------------------------------------------------------------------------------Packaging */}
        {/* Packaging Section */}
        <section className="responsive-section">
          <div className="responsive-section__left">
            <div className="bakerdetail-client-brief-text">
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
              <div className="bakers-casestudy-details-packaging-info">
                <div className="bakers-casestudy-details-packaging-info-left">
                  <h5>Sector</h5>
                  <h6>Arts & Culture</h6>
                </div>
                <div className="bakers-casestudy-details-packaging-info-right">
                  <h5>Discipline</h5>
                  <h6>Branding</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="responsive-section__right imgscroll-section">
            <img
              src={packagingimg1}
              alt="Image 1"
              className="responsive-section__image responsive-section__image--top"
            />
            <img
              src={packagingimg2}
              alt="Image 2"
              className="responsive-section__image responsive-section__image--bottom"
            />
          </div>
        </section>{" "}
        <img
          className="bakers-full-width-image"
          src={packagingimg3}
          alt="Cream Forest"
        />
      </div>
      {/* ------------------------------------------------------------------------------------------------other */}
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
              alt="Cream Forest"
              className="bakerscase-casestudy-image"
            />
            <p className="bakerscase-casestudy-title">Cream Forest</p>
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
    </div>
  );
};

export default ViratCaseStudyDetail;
