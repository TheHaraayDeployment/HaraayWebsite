import React, { useEffect, useRef } from "react";
import "./BakersCaseStudyDetail.scss";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import heroImage from "../assets/creamforestcase_heroimg.svg"; // Make sure this path is correct
import bakershero from "../assets/bakers_casestudy_hero.svg";
import bakersoverview1 from "../assets/cream_casestudy_details_overviewimg1.svg";
import bakersoverview2 from "../assets/cream_casestudy_details_overviewimg1.svg";
import bakersoverview3 from "../assets/cream_casestudy_details_big.svg";

import bakerscolorpallet from "../assets/bakers_casestudy_colorpallet.svg";
import bakerspackaging from "../assets/bakers_casestudy_packaging.svg";
import bakersstudiesimg1 from "../assets/purus_casestudy_studiesimg1.svg";
import bakersstudiesimg2 from "../assets/purus_casestudy_studiesimg2.svg";
import bakersstudiesimg3 from "../assets/purus_casestudy_studiesimg3.svg";

import AnimatedCursor from "react-animated-cursor";

const BakersCaseStudyDetail = () => {
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
          {/* <h1>Creamforest</h1>
          <p>Brand Identity | Packaging</p> */}
        </div>
      </section>
      {/* Blank Section */}

      <div className="bakstreetdet-mainsections">
        <section className="responsive-section">
          <div className="responsive-section__left">
            <div className="bakerdetail-client-brief-text">
              <h2>Client Brief</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </p>
            </div>
            <div className="bakerdetail-client-brief-text">
              <h2>Overview</h2>
              <p>
                Creamforest is a company that is dedicated to the production and
                sales and milk-delivered products in this case developing a more
                natural ice cream focused on new consumer and personal care
                trends. we created a brand identity and packaging for them.
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
          alt="Baker's Street"
        />
        <section className="responsive-section">
          <div className="responsive-section__left">
            <div className="bakerdetail-client-brief-text">
              <h2>Branding</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
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
        {/* Branding Section */}
        {/* <section className="responsive-section">
          <div className="responsive-section__left">
            <div className="bakerdetail-client-brief-text">
              <h2>Branding</h2>
              <p>
                Baker’s Street is the only one stop bakery point which provides
                heavenly experience of their premium desserts to our young and
                social media savvy audience. It is designed in an elegant and
                magnificent way to create a memorable experience for everyone.
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
          alt="Baker's Street"
        />
       
      
        <section className="responsive-section">
          <div className="responsive-section__left">
            <div className="bakerdetail-client-brief-text">
              <h2>Color Palette</h2>
              <p>
                Baker’s Street is the only one stop bakery point which provides
                heavenly experience of their premium desserts to our young and
                social media savvy audience. It is designed in an elegant and
                magnificent way to create a memorable experience for everyone.
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
          alt="Baker's Street"
        />
       
      
        <section className="responsive-section">
          <div className="responsive-section__left">
            <div className="bakerdetail-client-brief-text">
              <h2>Packaging</h2>
              <p>
                With the help of illustrations and a mascot, we developed an
                abstract and slightly creative approach to the packaging design,
                with some modest yet bold and eye-catching prints and patterns
                of the identity created.
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
          alt="Baker's Street"
        />
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
        </button> */}
      </div>
    </div>
  );
};

export default BakersCaseStudyDetail;
