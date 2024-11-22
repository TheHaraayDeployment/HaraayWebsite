import React from 'react';
import styles from '../styles/Blogs.module.scss';
import aloya from '../assets/creamforest_casestudy_branding.svg'
import purus from '../assets/purus_casestudy_hero.svg'
import heroimg from '../assets/bloghero.svg'
import Letstalk from '../components/Letstalk';
const blogData = [
  { id: 1, category: ['Branding', 'Websites'], image: aloya, heading: 'Heading of the blog card will go here' },
  { id: 2, category: ['Websites'], image: purus, heading: 'Heading of the blog card will go here' },
  { id: 3, category: ['Development'], image: aloya, heading: 'Heading of the blog card will go here' },
  { id: 4, category: ['Branding'], image: purus, heading: 'Heading of the blog card will go here' },
  { id: 5, category: ['Websites', 'Development'], image: aloya, heading: 'Heading of the blog card will go here' },
  { id: 6, category: ['Branding', 'Development'], image: aloya, heading: 'Heading of the blog card will go here' },
];

export default function Blogs() {
  return (
    <div className={styles.blogpage}> 
        <div className={styles.heroSection}><img src={heroimg} alt="" /></div>
        <div><h1 className={styles.heading}>Blogs</h1> </div>
      {/* Blog Cards Section */}
      <div className={styles.cardsSection}>
        
        {blogData.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <img src={blog.image} alt="Blog" className={styles.cardImage} />
            <div className={styles.cardCategory}>
              {blog.category.join(' / ')} {/* Display multiple categories */}
            </div>
            <h3 className={styles.cardHeading}>{blog.heading}  <button className={styles.cardButton}>→</button></h3>
           
          </div>
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
