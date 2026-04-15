// src/data/caseStudies/bosch.js

export const bosch = {
  slug: "bosch",

  theme: {
    background: "#d8d8d8",
  },

  similarProjects: ["samruddhaBharat", "gopalanGroup", "virat"],

  hero: {
    title: "Bosche",
    industry: "Brand Identity | Corporate Branding",
    services: "Brand Identity, Corporate Stationery, Marketing Collateral",
    tagline: "Precision Engineered Into Every Visual Detail",
    media: {
      type: "image",
      src: "/CaseStudyImages/Bosch/Hero.jpg",
      alt: "Bosche brand identity",
    },
  },

  blocks: [
    {
      id: "project-overview",
      type: "textSplit",
      title: "Project Overview",
      body: [
        "Bosche is a high-quality brand where precision and trust are foundational values. The challenge was to elevate its market perception from a functional product provider to a premium, globally relevant identity that commands confidence across industries.",
        "We approached this through a design philosophy rooted in structural clarity and engineered elegance — building a brand that looks as considered and precise as the products it represents.",
      ],
    },

    {
      id: "the-challenge",
      type: "textSplit",
      variant: "bullets",
      title: "The Challenge",
      body: [
        "Existing perception positioned the brand as functional rather than premium or aspirational.",
        "Lack of a coherent global-standard visual identity capable of standing alongside world-class brands.",
        "Need to communicate precision and reliability without resorting to cold, impersonal corporate aesthetics.",
      ],
    },

    {
      id: "challenge-visual",
      type: "fullMedia",
      media: {
        type: "image",
        src: "/CaseStudyImages/Bosch/Img1.jpg",
      },
    },

    {
      id: "our-approach",
      type: "textSplit",
      title: "Our Approach",
      body: [
        "We focused on positioning Bosche as an engineered premium brand — one that earns trust through visual discipline and structural integrity.",
        "The design system was built around geometric precision, considered white space, and a typographic system that communicates authority and refined quality. The result is a brand that feels both technically credible and visually distinguished.",
      ],
    },

    {
      id: "approach-visual",
      type: "fullMedia",
      media: {
        type: "image",
        src: "/CaseStudyImages/Bosch/Img2.jpg",
      },
    },

    {
      id: "design-direction",
      type: "richText",
      title: "Design Direction",
      content: [
        {
          heading: "Typography",
          text: "Clean, structured sans-serif typefaces with precise weight differentiation — engineered for clarity.",
        },
        {
          heading: "Colours",
          text: "Restrained neutral palette anchored in deep charcoal, pure white, and selective metallic accents.",
        },
        {
          heading: "Visual Style",
          text: "Minimal, architectural, and system-driven. Visual language built on grid discipline and purposeful structure.",
        },
        {
          heading: "Tone",
          text: "Authoritative, precise, and quietly confident — a brand that communicates through restraint.",
        },
      ],
    },

    {
      id: "deliverables",
      type: "textSplit",
      variant: "bullets",
      title: "Deliverables",
      body: [
        "Brand Identity System",
        "Logo Architecture",
        "Brand Guidelines",
        "Corporate Stationery",
        "Marketing Collateral",
      ],
    },

    {
      id: "deliverables-visual",
      type: "fullMedia",
      media: {
        type: "image",
        src: "/CaseStudyImages/Bosch/Img3.jpg",
      },
    },

    {
      id: "outcome-impact",
      type: "textSplit",
      title: "Outcome & Impact",
      body: [
        "The refined identity transformed Bosche's market perception, repositioning it as a premium global-standard brand. The new visual system brought consistency, clarity, and elevated credibility across all customer touchpoints, enabling Bosche to compete confidently at an international level and attract a higher-value client base.",
      ],
    },
  ],
};
