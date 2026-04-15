// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "./Cardsanimation.module.scss";

// gsap.registerPlugin(ScrollTrigger);

// const cardsData = [
//   {
//     id: 0,
//     title: "Strategic advisory",
//     description:
//       "We focus on understanding the project in-depth to comprehend its design needs and business objectives, delivering results tailored to its specific context.",
//     services: [
//       "Brand Strategy",
//       "Brand Positioning",
//       "Purpose & Value",
//       "AI Strategy & Consulting",
//       "Brand Personality",
//       "Tone of Voice",
//       "Messaging",
//     ],
//     bgColor: "#F2EA83",
//     textColor: "#0a1e1e",
//   },
//   {
//     id: 1,
//     title: "Exalted Identity",
//     description:
//       "We built a cohesive strategy, a powerful storytelling, and a strong visual concept that leads to a bespoke brand narrative.",
//     services: [
//       "Brand Naming",
//       "Brand Development & Rebranding Logo Design",
//       "Logos & ID Systems",
//       "Brand Style Guides",
//       "Iconography",
//       "Collateral, Print & Packaging",
//       "Environmental Design",
//       "Brand Awareness",
//     ],
//     bgColor: "#9ad9d4",
//     textColor: "#000000ff",
//   },
//   {
//     id: 2,
//     title: "Digital Development",
//     description:
//       "Our multidisciplinary team collaborates to create comprehensive visual identities that convey brand messages through personalized graphic elements.",
//     services: [
//       "UI/UX Design",
//       "Information Architecture",
//       "Wireframing",
//       "Prototyping",
//       "Design System",
//       "Web Applications",
//       "iOS & Android Applications",
//       "E-commerce Solutions",
//       "Website Design & Development",
//     ],
//     bgColor: "#1f2a2a",
//     textColor: "#ffffff",
//   },
//   {
//     id: 3,
//     title: "Sensorial Expression",
//     description: "",
//     services: [
//       "3D Animation & Rendering",
//       "3D Modelling",
//       "3D Character Design",
//       "Industrial Design",
//       "3D Product Design",
//       "Motion Graphics",
//       "Films",
//       "Photography",
//       "3D Visualisation",
//       "AR/VR Solutions",
//     ],
//     bgColor: "#e4175a",
//     textColor: "#ffffff",
//   },
// ];

// const StackCards = () => {
//   const containerRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const cards = cardsRef.current;

//     cards.forEach((card, index) => {
//       if (index === cards.length - 1) return; // last card stays

//       ScrollTrigger.create({
//         trigger: card,
//         start: "top 10%",
//         endTrigger: cards[cards.length - 1],
//         end: "top top",
//         pin: true,
//         pinSpacing: false,
//         scrub: true,
//       });

//       // Scale + fade effect as next card covers this one
//       gsap.to(card, {
//         scale: 0.9,
//         opacity: 0.6,
//         ease: "none",
//         scrollTrigger: {
//           trigger: cards[index + 1],
//           start: "top bottom",
//           end: "top top",
//           scrub: true,
//         },
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className={styles.stackWrapper}>
//       {cardsData.map((card, index) => (
//         <div
//           key={card.id}
//           ref={(el) => (cardsRef.current[index] = el)}
//           className={styles.card}
//           style={{
//             backgroundColor: card.bgColor,
//             color: card.textColor,
//           }}
//         >
//           <div className={styles.cardInner}>
//             <div className={styles.left}>
//               <h2 className={styles.title}>{card.title}</h2>
//             </div>
//             <div className={styles.right}>
//               {card.description && (
//                 <p className={styles.description}>{card.description}</p>
//               )}
//               <ul className={styles.serviceList}>
//                 {card.services.map((service, i) => (
//                   <li key={i}>{service}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StackCards;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Cardsanimation.module.scss";

gsap.registerPlugin(ScrollTrigger);

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

const STACK_OFFSET = 20; // px gap visible between stacked card tops

const StackCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const triggers = [];

    cards.forEach((card, index) => {
      // Each card stops at: 20px * its position in the stack
      const topOffset = STACK_OFFSET * index;

      const trigger = ScrollTrigger.create({
        trigger: card,
        start: `top ${topOffset}px`,
        endTrigger: cards[cards.length - 1],
        end: `top ${STACK_OFFSET * (cards.length - 1)}px`,
        pin: true,
        pinSpacing: false,
        scrub: false, // pin only, no scrubbing — gives clean "stop" feel
      });

      triggers.push(trigger);
    });

    // Refresh on resize for accuracy
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      triggers.forEach((t) => t.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.stackWrapper}>
      {cardsData.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className={styles.card}
          style={{
            backgroundColor: card.bgColor,
            color: card.textColor,
            zIndex: index + 1, // each card layers above the previous
          }}
        >
          <div className={styles.cardInner}>
            <div className={styles.left}>
              <h2
                className={styles.title}
                style={{
                  color: card.textColor,
                }}
              >
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
        </div>
      ))}
    </div>
  );
};

export default StackCards;
