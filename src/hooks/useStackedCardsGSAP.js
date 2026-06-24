import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useStackedCardsGSAP
 * ----------------------------------------------------------------------------
 * PREMIUM enhancement layer for sticky stacked cards.
 *
 * It does NOT position anything. CSS `position: sticky` + `top` offsets remain
 * 100% responsible for where each card stops (Card 2 stops 20px above Card 1,
 * etc.). This hook only adds the high-end "deck recede" feel: as the next card
 * approaches and settles over a card, that card smoothly scales back, dims, and
 * deepens its shadow — driven by a scrubbed ScrollTrigger so it tracks scroll.
 *
 * Why it can never disturb the stack geometry:
 *  - No translateY / position / top is ever touched — only scale, opacity and
 *    box-shadow (all visual).
 *  - transform-origin is top-center, so the only visible part of a covered
 *    card (its top header strip, which forms the 20px gap) stays pinned in place.
 *
 * Responsive recede depth (matchMedia):
 *   Desktop ≥1025px → 0.96   Tablet 481–1024px → 0.97   Mobile ≤480px → 0.98
 *
 * @param {object}  opts
 * @param {boolean} opts.enhance          Master on/off switch.
 * @param {number}  opts.scaleDesktop     Covered scale on desktop.
 * @param {number}  opts.scaleTablet      Covered scale on tablet.
 * @param {number}  opts.scaleMobile      Covered scale on mobile.
 * @param {number}  opts.coveredOpacity   Opacity of a fully-covered card.
 * @param {string}  opts.shadowRest       Resting box-shadow.
 * @param {string}  opts.shadowCovered    Box-shadow when fully covered.
 * @param {number}  opts.scrub            ScrollTrigger scrub smoothing (sec).
 * @param {string}  opts.start            ScrollTrigger start (next card based).
 * @param {string}  opts.end              ScrollTrigger end (settle point).
 */
export default function useStackedCardsGSAP({
  enhance = true,
  scaleDesktop = 0.96,
  scaleTablet = 0.97,
  scaleMobile = 0.98,
  coveredOpacity = 0.92,
  shadowRest = "0 -8px 35px rgba(0, 0, 0, 0.16)",
  shadowCovered = "0 -18px 60px rgba(0, 0, 0, 0.32)",
  scrub = 1.5,
  start = "top 85%",
  end = "top 22%",
  tabletBreakpoint = 1024,
  mobileBreakpoint = 480,
  debug = false,
} = {}) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Reset collected refs each render so re-mounts stay clean.
  cardsRef.current = [];
  const registerCard = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  // ─── Temporary debug helper ──────────────────────────────────────────────
  // Enable with options={{ debug: true }}. Outlines each card in red, logs the
  // computed `position`/`top`/`z-index`, and walks the ancestor chain to report
  // any element whose overflow / transform / filter / perspective would break
  // position: sticky. Off by default — purely diagnostic, no layout impact.
  useEffect(() => {
    if (!debug) return;
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    cards.forEach((card, i) => {
      card.style.outline = "3px solid red";
      const cs = getComputedStyle(card);
      // eslint-disable-next-line no-console
      console.log(
        `[StackedCards] card ${i} → position: ${cs.position}, top: ${cs.top}, z-index: ${cs.zIndex}`,
      );
    });

    const offenders = [];
    let el = cards[0].parentElement;
    while (el && el !== document.documentElement) {
      const cs = getComputedStyle(el);
      const breaksSticky =
        cs.overflowX !== "visible" ||
        cs.overflowY !== "visible" ||
        cs.transform !== "none" ||
        cs.filter !== "none" ||
        cs.perspective !== "none";
      if (breaksSticky) {
        offenders.push({
          el,
          class: el.className,
          overflowX: cs.overflowX,
          overflowY: cs.overflowY,
          transform: cs.transform,
          filter: cs.filter,
          perspective: cs.perspective,
        });
      }
      el = el.parentElement;
    }
    // eslint-disable-next-line no-console
    console.log(
      "[StackedCards] ancestors that affect sticky (overflow≠visible / transform / filter / perspective):",
      offenders,
    );

    return () => {
      cards.forEach((card) => {
        if (card) card.style.outline = "";
      });
    };
  }, [debug]);

  useEffect(() => {
    if (!enhance) return;

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length < 2) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: `(max-width: ${mobileBreakpoint}px)`,
          isTablet: `(min-width: ${mobileBreakpoint + 1}px) and (max-width: ${tabletBreakpoint}px)`,
          isDesktop: `(min-width: ${tabletBreakpoint + 1}px)`,
        },
        (context) => {
          const { isMobile, isTablet } = context.conditions;
          const targetScale = isMobile
            ? scaleMobile
            : isTablet
              ? scaleTablet
              : scaleDesktop;

          cards.forEach((card, index) => {
            // The top-most card in the final stack is always the strongest —
            // never receded.
            if (index === cards.length - 1) return;

            const nextCard = cards[index + 1];

            // Performance + correctness hints. Origin top-center keeps the
            // visible top header strip fixed while the card scales back.
            gsap.set(card, {
              transformOrigin: "top center",
              force3D: true,
              willChange: "transform, opacity",
              boxShadow: shadowRest,
            });

            // Scrubbed recede: scale + opacity + deeper shadow as the NEXT card
            // travels up and settles into its sticky stop above this card.
            gsap.fromTo(
              card,
              { scale: 1, opacity: 1, boxShadow: shadowRest },
              {
                scale: targetScale,
                opacity: coveredOpacity,
                boxShadow: shadowCovered,
                ease: "none",
                immediateRender: false,
                scrollTrigger: {
                  trigger: nextCard,
                  start, // next card approaching from below
                  end, // next card settled into its 20px-above stop
                  scrub,
                  invalidateOnRefresh: true,
                  anticipatePin: 1,
                  fastScrollEnd: true,
                },
              },
            );
          });
        },
      );
    }, sectionRef);

    // Recalculate once layout / fonts / images settle so triggers are exact.
    const refresh = () => ScrollTrigger.refresh();
    const settle = setTimeout(refresh, 250);
    window.addEventListener("load", refresh);

    return () => {
      clearTimeout(settle);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [
    enhance,
    scaleDesktop,
    scaleTablet,
    scaleMobile,
    coveredOpacity,
    shadowRest,
    shadowCovered,
    scrub,
    start,
    end,
    tabletBreakpoint,
    mobileBreakpoint,
  ]);

  return { sectionRef, registerCard };
}
