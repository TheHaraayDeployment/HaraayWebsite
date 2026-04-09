import React, { useEffect } from "react";
import styles from "./WhatWeDo.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import icon1 from "../../assets/motionIcon.png";
import icon2 from "../../assets/websiteIcon.png";
import icon3 from "../../assets/brandIcon.png";
export default function WhatWeDo() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: false });
  }, []);

  const services = [
    {
      id: 1,
      icon: icon3,
      title: "Brand Identity",
      description:
        "Logo systems, visual language, typography, colour, brand guidelines, packaging, and marketing collateral. We build identities that hold their weight across every touchpoint— from a business card to a billboard.",
    },
    {
      id: 2,
      icon: icon2,
      title: "Web & Technology",
      description:
        "Strategy-led websites, UI/UX design, and frontend development. We design digital experiences that are architecturally sound, visually precise, and built to convert.",
    },
    {
      id: 3,
      icon: icon1,
      title: "3D & Motion",
      description:
        "Product visualisation, brand films, architectural renders, and motion design. When a static image is not enough, we build the dimension.",
    },
  ];

  return (
    <section className={styles.whatWeDoSection}>
      <div className={styles.container}>
        <div className={styles.header} data-aos="fade-up">
          <h2 className={styles.subtitle}>What we do</h2>
          <p className={styles.headerDescription}>
            Three disciplines. One studio. Every engagement.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                  {" "}
                  <img src={service.icon} alt="" />
                </div>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
