// import React from "react";
// import heroimg from "../assets/aboutushero.jpg";
// import teamimg from "../assets/team1.svg";
// import styles from "../styles/AboutUs.module.scss";
// import AboutSectionImg from "../assets/AboutUssubimg.svg";
// import FAQ from "../pages/FAQsection";
// import member1 from "../assets/team1.svg";
// import member2 from "../assets/team2.svg";
// import SEO from "../Seo";

// export default function AboutUs() {
//   // const teamData = [
//   //   {
//   //     name: "Samiksha Taru",
//   //     jobTitle: "CEO",
//   //     description: "Lorem ipsum dolor sit amet, consecteturni",
//   //     image: member2,
//   //     description: "Leading the team with strategic vision and innovation.",
//   //   },
//   //   {
//   //     name: "Jai",
//   //     jobTitle: "Graphics",
//   //     description: "Lorem ipsum dolor sit amet, consectetur i",
//   //     image: member2,
//   //     description: "Creating stunning visual designs and graphics.",
//   //   },
//   //   {
//   //     name: "Vinay",
//   //     jobTitle: "UI UX",
//   //     description: "Lorem ipsum dolor sit amet, consectetur i",
//   //     image: member1,
//   //     description: "Designing seamless user experiences and interfaces.",
//   //   },
//   //   {
//   //     name: "Tanuja",
//   //     jobTitle: "3D Modeling",
//   //     description: "Lorem ipsum dolor sit amet, consectetur i",
//   //     image: member2,
//   //     description: "Bringing ideas to life through 3D visualizations.",
//   //   },
//   //   {
//   //     name: "Akash Bamgude",
//   //     jobTitle: "Backend Developer",
//   //     description: "Lorem ipsum dolor sit amet, consectetur i",
//   //     image: member1,
//   //     description: "Building and managing robust backend systems.",
//   //   },
//   //   {
//   //     name: "Prajwal Thombare",
//   //     jobTitle: "Frontend Developer",
//   //     description: "Lorem ipsum dolor sit amet, consectetur i",
//   //     image: member1,
//   //     description: "Developing visually engaging and interactive interfaces.",
//   //   },
//   //   // Add more team members as needed
//   // ];

//   return (
//     <div className={styles.AboutUspage}>
//       <SEO
//         title="About Haraay Design Studio — Brand & 3D Design Agency, Pune India"
//         description="Founded by Samiksha Taru, Haraay Design Studio is a premium creative studio in Pune, India — specialising in brand identity, web design, and 3D visualisation for ambitious brands globally.

// "
//         keywords="about Haraay Design Studio, design agency Pune, Samiksha Taru designer, branding studio India, creative agency Pune"
//       />

//       {/* Hero Section */}
//       <section className={styles.HeroSection}>
//         <img src={heroimg} alt="Hero" className={styles.heroimg} />
//         <h1 className={styles.herotext}>About Haraay</h1>
//       </section>

//       {/* About Section */}
//       <section className={styles.AboutUsSection}>
//         <div className={styles.AboutSection}>
//           <div className={styles.AboutSectionText}>
//             <h1>About Haraay</h1>
//             <p>
//               We are the Haraay,  a design studio with global reach and offices
//               in India. We specialize in brand construction and the development
//               of visual communication systems.Our mission is to play an active
//               role partnering with our clients to create coherent design
//               solutions that truly connect with their audiences.
//             </p>
//             <a href="">See All Services ➔</a>
//           </div>
//           <div className={styles.AboutSectionImg}>
//             <img src={AboutSectionImg} alt="" />
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className={styles.ProcessSection}>
//         <div className={styles.ProcessHeading}>
//           <h1>Process</h1>
//         </div>
//         <div className={styles.processmaindiv}>
//           <div className={styles.processtxt}>
//             <h2>Steps we follow for Products</h2>
//             <a href="#">Contact us ➔</a>
//           </div>
//           <div className={styles.processContainer}>
//             <div className={styles.processStep}>
//               <div className={styles.circle}>1</div>
//               <div className={styles.content}>
//                 <h3>Research & Analysis</h3>
//                 <p>
//                   We focus on understanding the project in-depth to comprehend
//                   its design needs and business objectives, delivering results
//                   tailored to its specific context.
//                 </p>
//               </div>
//             </div>

//             <div className={styles.processStep}>
//               <div className={styles.circle}>2</div>
//               <div className={styles.content}>
//                 <h3>Strategy & Concept</h3>
//                 <p>
//                   We build a cohesive strategy, a powerful storytelling, and a
//                   strong visual concept that leads to a bespoke brand narrative.
//                 </p>
//               </div>
//             </div>

//             <div className={styles.processStep}>
//               <div className={styles.circle}>3</div>
//               <div className={styles.content}>
//                 <h3>Visual Design</h3>
//                 <p>
//                   Our multidisciplinary team collaborates to create
//                   comprehensive visual identities that convey brand messages
//                   through personalized graphic elements.
//                 </p>
//               </div>
//             </div>

//             <div className={styles.processStep}>
//               <div className={styles.circle}>4</div>
//               <div className={styles.content}>
//                 <h3>Design Application</h3>
//                 <p>
//                   The final identity system is implemented in a set of brand
//                   applications aligned with the project needs.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <section className={styles.OurTeams}>
//         <h1>Our Team</h1>
//         <div className={styles.teamdiv}>
//           {teamData.map((member, index) => (
//             <div key={index} className={styles.member}>
//               <img src={member.image} alt={member.name} />
//               <h3>{member.name}</h3>
//               <h4>{member.jobTitle}</h4>
//               <p>{member.description}</p>
//             </div>
//           ))}
//         </div>
//       </section> */}

//       <FAQ />
//     </div>
//   );
// }

// import React from "react";
// import Cards from "../components/CardAnimation";
// export default function () {
//   return (
//     <div>
//       <Cards />
//     </div>
//   );
// }

import React from "react";
import styles from "../styles/AboutUs.module.scss";
import heroImg from "../assets/About/HeroImg.png"; // your hero image
import SEO from "../Seo";
import FAQ from "../pages/FAQsection";
import Cards from "../components/CardAnimation";
import arrow from "../assets/About/arrow.svg";
import purusImg from "../assets/About/Purus.jpg";
import alankarImg from "../assets/About/Alankar.png";

const projects = [
  {
    id: "purus",
    title: "Puru's",
    description:
      "Puru's Enterprises specializes in business consulting and sustainable lifestyle products. As a solutions-based firm, they are dedicated to creating a brighter future by inspiring individuals.",
    tags: ["Brand Identity", "3D Character Design", "Packaging"],
    image: purusImg,
  },
  {
    id: "alankar",
    title: "Alankar",
    description:
      "We combine creative thinking with cutting-edge technology to ensure your brand stands out — on paper, in-store, and everywhere in between.",
    tags: ["App Development", "Branding Design", "UI/UX"],
    image: alankarImg,
  },
];
const strategicItems = [
  "Brand Strategy",
  "Brand Positioning",
  "Purpose & Value",
  "AI Strategy & Consulting",
  "Brand Personality",
  "Tone of Voice",
  "Messaging",
];

const awards = [
  { name: "Tech Behemoths", year: "2025" },
  { name: "Awwwards", year: "2024" },
  { name: "Tech Behemoths", year: "2023" },
  { name: "Design Rush", year: "2023" },
  { name: "Innovative Zone", year: "2023" },
];

const techProviders = [
  {
    name: "Google",
    description:
      "As a strategic partner, we harness Google's advanced ecosystem to engineer high-performance digital solutions. Our approach integrates rigorous data insights and cutting-edge ad technologies to ensure your brand achieves maximum visibility and measurable impact in a competitive landscape.",
  },
  {
    name: "AWS",
    description:
      "We utilize Amazon Web Services to build the backbone of scalable, enterprise-grade digital experiences. By implementing industry-leading cloud infrastructure, we provide our clients with the security, speed, and reliability required to grow a global presence with absolute confidence.",
  },
  {
    name: "Azure",
    description:
      "Leveraging Microsoft's robust cloud framework, we drive digital transformation through secure and scalable architecture. Our expertise in Azure enables us to deploy AI-driven insights and sophisticated data storage solutions, empowering brands to innovate at the intersection of technology and design.",
  },
  {
    name: "HubSpot",
    description:
      "We orchestrate every stage of the customer journey through the lens of strategic CRM and inbound excellence. By deploying HubSpot's comprehensive suite, we craft data-driven campaigns that foster meaningful relationships and convert high-value leads into long-term brand advocates.",
  },
  {
    name: "Meta",
    description:
      "In the realm of social engagement, we position brands at the forefront of digital interaction. Using advanced, data-informed strategies across Meta's platforms, we create resonant narratives that amplify brand authority and cultivate a sophisticated global community.",
  },
  {
    name: "Shopify",
    description:
      "We design seamless, high-end eCommerce environments tailored for growth. By optimizing Shopify's powerful platform, we deliver bespoke online flagship stores that balance aesthetic excellence with uncompromising performance, ensuring your brand thrives in the digital marketplace.",
  },
  {
    name: "Figma",
    description:
      "Design collaboration is elevated to an art form through our mastery of Figma. We utilize its dynamic capabilities to streamline complex workflows and deliver visually compelling, user-centric interfaces that resonate with sophisticated audiences and define premium user experiences.",
  },
  {
    name: "Webflow",
    description:
      "We bridge the gap between bespoke design and technical agility using Webflow. By developing custom, high-fidelity websites with clean code and immersive interactions, we provide our clients with a sophisticated digital presence that is as powerful to manage as it is stunning to experience.",
  },
  {
    name: "Jira",
    description:
      "Complexity demands clarity. We configure Jira to provide rigorous oversight and operational control over every project. From agile sprints to strategic milestones, our systematic approach ensures that every task is tracked, visible, and meticulously aligned with your high-level business objectives.",
  },
];

export default function AboutUs() {
  return (
    <div className={styles.aboutPage}>
      <SEO
        title="About Haraay Design Studio — Brand & 3D Design Agency, Pune India"
        description="Founded by Samiksha Taru, Haraay Design Studio is a premium creative studio in Pune, India — specialising in brand identity, web design, and 3D visualisation for ambitious brands globally."
        keywords="about Haraay Design Studio, design agency Pune, Samiksha Taru designer, branding studio India, creative agency Pune"
      />

      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <p className={styles.heroLabel}>About</p>
        <h1 className={styles.heroTitle}>
          Growth and transformation for brands in the intelligence age.
        </h1>
        <div className={styles.heroImgWrap}>
          <img src={heroImg} alt="About Haraay" className={styles.heroImg} />
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className={styles.intro}>
        <p className={styles.introEyebrow}>
          A NEW ERA OF AGENCY FOR THE INTELLIGENCE AGE
        </p>
        <div className={styles.introGrid}>
          <h2 className={styles.introHeadline}>
            We deliver tech-powered ecosystems that transform brand and customer
            experience, and accelerate business growth.
          </h2>
          <div className={styles.introBody}>
            <p>
              Transformation starts with clarity. Our approach unites brand
              strategy, experience design, and technology development to solve
              real business challenges, unlock growth, and strengthen relevance
              in the intelligence age.
            </p>
            <p>
              We partner closely with startups, scale-ups, and established
              brands, approaching each project with curiosity, attention to
              detail, and a strong focus on long-term value rather than
              short-term trends.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STRATEGIC ADVISORY CARD ─── */}
      {/* <section className={styles.advisorySection}>
        <div className={styles.advisoryCard}>
          <div className={styles.advisoryLeft}>
            <p className={styles.advisoryLabel}>Strategic advisory</p>
            <h3 className={styles.advisoryTitle}>Start with direction</h3>
            <div className={styles.advisoryArrow}>→</div>
          </div>
          <div className={styles.advisoryRight}>
            <p className={styles.advisoryDesc}>
              We focus on understanding the project in-depth to comprehend its
              design needs and business objectives, delivering results tailored
              to its specific context.
            </p>
            <ul className={styles.advisoryList}>
              {strategicItems.map((item, i) => (
                <li
                  key={i}
                  className={
                    item === "AI Strategy & Consulting" ? styles.highlight : ""
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}
      <Cards />
      {/* ─── AWARDS ─── */}
      <section className={styles.awardsSection}>
        <h2 className={styles.awardsTitle}>Awards</h2>
        <p className={styles.awardsSubtitle}>
          Acknowledged for Branding, Motion Packaging and more.
        </p>
        <div className={styles.awardsList}>
          {awards.map((award, i) => (
            <div key={i} className={styles.awardRow}>
              <span className={styles.awardName}>{award.name}</span>
              <span className={styles.awardYear}>{award.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── AI BANNER ─── */}
      <section className={styles.aiBanner}>
        <h2 className={styles.aiBannerTitle}>
          Bring human clarity and confident direction
          <br />
          to an AI-driven world.
        </h2>
        <button className={styles.aiBannerBtn}>
          AI Powered Solutions{" "}
          <span className={styles.arrow}>
            <img src={arrow} alt="" />
          </span>
        </button>
      </section>

      {/* ─── TECH PROVIDERS ─── */}
      <section className={styles.techSection}>
        <p className={styles.techEyebrow}>WORKING WITH</p>
        <h2 className={styles.techTitle}>
          Market Leading technology
          <br />
          providers
        </h2>
        <div className={styles.techGrid}>
          {techProviders.map((provider, i) => (
            <div key={i} className={styles.techCard}>
              <h3 className={styles.techName}>{provider.name}</h3>
              <p className={styles.techDesc}>{provider.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OUTRO ─── */}
      <section className={styles.outro}>
        <h2 className={styles.outroText}>
          Explore how we delivered these
          <br />
          brand-led, human-centred outcomes
          <br />
          for others
        </h2>
        <div className={styles.showcase}>
          <div className={styles.grid}>
            {projects.map((project) => (
              <a
                href={`/works/${project.id}`}
                key={project.id}
                className={styles.card}
              >
                <div className={styles.imageWrap}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* <FAQ /> */}
    </div>
  );
}
