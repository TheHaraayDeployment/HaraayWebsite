import React, { useRef, useEffect } from "react"; // Add useRef and useEffect here
// import Animation

// import Scssimport styles from "./Button.module.scss";
import styles from "./SereneCaseStudy.module.scss";
// Image Import
import HeroImg from "../../assets/Serene/SerenHero.webp";
import Img1 from "../../assets/Serene/Sereneimg1.webp";
import Img2 from "../../assets/SereneCasestudyBranding.svg";
import Img3 from "../../assets/Serene/SereneImg1.webp";
import Img4 from "../../assets/Serene/Sereneimg3.webp";

// Case Studies img
import CaseStudies1 from "../../assets/CaseStudyCard1.svg";
import CaseStudies2 from "../../assets/CaseStudyCard2.svg";
import CaseStudies3 from "../../assets/CaseStudyCard3.svg";

const SereneSkinCaseStudy = () => {
  const cards = [
    { src: CaseStudies1, title: "Serene Skin" },
    { src: CaseStudies2, title: "Baker's Street" },
    { src: CaseStudies3, title: "BMS" },
  ];

  return (
    <div className={styles.CaseStudy}>
      <section className={styles.CaseStudy_Hero}>
        <div className={styles.CaseStudy_Hero_background}>
          <img src={HeroImg} alt="  Case Study" />
        </div>
        <div className={styles.CaseStudy_Hero_content}>
          <h1>Serene Skin</h1>
          <p>Branding & Packaging</p>
        </div>
      </section>

      <div className={styles.CaseStudySectiondiv}>
        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Client Brief</h2>
            <p>
              The client envisioned a bold yet elegant identity and packaging
              design that could effectively differentiate their product in a
              crowded marketplace. They emphasized the need for a design that
              exudes confidence and sophistication, appealing to their target
              audience's sense of quality and style.
            </p>
          </div>
          <div className={styles.case_text}>
            <h2>Overview</h2>
            <p>
              Serene Skin is a new skincare brand in India that encourages
              self-love via natural and ethical products. They distinguish
              themselves from other skincare firms by providing new products
              that every individual may use.
            </p>
          </div>
          <img className={styles.faultimg} src={Img1} alt="Branding" />
        </section>

        <section className={styles.case_section}>
          <div className={`${styles.case_text} ${styles.faulttxt}`}>
            <h2>Branding</h2>
            <p>
              Serene Skin is a brand that encourages people to feel confident
              and inspired our objective was to design the brand's branding and
              packaging. We wanted to make it a luxury and bold skincare brand
              that pro <a>ReadMore</a>
            </p>
          </div>
          <img src={Img2} alt="Branding" />
        </section>

        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Color Palette</h2>
            <p>
              Red is not a color that is utilized universally or frequently in
              skincare brands. Colors often associated with skincare firms, on
              the other hand, are more muted, such as white, pastel tones, and
              shades of blue and green. <a> ReadMore</a>
            </p>
          </div>
          <img src={Img3} alt="Color Palette" />
        </section>

        <section className={styles.case_section}>
          <div className={styles.case_text}>
            <h2>Packaging</h2>
            <p>
              Because skincare products are mostly in liquid form, water, a
              basic form of nature, is the major inspiration for our product
              packaging design. We worked on the packaging design for the key
              skincare products, which incl... <a> ReadMore</a>
            </p>
          </div>
          <img src={Img4} alt="Packaging" />
        </section>
      </div>
      {/* <div className="bakerscase-casestudies-container">
        <div className="bakerscase-casestudies">
          <div className="bakerscase-casestudy">
            <img
              src={CaseStudies1}
              alt="Serene Skin"
              className="bakerscase-casestudy-image"
            />
            <p className="bakerscase-casestudy-title">Serene Skin</p>
          </div>
          <div className="bakerscase-casestudy">
            <img
              src={CaseStudies2}
              alt="Baker's Street"
              className="bakerscase-casestudy-image"
            />
            <p className="bakerscase-casestudy-title">Baker's Street</p>
          </div>
          <div className="bakerscase-casestudy">
            <img
              src={CaseStudies3}
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
      </div> */}
    </div>
  );
};

export default SereneSkinCaseStudy;
