import React from "react";
import heroimg from "../assets/aboutushero.svg";
import teamimg from "../assets/team1.svg";
import styles from "../styles/AboutUs.module.scss";
import AboutSectionImg from "../assets/AboutUssubimg.svg";
import FAQ from "../pages/FAQsection";
import member1 from "../assets/team1.svg";
import member2 from "../assets/team2.svg";

export default function AboutUs() {
  const teamData = [
    {
      name: "Samiksha Taru",
      jobTitle: "CEO",
      description: "Lorem ipsum dolor sit amet, consecteturni",
      image: member2,
      description: "Leading the team with strategic vision and innovation.",
    },
    {
      name: "Jai",
      jobTitle: "Graphics",
      description: "Lorem ipsum dolor sit amet, consectetur i",
      image: member2,
      description: "Creating stunning visual designs and graphics.",
    },
    {
      name: "Vinay",
      jobTitle: "UI UX",
      description: "Lorem ipsum dolor sit amet, consectetur i",
      image: member1,
      description: "Designing seamless user experiences and interfaces.",
    },
    {
      name: "Tanuja",
      jobTitle: "3D Modeling",
      description: "Lorem ipsum dolor sit amet, consectetur i",
      image: member2,
      description: "Bringing ideas to life through 3D visualizations.",
    },
    {
      name: "Akash Bamgude",
      jobTitle: "Backend Developer",
      description: "Lorem ipsum dolor sit amet, consectetur i",
      image: member1,
      description: "Building and managing robust backend systems.",
    },
    {
      name: "Prajwal Thombare",
      jobTitle: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet, consectetur i",
      image: member1,
      description: "Developing visually engaging and interactive interfaces.",
    },
    // Add more team members as needed
  ];

  return (
    <div className={styles.AboutUspage}>
      {/* Hero Section */}
      <section className={styles.HeroSection}>
        <img src={heroimg} alt="Hero" className={styles.heroimg} />
        <h1 className={styles.herotext}>About Haraay</h1>
      </section>

      {/* About Section */}
      <section className={styles.AboutUsSection}>
        <div className={styles.AboutSection}>
          <div className={styles.AboutSectionText}>
            <h1>About Haraay</h1>
            <p>
              We are the Haraay,  a design studio with global reach and offices
              in India. We specialize in brand construction and the development
              of visual communication systems.Our mission is to play an active
              role partnering with our clients to create coherent design
              solutions that truly connect with their audiences.
            </p>
            <a href="">See All Services ➔</a>
          </div>
          <div className={styles.AboutSectionImg}>
            <img src={AboutSectionImg} alt="" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.ProcessSection}>
        <div className={styles.ProcessHeading}>
          <h1>Process</h1>
        </div>
        <div className={styles.processmaindiv}>
          <div className={styles.processtxt}>
            <h2>Steps we follow for Products</h2>
            <a href="#">Contact us ➔</a>
          </div>
          <div className={styles.processContainer}>
            <div className={styles.processStep}>
              <div className={styles.circle}>1</div>
              <div className={styles.content}>
                <h3>Research & Analysis</h3>
                <p>
                  We focus on understanding the project in-depth to comprehend
                  its design needs and business objectives, delivering results
                  tailored to its specific context.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.circle}>2</div>
              <div className={styles.content}>
                <h3>Strategy & Concept</h3>
                <p>
                  We build a cohesive strategy, a powerful storytelling, and a
                  strong visual concept that leads to a bespoke brand narrative.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.circle}>3</div>
              <div className={styles.content}>
                <h3>Visual Design</h3>
                <p>
                  Our multidisciplinary team collaborates to create
                  comprehensive visual identities that convey brand messages
                  through personalized graphic elements.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.circle}>4</div>
              <div className={styles.content}>
                <h3>Design Application</h3>
                <p>
                  The final identity system is implemented in a set of brand
                  applications aligned with the project needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.OurTeams}>
        <h1>Our Team</h1>
        <div className={styles.teamdiv}>
          {teamData.map((member, index) => (
            <div key={index} className={styles.member}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <h4>{member.jobTitle}</h4>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ />
    </div>
  );
}
