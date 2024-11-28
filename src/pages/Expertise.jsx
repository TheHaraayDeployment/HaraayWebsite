import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/Expertise.module.scss";

import Digital from "../assets/Digital Experience.gif";
import EngagementStrategy from "../assets/Engagement Strategy.gif";
import SensorialExpression from "../assets/Sensorial Expression.gif";
import ExaltedIdentity from "../assets/Exalted Identity.gif";
import Letstalk from "../components/Letstalk";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Expertise() {
  const sectionsRef = useRef([]);

  // Add a section to the refs array
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50, // Starts 50px below the initial position
        },
        {
          opacity: 1,
          y: 0, // Animates to its original position
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // Adjust when the animation should start (earlier in viewport)
            end: "bottom 20%", // Allows enough space for the animation to end
            scrub: 0.5, // Smoothly link animation progress to scroll position
            toggleActions: "play none none none", // Animation only plays once
          },
        }
      );
    });
  }, []);

  return (
    <div className={styles.ExpertiseMain}>
      {/* Hero Section */}
      <section className={styles.Herosec} ref={addToRefs}>
        <div className={styles.HeroContent}>
          <h1>All Services</h1>
          <p>Conflict is Currency.</p>
        </div>
        <div className={styles.HeroImage}></div>
      </section>

      {/* Service 1 - Brand Foundation (Left Aligned) */}
      <section
        className={`${styles.ServiceSection} ${styles.leftAlign}`}
        ref={addToRefs}
      >
        <div className={styles.ServiceContent}>
          <h2>Exalted identity</h2>
          <p>
            It is important for your brand to be remembered the way you
            intentend it. To be in maket. Your brand is the sum of the consumers
            perception, opinions and feeling, and that’s why as a brand owner,
            branding is how to take control of your own state. As one of the
            most creative branding compaines in India, we work with you to
            carefully craft a compelling brand is always aligned with your
            vision & remembered as distinct.
          </p>
          <div className={styles.Capabilities}>
            <ul>
              <li>
                Purpose & Value <span>&#x2192;</span>
              </li>
              <li>
                Brand Strategy <span>&#x2192;</span>
              </li>
              <li>
                Visual Identity<span>&#x2192;</span>
              </li>
              <li>
                Brand Positioning<span>&#x2192;</span>
              </li>{" "}
            </ul>{" "}
            <ul>
              <li>
                Purpose & Values<span>&#x2192;</span>
              </li>
              <li>
                Tone of Voice<span>&#x2192;</span>
              </li>
              <li>
                Brand Awareness<span>&#x2192;</span>
              </li>
              <li>
                Brand Personality, Purpose & Values<span>&#x2192;</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ServiceImage}>
          <img src={ExaltedIdentity} alt="" />
        </div>
      </section>

      {/* Service 2 - Engagement Strategy (Right Aligned) */}
      <section
        className={`${styles.ServiceSection} ${styles.rightAlign}`}
        ref={addToRefs}
      >
        <div className={styles.ServiceContent}>
          <h2>Sensorial Expression</h2>
          <p>
            We create dynamic 3D Animation with motion graphics, with product
            modelling and visualisation done in stunning in 3D /VFX Span across
            3D Content animation. 3D modelling, visualisation and AR/VR
            solutions that eliminate the boundaries between reality and
            imagination.
          </p>
          <div className={styles.Capabilitiesright}>
            <ul>
              <li>
                Messaging <span>&#x2192;</span>
              </li>

              <li>
                3D Animation & Rendering<span>&#x2192;</span>
              </li>
              <li>
                Motion Graphics<span>&#x2192;</span>
              </li>
              <li>
                Films<span>&#x2192;</span>
              </li>
              <li>
                Photography<span>&#x2192;</span>
              </li>
              <li>
                3D Visualization & AR/VR Solutions<span>&#x2192;</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ServiceImage}>
          <img src={SensorialExpression} alt="" />
        </div>
      </section>

      {/* Service 3 - Exalted Identity (Left Aligned) */}
      <section
        className={`${styles.ServiceSection} ${styles.leftAlign}`}
        ref={addToRefs}
      >
        <div className={styles.ServiceContent}>
          <h2>Digital Experience</h2>
          <p>
            The digital experience encompasses every interaction a user has with
            a brand or product through digital channels. This includes websites,
            web & mobile apps, and social media / online advertising. In today's
            word increasingly digital world, it is more important than ever.
          </p>
          <div className={styles.Capabilities}>
            <ul>
              <li>
                Naming <span>&#x2192;</span>
              </li>
              <li>
                UI/UX Design<span>&#x2192;</span>
              </li>
              <li>
                Design System<span>&#x2192;</span>
              </li>
              <li>
                Apps<span>&#x2192;</span>
              </li>{" "}
            </ul>{" "}
            <ul>
              <li>
                Web Applications<span>&#x2192;</span>
              </li>
              <li>
                E-commerce Solutions<span>&#x2192;</span>
              </li>
              <li>
                Website Design & Development<span>&#x2192;</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ServiceImage}>
          <img src={Digital} alt="" />
        </div>
      </section>

      {/* Service 4 - Sensorial Expression (Right Aligned) */}
      <section
        className={`${styles.ServiceSection} ${styles.rightAlign}`}
        ref={addToRefs}
      >
        <div className={styles.ServiceContent}>
          <h2>Engagement Strategy</h2>
          <p>
            CConvincing a consumer, user, investor or future employee to trust
            you is hard. They have other requestts, already, habits and very
            often little time to give you. So to successfully create a strong
            and coherent brand, to convince, unite and shine you have to lay a
            solid strategic foundation.
          </p>
          <div className={styles.Capabilitiesright}>
            <ul>
              <li>
                Socials<span>&#x2192;</span>
              </li>
              <li>
                Consumer Journey Mapping<span>&#x2192;</span>
              </li>
              <li>
                Communication Strategy<span>&#x2192;</span>
              </li>
              <li>
                Brand & Portfolio Architecture<span>&#x2192;</span>
              </li>
              <li>
                Drive Memory<span>&#x2192;</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ServiceImage}>
          <img src={EngagementStrategy} alt="" />
        </div>
      </section>
      <Letstalk />
    </div>
  );
}

export default Expertise;
