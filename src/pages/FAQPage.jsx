import React, { useState } from "react";
import styles from "../styles/FaqPage.module.scss";
import heroimg from "../assets/faqhero.jpeg";

const faqData = [
  {
    category: "Our Work",
    items: [
      {
        question: "What is your creative philosophy?",
        answer:
          "We are interested in creating emotionally engaging, concept-driven work that is embodied in beautiful forms. We always try to approach the process in a playful way, with a sense of humor. We want people who view my work to experience or feel something, whether it makes them think, brings them joy, or offers them inspiration. We always aim to create functional work that achieves our clients’ goals.",
      },
      {
        question: "Do you avoid trends?",
        answer:
          "Trendy design and styles can work if you are designing something temporary, like an illustration in a magazine or a poster with a short life-span. However, most of the time at our studio, we seek to create work that can have a long lifespan and stay relevant for a long while, especially in relation to branding. The identity and visual language we create for our clients should stay fresh and relevant even after a decade. ",
      },
      {
        question:
          "How important is it to you to also have personal projects? What do they give back to your professional career?",
        answer:
          "We are always on the lookout for talented creatives to join our team. Email us a link to your website to_______. Please make the subject of the email: Job Application: Position Title (Designer, Producer, Animator, Photographer, etc.)",
      },
      {
        question: "How would you describe your design style?",
        answer:
          "​​I don’t believe I have a singular style with our client work; I like to work flexibly and choose the style that makes most sense for each client’s brand personality and goals. When a client comes to us, our goal is to help them identify their unique brand personality traits and then visualize those traits through digital design, concepts for environments or experiences, or print collateral. That said, many people have labeled the style of my personal work “bold, emotional, and provocative.",
      },
      {
        question: "Why is play so important to your work?",
        answer:
          "​When you hear the word “play,” you probably think of games. However, play is really just a mindset in which you experience a state of “flow” and reach an optimal balance of challenge and opportunity based on your skill set. So you can “play” within games, but you can also play within your work. Essentially, what this means is that you are allowing yourself the time and space to experiment without the risk of failure. I am interested in this serious form of play and using this mindset to create better work and discover new styles. I believe that the heart of creativity is discovery through experimentation and humor, and a state of mind at play makes it easier to do this.",
      },
    ],
  },
  {
    category: "Running the Studio",
    items: [
      {
        question:
          "How do clients react to only one design option when the industry is accustomed to multiple options?",
        answer:
          "We assure our clients that if they don’t like what we do, we’ll redo it. However our clients are usually happy with what we create. I believe a large part of this is due to the enormous time we spend on research and process. We strategize with our clients to determine brand personality attributes, which our work will then reflect. We research their target audience and do competitive analysis. We force ourselves to think of the best possible solution for a client that is also respectful of their budgets and restrictions. It is much harder to come up with one great idea than it is to come up with numerous iterations and make the client decide. This does not make things easier for us. However, we have found that it yields better results. ",
      },
    ],
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqPage}>
      <div className={styles.blogpage}>
        <div className={styles.heroSection}>
          <img src={heroimg} alt="" />
        </div>
        <div className={styles.heading}>
          <h1>FAQ’s</h1>
        </div>
      </div>
      <div className={styles.faqscontent}>
        {/* Blog Cards Section */}
        {faqData.map((section, sectionIdx) => (
          <div key={sectionIdx} className={styles.section}>
            <h2 className={styles.category}>{section.category}</h2>
            {section.items.map((item, index) => {
              const uniqueIndex = `${sectionIdx}-${index}`;
              return (
                <div
                  key={uniqueIndex}
                  className={`${styles.faqItem} ${
                    openIndex === uniqueIndex ? styles.open : ""
                  }`}
                >
                  <button
                    className={styles.question}
                    onClick={() => toggleDropdown(uniqueIndex)}
                  >
                    {item.question}   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <rect
                      y="34"
                      width="34"
                      height="34"
                      rx="17"
                      transform="rotate(-90 0 34)"
                      fill="#E5348C"
                    />
                    <path
                      d="M10.0555 23.3546L16.8819 11.2196C16.9197 11.1529 16.9745 11.0975 17.0407 11.0589C17.1069 11.0203 17.1822 11 17.2588 11C17.3354 11 17.4107 11.0203 17.4769 11.0589C17.5431 11.0975 17.5978 11.1529 17.6356 11.2196L24.462 23.3546C24.5055 23.4324 24.5238 23.5217 24.5146 23.6104C24.5055 23.699 24.4692 23.7826 24.4108 23.8499C24.3523 23.9171 24.2746 23.9647 24.1881 23.9862C24.1016 24.0076 24.0106 24.0019 23.9275 23.9697L17.4156 21.4384C17.3147 21.3992 17.2029 21.3992 17.102 21.4384L10.59 23.9706C10.5068 24.0029 10.4157 24.0088 10.3291 23.9873C10.2424 23.9659 10.1645 23.9182 10.106 23.8507C10.0475 23.7833 10.0113 23.6995 10.0022 23.6107C9.99319 23.5219 10.0118 23.4325 10.0555 23.3546Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  </button>{" "}
                
                  <div
                    className={styles.answer}
                    style={{
                      display: openIndex === uniqueIndex ? "block" : "none",
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
