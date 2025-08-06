import React, { useState } from 'react';
import styles from './CraftDropdown.module.scss';
import img from "../../assets/Akoya/AkoyaFullimg.png"
const CraftDropdown = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const craftTypes = [
    'Brand Identity',
    'Brand Strategy', 
    'Campaigns',
    'Data Driven Experiences',
    'Digital Experiences',
    'Exhibitions',
    'Industrial/Product Design',
    'Motion Graphics & Film',
    'Packaging',
    'Publications',
    'Signage & Environmental Graphics',
    'Typefaces'
  ];

  const fields = [
    'Books',
    'Real Estate',
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Retail',
    'Entertainment',
    'Non-profit',
    'Hospitality',
    'Automotive',
    'Fashion'
  ];

  const handleDropdownClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropdownBar}>
        <span className={styles.weCraft}>We Craft</span>
        
        <div className={styles.dropdown} onClick={handleDropdownClick}>
          <span className={styles.dropdownText}>Everything</span>
          <svg className={styles.dropdownIcon} width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <span className={styles.tailoredFor}>Tailored for</span>
        
        <div className={styles.dropdown} onClick={handleDropdownClick}>
          <span className={styles.dropdownText}>Everyone</span>
          <svg className={styles.dropdownIcon} width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closePopup}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={styles.imageSection}>
              <img 
                src={img}
                alt="Creative workspace" 
                className={styles.heroImage}
              />
            </div>
            
            <div className={styles.popupContent}>
              <div className={styles.categoriesGrid}>
                <div className={styles.category}>
                  <div className={styles.categoryItem} style={{backgroundColor: '#A8E6CF'}}>Naming</div>
                  <div className={styles.categoryItem}>Logos & Visual System</div>
                  <div className={styles.categoryItem}>Illustrations</div>
                  <div className={styles.categoryItem}>Messaging</div>
                  <div className={styles.categoryItem}>Consumer Journey</div>
                  <div className={styles.categoryItem}>Brand & Portfolio Architecture</div>
                </div>
                
                <div className={styles.category}>
                  <div className={styles.categoryItem}>Drive Memory</div>
                  <div className={styles.categoryItem}>UI/UX Design</div>
                  <div className={styles.categoryItem}>Apps</div>
                  <div className={styles.categoryItem}>Design System</div>
                  <div className={styles.categoryItem}>E-Commerce Sites</div>
                  <div className={styles.categoryItem}>Web design & Development</div>
                </div>
                
                <div className={styles.category}>
                  <div className={styles.categoryItem}>3D Animation & Rendering</div>
                  <div className={styles.categoryItem}>Motion Design</div>
                  <div className={styles.categoryItem}>Film</div>
                  <div className={styles.categoryItem}>Photography</div>
                  <div className={styles.categoryItem}>Custom Typography</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CraftDropdown;