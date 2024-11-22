// import React, { useEffect, useState } from "react";
// import "../styles/BakersStreetDetails.scss";

// const BakersStreetDetails = () => {
//   const [activeSection, setActiveSection] = useState(0);

//   // Track scrolling and change opacity
//   const handleScroll = () => {
//     const sections = document.querySelectorAll(".bakstreetdet-section");
//     let currentSection = 0;

//     sections.forEach((section, index) => {
//       const rect = section.getBoundingClientRect();
//       if (
//         rect.top <= window.innerHeight / 2 &&
//         rect.bottom >= window.innerHeight / 2
//       ) {
//         currentSection = index;
//       }
//     });
//     setActiveSection(currentSection);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="bakstreetdet-container">
//       <section
//         className={`bakstreetdet-section ${
//           activeSection === 0 ? "active" : ""
//         }`}
//       >
//         <div className="bakstreetdet-section-content">
//           <h1>Baker's Street</h1>
//           <p>Inspiring for Innovation</p>
//           <img src="path/to/dummy1.jpg" alt="Baker's Street" />
//         </div>
//       </section>

//       <section
//         className={`bakstreetdet-section ${
//           activeSection === 1 ? "active" : ""
//         }`}
//       >
//         <div className="bakstreetdet-section-content">
//           <h2>Client Brief</h2>
//           <p>Lorem ipsum dolor sit amet...</p>
//           <img src="path/to/dummy2.jpg" alt="Client Brief" />
//         </div>
//       </section>

//       <section
//         className={`bakstreetdet-section ${
//           activeSection === 2 ? "active" : ""
//         }`}
//       >
//         <div className="bakstreetdet-section-content">
//           <h2>Overview</h2>
//           <p>Baker's Street is the only...</p>
//           <img src="path/to/dummy3.jpg" alt="Overview" />
//         </div>
//       </section>

//       <section
//         className={`bakstreetdet-section ${
//           activeSection === 3 ? "active" : ""
//         }`}
//       >
//         <div className="bakstreetdet-section-content">
//           <h2>Branding</h2>
//           <p>Baker's Street is a high-end brand...</p>
//           <img src="path/to/dummy4.jpg" alt="Branding" />
//         </div>
//       </section>

//       <section
//         className={`bakstreetdet-section ${
//           activeSection === 4 ? "active" : ""
//         }`}
//       >
//         <div className="bakstreetdet-section-content">
//           <h2>Packaging</h2>
//           <p>The packaging design...</p>
//           <img src="path/to/dummy5.jpg" alt="Packaging" />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BakersStreetDetails;
import React from "react";
import { motion } from "framer-motion";
import "../styles/BakersStreetdetails.scss";

import bakershero from "../assets/bakers_casestudy_hero.svg";
import bakersoverview1 from "../assets/bakers_casestudy_details_overviewimg1.svg";
import bakersoverview2 from "../assets/bakers_casestudy_details_overviewimg2.svg";
import bakersoverview3 from "../assets/bakers_casestudy_details_overviewimg3.svg";

import brandingimg1 from "../assets/bakers_casestudy_details_branding1.svg";
import brandingimg2 from "../assets/bakers_casestudy_details_branding2.svg";
import brandingimg3 from "../assets/bakers_casestudy_details_branding3.svg";

import palletimg1 from "../assets/bakers_casestudy_details_pallet1.svg";
import palletimg2 from "../assets/bakers_casestudy_details_pallet2.svg";
import palletimg3 from "../assets/bakers_casestudy_details_pallet3.svg";
// bakers_casestudy_details_packaging1.svg;

import packagingimg1 from "../assets/bakers_casestudy_details_packaging1.svg";
import packagingimg2 from "../assets/bakers_casestudy_details_packaging2.svg";
import packagingimg3 from "../assets/bakers_casestudy_details_packaging3.svg";

import bakerscolorpallet from "../assets/bakers_casestudy_colorpallet.svg";
import bakerspackaging from "../assets/bakers_casestudy_packaging.svg";
import bakersstudiesimg1 from "../assets/purus_casestudy_studiesimg1.svg";
import bakersstudiesimg2 from "../assets/purus_casestudy_studiesimg2.svg";
import bakersstudiesimg3 from "../assets/purus_casestudy_studiesimg3.svg";
const BakersCaseStudy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bakers-case-study"
    >
      <section className="hero">
        <div className="container">
          <img
            className="bakers-hero-image"
            src={bakershero}
            alt="Baker's Street"
          />
          <div className="bakersHeadtext">
            <h1>Baker's Street</h1>
            <p>Inspiring for Innovation</p>{" "}
          </div>
        </div>
      </section>

      <div className="bakerscase-container">
        {/* ------------------------------------------------------------------------------------------------overview */}
        {/* Overview Section */}
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
                Baker’s Street is the only one stop bakery point which provides
                heavenly experience of their premium desserts to our young and
                social media savvy audience. It is designed in an elegant and
                magnificent way to create a memorable experience for everyone.
              </p>
            </div>
          </div>

          <div className="responsive-section__right imgscroll-section">
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
          </div>
        </section>{" "}
        <img
          className="bakers-full-width-image"
          src={bakersoverview3}
          alt="Baker's Street"
        />
        {/* ------------------------------------------------------------------------------------------------Branding */}
        {/* Branding Section */}
        <section className="responsive-section">
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
          </div>

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
        {/* ------------------------------------------------------------------------------------------------color pallet */}
        {/* Overview Section */}
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
        {/* ------------------------------------------------------------------------------------------------Packaging */}
        {/* Packaging Section */}
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
