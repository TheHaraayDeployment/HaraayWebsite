import React from 'react';
import styles from '../styles/Blogs.module.scss';
import aloya from '../assets/Akoya/AkoyaFullimg.png'
import purus from '../assets/purus_casestudy_hero.svg'
// import heroimg from '../assets/blogherosec.png'
import heroimg from '../assets/slab.mp4'
import Letstalk from '../components/Letstalk';
import { Link } from 'react-router-dom';
const blogData = [
  { id: 1, category: ['Branding', 'Websites'], image: aloya, heading: '10 Rules for Great Branding & Design' , link: "/blogs/blog01"},
 
  // { id: 3, category: ['Development'], image: aloya, heading: 'Heading of the blog card will go here' },
  // { id: 4, category: ['Branding'], image: purus, heading: 'Heading of the blog card will go here' },
  // { id: 5, category: ['Websites', 'Development'], image: aloya, heading: 'Heading of the blog card will go here' },
  // { id: 6, category: ['Branding', 'Development'], image: aloya, heading: 'Heading of the blog card will go here' },
];

export default function Blogs() {
  return (
    <div className={styles.blogpage}> 
        <div className={styles.heroSection}><video loop autoPlay src={heroimg} alt="" /></div>
        <div className={styles.heading}><h1 >Articles</h1>
        <h2>Our approach on Design</h2> </div>
      {/* Blog Cards Section */}
      <div className={styles.cardsSection}>
        
        {blogData.map((blog) => (
         <Link to={blog.link}> <div key={blog.id} className={styles.card}>
            <img src={blog.image} alt="Blog" className={styles.cardImage} />
          
            <h3 className={styles.cardHeading}>{blog.heading}  <button className={styles.cardButton}>→</button></h3>
           <p className={styles.date}> Jan 27 2025</p>
          </div> </Link>
        ))}

        {/* Div with Text after 4 cards */}
        {blogData.length > 4 && (
          <div className={styles.callToAction}>
          <div> <p>Ready to Get Started? <span>Let's talk </span></p>
            <a href="mailto:hello@haraaydesignstudio.com">hello@haraaydesignstudio.com</a></div> 
          <div className={styles.btndiv}>  <button className={styles.teamButton}>Talk to Our Team →</button></div>
          </div>
        )}
      </div>
     
      </div>
  );
}
