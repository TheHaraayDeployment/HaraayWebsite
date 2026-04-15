import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./blog3.module.scss";
import img from "./Blog3.jpg";

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

    // Pin the left image column while the right column scrolls naturally with the page
    const pinTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${right.offsetHeight - left.offsetHeight}`,
      pin: left,
      pinSpacing: false,
    });

    // Refresh on load/resize so measurements stay correct
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      pinTrigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.articleContainer}>
      {/* LEFT - Pinned image */}
      <div ref={leftRef} className={styles.leftSide}>
        <div className={styles.imageWrapper}>
          <img src={img} alt="Article" className={styles.articleImage} />
        </div>
      </div>

      {/* RIGHT - Scrolls with the page */}
      <div ref={rightRef} className={styles.rightSide}>
        <div className={styles.textContent}>
          <h1 className={styles.mainTitle}>
            They said AI would replace design. Instead, it proved how much it
            matters.
          </h1>

          <p className={styles.introText}>
            The most ironic outcome of the AI design revolution is this: it has
            made strategic design more valuable, more visible, and more urgently
            necessary than at any point in the last decade. Here is why the
            prediction got it exactly backwards.
          </p>

          <h3 className={styles.heading}>The prediction</h3>
          <p className={styles.text}>
            Around 2022, the narrative was settled before the evidence arrived.
            AI image generation was going to collapse the market for visual
            creativity. Designers would be automated out. Studios would shrink.
            Clients would stop paying for craft they could generate in seconds.
          </p>
          <p className={styles.text}>
            The people making this argument were not wrong about what AI could
            do. They were wrong about what design actually is.
          </p>

          <h3 className={styles.heading}>What actually happened</h3>
          <p className={styles.text}>
            What AI delivered and delivered at extraordinary scale was the
            ability to produce competent visual output. Logos that looked like
            logos. Packaging that looked like packaging. Brand guidelines that
            had the structural appearance of thought.
          </p>
          <p className={styles.text}>
            And then something unexpected happened in the market. Everything
            started looking the same.
          </p>
          <p className={styles.text}>
            When a founder in Jaipur, a founder in Kochi, and a founder in
            Chandigarh all use the same three AI tools with similar prompts and
            similar reference boards — the outputs converge. The Indian D2C
            market, already crowded, became visually indistinguishable. Shelf
            after shelf of brands that looked considered but said nothing
            particular about anything.
          </p>

          <p className={styles.pullQuote}>
            Parity is the most expensive condition a brand can find itself in.
            When you look like everyone else, the only competition left is price
            — and that is a war no premium brand can win.
          </p>

          <h3 className={styles.heading}>The distinction AI cannot close</h3>
          <p className={styles.text}>
            What AI cannot generate is point of view. It cannot develop an
            opinion about which cultural tension a brand should occupy. It
            cannot make the decision to be restrained when the category is loud,
            or to be warm when the category is clinical. These are not aesthetic
            choices — they are strategic ones, and they require a trained
            understanding of markets, consumer psychology, and the competitive
            landscape a brand is entering.
          </p>
          <p className={styles.text}>
            The brands that hired strategic design studios in 2023 and 2024 are
            now the brands that stand out in 2026 not because their logos are
            prettier than the AI-generated alternatives, but because every
            visual decision was made in service of a specific business argument.
            That coherence is what the market can feel, even when it cannot
            articulate why.
          </p>

          <h3 className={styles.heading}>
            What this means for founders right now
          </h3>
          <p className={styles.text}>
            If you are a founder building a brand in 2026, the question is no
            longer whether to use AI in your creative process. Of course you
            will — we do too, for research, for reference, for speed in the
            early stages of exploration.
          </p>
          <p className={styles.text}>
            The question is: at what point does a visual decision become a brand
            decision? Because the moment it does, you need a human with the
            context, the category knowledge, and the strategic clarity to make
            that decision correctly — not just aesthetically, but commercially.
          </p>
          <p className={styles.text}>
            AI raised the floor. It gave every founder the ability to produce
            something that looks designed. What it could not do — and what the
            market has confirmed it cannot do — is give that something a reason
            to exist that is specific, defensible, and built to last.
          </p>
          <p className={styles.italicText}>
            That is still the work. That has always been the work. And right
            now, it matters more than it ever has.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
