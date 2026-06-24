import React from "react";
import useStackedCardsGSAP from "../hooks/useStackedCardsGSAP";
import styles from "./StackedCards.module.scss";

/**
 * StackedCards
 * ----------------------------------------------------------------------------
 * Reusable CSS sticky-stacking section. Cards stay in normal document flow;
 * each one is `position: sticky` with a `top` offset that decreases by `gap`
 * per card, so they stack into a deck as you scroll continuously:
 *
 *   Card 1 → top: calc(20vh)
 *   Card 2 → top: calc(20vh - 20px)
 *   Card 3 → top: calc(20vh - 40px)
 *   Card 4 → top: calc(20vh - 60px)
 *
 * z-index increases per card so each new card stacks over the previous one,
 * leaving an exact `gap`px sliver. The section is NOT pinned and nothing is
 * absolutely positioned or translated — positioning is 100% sticky `top`.
 * GSAP (via useStackedCards) is optional and only adds a subtle visual scale.
 *
 * Props:
 *  - cards            Array of card data objects (each may have an `id`).
 *  - renderCard       (card, index) => ReactNode — the inner card markup.
 *  - getCardStyle     (card, index) => style object (bg colour, text colour…).
 *  - cardClassName    Page-specific visual class applied to each card.
 *  - sectionClassName Optional class for the outer <section> (page spacing).
 *  - options          { stickyTop, gap, enhance, coveredScale }.
 */
export default function StackedCards({
  cards = [],
  renderCard,
  getCardStyle,
  cardClassName = "",
  sectionClassName = "",
  options = {},
}) {
  const { stickyTop = "120px", gap = 20 } = options;
  const { sectionRef, registerCard } = useStackedCardsGSAP(options);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${sectionClassName}`.trim()}
    >
      {cards.map((card, index) => (
        <div
          key={card?.id ?? index}
          ref={registerCard}
          className={`${styles.cardBase} ${cardClassName}`.trim()}
          style={{
            position: "sticky",
            // Each card stops 20px BELOW the previous card's top edge, so every
            // card reveals a `gap`px header strip of itself as the deck builds
            // downward: Card1=120, Card2=140, Card3=160, Card4=180 …
            top: `calc(${stickyTop} + ${index * gap}px)`,
            zIndex: index + 1,
            ...(getCardStyle ? getCardStyle(card, index) : {}),
          }}
        >
          {renderCard(card, index)}
        </div>
      ))}
    </section>
  );
}
