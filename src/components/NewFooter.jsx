import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NewFooter.module.scss";
import instagramIcon from "../assets/instagramicon.png";
import linkedinIcon from "../assets/linkdein.png";

function NewFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerGrid}>
        
        {/* Left Column: Menu columns & Socials */}
        <div className={styles.leftColumn}>
          <div className={styles.menuSection}>
            {/* Column 1 */}
            <div className={styles.menuCol}>
              <Link to="/works" className={styles.menuLinkWrapper}>
                <span className={styles.menuText}>Work</span>
                <span className={styles.menuLabel}>( 36)</span>
              </Link>
              <Link to="/about" className={styles.menuLinkWrapper}>
                <span className={styles.menuText}>About Us</span>
                <span className={styles.menuLabel}>Studio</span>
              </Link>
              <Link to="/expertise" className={styles.menuLinkWrapper}>
                <span className={styles.menuText}>Expertise</span>
                <span className={styles.menuLabel}>Services</span>
              </Link>
              <Link to="/" className={styles.menuLinkWrapper}>
                <span className={styles.menuText}>Clients</span>
                <span className={styles.menuLabel}>Core</span>
              </Link>
              <Link to="/blogs" className={styles.menuLinkWrapper}>
                <span className={styles.menuText}>Articles</span>
                <span className={styles.menuLabel}>Resources</span>
              </Link>
            </div>

            {/* Column 2 */}
            <div className={styles.menuCol}>
              <Link to="/intelligence" className={styles.menuLinkWrapper}>
                <span className={styles.menuText}>Intelligence</span>
                <span className={styles.menuLabel}>Future</span>
              </Link>
              <Link to="/career" className={styles.menuLinkWrapper}>
                <span className={styles.menuText}>Careers</span>
                <span className={styles.menuLabel}>Core</span>
              </Link>
              <Link to="/contact-us" className={styles.menuLinkWrapper}>
                <span className={styles.menuText}>Contact Us</span>
                <span className={styles.menuLabel}>Core</span>
              </Link>
            </div>
          </div>

          {/* Socials Block */}
          <div className={styles.socialsBlock}>
            <div className={styles.iconsRow}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/haraay_studio/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink}
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" className={styles.socialIconImg} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/haraaydesignstudio/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink}
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIconImg} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact, Email, Phone, Copyright */}
        <div className={styles.rightColumn}>
          {/* Email block wrapping Hello + address into a mailto link */}
          <a
            href="mailto:hello@haraaydesignstudio.com"
            className={styles.emailSection}
          >
            <div className={styles.emailTopRow}>
              <h2 className={styles.helloText}>Hello</h2>
              <div className={styles.arrowButton}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
            <h2 className={styles.emailAddress}>@haraaydesignstudio.com</h2>
          </a>

          {/* Phone Block (Desktop only via css display: none) */}
          <a href="tel:+917498376495" className={styles.phoneBlock}>
            <span className={styles.phoneIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span>+91 7498376495</span>
          </a>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className={styles.bottomRow}>
        <p className={styles.copyrightText}>
          &copy; {currentYear} Haraay. Haraay Design Studio LLP. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default NewFooter;
