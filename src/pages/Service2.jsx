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
    "3D Animation & Rendering",
    " Motion Graphics",
    "Films",
    " Photography ", "3D Visualization & AR/VR Solutions"
  ];

  const infoContent = {
    "3D Animation & Rendering":
      "We create immersive animations and renders that give your audience an in-depth, engaging look at your product. Every detail is carefully crafted to capture the essence of your vision, from texture and lighting to realistic motion.",
   
      " Motion Graphics":
      "We Develop dynamic graphics to convey complex ideas with clarity, engaging audiences through movement and visual storytelling.",
  
      "Films":
      "From short promos to full-scale cinematic experiences, our VFX and film capabilities add a powerful layer of storytelling. We mix live-action with visual effects to produce high-impact scenes that leave a lasting impression.Produces cinematic brand films that evoke emotion and tell compelling brand stories, forging strong connections with viewers.",
    " Photography ":
      "Capturing the perfect shot is an art form, and we specialize in crafting visuals that highlight your product or message with precision and style. Our photography services ensure that your brand’s personality shines through, whether it’s for online or print. Captures high-quality imagery that reflects the brand’s essence, creating memorable visuals for digital and print media.",
      "3D Visualization & AR/VR Solutions":
      "Our visualization techniques help your audience experience your products and spaces as if they were physically present. Using AR and VR, we take this further by creating interactive, immersive environments where users can explore without limits.",

    };
  const steps = [
    {
      number: "01",
      title: " Conceptualize & Plan",
      content:
        "We start by getting to know your goals, vision, and audience. In this initial meeting, we dive deep into your ideas, exploring every detail that matters to you. Together, we set the stage for an unforgettable creative journey, ensuring that we’re aligned and ready to bring your concept to life.",
    },
  
    {
      number: "02",
      title: " Design & Storyboarding",
      content:
        "Our team translates your ideas into a visual roadmap. Through sketches, storyboards, and sample renders, we provide a sneak peek of the final look and feel. Here, we invite your feedback to ensure every aspect of the story, visuals, and animation align with your brand and message.",
    },
    {
      number: "03",
      title: "3D Creation & Animation",
      content:
        "Once the vision is approved, we dive into production. Our experts model, animate, and apply realistic textures, lighting, and VFX that make each element come alive. This is where our magic happens—transforming your idea into a stunning visual experience.",
    },
    {
      number: "04",
      title: "Review, Refine & Deliver",
      content:
        "In the final stage, we review the project with you, making refinements to ensure it exceeds your expectations. After approval, we render and format the visuals for your specific platform, whether that’s a video, VR experience, or online showcase. We’re here to make sure everything is polished and ready to impress.",
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
            <h1>Sensorial Expressions</h1>
          </div>

          {/* Right side */}
          <div className={styles.HeroContent}>
            <h2>Transforming Concepts into Stunning Visual Experiences</h2>
            <p>
              Sensorial Expressions is an immersive visual strategy that uses 3D
              animation, motion graphics, film, and photography to bring brands
              to life through impactful storytelling. This approach captures and
              captivates audiences, delivering visual experiences that are both
              memorable and emotionally resonant.Our offerings span a range of
              visual services:
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
