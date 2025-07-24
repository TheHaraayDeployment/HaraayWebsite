import React from "react";
import styles from "./ToothCaseStudy.module.scss";
import HeroImg from "./toothHero.svg";
import sec2left from "./sec2left.svg";
import sec2right from "./sec2right.svg";
import sec3left from "./sec3left.svg";
import sec3right from "./sec3right.svg";
import sec4 from "./sec4.svg";
import sec5left from "./sec5left.svg";
import sec5right from "./sec5right.svg";
export default function Tooth() {
 const FaStar = () => (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M11.0007 16.7494L16.1738 19.8186C17.1212 20.3811 18.2805 19.5496 18.0312 18.498L16.66 12.7264L21.2348 8.83784C22.07 8.12861 21.6213 6.78352 20.5243 6.69792L14.5035 6.19657L12.1475 0.742855C11.7237 -0.247618 10.2777 -0.247618 9.85383 0.742855L7.49785 6.18435L1.47702 6.6857C0.380054 6.77129 -0.0687042 8.11638 0.766484 8.82561L5.34132 12.7141L3.97012 18.4858C3.72081 19.5374 4.8801 20.3689 5.82747 19.8064L11.0007 16.7494Z" fill="url(#paint0_linear_3793_11456)"/>
  <defs>
    <linearGradient id="paint0_linear_3793_11456" x1="-3.40566" y1="9.78245" x2="21.5253" y2="9.78245" gradientUnits="userSpaceOnUse">
      <stop offset="0.41" stop-color="#F9DA60"/>
      <stop offset="1" stop-color="#FDCA00"/>
    </linearGradient>
  </defs>
</svg>)
  return (
    <div className={styles.caseStudyMainPage}>
      <div className={styles.HeroSection}>
        <div className={styles.headerBox}>
          <div className={styles.title}>
            {" "}
            <h2>Toot</h2> <span>Industry :</span>
          </div>
          <div className={styles.services}>
            {" "}
            <p>Brand Strategy, Logo Design, Packaging Design</p>{" "}
            <span>Kid’s Oral Care | FMCG</span>
          </div>
        </div>
        <div className={styles.heroImg}>
          <img src={HeroImg} alt="" />
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------- */}
      <div className={styles.textSection}>
        <div className={styles.leftSide}>
          {" "}
          <h2>Client Brief</h2>
        </div>
        <div className={styles.rightSide}>
          <p>
            Toot came to us as a fresh, playful idea — a kids’ toothpaste brand
            that aimed to make brushing a fun, exciting ritual instead of a
            daily chore. As a startup brand in the oral care market, Toot wanted
            to stand out with a bold visual identity, cute mascots, and fun
            packaging that kids would instantly love and parents would trust.
          </p>
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.grid}>
          <img src={sec2left} className={styles.leftimg}alt="" />
          <img src={sec2right} className={styles.rightimg} alt="" />
        </div>
      </div>
{/* ---------------------------------------------------------------------------------------- */}
 <div className={styles.textSection}>
        <div className={styles.leftSide}>
          {" "}
          <h2>Our Approach</h2>
        </div>
        <div className={styles.rightSide}>
          <p>
          We started with one core belief: Toothpaste doesn’t have to be boring.
From brand strategy to packaging design, we shaped Toot into a cheeky, confident, and ultra-fun brand.
Designed for milk teeth, messy mornings, and tiny giggles.  </p>
        </div>
      </div>
      <div className={styles.imageSection3}>
        <div className={styles.grid}>
          <img src={sec3left} className={styles.leftimg}alt="" />
          <img src={sec3right} className={styles.rightimg} alt="" />
        </div>
      </div>

{/* ---------------------------------------------------------------------------------------- */}
 <div className={styles.textSection}>
        <div className={styles.leftSide}>
          {" "}
          <h2 style={{textWrap: "wrap"}}>Visual Identity & Packaging</h2>
        </div>
        <div className={styles.rightSide}>
          <p>
         <span>Visual Identity:</span> A squishy, punchy logotype that looks like it could be chewed. Bold, edible color palette — Lemon , Blue Raspberry , Orange , Cherry . Playful typography with wobbly energy. Kid-drawn-style icons and wild doodles </p>
        <p> <span>Packaging Design: </span>Tubes designed to pop on the shelf and bathroom counter. Custom flavor illustrations and character motifs. Fun unboxing moments with surprise graphics inside</p>
        
        </div>
      </div>
      <div className={styles.imageSection3}>
        <div className={styles.grid}>
          <img src={sec4} className={styles.leftimg}alt="" />
          {/* <img src={sec3right} className={styles.rightimg} alt="" /> */}
        </div>
      </div>
{/* ---------------------------------------------------------------------------------------- */}
 <div className={styles.textSection}>
        <div className={styles.leftSide}>
          {" "}
          <h2>Digital & Merch</h2>
        </div>
        <div className={styles.rightSide}>
          <p>
         Brand-led digital content with sticky punchlines (“Happy Teeth. Happy Smiles.”). Interactive mockups and kid-friendly IG content. Minimal merch packs for product seeding and influencer drops </p>
        </div>
      </div>
      <div className={styles.imageSection5}>
        <div className={styles.grid}>
          <img src={sec5left} className={styles.leftimg}alt="" />
          <img src={sec5right} className={styles.rightimg} alt="" />
        </div>
      </div>
{/* ---------------------------------------------------------------------------------------- */}
 <div className={styles.textSection}>
        <div className={styles.leftSide}>
          {" "}
          <h2>SEO Keywords</h2>
        </div>
        <div className={styles.rightSide}>
          <p>
         Toothpaste branding for kids, fun packaging design, branding for FMCG startups, playful kids brand design, Toot toothpaste, children’s oral care packaging, design agency for D2C brands, character-led branding, natural toothpaste for kids, Haraay Design Studio work </p>
        </div>
      </div>
     
 <div className={styles.testimonialSection}>
      <h2 className={styles.title}>Client Testimonial</h2>
      <p className={styles.text}>
        We wanted to break the mold of clinical, dull packaging — <br />
        Haraay made our brand POP with personality.”
      </p>
   <div className={styles.downContent}>
       <div className={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className={styles.star} />
        ))}
      </div>
      <div className={styles.authorInfo}>
        <strong className={styles.name}>Toot</strong>
        <p className={styles.role}>Founders</p>
      </div>
   </div>
    </div>
    </div>
  );
}
