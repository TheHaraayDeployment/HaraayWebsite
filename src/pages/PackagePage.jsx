import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  Clock,
  Layers,
  MessageSquare,
} from "lucide-react";
import styles from "../styles/PackagePage.module.scss";
import Scrollablesection from "../components/ScrollableCards";
import FAQ from "./FAQsection";
import googlelogo from "../assets/googlelogo.svg";

import heroImg from "../pages/LandingScreen/heroSecImages/Bosch.webp";
import poss1 from "../pages/LandingScreen/heroSecImages/Akoya.webp";
import poss2 from "../pages/LandingScreen/heroSecImages/Purus.webp";
import poss3 from "../pages/LandingScreen/heroSecImages/Satvik.webp";
import poss4 from "../pages/LandingScreen/heroSecImages/Virat.webp";
import bannerImg from "../pages/LandingScreen/heroSecImages/SatvikBanner.webp";
import sec2img1 from "../pages/LandingScreen/heroSecImages/Alankar.webp";
import sec2img2 from "../pages/LandingScreen/heroSecImages/Lokneta.webp";
import sec2img3 from "../pages/LandingScreen/heroSecImages/Necc.webp";

// -------------------------------------------------------------------------
// Static content
// -------------------------------------------------------------------------
const pricingPlans = [
  {
    name: "Essentials Plan",
    tagline: "Startups",
    monthly: 14999,
    yearly: 11999,
    turnaround: "48-72 Hours",
    activeRequests: "1 Active Request",
    channel: "Trello Only",
    popular: false,
    features: [
      { label: "Logo Design (Primary & Secondary)", included: false },
      { label: "Basic Brand Guidelines (Fonts/Colors)", included: true },
      { label: "Business Cards & Stationery", included: true },
      { label: "Email Signatures (HTML/Image)", included: true },
      { label: "Brand Pattern & Textures", included: false },
      { label: "Rebranding Strategy & Architecture", included: false },
    ],
  },
  {
    name: "Professional Plan",
    tagline: "Growth",
    monthly: 29999,
    yearly: 23999,
    turnaround: "24-48 Hours",
    activeRequests: "2 Active Requests",
    channel: "Trello + Email",
    popular: true,
    features: [
      { label: "Logo Design (Primary & Secondary)", included: true },
      { label: "Advanced Brand Guidelines (Fonts/Colors)", included: true },
      { label: "Business Cards & Stationery", included: true },
      { label: "Email Signatures (HTML/Image)", included: true },
      { label: "Brand Pattern & Textures", included: true },
      { label: "Rebranding Strategy & Architecture", included: false },
    ],
  },
  {
    name: "Enterprise Plan",
    tagline: "Scale",
    monthly: 59999,
    yearly: 47999,
    turnaround: "Same Day Priority",
    activeRequests: "4 Active Requests",
    channel: "Slack + Weekly Call",
    popular: false,
    features: [
      { label: "Logo Design (Primary & Secondary)", included: true },
      { label: "Advanced + Strategy Brand Guidelines", included: true },
      { label: "Business Cards & Stationery", included: true },
      { label: "Email Signatures (HTML/Image)", included: true },
      { label: "Brand Pattern & Textures", included: true },
      { label: "Rebranding Strategy & Architecture", included: true },
    ],
  },
];

const secondPossibilityCards = [
  { img: sec2img1, alt: "Dashboard design" },
  { img: sec2img2, alt: "App design" },
  { img: sec2img3, alt: "Marketing design" },
];

const testimonials = [
  {
    name: "Puru's Enterprise",
    role: "Founder & CEO",
    review:
      "Puru's association with Haraay has been wonderful & fulfilling. The project scope was brand Identity, website & packaging design. Haraay overexceeded our expectations and ensured we got what we were looking for from a qualitative agency. We express our gratitude and wish Haraay sustainable growth & success.",
    img: poss2,
  },
  {
    name: "Mr. Arvind",
    role: "MD & CEO",
    review:
      "What truly sets them apart is their ability to weave innovation into every element — our new website not only looks incredible, but it also functions flawlessly, making user experience effortless and intuitive. The 3D animations they crafted are immersive and elevate our digital presence to another level.",
    img: poss1,
  },
  {
    name: "Mr. Mohit",
    role: "Product Manager",
    review:
      "If you're looking for a team that's not only experts in their field but also genuinely passionate about your brand's success, look no further. Haraay Studio has helped us stand out in a crowded market, and we couldn't be more thrilled with the results!",
    img: poss3,
  },
  {
    name: "Shirishti",
    role: "Head of Digital Transformation",
    review:
      "We hired Haraay Design Studios to create a new brand identity and social media presence. We are delighted with the service and the brilliant work done by Haraay Design Studios. I would recommend them to get your brand out there and running.",
    img: poss4,
  },
];

const featureCards = [
  {
    title: "Pause anytime",
    description: "Temporarily pause your subscription anytime, no sweat.",
  },
  {
    title: "Try it for a week",
    description:
      "Not loving it after a week? Get 75% back, no questions asked.",
  },
];

const packageFaqData = [
  {
    question: "How fast will I receive my designs?",
    answer:
      "On average, most requests are completed in just two days or less. However, more complex requests can take longer.",
  },
  {
    question: "How does onboarding work?",
    answer:
      "Subscribe to a plan and we'll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe. Once you accept the invite to Trello, you're ready to rock.\n\nFurther instructions on how to use the Trello board to request designs can be found on the board itself.",
  },
  {
    question: "Who are the designers?",
    answer:
      "We are always on the lookout for talented creatives to join our team. Email us a link to your website. Please make the subject of the email: Job Application: Position Title (Designer, Producer, Animator, Photographer, etc.)",
  },
  {
    question: "Is there a limit to how many requests I can make?",
    answer:
      "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
  },
  {
    question: "How does the pause feature work?",
    answer:
      "We understand you may not have enough design work to fill up an entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.\n\nBilling cycles are based on a 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.",
  },
  {
    question: "How do you handle larger requests?",
    answer:
      "Larger requests are broken down internally. This applies to full-scale website or mobile app designs, UI/UX work, etc. You should expect to receive a reasonable amount of work every 24-48 hours until the entire request is done.",
  },
  {
    question: "How will I request designs?",
    answer:
      "Haraay Studio offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "No worries! We'll continue to revise the design until you're 100% satisfied.",
  },
  {
    question: "Are there any requests you don't support?",
    answer:
      "Absolutely. We do not cover the following design work: 3D modeling, animated graphics (GIFs, etc.), document design (medical forms, etc.), complex packaging, extensive print design (magazines, books, etc.), and Adobe InDesign documents.",
  },
  {
    question: "What if I only have a single request?",
    answer:
      "That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste.",
  },
  {
    question: "Are there any refunds?",
    answer:
      "Due to the high quality nature of the work, there will be no refunds issued past the first week of service. However, no refunds will be issued for completed work.",
  },
  {
    question: "Can I use Haraay for just a month?",
    answer:
      "For sure. Whether you need Haraay for a month or a year, the choice is yours. Just feel free to come back when you have additional design needs.",
  },
];

const bannerDots = [0, 1, 2, 3, 4];

// -------------------------------------------------------------------------
// Motion helper
// -------------------------------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FadeInSection = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

// Above-the-fold content (hero) must not depend on a scroll/intersection
// trigger — it's already on screen at load, so it animates on mount instead.
const FadeInOnMount = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export default function PackagePage() {
  const containerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [billingCycle, setBillingCycle] = useState("monthly");

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % bannerDots.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.packagepage}>
      {/* ---------------------------------------------------------------- */}
      {/* 1. HERO */}
      {/* ---------------------------------------------------------------- */}
      <section className={styles.sectionOne}>
        <div className={styles.leftDiv}>
          <div className={styles.topDiv}>
            <div className={styles.buttonsDiv}>
              <button className={styles.Herobutton}>Book a Call</button>
              <button className={styles.Herobutton2}>See Pricing</button>
            </div>
            <FadeInOnMount className={styles.title}>
              <h1>
                Design <br />
                subscriptions made <br />
                for everyone.
              </h1>
            </FadeInOnMount>
          </div>

          <FadeInOnMount className={styles.bottomMeta} delay={0.1}>
            <div className={styles.dividerLine} />
            <h3>Elite design. On subscription.</h3>
            <p>Pause or cancel anytime.</p>
          </FadeInOnMount>
        </div>

        <FadeInOnMount className={styles.rightDiv} delay={0.15}>
          <img src={heroImg} alt="Haraay design studio showcase" />
        </FadeInOnMount>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 2. ONE SUBSCRIPTION - ENDLESS POSSIBILITIES */}
      {/* ---------------------------------------------------------------- */}
      <section className={styles.sectionTwo}>
        <FadeInSection>
          <h2>
            One Subscription. Endless Design <span>Possibilities</span>.
          </h2>
        </FadeInSection>

        <FadeInSection className={styles.billingToggle} delay={0.1}>
          <span
            className={billingCycle === "monthly" ? styles.toggleLabelActive : styles.toggleLabel}
          >
            Monthly
          </span>
          <button
            type="button"
            className={styles.toggleSwitch}
            role="switch"
            aria-checked={billingCycle === "yearly"}
            aria-label="Toggle monthly or yearly billing"
            onClick={() =>
              setBillingCycle((prev) =>
                prev === "monthly" ? "yearly" : "monthly"
              )
            }
          >
            <span
              className={`${styles.toggleThumb} ${
                billingCycle === "yearly" ? styles.toggleThumbRight : ""
              }`}
            />
          </button>
          <span
            className={billingCycle === "yearly" ? styles.toggleLabelActive : styles.toggleLabel}
          >
            Yearly
            <span className={styles.toggleSavings}>Save 20%</span>
          </span>
        </FadeInSection>

        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan, i) => (
            <FadeInSection
              key={plan.name}
              className={`${styles.pricingCard} ${
                plan.popular ? styles.pricingCardPopular : ""
              }`}
              delay={i * 0.1}
            >
              {plan.popular && (
                <span className={styles.popularBadge}>Most Popular</span>
              )}
              <div className={styles.pricingHead}>
                <h3>{plan.name}</h3>
                <p className={styles.pricingTagline}>{plan.tagline}</p>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.priceValue}>
                  ₹
                  {(billingCycle === "monthly"
                    ? plan.monthly
                    : plan.yearly
                  ).toLocaleString("en-IN")}
                </span>
                <span className={styles.pricePeriod}>/month</span>
              </div>
              {billingCycle === "yearly" && (
                <p className={styles.priceBilledNote}>Billed annually</p>
              )}

              <div className={styles.pricingMeta}>
                <div className={styles.pricingMetaRow}>
                  <Clock size={16} />
                  <span>{plan.turnaround}</span>
                </div>
                <div className={styles.pricingMetaRow}>
                  <Layers size={16} />
                  <span>{plan.activeRequests}</span>
                </div>
                <div className={styles.pricingMetaRow}>
                  <MessageSquare size={16} />
                  <span>{plan.channel}</span>
                </div>
              </div>

              <div className={styles.pricingDivider} />

              <p className={styles.pricingDeliverablesTitle}>Deliverables</p>
              <ul className={styles.featureList}>
                {plan.features.map((f) => (
                  <li
                    key={f.label}
                    className={f.included ? "" : styles.featureExcluded}
                  >
                    {f.included ? (
                      <Check size={16} className={styles.featureIconYes} />
                    ) : (
                      <X size={16} className={styles.featureIconNo} />
                    )}
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={
                  plan.popular ? styles.pricingCtaPrimary : styles.pricingCta
                }
              >
                Get Started
              </button>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 3. DESIGN, FINALLY DONE RIGHT (process track) */}
      {/* ---------------------------------------------------------------- */}
      <section className={styles.sectionThree}>
        <div className={styles.Container}>
          <FadeInSection>
            <h2>
              Design, <span>finally</span> done right.
            </h2>
            <p>
              Once you experience Haraay, traditional freelancers and bloated
              agencies no longer make sense. One transparent monthly fee.
              <br />
              Reliable delivery. Design that keeps up with your business.
            </p>
          </FadeInSection>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Scrollablesection />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 4. TESTIMONIALS */}
      {/* ---------------------------------------------------------------- */}
      <section className={styles.testimonial}>
        <FadeInSection>
          <p>Why Everyone Loves Haraay</p>
        </FadeInSection>
        <div className={styles.testimonialWrap}>
          <div className={styles.testimonialContainer} ref={containerRef}>
            {testimonials.map((t) => (
              <div className={styles.testimonialCard} key={t.name}>
                <div className={styles.profile}>
                  <img draggable="false" src={t.img} alt={t.name} />
                </div>
                <div className={styles.content}>
                  <div className={styles.testname}>
                    <h3>{t.name}</h3>
                    <p className={styles.testrole}>{t.role}</p>
                  </div>
                  <p className={styles.review}>{t.review}</p>
                  <div className={styles.caseStudy}>
                    <a href="#" className={styles.caseStudyLink}>
                      Explore Case Study <ArrowUpRight size={16} />
                    </a>
                    <div className={styles.rating}>
                      <span>5.0</span>
                      <div className={styles.stars}>★★★★★</div>
                      <img
                        draggable="false"
                        src={googlelogo}
                        alt="Google Rating"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.arrowbtns}>
            <button onClick={scrollLeft} aria-label="Scroll testimonials left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
              >
                <rect width="52" height="52" rx="26" fill="#E5348C" />
                <path
                  d="M14 26L21.9103 18L23.1969 19.299L17.4782 25.0813L38 25.0813V26.9187L17.4782 26.9187L23.1969 32.6991L21.9103 34L14 26Z"
                  fill="white"
                />
              </svg>
            </button>
            <button onClick={scrollRight} aria-label="Scroll testimonials right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
              >
                <rect width="52" height="52" rx="26" fill="#E5348C" />
                <path
                  d="M38 26L30.0897 34L28.8031 32.701L34.5218 26.9187H14V25.0813H34.5218L28.8031 19.3009L30.0897 18L38 26Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 5. LARGE BANNER */}
      {/* ---------------------------------------------------------------- */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerDots}>
          {bannerDots.map((d) => (
            <span
              key={d}
              className={`${styles.dot} ${
                d === activeDot ? styles.dotActive : ""
              }`}
            />
          ))}
        </div>
        <FadeInSection className={styles.bannerImageWrap}>
          <img src={bannerImg} alt="Haraay premium design showcase" />
        </FadeInSection>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 6. SECOND POSSIBILITIES SECTION */}
      {/* ---------------------------------------------------------------- */}
      <section className={styles.sectionTwo}>
        <FadeInSection>
          <h2>
            One Subscription. Endless Design <span>Possibilities</span>.
          </h2>
        </FadeInSection>
        <div className={styles.CardsThree}>
          {secondPossibilityCards.map((card, i) => (
            <FadeInSection
              key={card.alt}
              className={styles.possibilityCardLarge}
              delay={i * 0.1}
            >
              <img src={card.img} alt={card.alt} loading="lazy" />
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 7. PAUSE / TRY IT FOR A WEEK */}
      {/* ---------------------------------------------------------------- */}
      <section className={styles.featureSection}>
        {featureCards.map((f, i) => (
          <FadeInSection
            key={f.title}
            className={styles.featureCard}
            delay={i * 0.12}
          >
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </FadeInSection>
        ))}
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 8. FAQ */}
      {/* ---------------------------------------------------------------- */}
      <FAQ title="FAQ" faqData={packageFaqData} />

      {/* ---------------------------------------------------------------- */}
      {/* 9. FINAL CTA */}
      {/* ---------------------------------------------------------------- */}
      <section className={styles.ctaSection}>
        <FadeInSection className={styles.ctaBox}>
          <div className={styles.ctaLeft}>
            <h3>Book a 15-min intro call</h3>
            <div className={styles.ctaEmail}>
              <p>Prefer to email?</p>
              <a href="mailto:hello@haraaydesignstudio.com">
                hello@haraaydesignstudio.com
              </a>
            </div>
          </div>
          <div className={styles.ctaRight}>
            <button className={styles.ctaBookButton}>Book a Call</button>
            <button className={styles.ctaArrowButton} aria-label="Get in touch">
              <ArrowRight size={22} />
            </button>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
