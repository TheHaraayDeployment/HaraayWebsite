import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./blog4.module.scss";
import img1 from "./blog4a.png"; // top image (speaker photo)
import img2 from "./blog4b.png"; // bottom image (illustration)

gsap.registerPlugin(ScrollTrigger);

const ArticlePage = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const left = leftRef.current;
    const right = rightRef.current;

    if (!container || !left || !right) return;

    const pinTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${right.offsetHeight - left.offsetHeight}`,
      pin: left,
      pinSpacing: false,
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      pinTrigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.articleContainer}>
      {/* LEFT - Two stacked images, pinned */}
      <div ref={leftRef} className={styles.leftSide}>
        <div className={styles.imageStack}>
          <div className={styles.imageWrapper}>
            <img src={img1} alt="Speaker" className={styles.articleImage} />
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={img2}
              alt="Illustration"
              className={styles.articleImage}
            />
          </div>
        </div>
      </div>

      {/* RIGHT - Scrolls with the page */}
      <div ref={rightRef} className={styles.rightSide}>
        <div className={styles.textContent}>
          <h1 className={styles.mainTitle}>
            Why I Started a Design Studio When Everyone Said AI Would Make It
            Pointless
          </h1>

          <p className={styles.subTitle}>
            The question that followed me everywhere.
          </p>

          <p className={styles.text}>
            In 2021, I made a decision that most people in my circle quietly
            thought was mistaken. I left a stable creative position to build a
            brand identity studio from Pune — a city not yet on the map for
            premium design in the way Mumbai or Bengaluru are — at the exact
            moment the world was beginning to talk seriously about AI-generated
            art, automated logo tools, and the impending obsolescence of
            creative work.
          </p>
          <p className={styles.text}>
            My own peers sent me articles. Politely. The kind of forwarded links
            that say: have you seen this? which really mean: are you sure about
            this?
          </p>

          <p className={styles.pullQuote}>
            I was not building a studio that makes things look beautiful. I was
            building one that changes how a business is perceived — and no
            algorithm has been trained on that founder's market, their
            customer's unspoken hesitation, or the cultural gap between what a
            brand says and what a consumer actually hears.
          </p>

          <h3 className={styles.heading}>
            What I understood that the articles didn't.
          </h3>
          <p className={styles.text}>
            Every piece I read about AI replacing designers was, without
            exception, written about the wrong thing. They were evaluating
            whether AI could produce a visual output. That was never the hard
            part of this work.
          </p>
          <p className={styles.text}>
            The hard part is understanding why a cold-pressed oil brand from
            Pune needs to feel European-apothecary rather than
            Ayurvedic-traditional — not because European is better, but because
            their customer is a 31-year-old woman in Bandra who has been buying
            Kiehl's for four years and needs a local brand to feel like a
            considered upgrade, not a compromise.
          </p>
          <p className={styles.text}>
            That is a cultural, psychological, and commercial insight. You
            cannot prompt your way to it. You have to have earned it through
            conversations, category immersion, and the kind of market attention
            that takes months to develop and cannot be accelerated.
          </p>

          <h3 className={styles.heading}>What building Haraay has confirmed</h3>
          <p className={styles.text}>
            Every project we take on begins with a question that no AI tool has
            ever asked our clients: What do you want someone to feel the moment
            they encounter your brand — before they read a single word?
          </p>
          <p className={styles.text}>
            The answers we receive are never about colours or fonts. They are
            about dignity, aspiration, trust, belonging, and in some cases,
            defiance. These are the raw materials of identity design. The craft
            is what we use to give those feelings a form precise enough to
            survive a shelf, a screen, and a decade of market change.
          </p>
          <p className={styles.text}>
            Haraay exists because I believed — and still believe — that the
            founders building India's next category-defining brands deserve a
            studio that thinks at that level. Not a tool. Not a template. A
            thinking partner with a trained eye and an investment in their
            long-term market position.
          </p>

          <p className={styles.pullQuote}>
            AI raised the floor of what looks acceptable. We are here to raise
            the ceiling of what is actually meaningful. Those are not the same
            ambition, and they never will be.
          </p>

          <p className={styles.text}>
            The studio I set out to build is not one that competes with AI. It
            is one that becomes more valuable precisely because AI exists —
            because in a world where every founder can generate something that
            looks designed, the brands that feel genuinely considered will stand
            further apart than they ever have before.
          </p>
          <p className={styles.italicText}>
            That gap is where Haraay operates. And I am more certain of it now
            than I was on the day I started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
