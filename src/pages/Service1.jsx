import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../styles/Service.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedProjects from "./FeaturedProjects";
import FAQ from "./FAQsection";
import Letstalk from "../components/Letstalk";

function Service1() {
  const [activeTab, setActiveTab] = useState("Purpose & Value");
  const infoRefs = useRef([]);
  const stepsRef = useRef([]);
  const progressCircleRef = useRef(null); // Reference to the circle
  const stepsDivRef = useRef(null); // Reference for the stepsdiv

  // Define your tabs and content here
  const tabs = [
    "Socials",
    "Consumer Journey Mapping",
    "Communication Strategy",
    "Brand & Portfolio Architecture:",
  ];

  const infoContent = {
    "Socials":
      " We help you build a powerful, authentic presence across social platforms, aligning your message with your brand’s values and audience expectations."
,
    "Consumer Journey Mapping":
      "By understanding and designing every step of the consumer journey, we create interactions that enhance engagement, loyalty, and satisfaction.",
    "Communication Strategy":
    "We develop a clear communication strategy that aligns with your brand’s personality, ensuring every message resonates with your audience and builds trust.",
     "Brand & Portfolio Architecture:":
     "For brands with multiple products or services, we create a cohesive brand architecture and portfolio that highlights each element while maintaining a unified brand identity.",
     "Drive Memory":
     "Creates memorable experiences through storytelling and sensory triggers, embedding the brand in consumer memory.",
   };
  const steps = [
    {
      number: "01",
      title: " Discovery & Vision Alignment",
      content:
        "We start by diving into your brand’s core vision, values, and goals. Together, we clarify what makes your brand unique and who your ideal audience is. This deep understanding of your vision is the groundwork for a brand that’s strategically sound and compelling.",
    },
    {
      number: "02",
      title: "Mapping the Consumer Journey",
      content:
        "Next, we map out the consumer journey, identifying the key touchpoints where users interact with your brand. This process helps us understand their needs, behaviors, and emotions at each stage, allowing us to design an experience that feels seamless and impactful",
    },
    {
      number: "03",
      title: "Communication Strategy Development",
      content:
        "With a clear picture of your audience’s journey, we create a communication strategy that speaks to their needs, preferences, and values. From social media to direct messaging, we craft a voice that’s authentic, persuasive, and consistent across channels.",
    },
    {
      number: "04",
      title: "Brand Architecture & Portfolio Design",
      content:
        "For brands with multiple offerings, we develop a clear brand architecture, ensuring each product or service complements the others. This includes organizing your brand portfolio to highlight each element’s strengths while keeping everything cohesive under a unified brand umbrella.",
    },
    {
      number: "05",
      title: " Launch, Evaluate &   Refine",
      content:
        "Finally, we prepare for launch, rolling out the strategy and monitoring its effectiveness. We gather feedback, analyze performance data, and make ongoing refinements to ensure your brand resonates, unites, and builds trust over time. Your brand remains agile and adaptive, ready to shine even brighter.",
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
            <h1>The Engagement Strategy</h1>
          </div>

          {/* Right side */}
          <div className={styles.HeroContent}>
            <h2>Heading will go Here</h2>
            <p>
            Convincing consumers, users, investors, or future employees to trust you can be challenging. They have other commitments, established habits, and limited time. That’s why creating a strong, cohesive brand is about more than just aesthetics—it requires a strategic foundation to connect, convince, and create lasting impact. A carefully crafted brand strategy unites your message and empowers your brand to shine.
The Engagement Strategy is a structured approach designed to foster deep connections between brands and consumers. By mapping the consumer journey, refining communication, structuring brand and portfolio architecture, and driving memory, this strategy ensures brands resonate, engage, and build loyalty at every interaction.

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
          
          ))}   </div>
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
<Letstalk/>
    </div>
  );
}

export default Service1;
