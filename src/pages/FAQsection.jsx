import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/FAQsection.module.scss";

const defaultFaqData = [
  {
    question: "Why go with Haraay?",
    answer:
      "Being one of India's leading creative agencies, we are known for creative, disruptive, out-of-the-box and innovative work that breaks industry standards.",
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

const FAQ = ({ title = "FAQ", faqData = defaultFaqData }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleFAQ = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.FAQ}>
      <h2 className={styles.SectionTitle}>{title}</h2>
      <div className={styles.FAQList}>
        {faqData.map((faq, index) => {
          const isOpen = openQuestion === index;
          return (
            <div
              key={faq.question}
              className={`${styles.FAQItem} ${isOpen ? styles.active : ""}`}
            >
              <button
                className={styles.FAQQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <span
                  className={`${styles.Toggle} ${isOpen ? styles.open : ""}`}
                  aria-hidden="true"
                >
                  <span className={styles.hLine} />
                  <span className={styles.vLine} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    className={styles.FAQAnswer}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    {faq.answer.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
