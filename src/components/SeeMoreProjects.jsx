import React from "react";
import styles from "./SimilarProjectsCards.module.scss";
import { Link } from "react-router-dom";
const SimilarProjectsCards = ({
  title = "Similar Projects",
  seeAllLink = "#",
  seeAllText = "See All Projects",
  cards = [],
}) => {
 const handleCardClick = (link) => {
  if (link && link !== "#") {
    window.open(link, "_self"); // Opens in same tab
  }
};

const handleSeeAllClick = (e) => {
  e.preventDefault();
  if (seeAllLink && seeAllLink !== "#") {
    window.open(seeAllLink, "_self"); // Opens in same tab
  }
};

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Link to="/works" className={styles.seeAll}>
          {seeAllText}
          <span className={styles.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="24"
              viewBox="0 0 40 24"
              fill="none"
            >
              <path
                d="M26.856 23.5C26.856 22.281 28.0602 20.4607 29.2792 18.9329C30.8465 16.9614 32.7194 15.2414 34.8666 13.9287C36.4766 12.9446 38.4283 12 39.9989 12M39.9989 12C38.4283 12 36.4749 11.0554 34.8666 10.0713C32.7194 8.757 30.8465 7.03693 29.2792 5.06879C28.0602 3.53929 26.856 1.71571 26.856 0.499999M39.9989 12L0.570313 12"
                stroke="#2B2322"
                stroke-width="4"
              />
            </svg>
          </span>
        </Link>
      </div>

      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleCardClick(card.link)}
          >
            <img
              src={card.image}
              alt={card.text}
              className={styles.cardImage}
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=";
              }}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProjectsCards;
