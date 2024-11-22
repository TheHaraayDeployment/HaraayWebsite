import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../styles/Service.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedProjects from "./FeaturedProjects";
import FAQ from "./FAQsection";
import Letstalk from "../components/Letstalk";
// Digital Experience
function Service1() {
  const [activeTab, setActiveTab] = useState("Purpose & Value");
  const infoRefs = useRef([]);
  const stepsRef = useRef([]);
  const progressCircleRef = useRef(null); // Reference to the circle
  const stepsDivRef = useRef(null); // Reference for the stepsdiv

  // Define your tabs and content here
  const tabs = [
    "UI/UX Design",
    "Design System",
    "Apps",
    "Web Applications",
    "E-commerce Solutions",
    "Website Design & Development",
  ];

  const infoContent = {
    "UI/UX Design":
      " We create mobile apps with user-centered designs that are visually engaging, easy to navigate, and truly enjoyable to use, enhancing engagement and brand loyalty.",
    "Design System":
      "Establishes a unified visual and functional framework for all digital assets, ensuring consistency and scalability.",
    "Apps": 
    
    "Develops responsive, high-performance mobile and tablet apps that engage users and offer smooth, accessible interactions.",
    "Web Applications":
      " From simple tools to complex platforms, our web applications are designed to be functional, responsive, and tailored to your business needs.",
      "E-commerce Solutions":
      "We build high-performance e-commerce websites that make browsing, buying, and returning easy for customers, enhancing the shopping experience and driving conversions.",
      "Website Design & Development":
      "A powerful website is the backbone of any digital presence. We design and develop websites that are user-friendly, visually appealing, and optimized for all devices.",
 
  
    };
  const steps = [
    {
      number: "01",
      title: " Discover & Define",
      content:
        "Our journey starts with understanding your vision, audience, and objectives. Through in-depth discussions, we uncover your goals and identify what makes your brand unique, allowing us to create a digital strategy that aligns with your vision",
    },
    {
      number: "02",
      title: " Research & Design",
      content:
        "Next, we dive into UX/ui  design, focusing on the user journey. We create wireframes and prototypes that map out each interaction, ensuring the experience is smooth, intuitive, and tailored to your audience’s needs. Your feedback here is invaluable as we craft a user-centered design.",
    },
    {
      number: "03",
      title: "Development & Integration",
      content:
        "With the design in place, we move into development. Our team codes and builds the platform, ensuring it’s responsive, fast, and secure. For e-commerce, we integrate payment solutions, product pages, and other essential features. We rigorously test the platform to make sure it’s ready for launch.",
    },
    {
      number: "04",
      title: " Launch, Monitor & Optimize",
      content:
        "After a smooth launch, we monitor the performance of your digital platform and analyze user interactions. We continuously optimize based on real-world feedback, making tweaks to improve usability, engagement, and overall satisfaction.",
    },
   
  ];

  // animation circle progress

  // GSAP animation on tab switch
  useEffect(() => {
    gsap.fromTo(
      infoRefs.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, [activeTab]);

  useEffect(() => {
    // GSAP scroll-triggered animation for each step
    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);
  useEffect(() => {
    gsap.to(progressCircleRef.current, {
      bottom: "0%", // Move from top 0% to 100%
      // ease: "bounce",
      scrollTrigger: {
        trigger: stepsDivRef.current,
        start: "top top", // Trigger when the element hits the top of the viewport
        end: "bottom bottom", // End when the element reaches the bottom of the viewport
        scrub: true, // Smooth animation
      },
    });
  }, []);
  // Automatic tab switching logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 10000); // Change tab every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [tabs]);

  return (
    <div className={styles.Servicepage}>
      {/* Hero Section */}
      <section className={styles.HeroSection}>
        <div className={styles.Herotxt}>
          {/* Left side */}
          <div className={styles.HeroContent}>
            <h1>Digital Experience</h1>
          </div>

          {/* Right side */}
          <div className={styles.HeroContent}>
            <h2>Heading will go Here</h2>
            <p>
            The digital experience is at the heart of every modern brand interaction. Every website visit, app download, and ad click is an opportunity to leave a lasting impression. Whether it’s through web and mobile apps, social media, or online advertising, each digital touchpoint shapes how users perceive and engage with your brand. In our increasingly digital world, delivering a seamless and memorable experience is essential to stand out and build connections.
The Digital Experience strategy combines UI/UX design, streamlined development, and cohesive design systems to deliver engaging and high-performing digital solutions. Whether it’s apps, web apps, or e-commerce platforms, this approach ensures that every user interaction is intuitive, responsive, and reflective of the brand’s values.

            </p>
          </div>
        </div>
      </section>
      {/* Info Section */}
      <section className={styles.InfoSection}>
        <div className={styles.Tabs}>
          <h5>Approach</h5>
          <div className={styles.btndiv}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.TabButton} ${
                  activeTab === tab ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab)} // Manual tab switch
              >
                {tab}
              </button>
            ))}{" "}
          </div>
        </div>

        <div
          className={styles.InfoContent}
          ref={(el) => (infoRefs.current = el)}
        >
          <h2>{activeTab}</h2>
          <p>{infoContent[activeTab]}</p>
        </div>
      </section>
      <section className={styles.Howworks}>
        <h1>How works</h1>
        <div className={styles.stepsdiv} ref={stepsDivRef}>
          <div className={styles.progressBar}></div>
          <div className={styles.progresscircle} ref={progressCircleRef}></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className={styles.stepItem}
              ref={(el) => (stepsRef.current[index] = el)}
            >
              <h3>{step.number}</h3>
              <h2>{step.title}</h2>
              <p>{step.content}</p>
            </div>
          ))}
        </div>
      </section>
      <FeaturedProjects />
      <FAQ />{" "}
      <section className={styles.callussection}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            We are Elevating Brands in all Touchpoints
          </h2>
          <p className={styles.subheading}>
            We Brand your business and help drive growth with owner’s Mentality
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.ctaButton}>Talk to Our Team →</button>
        </div>
      </section>
      <Letstalk />
    </div>
  );
}

export default Service1;
