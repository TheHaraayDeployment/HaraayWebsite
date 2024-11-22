import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "../styles/FAQsection.module.scss";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  useEffect(() => {
    answerRefs.current.forEach((answer, index) => {
      if (openQuestion === index) {
        gsap.to(answer, {
          height: "auto",
          duration: 0.4,
          ease: "power2.out", // Smooth easing
          paddingTop: "1rem", // Adjust padding for a balanced look
          paddingBottom: "1rem",
        });
      } else {
        gsap.to(answer, {
          height: 0,
          duration: 0.3,
          ease: "power2.inOut", // Smooth in-out transition
          paddingTop: 0,
          paddingBottom: 0,
        });
      }
    });
  }, [openQuestion]);
  

  const faqData = [
    {
      question: "Why go with Haraay?",
      answer: "Being one of India's leading creative agencies, we are known for creative, disruptive, out-of-the-box and innovative work that breaks industry standards.",
    },
    {
      question: "What is creative design at Haraay?",
      answer: "At Haraay Design Studio, we...",
    },
    {
      question: "What kind of clients do we work with?",
      answer: "We work with a range of clients...",
    },
  ];

  return (
    <section className={styles.FAQ}>
      <h2 className={styles.SectionTitle}>FAQ</h2>
      <div className={styles.FAQList}>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`${styles.FAQItem} ${
              openQuestion === index ? styles.active : ""
            }`}
          >
            <button
              className={styles.FAQQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span
                className={`${styles.Arrow} ${
                  openQuestion === index ? styles.open : ""
                }`}
              >
                {openQuestion === index ? "▲" : "▼"}
              </span>
            </button>
            <div
              className={styles.FAQAnswer}
              ref={(el) => (answerRefs.current[index] = el)}
              style={{
                height: 0,
                overflow: "hidden",
                paddingTop: 0,
                paddingBottom: 0,
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
