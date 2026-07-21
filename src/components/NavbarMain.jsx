// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom"; // Import NavLink
// import styles from "../styles/NavbarMain.module.scss"; // Import SCSS for styles
// import logo from "../assets/Logo/LOGOcolor.svg";
// import whitelogo from "../assets/Logo/LOGOwhite.svg";
// import Icons from "../components/Icons";

// const NavbarMain = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Toggle the navigation menu
//   const toggleMenu = () => {
//     setIsExpanded(!isExpanded);
//   };

//   // Close the navbar when a menu item is clicked
//   const closeMenu = () => {
//     setIsExpanded(false);
//   };

//   return (
//     <div className={styles.navigation}>
//       {/* Conditionally render the logo based on `isExpanded` */}
//       <Link to="/">
//         <img
//           className={styles.logo}
//           src={isExpanded ? whitelogo : logo}
//           alt="Logo"
//         />{" "}
//       </Link>
//       <input
//         type="checkbox"
//         className={styles.navigation__checkbox}
//         id="nav-toggle"
//         checked={isExpanded}
//         onChange={toggleMenu}
//       />
//       <label htmlFor="nav-toggle" className={styles.navigation__button}>
//         <h6> MENU</h6>
//         <span
//           className={styles.navigation__icon}
//           aria-label="toggle navigation menu"
//         ></span>
//       </label>

//       <div className={styles.navigation__background2}></div>
//       <nav className={styles.navigation__nav} role="navigation">
//         <ul className={styles.navigation__list}>
//           <li className={styles.navigation__item}>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? `${styles.navigation__link} ${styles.active}`
//                   : styles.navigation__link
//               }
//               onClick={closeMenu}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li className={styles.navigation__item}>
//             <NavLink
//               to="/works"
//               className={({ isActive }) =>
//                 isActive
//                   ? `${styles.navigation__link} ${styles.active}`
//                   : styles.navigation__link
//               }
//               onClick={closeMenu}
//             >
//               Work
//             </NavLink>
//           </li>
//           <li className={styles.navigation__item}>
//             <NavLink
//               to="/expertise"
//               className={({ isActive }) =>
//                 isActive
//                   ? `${styles.navigation__link} ${styles.active}`
//                   : styles.navigation__link
//               }
//               onClick={closeMenu}
//             >
//               Expertise
//             </NavLink>
//           </li>
//           <li className={styles.navigation__item}>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive
//                   ? `${styles.navigation__link} ${styles.active}`
//                   : styles.navigation__link
//               }
//               onClick={closeMenu}
//             >
//               About Haraay
//             </NavLink>
//           </li>
//           {/* <li className={styles.navigation__item}>
//             <NavLink
//               to="/gallary"
//               className={({ isActive }) =>
//                 isActive
//                   ? `${styles.navigation__link} ${styles.active}`
//                   : styles.navigation__link
//               }
//               onClick={closeMenu}
//             >
//               Gallary
//             </NavLink>
//           </li>  */}
//           <li className={styles.navigation__item}>
//             <NavLink
//               to="/blogs"
//               className={({ isActive }) =>
//                 isActive
//                   ? `${styles.navigation__link} ${styles.active}`
//                   : styles.navigation__link
//               }
//               onClick={closeMenu}
//             >
//               Articles
//             </NavLink>
//           </li>
//           <li className={styles.navigation__item}>
//             <NavLink
//               to="/contact-us"
//               className={({ isActive }) =>
//                 isActive
//                   ? `${styles.navigation__link} ${styles.active}`
//                   : styles.navigation__link
//               }
//               onClick={closeMenu}
//             >
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//         <div className={styles.navsocial}>
//           <div>
//             {/* <div className={styles.navinforbox}>
//             <Icons.TbMailFilled className={styles.iconstyle} title="Home" />
//             <h2>hello@haraaydesignstudio.com</h2>
//           </div> */}
//             {/* <div className={styles.navinforbox}>
//             <Icons.FaLocationDot className={styles.iconstyle} title="Home" />
//             <h2>
//               Right, near Royal Enfield, Bhusari Colony, Kothrud, Pune,
//               Maharashtra 411038
//             </h2>
//           </div>  */}
//           </div>
//           <div className={styles.socialicons}>
//             <a
//               href="https://www.instagram.com/theharaay_studio/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {" "}
//               <Icons.Instagram
//                 className={styles.siconstyle}
//                 title="Instagram"
//               />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/haraaydesignstudio/?viewAsMember=true"
//               target="_blank"
//             >
//               <Icons.Linkedin className={styles.siconstyle} title="Linkdein" />
//             </a>{" "}
//             <a href="https://www.facebook.com/61573938452721" target="_blank">
//               <Icons.Facebook
//                 className={styles.siconstyle}
//                 title="Facebook"
//               />{" "}
//             </a>{" "}
//             <a href="https://www.behance.net/helloharaaystudio" target="_blank">
//               <Icons.FaBehanceSquare
//                 className={styles.siconstyle}
//                 title="Behance"
//               />{" "}
//             </a>{" "}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavbarMain;

// OLD NAVBAR ENDS HERE

// NEW NAVABR STARTS
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../styles/NavbarMain.module.scss";
import logo from "../assets/Logo/LOGOcolor.svg";

const NavbarMain = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pillRef = useRef(null);

  const openMenu = (e) => {
    e.stopPropagation();
    setIsExpanded(true);
  };

  const closeMenu = () => {
    setIsExpanded(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isExpanded &&
        pillRef.current &&
        !pillRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isExpanded]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // All nav links shown in the expanded dropdown card
  const allNavLinks = [
    { to: "/works", label: "Work" },
    { to: "/expertise", label: "Expertise" },
    { to: "/intelligence", label: "Intelligence" },
    { to: "/about", label: "About" },
    { to: "/blogs", label: "Articles" },
    { to: "/career", label: "Career" },
    { to: "/contact-us", label: "Contact" },
    { to: "/subscription", label: "Subscription" },
  ];

  // Subset shown inline in the collapsed pill (desktop only)
  const inlinePillLinks = [
    { to: "/", label: "Home" },
    { to: "/works", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/intelligence", label: "Intelligence" },
  ];

  return (
    <div className={styles.navigation}>
      {/* Logo — top left */}
      <Link to="/" className={styles.logoLink}>
        <img className={styles.logo} src={logo} alt="Haraay Logo" />
      </Link>

      {/* ── Center Pill ── */}
      <div
        ref={pillRef}
        className={`${styles.centerPill} ${isExpanded ? styles.open : ""}`}
      >
        {/* CLOSED: inline links + hamburger */}
        <div className={styles.inlineLinks}>
          {inlinePillLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive
                  ? `${styles.pillLink} ${styles.pillLinkActive}`
                  : styles.pillLink
              }
            >
              {label}
            </NavLink>
          ))}

          <button
            className={`${styles.hamburgerBtn} ${isExpanded ? styles.hamburgerOpen : ""}`}
            onClick={isExpanded ? closeMenu : openMenu}
            aria-label={isExpanded ? "Close menu" : "Open menu"}
          >
            <div className={styles.hamIcon}>
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>

        {/* OPEN: full dropdown card */}
        <div className={styles.dropdownContent}>
          {/* Close row */}
          <div className={styles.closeRow}>
            <span className={styles.closeLabel}></span>
            <button
              className={styles.closeBtn}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <div className={`${styles.hamIcon} ${styles.hamIconCross}`}>
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>

          {/* All 7 nav links */}
          <ul className={styles.dropdownList}>
            {allNavLinks.map(({ to, label }, i) => (
              <li
                key={to}
                className={styles.dropdownItem}
                style={{ animationDelay: `${0.22 + i * 0.07}s` }}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.dropdownLink} ${styles.dropdownLinkActive}`
                      : styles.dropdownLink
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <div className={styles.socialRow}>
            <a
              href="https://www.linkedin.com/company/haraaydesignstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/theharaay_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Instagram
            </a>
            <a
              href="https://www.behance.net/helloharaaystudio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Behance
            </a>
            <a
              href="https://www.facebook.com/61573938452721"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Contact button — top right */}
      <Link to="/contact-us" className={styles.contactBtn}>
        Contact
      </Link>
    </div>
  );
};

export default NavbarMain;