
import React, { useState, useEffect,useRef } from 'react';
import styles from './Works.module.scss';

import BakersStreet from "./WorksPageImages/BakersStreet.jpg"
import creamForest from "./WorksPageImages/creamForest.jpg"
import Gopalan from "./WorksPageImages/Gopalan.jpg"
import HaraayProjectManagement from "./WorksPageImages/HaraayProjectManagement.jpg"
import satvik from "./WorksPageImages/satvik.jpg"
import Sereneskin from "./WorksPageImages/Sereneskin.png"
import virat from "./WorksPageImages/virat.svg"
import lokneta from "./WorksPageImages/lokneta.png"
import toot from "./WorksPageImages/toot.png"
import necc from "./WorksPageImages/necc.jpg"
import hylete from "./WorksPageImages/Hylete.jpg"
import samrudh from "./WorksPageImages/samrudh.jpg"
import bms from "./WorksPageImages/bms.jpg"
import purus from "./WorksPageImages/purus.jpg"
import alankar from "./WorksPageImages/alanakr.jpg"

// Add your video files here
import boschVideo from  "./WorksPageImages/Bosch.mp4"// Add your Bosch video path
import akoyaVideo from "./WorksPageImages/akoya.mp4" // Add your Akoya video path

// Updated project data with video support
// const projectsData = [
//   {
//     id: 1,
//     title: "Hylete",
//     description: "Hylete is an international sports event company that operates at intersection of performance, innovation, and community.",
//     priority: "small",
//     tags: ["Branding"],
//     image: hylete,
//     mediaType: "image",
//     link: "/casestudy/hylete"
//   },{
//     id: 1,
//     title: "Samruddh Bharat Technologies",
//     description: "Empowering citizens with digital literacy and skills, promoting digital inclusion, and advancing the adoption.",
//     priority: "small",
//     tags: ["Branding", "App Development", "UI/UX"],
//     image: samrudh,
//     mediaType: "image",
//     link: "/casestudy/samrudh"
//   },{
//     id: 1,
//     title: "BMS",
//     description: "Business Management System (BMS) Web Application for a Real Estate Company",
//     priority: "small",
//     tags: ["UI/UX", "Web Application", "3D Animation"],
//     image: bms,
//     mediaType: "image",
//     link: "/casestudy/bms"
//   },
//  {
//     id: 2,
//     title: "Puru’s",
//     description: "Puru’s Enterprises specializes in business consulting and sustainable lifestyle  products. As a solutions-based firm, they are dedicated to creating a brighter  future by inspiring individuals.",
//     priority: "medium",
//     tags: ["Branding", "3D Character Design", "Packaging"],
//     image: purus,
//     mediaType: "image",
//     link: "#"
//   },  {
//     id: 2,
//     title: "Alankar",
//     description: "We combine creative thinking with cutting-edge technology to ensure your brand stands out—on paper, in-store, and everywhere in between.",
//     priority: "medium",
//     tags: ["App Development", "Branding", "UI/UX"],
//     image: alankar,
//     mediaType: "image",
//     link:  "/casestudy/alanakr"
//   },
//   {
//     id: 2,
//     title: "Lok Neta",
//     description: "Mobile application designed to bridge the gap between the people of Goa and the City's offices, providing a streamlined accessible platform for civic engagement.",
//     priority: "small",
//     tags: ["Branding", "UI/UX", "3D Animation"],
//     image: lokneta,
//     mediaType: "image",
//     link: "#"
//   },  {
//     id: 1,
//     title: "Toot",
//     description: "Tool is a fun and friendly toothpaste brand made for kids with epic teeth. Colourful and playful branding style, premium packaging",
//     priority: "small",
//     tags: ["Branding", "Packaging", "3D Animation"],
//     image: toot,
//     mediaType: "image",
//     link: "/casestudy/toot"
//   }, 
//   {
//     id: 3,
//     title: "NECC",
//     description: "Branding for the NECC Women's Tennis event was executed, covering visual identity, signage, and promotional materials. The design captured the spirit of the sport.",
//     priority: "small",
//     tags: ["Branding"],
//     image: necc,
//     mediaType: "image",
//     link: "/casestudy/necc"
//   },
//   {
//     id: 4,
//     title: "Bosch",
//     description: "A 3D animation was created for the Bosch air purifier to visually demonstrate its internal components and air flow mechanism. This helped the consumers to functionality and purification process in a clear and engaging way.",
//     priority: "high",
//     tags: ["3D Animation"],
//     image: boschVideo, // Video instead of image
//     mediaType: "video",
//     link: "/casestudy/bosch"
//   },
//   {
//     id: 5,
//     title: "Haraay's Project Management",
//     description: "The application is designed to streamline how teams and track work updates efficiently. It streamlines workflow.",
//     priority: "low",
//     tags: ["Web application"],
//     image: HaraayProjectManagement,
//     mediaType: "image",
//     link: "/casestudy/hms"
//   },
//   {
//     id: 6,
//     title: "Gopalan Group",
//     description: "Gopalan Real Estate project was a beacon of trust and innovation in the real estate sector. That's why deserving.",
//     priority: "low",
//     tags: ["UI/UX", "3D Animation", "Motion Graphics","Websites"],
//     image: Gopalan,
//     mediaType: "image",
//     link: "/casestudy/gopalan"
//   },
//   {
//     id: 7,
//     title: "Baker's street",
//     description: "Baker's street is a new and old shop bakery point which provides heavenly experience of true taste premium.",
//     priority: "low",
//     tags: ["Branding", "3D Animation", "Packaging"],
//     image: BakersStreet,
//     mediaType: "image",
//     link: "/casestudy/bakers"
//   },
//   {
//     id: 8,
//     title: "Satvik raas",
//     description: "Satvik Raas Spices, we developed a visual identity, along with nutrition graphics and 3D video animations that tells the brand story in the end showcases to traditional essence in a modern, engaging format.",
//     priority: "medium",
//     tags: ["Branding", "Packaging", "UI/UX", "3D Animation", "Motion Graphics","Websites"],
//     image: satvik,
//     mediaType: "image",
//     link: "/casestudy/satvik"
//   },
//   {
//     id: 9,
//     title: "Akoya",
//     description: "Akoya is a traditional brand from scratch that connects with cultural roots. Ensure cohesive storytelling by a packaging that reflects the brand and resonates with the target audience.",
//     priority: "medium",
//     tags: ["Branding", "Packaging", "Illustration", "3D Animation", "Motion Graphics"],
//     image: akoyaVideo, // Video instead of image
//     mediaType: "video",
//     link: "/casestudy/akoya"
//   },
//   {
//     id: 10,
//     title: "Virat",
//     description: "Virat Shipping facility management services provider, specializing in regulatory compliance that maintains a bold, modern and distinctive brand identity.",
//     priority: "low",
//     tags: ["Branding", "UI/UX", "3D Animation","Websites"],
//     image: virat,
//     mediaType: "image",
//     link: "/casestudy/virat"
//   },
//   {
//     id: 11,
//     title: "Serene Skin",
//     description: "Serene Skin nurtures brand truths that encourages self-confidence between users towards their skincare. Sustainable themselves from other skincare firms by providing new.",
//     priority: "low",
//     tags: ["Branding", "Packaging", "3D Animation"],
//     image: Sereneskin,
//     mediaType: "image",
//     link: "/casestudy/sereneskin"
//   },
//   {
//     id: 12,
//     title: "Creams Forest",
//     description: "Creams Forest is a natural ice cream brand the branding communicates the fresh taste by connecting nature with indulgence in every scoop.",
//     priority: "low",
//     tags: ["Branding", "Packaging"],
//     image: creamForest,
//     mediaType: "image",
//     link: "/casestudy/creamf"
//   }
// ];
const projectsData = [
  {
    id: 1,
    title: "Hylete",
    description: "Hylete is an international sports event company that operates at intersection of performance, innovation, and community.",
    priority: "small",
    tags: ["Branding"],
    image: hylete,
    mediaType: "image",
    link: "/casestudy/hylete"
  },
  {
    id: 2,
    title: "Samruddh Bharat Technologies",
    description: "Empowering citizens with digital literacy and skills, promoting digital inclusion, and advancing the adoption.",
    priority: "small",
    tags: ["Branding", "App Development", "UI/UX"],
    image: samrudh,
    mediaType: "image",
    link: "/casestudy/samrudh"
  },
  {
    id: 3,
    title: "BMS",
    description: "Business Management System (BMS) Web Application for a Real Estate Company",
    priority: "small",
    tags: ["UI/UX", "Web Application", "3D Animation"],
    image: bms,
    mediaType: "image",
    link: "/casestudy/bms"
  },
  {
    id: 4,
    title: "Puru’s",
    description: "Puru’s Enterprises specializes in business consulting and sustainable lifestyle products. As a solutions-based firm, they are dedicated to creating a brighter future by inspiring individuals.",
    priority: "medium",
    tags: ["Branding", "3D Character Design", "Packaging"],
    image: purus,
    mediaType: "image",
    link: "#"
  },
  {
    id: 5,
    title: "Alankar",
    description: "We combine creative thinking with cutting-edge technology to ensure your brand stands out—on paper, in-store, and everywhere in between.",
    priority: "medium",
    tags: ["App Development", "Branding", "UI/UX"],
    image: alankar,
    mediaType: "image",
    link: "/casestudy/alanakr"
  },
  {
    id: 6,
    title: "Lok Neta",
    description: "Mobile application designed to bridge the gap between the people of Goa and the City's offices, providing a streamlined accessible platform for civic engagement.",
    priority: "small",
    tags: ["Branding", "UI/UX", "3D Animation"],
    image: lokneta,
    mediaType: "image",
    link: "#"
  },
  {
    id: 7,
    title: "Toot",
    description: "Tool is a fun and friendly toothpaste brand made for kids with epic teeth. Colourful and playful branding style, premium packaging",
    priority: "small",
    tags: ["Branding", "Packaging", "3D Animation"],
    image: toot,
    mediaType: "image",
    link: "/casestudy/toot"
  },
  {
    id: 8,
    title: "NECC",
    description: "Branding for the NECC Women's Tennis event was executed, covering visual identity, signage, and promotional materials. The design captured the spirit of the sport.",
    priority: "small",
    tags: ["Branding"],
    image: necc,
    mediaType: "image",
    link: "/casestudy/necc"
  },
  {
    id: 9,
    title: "Bosch",
    description: "A 3D animation was created for the Bosch air purifier to visually demonstrate its internal components and air flow mechanism. This helped the consumers to functionality and purification process in a clear and engaging way.",
    priority: "high",
    tags: ["3D Animation"],
    image: boschVideo,
    mediaType: "video",
    link: "/casestudy/bosch"
  },
  {
    id: 10,
    title: "Haraay's Project Management",
    description: "The application is designed to streamline how teams and track work updates efficiently. It streamlines workflow.",
    priority: "low",
    tags: ["Web application"],
    image: HaraayProjectManagement,
    mediaType: "image",
    link: "/casestudy/hms"
  },
  {
    id: 11,
    title: "Gopalan Group",
    description: "Gopalan Real Estate project was a beacon of trust and innovation in the real estate sector. That's why deserving.",
    priority: "low",
    tags: ["UI/UX", "3D Animation", "Motion Graphics", "Websites"],
    image: Gopalan,
    mediaType: "image",
    link: "/casestudy/gopalan"
  },
  {
    id: 12,
    title: "Baker's street",
    description: "Baker's street is a new and old shop bakery point which provides heavenly experience of true taste premium.",
    priority: "low",
    tags: ["Branding", "3D Animation", "Packaging"],
    image: BakersStreet,
    mediaType: "image",
    link: "/casestudy/bakers"
  },
  {
    id: 13,
    title: "Satvik raas",
    description: "Satvik Raas Spices, we developed a visual identity, along with nutrition graphics and 3D video animations that tells the brand story in the end showcases to traditional essence in a modern, engaging format.",
    priority: "medium",
    tags: ["Branding", "Packaging", "UI/UX", "3D Animation", "Motion Graphics", "Websites"],
    image: satvik,
    mediaType: "image",
    link: "/casestudy/satvik"
  },
  {
    id: 14,
    title: "Akoya",
    description: "Akoya is a traditional brand from scratch that connects with cultural roots. Ensure cohesive storytelling by a packaging that reflects the brand and resonates with the target audience.",
    priority: "medium",
    tags: ["Branding", "Packaging", "Illustration", "3D Animation", "Motion Graphics"],
    image: akoyaVideo,
    mediaType: "video",
    link: "/casestudy/akoya"
  },
  {
    id: 15,
    title: "Virat",
    description: "Virat Shipping facility management services provider, specializing in regulatory compliance that maintains a bold, modern and distinctive brand identity.",
    priority: "low",
    tags: ["Branding", "UI/UX", "3D Animation", "Websites"],
    image: virat,
    mediaType: "image",
    link: "/casestudy/virat"
  },
  {
    id: 16,
    title: "Serene Skin",
    description: "Serene Skin nurtures brand truths that encourages self-confidence between users towards their skincare. Sustainable themselves from other skincare firms by providing new.",
    priority: "low",
    tags: ["Branding", "Packaging", "3D Animation"],
    image: Sereneskin,
    mediaType: "image",
    link: "/casestudy/sereneskin"
  },
  {
    id: 17,
    title: "Creams Forest",
    description: "Creams Forest is a natural ice cream brand the branding communicates the fresh taste by connecting nature with indulgence in every scoop.",
    priority: "low",
    tags: ["Branding", "Packaging"],
    image: creamForest,
    mediaType: "image",
    link: "/casestudy/creamf"
  }
];

const categories = [
  "All Works",
  "Branding",
  "Websites",
  "3D Animation",
  "Web application",
  "Motion Graphics",
  "Packaging",
  "UI/UX"
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [visibleCards, setVisibleCards] = useState([]);
const videoRefs = useRef({}); // Store refs for all videos
  useEffect(() => {
    if (activeCategory === "All Works") {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project =>
        project.tags.some(tag =>
          tag.toLowerCase().includes(activeCategory.toLowerCase())
        )
      );
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const cardId = entry.target.getAttribute("data-card-id");
      const videoElement = videoRefs.current[cardId];
      if (videoElement) {
        if (entry.isIntersecting && videoElement.paused) {
          videoElement.play().catch(console.error);
        } else if (!entry.isIntersecting && !videoElement.paused) {
          videoElement.pause();
        }
      }
    });
  }, { threshold: 0.1 });

  const cards = document.querySelectorAll(`.${styles.projectCard}`);
  cards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, [filteredProjects]);

  const handleProjectClick = (link) => {
    window.location.href = link;
  };

  // Media component to render either image or video
const MediaComponent = ({ project }) => {
  if (project.mediaType === "video") {
    return (
      <video
        ref={(el) => {
          if (el) videoRefs.current[project.id] = el;
        }}
        src={project.image}
        className={styles.projectVideo}
        autoPlay
        muted
        loop
        playsInline
        onError={(e) => console.error(`Video failed to load: ${project.image}`)}
      />
    );
  } else {
    return <img src={project.image} alt={project.title} className={styles.projectImage} />;
  }
};

  const renderProjectsInSequence = () => {
    const rows = [];
    let currentRow = [];
    let currentLimit = 0;

    filteredProjects.forEach((project) => {
      const limit =
        project.priority === 'high' ? 1 :
        project.priority === 'medium' ? 2 : 3;

      if (
        currentRow.length === 0 ||
        (currentRow.length < currentLimit && limit === currentLimit)
      ) {
        currentRow.push(project);
        currentLimit = limit;
      } else {
        rows.push(currentRow);
        currentRow = [project];
        currentLimit = limit;
      }
    });

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows.map((row, rowIndex) => {
      const priority = row[0].priority;
      const rowClass =
        priority === 'high' ? styles.rowFull :
        priority === 'medium' ? styles.rowHalf :
        styles.rowSmall;

      return (
        <div key={rowIndex} className={rowClass}>
          {row.map((project, index) => {
            const cardClass =
              project.priority === 'high' ? styles.cardFull :
              project.priority === 'medium' ? styles.cardHalf :
              styles.cardSmall;

            return (
              <div
                key={project.id}
                className={`${styles.projectCard} ${cardClass}`}
                data-card-id={project.id}
                onClick={() => handleProjectClick(project.link)}
              >
                <div className={styles.imageContainer}>
                  <MediaComponent project={project} />
                </div>
                <div className={styles.cardInfo}>
                  <div className={styles.cardLeft}>
                    <h2 className={styles.cardTitle}>{project.title}</h2>
                    <p className={styles.cardDescription}>{project.description}</p>
                  </div>
                  <div className={styles.cardRight}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.serviceTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Haraay</h1>
          <p className={styles.subtitle}>
            We craft bold, functional, and tech-driven design experiences that bring clarity,
            beauty, and unity across every brand touchpoint.
          </p>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.categories}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.viewOptions}>
            <button className={`${styles.viewBtn} ${styles.active}`}>
              <span className={styles.stackIcon}>⊞</span> Stack
            </button>
            <button className={styles.viewBtn}>
              <span className={styles.gridIcon}>⊡</span> Grid
            </button>
          </div>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.length > 0 ? (
            renderProjectsInSequence()
          ) : (
            <div className={styles.noResults}>
              <p>No projects found for "{activeCategory}" category.</p>
            </div>
          )}
        </div>

        {/* <div className={styles.pagination}>
          <span className={styles.paginationText}>
            Showing {filteredProjects.length} records out of {projectsData.length} records
          </span>
          <div className={styles.paginationControls}>
            <button className={styles.paginationBtn}>‹‹</button>
            <button className={`${styles.paginationBtn} ${styles.active}`}>1</button>
            <button className={styles.paginationBtn}>2</button>
            <button className={styles.paginationBtn}>...</button>
            <button className={styles.paginationBtn}>6</button>
            <button className={styles.paginationBtn}>››</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;