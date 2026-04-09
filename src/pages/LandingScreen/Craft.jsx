// import React, { useState, useEffect } from 'react';
// import styles from './CraftDropdown.module.scss';

// // Import all images
// import brandingImg from "./heroSecImages/branding.jpg";
// import identityImg from "./heroSecImages/identityDesign.png";
// import uiImg from "./heroSecImages/uiDesign.png";
// import graphicsImg from "./heroSecImages/graphicsImg.jpg";
// import motionImg from "./heroSecImages/identityDesign.png";
// import visualizationImg from "./heroSecImages/animation3dImg.jpg";
// import webDesignImg from "./heroSecImages/webDesignImg.jpg";
// import ecommerceImg from "./heroSecImages/identityDesign.png";
// import printImg from "./heroSecImages/printImg.jpg";
// import storytellingImg from "./heroSecImages/identityDesign.png";
// import digitalImg from "./heroSecImages/identityDesign.png";
// import productImg from "./heroSecImages/productImg.png";
// import packagingImg from "./heroSecImages/packagingImg.jpg";
// import illustrationImg from "./heroSecImages/identityDesign.png";
// import characterImg from"./heroSecImages/identityDesign.png";
// import animation3dImg from "./heroSecImages/animation3dImg.jpg";
// import mobileAppImg from "./heroSecImages/mobileAppImg.jpg";
// import dashboardImg from"./heroSecImages/dashboardImg.png";

// const CraftDropdown = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [activeView, setActiveView] = useState('craft');
//   const [selectedItem, setSelectedItem] = useState('Branding');
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [currentCraftText, setCurrentCraftText] = useState('Everything');
//   const [currentFieldText, setCurrentFieldText] = useState('Everyone');
//   const [popupCraftText, setPopupCraftText] = useState('Everything');
//   const [popupFieldText, setPopupFieldText] = useState('Everyone');

//   // Craft types list with proper image mapping
//   const craftTypes = [
//     { title: "Branding", img: brandingImg },
//     { title: "Identity Design", img: identityImg },
//     { title: "UI/UX Design", img: uiImg },
//     { title: "Graphics Design", img: graphicsImg },
//     { title: "Motion Graphics", img: motionImg },
//     { title: "3D Visualization", img: visualizationImg },
//     { title: "Web Design", img: webDesignImg },
//     { title: "Ecommerce Website", img: ecommerceImg },
//     { title: "Print Design", img: printImg },
//     { title: "Visual Storytelling", img: storytellingImg },
//     // { title: "Digital Design", img: digitalImg },
//     { title: "Product Design", img: productImg },
//     { title: "Packaging Design", img: packagingImg },
//     { title: "Illustrations", img: illustrationImg },
//     { title: "Character Design", img: characterImg },
//     { title: "3D Animations", img: animation3dImg },
//     { title: "Mobile App", img: mobileAppImg },
//     { title: "Dashboard", img: dashboardImg },
//   ];

//   // Fields list
//   const fields = [
//     'Arts & Culture',
//     'Civic & Public',
//     'Consumer Brands',
//     'Education',
//     'Entertainment',
//     'Fashion & Beauty',
//     'Finance',
//     'Food & Drink',
//     'Health',
//     'Hospitality & Travel',
//     'Manufacturing & Industrials',
//     'Non-profits',
//     'Professional Services',
//     'Publishing',
//     'Real Estate',
//     'Technology',
//     'Transport'
//   ];

//   // Generate dummy images for fields
//   const generateDummyImage = (text, color) => {
//     const colors = ['%234A90E2', '%23E74C3C', '%232ECC71', '%23F39C12', '%239B59B6', '%231ABC9C', '%2334495E', '%23E67E22'];
//     const bgColor = color || colors[Math.floor(Math.random() * colors.length)];
//     return `data:image/svg+xml,%3Csvg width='800' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='400' fill='${bgColor}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='28' font-weight='bold' fill='white'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
//   };

//   // Create image map for fields only (crafts use imported images)
//   const fieldImageMap = {};
//   fields.forEach((field, index) => {
//     fieldImageMap[field] = generateDummyImage(field, `%23E7${(4 + index * 3).toString(16)}C3C`);
//   });

//   // Rotate dropdown text every 3 seconds when popup is closed
//   useEffect(() => {
//     if (!isPopupOpen) {
//       const interval = setInterval(() => {
//         setCurrentCraftText(prev => {
//           const craftOptions = ['Everything', ...craftTypes.map(c => c.title)];
//           const currentIndex = craftOptions.indexOf(prev);
//           return craftOptions[(currentIndex + 1) % craftOptions.length];
//         });

//         setCurrentFieldText(prev => {
//           const fieldOptions = ['Everyone', ...fields];
//           const currentIndex = fieldOptions.indexOf(prev);
//           return fieldOptions[(currentIndex + 1) % fieldOptions.length];
//         });
//       }, 3000);

//       return () => clearInterval(interval);
//     }
//   }, [isPopupOpen]);

//   const handleDropdownClick = () => {
//     setIsPopupOpen(true);
//     setPopupCraftText('Everything');
//     setPopupFieldText('Everyone');
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//     setHoveredItem(null);
//   };

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//   };

//   const handleItemHover = (item) => {
//     setHoveredItem(item);
//   };

//   const handleItemLeave = () => {
//     setHoveredItem(null);
//   };

//   const handlePopupCraftClick = () => {
//     setActiveView('craft');
//     setPopupCraftText(prev => {
//       const options = ['Everything', ...craftTypes.map(c => c.title)];
//       const currentIndex = options.indexOf(prev);
//       const nextIndex = (currentIndex + 1) % options.length;
//       const nextValue = options[nextIndex];

//       if (nextValue !== 'Everything') {
//         setSelectedItem(nextValue);
//       }

//       return nextValue;
//     });
//   };

//   const handlePopupFieldClick = () => {
//     setActiveView('fields');
//     setPopupFieldText(prev => {
//       const options = ['Everyone', ...fields];
//       const currentIndex = options.indexOf(prev);
//       const nextIndex = (currentIndex + 1) % options.length;
//       const nextValue = options[nextIndex];

//       if (nextValue !== 'Everyone') {
//         setSelectedItem(nextValue);
//       }

//       return nextValue;
//     });
//   };

//   const getCurrentImage = () => {
//     // Priority: hovered item > selected item > default
//     const itemToShow = hoveredItem || selectedItem;

//     if (activeView === 'craft') {
//       // Find the craft object with matching title
//       const craft = craftTypes.find(c => c.title === itemToShow);
//       return craft ? craft.img : craftTypes[0].img; // Default to first craft image
//     } else {
//       // For fields, use dummy images
//       return fieldImageMap[itemToShow] || fieldImageMap[fields[0]];
//     }
//   };

//   const getDisplayItems = () => {
//     if (activeView === 'craft') {
//       if (popupCraftText === 'Everything') {
//         return craftTypes.map(c => c.title);
//       } else {
//         return [popupCraftText];
//       }
//     } else {
//       if (popupFieldText === 'Everyone') {
//         return fields;
//       } else {
//         return [popupFieldText];
//       }
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {/* Main Dropdown Bar */}
//       <div className={styles.dropdownBar}>
//         <span className={styles.weCraft}>We Craft</span>

//         <div className={styles.dropdown} onClick={handleDropdownClick}>
//           <span className={`${styles.dropdownText} ${styles.animatedText}`}>
//             {currentCraftText}
//           </span>
//           <svg className={styles.dropdownIcon} width="12" height="8" viewBox="0 0 12 8" fill="none">
//             <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </div>

//         <span className={styles.tailoredFor}>Tailored for</span>

//         <div className={styles.dropdown} onClick={handleDropdownClick}>
//           <span className={`${styles.dropdownText} ${styles.animatedText}`}>
//             {currentFieldText}
//           </span>
//           <svg className={styles.dropdownIcon} width="12" height="8" viewBox="0 0 12 8" fill="none">
//             <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </div>
//       </div>

//       {/* Popup */}
//       {isPopupOpen && (
//         <div className={styles.popupOverlay} onClick={closePopup}>
//           <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
//             <button className={styles.closeButton} onClick={closePopup}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>

//             {/* Image Section */}
//             <div className={styles.imageSection}>
//               <img
//                 src={getCurrentImage()}
//                 alt={hoveredItem || selectedItem}
//                 className={styles.heroImage}
//                 key={hoveredItem || selectedItem} // Force re-render for smooth transitions
//               />
//             </div>

//             {/* Content Section */}
//             <div className={styles.popupContent}>
//               <div className={styles.itemsGrid}>
//                 {getDisplayItems().map((item) => (
//                   <div
//                     key={item}
//                     className={`${styles.item} ${selectedItem === item ? styles.selected : ''} ${hoveredItem === item ? styles.hovered : ''}`}
//                     onClick={() => handleItemClick(item)}
//                     onMouseEnter={() => handleItemHover(item)}
//                     onMouseLeave={handleItemLeave}
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Bottom Dropdown Bar */}
//             <div className={`${styles.popupDropdownBar} ${isPopupOpen ? styles.slideUp : ''}`}>
//               <span className={styles.weCraft}>We Craft</span>

//               <div className={styles.dropdown} onClick={handlePopupCraftClick}>
//                 <span className={`${styles.dropdownText} ${styles.animatedText}`}>
//                   {popupCraftText}
//                 </span>
//                 <svg className={styles.dropdownIcon} width="12" height="8" viewBox="0 0 12 8" fill="none">
//                   <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>

//               <span className={styles.tailoredFor}>Tailored for</span>

//               <div className={styles.dropdown} onClick={handlePopupFieldClick}>
//                 <span className={`${styles.dropdownText} ${styles.animatedText}`}>
//                   {popupFieldText}
//                 </span>
//                 <svg className={styles.dropdownIcon} width="12" height="8" viewBox="0 0 12 8" fill="none">
//                   <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>

//               <button className={styles.closeButtonSmall} onClick={closePopup}>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                   <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CraftDropdown;
import React, { useState, useEffect } from "react";
import styles from "./CraftDropdown.module.scss";

// Import all images
import brandingImg from "./heroSecImages/Akoya.webp";
import identityImg from "./heroSecImages/Virat.webp";
import uiImg from "./heroSecImages/Virat.webp";
import graphicsImg from "./heroSecImages/Necc.webp";
import motionImg from "./heroSecImages/Satvik.webp";
import visualizationImg from "./heroSecImages/Akoya.webp";
import webDesignImg from "./heroSecImages/Gopalan.webp";
import ecommerceImg from "./heroSecImages/SatvikWeb.webp";
import printImg from "./heroSecImages/Alankar.webp";
import storytellingImg from "./heroSecImages/Pawpet.webp";
// import digitalImg from "./heroSecImages/Virat.webp";
import productImg from "./heroSecImages/Bosch.webp";
import packagingImg from "./heroSecImages/SatvikBanner.webp";
import illustrationImg from "./heroSecImages/AkoyaIllu.webp";
import characterImg from "./heroSecImages/Purus.webp";
import animation3dImg from "./heroSecImages/ViratLogo.webp";
import mobileAppImg from "./heroSecImages/Lokneta.webp";
import dashboardImg from "./heroSecImages/AlankarDash.webp";

// Import field images (assuming you have these)
import artsCultureImg from "./fieldImages/AkoyaIllu.webp";
import civicPublicImg from "./heroSecImages/Lokneta.webp";
import consumerBrandsImg from "./fieldImages/SatvikProduct.webp";
import educationImg from "./fieldImages/Purus.webp";
import entertainmentImg from "./fieldImages/Nexora.webp";
import fashionBeautyImg from "./fieldImages/Serene.webp";
import financeImg from "./fieldImages/Cream.webp";
import foodDrinkImg from "./fieldImages/Cream.webp";
// import healthImg from "./fieldImages/health.jpg";
import hospitalityTravelImg from "./fieldImages/Virat.jpg";
// import manufacturingImg from "./fieldImages/manufacturing.jpg";
// import nonprofitsImg from "./fieldImages/nonprofits.jpg";
// import professionalServicesImg from "./fieldImages/professionalservices.jpg";
import publishingImg from "./fieldImages/Alanakr.webp";
// import realEstateImg from "./fieldImages/realestate.jpg";
import technologyImg from "./fieldImages/Bosch.webp";
// import transportImg from "./fieldImages/transport.jpg";

const CraftDropdown = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeView, setActiveView] = useState("craft");
  const [selectedItem, setSelectedItem] = useState("Branding");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentCraftText, setCurrentCraftText] = useState("Everything");
  const [currentFieldText, setCurrentFieldText] = useState("Everyone");
  const [popupCraftText, setPopupCraftText] = useState("Everything");
  const [popupFieldText, setPopupFieldText] = useState("Everyone");

  // Craft types list with proper image mapping
  const craftTypes = [
    { title: "Branding", img: brandingImg },
    { title: "Identity Design", img: identityImg },
    { title: "UI/UX Design", img: uiImg },
    { title: "Graphics Design", img: graphicsImg },
    { title: "Motion Graphics", img: motionImg },
    { title: "3D Visualization", img: visualizationImg },
    { title: "Web Design", img: webDesignImg },
    { title: "Ecommerce Website", img: ecommerceImg },
    { title: "Print Design", img: printImg },
    { title: "Visual Storytelling", img: storytellingImg },
    { title: "Product Design", img: productImg },
    { title: "Packaging Design", img: packagingImg },
    { title: "Illustrations", img: illustrationImg },
    { title: "Character Design", img: characterImg },
    { title: "3D Animations", img: animation3dImg },
    { title: "Mobile App", img: mobileAppImg },
    { title: "Dashboard", img: dashboardImg },
  ];

  const fields = [
    { title: "Arts & Culture", img: artsCultureImg },
    { title: "Civic & Public", img: civicPublicImg },
    { title: "Consumer Brands", img: consumerBrandsImg },
    { title: "Education", img: educationImg },
    { title: "Entertainment", img: entertainmentImg },
    { title: "Fashion & Beauty", img: fashionBeautyImg },
    { title: "Finance", img: printImg },
    { title: "Food & Drink", img: foodDrinkImg },
    { title: "Health", img: printImg },
    { title: "Hospitality & Travel", img: hospitalityTravelImg },
    // { title: "Manufacturing & Industrials", img: printImg },
    // { title: "Non-profits", img: printImg },
    // { title: "Professional Services", img: printImg },
    { title: "Publishing", img: publishingImg },
    { title: "Real Estate", img: printImg },
    { title: "Technology", img: technologyImg },
    { title: "Transport", img: printImg },
  ];

  // Rotate dropdown text every 3 seconds when popup is closed
  useEffect(() => {
    if (!isPopupOpen) {
      const interval = setInterval(() => {
        setCurrentCraftText((prev) => {
          const craftOptions = [
            "Everything",
            ...craftTypes.map((c) => c.title),
          ];
          const currentIndex = craftOptions.indexOf(prev);
          return craftOptions[(currentIndex + 1) % craftOptions.length];
        });

        setCurrentFieldText((prev) => {
          const fieldOptions = ["Everyone", ...fields.map((f) => f.title)];
          const currentIndex = fieldOptions.indexOf(prev);
          return fieldOptions[(currentIndex + 1) % fieldOptions.length];
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPopupOpen]);

  const handleDropdownClick = () => {
    setIsPopupOpen(true);
    setPopupCraftText("Everything");
    setPopupFieldText("Everyone");
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setHoveredItem(null);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  // New function to handle "We Craft" click
  const handleWeCraftClick = () => {
    setActiveView("craft");
    setPopupCraftText("Everything");
    setSelectedItem(craftTypes[0].title); // Set to first craft item
  };

  // New function to handle "Tailored for" click
  const handleTailoredForClick = () => {
    setActiveView("fields");
    setPopupFieldText("Everyone");
    setSelectedItem(fields[0].title); // Set to first field item
  };

  const handlePopupCraftClick = () => {
    setActiveView("craft");
    setPopupCraftText((prev) => {
      const options = ["Everything", ...craftTypes.map((c) => c.title)];
      const currentIndex = options.indexOf(prev);
      const nextIndex = (currentIndex + 1) % options.length;
      const nextValue = options[nextIndex];

      if (nextValue !== "Everything") {
        setSelectedItem(nextValue);
      }

      return nextValue;
    });
  };

  const handlePopupFieldClick = () => {
    setActiveView("fields");
    setPopupFieldText((prev) => {
      const options = ["Everyone", ...fields.map((f) => f.title)];
      const currentIndex = options.indexOf(prev);
      const nextIndex = (currentIndex + 1) % options.length;
      const nextValue = options[nextIndex];

      if (nextValue !== "Everyone") {
        setSelectedItem(nextValue);
      }

      return nextValue;
    });
  };

  const getCurrentImage = () => {
    // Priority: hovered item > selected item > default
    const itemToShow = hoveredItem || selectedItem;

    if (activeView === "craft") {
      // Find the craft object with matching title
      const craft = craftTypes.find((c) => c.title === itemToShow);
      return craft ? craft.img : craftTypes[0].img; // Default to first craft image
    } else {
      // Find the field object with matching title
      const field = fields.find((f) => f.title === itemToShow);
      return field ? field.img : fields[0].img; // Default to first field image
    }
  };

  const getDisplayItems = () => {
    if (activeView === "craft") {
      if (popupCraftText === "Everything") {
        return craftTypes.map((c) => c.title);
      } else {
        return [popupCraftText];
      }
    } else {
      if (popupFieldText === "Everyone") {
        return fields.map((f) => f.title);
      } else {
        return [popupFieldText];
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* Main Dropdown Bar */}
      <div className={styles.dropdownBar}>
        <span className={styles.weCraft}>We Craft</span>

        <div className={styles.dropdown} onClick={handleDropdownClick}>
          <span className={`${styles.dropdownText} ${styles.animatedText}`}>
            {currentCraftText}
          </span>
          <svg
            className={styles.dropdownIcon}
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className={styles.tailoredFor}>Tailored for</span>

        <div className={styles.dropdown} onClick={handleDropdownClick}>
          <span className={`${styles.dropdownText} ${styles.animatedText}`}>
            {currentFieldText}
          </span>
          <svg
            className={styles.dropdownIcon}
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closePopup}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Image Section */}
            <div className={styles.imageSection}>
              <img
                src={getCurrentImage()}
                alt={hoveredItem || selectedItem}
                className={styles.heroImage}
                key={hoveredItem || selectedItem} // Force re-render for smooth transitions
              />
            </div>

            {/* Content Section */}
            <div className={styles.popupContent}>
              <div className={styles.itemsGrid}>
                {getDisplayItems().map((item) => (
                  <div
                    key={item}
                    className={`${styles.item} ${selectedItem === item ? styles.selected : ""} ${hoveredItem === item ? styles.hovered : ""}`}
                    onClick={() => handleItemClick(item)}
                    onMouseEnter={() => handleItemHover(item)}
                    onMouseLeave={handleItemLeave}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Dropdown Bar */}
            <div
              className={`${styles.popupDropdownBar} ${isPopupOpen ? styles.slideUp : ""}`}
            >
              <span
                className={styles.weCraft}
                onClick={handleWeCraftClick}
                style={{ cursor: "pointer" }}
              >
                We Craft
              </span>

              <div className={styles.dropdown} onClick={handlePopupCraftClick}>
                <span
                  className={`${styles.dropdownText} ${styles.animatedText}`}
                >
                  {popupCraftText}
                </span>
                <svg
                  className={styles.dropdownIcon}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span
                className={styles.tailoredFor}
                onClick={handleTailoredForClick}
                style={{ cursor: "pointer" }}
              >
                Tailored for
              </span>

              <div className={styles.dropdown} onClick={handlePopupFieldClick}>
                <span
                  className={`${styles.dropdownText} ${styles.animatedText}`}
                >
                  {popupFieldText}
                </span>
                <svg
                  className={styles.dropdownIcon}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <button className={styles.closeButtonSmall} onClick={closePopup}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CraftDropdown;
