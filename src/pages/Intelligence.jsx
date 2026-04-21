import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/Intelligence.module.scss";
import heroImg from "../assets/Intelligence/hero.jpg";
import middleImg from "../assets/Intelligence/middle.jpg";
import SEO from "../Seo";

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    question: "Does AI-powered brand design cost less than traditional design?",
    answer:
      "No — and the reason is important. AI reduces the time spent on research and early exploration, but the strategic thinking, design craft, and revision depth that produce a brand identity worth owning remain constant. What AI gives your project is more intelligence at the start and more precision at the finish — not a reduced investment in the work itself.",
  },
  {
    question: "Will my brand look AI-generated if you use AI tools?",
    answer:
      "Never. AI enters our process in the research and early exploration phases only. Every final design deliverable — your logo, identity system, packaging, and brand guidelines — is created entirely by human designers. We use AI to make our thinking sharper, not to generate outputs we hand to clients as finished work.",
  },
  {
    question:
      "Can you help us build an AI usage policy for our own marketing team?",
    answer:
      "Yes. Every brand guidelines document we produce now includes specific AI usage guidance — defining which tools your team can use, in which contexts, and within which constraints. When your team inevitably uses AI for content and social assets, your brand system needs to be robust enough to guide that usage. We build for that reality from the start.",
  },
  {
    question: "Do you offer ongoing AI-powered brand monitoring?",
    answer:
      "Yes. Our Brand Intelligence Retainer combines quarterly AI-powered competitive monitoring, category trend analysis, and Samiksha's direct strategic input — keeping your brand's positioning sharp and commercially advantaged as your market evolves. Contact us to discuss a retainer structure suited to your brand's scale and cadence.",
  },
];

// ─── Stacked Cards data (same animation logic as CardAnimation.jsx) ─────────
const phaseCardsData = [
  {
    id: 0,
    phase: "AI Automation Phase 1",
    title: "Discover & Define",
    description:
      "Identify high-impact AI opportunities according to your business vision, strategy and operational priorities.",
    services: [
      "Map existing service design and workflows",
      "Identify customer experience enhancement opportunities",
      "Identify redundant work and redesign service delivery",
      "Prepare AI readiness roadmap and success metrics",
    ],
    bgColor: "#F2EA83",
    textColor: "#0a1e1e",
  },
  {
    id: 1,
    phase: "AI Automation Phase 2",
    title: "Build & Deploy",
    description:
      "Engineer smarter workflows & automations in accordance with your customer experience and operational systems.",
    services: [
      "Engineer bespoke business agents",
      "Integrate existing systems and data",
      "Implement automated workflows",
      "Determine human intervention milestones",
    ],
    bgColor: "#9ad9d4",
    textColor: "#0a1e1e",
  },
  {
    id: 2,
    phase: "AI Automation Phase 3",
    title: "Launch & Evolve",
    description:
      "Monitor, train & optimise your AI systems for continuous improvement and expanded adoption.",
    services: [
      "Monitor success metrics and enhancements",
      "Optimise agents for continuous improvement",
      "Refine chosen LLMs based on capabilities and new releases",
    ],
    bgColor: "#202F37",
    textColor: "#ffffff",
  },
];

const STACK_OFFSET = 20;

export default function IntelligencePage() {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const [openIndex, setOpenIndex] = useState(0);
  const animationSectionRef = useRef(null);
  // Refs for stacked cards
  const phaseCardsRef = useRef([]);
  phaseCardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const addToPhaseCardsRef = (el) => {
    if (el && !phaseCardsRef.current.includes(el)) {
      phaseCardsRef.current.push(el);
    }
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // GSAP stacked-cards animation (matching CardAnimation.jsx logic)
  useEffect(() => {
    const cards = phaseCardsRef.current;
    if (cards.length === 0) return;

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
    <div className={styles.intelligencePage}>
      <SEO
        title="AI Automation — AI-Powered Brand Design | Haraay Design Studio"
        description="Haraay's AI-powered brand design service for founders and ambitious brands. Research and strategy intelligence combined with creative design intelligence."
        keywords="AI automation, AI brand design, AI strategy, creative intelligence, Haraay AI"
      />

      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div ref={addToRefs} className={styles.reveal}>
          <p className={styles.heroLabel}>AI-Automation</p>
          <h1 className={styles.heroTitle}>
            AI-powered brand design for founders and ambitious brands
          </h1>

          <button className={styles.ctaBtn}>
            Let's discuss what's possible
            <span className={styles.ctaArrow}>→</span>
          </button>
        </div>

        <div
          ref={addToRefs}
          className={`${styles.heroImgWrap} ${styles.reveal}`}
        >
          <img src={heroImg} alt="AI Automation" className={styles.heroImg} />
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className={styles.intro}>
        <div
          ref={addToRefs}
          className={`${styles.introHeadlineWrap} ${styles.reveal}`}
        >
          <h2 className={styles.introHeadline}>
            We use AI to think deeper,
            <br />
            design sharper, move faster
          </h2>
        </div>

        <div className={styles.introGrid}>
          <div className={styles.introSpacer} />
          <div
            ref={addToRefs}
            className={`${styles.introBody} ${styles.reveal}`}
          >
            <p>
              AI has fundamentally changed what is possible in brand strategy
              and design — and we have built it directly into our process. At
              Haraay, artificial intelligence accelerates our market research,
              expands our creative exploration, and sharpens our brand copy so
              every project begins with more intelligence and arrives at
              stronger outcomes in less time.
            </p>
            <p>
              We work with founders and brands across two connected AI-powered
              service streams — research and strategy intelligence, and creative
              design intelligence — each one designed to give your brand a
              measurable, defensible edge in your market. The creative
              decisions, the craft, and the strategic judgement remain entirely
              human. AI makes them better.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MIDDLE IMAGE ─── */}
      <section className={styles.middleSection}>
        <div
          ref={addToRefs}
          className={`${styles.middleImgWrap} ${styles.reveal}`}
        >
          <img src={middleImg} alt="AI Process" className={styles.middleImg} />
        </div>
      </section>

      {/* ─── STREAMS ─── */}
      <section className={styles.streamsSection}>
        <div ref={addToRefs} className={styles.reveal}>
          <p className={styles.streamsEyebrow}>AI Automation</p>
          <h2 className={styles.streamsHeadline}>
            We work with clients at every stage, from first-timers to industry
            leaders, across two connected service streams:
          </h2>
        </div>

        <div className={styles.streamsGrid}>
          <div className={styles.streamsSpacer} />
          <div
            ref={addToRefs}
            className={`${styles.streamsBody} ${styles.reveal}`}
          >
            <div className={styles.streamItem}>
              <h3 className={styles.streamTitle}>Customer-facing AI</h3>
              <p className={styles.streamDesc}>
                Smarter, seamless, and always on. Experiences that anticipate
                what customers want before they ask.
              </p>
            </div>

            <div className={styles.streamItem}>
              <h3 className={styles.streamTitle}>Operational AI</h3>
              <p className={styles.streamDesc}>
                AI Automation that frees your people from low-value, repetitive
                work so they can focus on what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STACKED ANIMATION CARDS ─── */}
      {/* ─── STACKED ANIMATION CARDS ─── */}
      <section ref={animationSectionRef} className={styles.animationCards}>
        {phaseCardsData.map((card, index) => (
          <div
            key={card.id}
            ref={addToPhaseCardsRef}
            className={styles.card}
            style={{
              backgroundColor: card.bgColor,
              color: card.textColor,
              zIndex: index + 1,
            }}
          >
            <div className={styles.cardInner}>
              <div className={styles.left}>
                <p
                  className={styles.cardPhase}
                  style={{ color: card.textColor, opacity: 0.7 }}
                >
                  {card.phase}
                </p>
                <h2
                  className={styles.cardTitle}
                  style={{ color: card.textColor }}
                >
                  {card.title}
                </h2>
              </div>
              <div className={styles.right}>
                {card.description && (
                  <p className={styles.cardDescription}>{card.description}</p>
                )}
                <ul className={styles.cardServiceList}>
                  {card.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ─── FAQ ─── */}
      <section className={styles.faqSection}>
        <div ref={addToRefs} className={`${styles.faqHeader} ${styles.reveal}`}>
          <h2 className={styles.faqHeadline}>
            They said AI would replace design. Instead,
            <br />
            it proved how much it matters!
          </h2>
          <p className={styles.faqSubtitle}>
            Questions about AI and brand design
          </p>
          <h3 className={styles.faqLabel}>FAQ</h3>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                ref={addToRefs}
                className={`${styles.faqItemReveal} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""
                    }`}
                >
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestionText}>
                      {item.question}
                    </span>
                    <span className={styles.faqToggle} aria-hidden="true">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 9L7 5L11 9"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div className={styles.faqAnswerWrap} aria-hidden={!isOpen}>
                    <div className={styles.faqAnswerInner}>
                      <p className={styles.faqAnswer}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.faqCtaWrap}>
          <button className={styles.faqCtaBtn}>
            View all FAQ's
            <span className={styles.ctaArrow}>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
