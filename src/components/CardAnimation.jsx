import React from "react";
import StackedCards from "./StackedCards";
import styles from "./Cardsanimation.module.scss";

const cardsData = [
  {
    id: 0,
    title: "Strategic advisory",
    description:
      "We focus on understanding the project in-depth to comprehend its design needs and business objectives, delivering results tailored to its specific context.",
    services: [
      "Brand Strategy",
      "Brand Positioning",
      "Purpose & Value",
      "AI Strategy & Consulting",
      "Brand Personality",
      "Tone of Voice",
      "Messaging",
    ],
    bgColor: "#F2EA83",
    textColor: "#0a1e1e",
  },
  {
    id: 1,
    title: "Exalted Identity",
    description:
      "We built a cohesive strategy, a powerful storytelling, and a strong visual concept that leads to a bespoke brand narrative.",
    services: [
      "Brand Naming",
      "Brand Development & Rebranding Logo Design",
      "Logos & ID Systems",
      "Brand Style Guides",
      "Iconography",
      "Collateral, Print & Packaging",
      "Environmental Design",
      "Brand Awareness",
    ],
    bgColor: "#9ad9d4",
    textColor: "#000000ff",
  },
  {
    id: 2,
    title: "Digital Development",
    description:
      "Our multidisciplinary team collaborates to create comprehensive visual identities that convey brand messages through personalized graphic elements.",
    services: [
      "UI/UX Design",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Design System",
      "Web Applications",
      "iOS & Android Applications",
      "E-commerce Solutions",
      "Website Design & Development",
    ],
    bgColor: "#1f2a2a",
    textColor: "#ffffff",
  },
  {
    id: 3,
    title: "Sensorial Expression",
    description:
      "Our multidisciplinary team collaborates to create comprehensive visual identities that convey brand messages through personalized graphic elements.",
    services: [
      "3D Animation & Rendering",
      "3D Modelling",
      "3D Character Design",
      "Industrial Design",
      "3D Product Design",
      "Motion Graphics",
      "Films",
      "Photography",
      "3D Visualisation",
      "AR/VR Solutions",
    ],
    bgColor: "#e4175a",
    textColor: "#ffffff",
  },
];

const StackCards = () => {
  return (
    <StackedCards
      cards={cardsData}
      sectionClassName={styles.stackWrapper}
      cardClassName={styles.card}
      getCardStyle={(card) => ({
        backgroundColor: card.bgColor,
        color: card.textColor,
      })}
      renderCard={(card) => (
        <div className={styles.cardInner}>
          <div className={styles.left}>
            <h2 className={styles.title} style={{ color: card.textColor }}>
              {card.title}
            </h2>
          </div>
          <div className={styles.right}>
            {card.description && (
              <p className={styles.description}>{card.description}</p>
            )}
            <ul className={styles.serviceList}>
              {card.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    />
  );
};

export default StackCards;
