import React, { useState, useEffect } from "react";
import desktopImg from "../assets/errorpage.jpg"
import mobileImg from "../assets/errorpagem.jpg";   // Mobile image
import styles from "../styles/ErrorPage.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [imgSrc, setImgSrc] = useState(window.innerWidth > 768 ? desktopImg : mobileImg);

  useEffect(() => {
    const handleResize = () => {
      setImgSrc(window.innerWidth > 768 ? desktopImg : mobileImg);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.errorPage}>
      <img src={imgSrc} alt="Error Page" />
      <Link className={styles.bthbtn} to="/"> Back to Home</Link>
    </div>
  );
};

export default NotFound;
