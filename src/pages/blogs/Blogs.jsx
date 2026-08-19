// import React from 'react';
// import styles from '../styles/Blogs.module.scss';
// import aloya from '../assets/blogs/bloghero.jpeg'
// import purus from '../assets/purus_casestudy_hero.svg'
// // import heroimg from '../assets/blogherosec.png'
// import heroimg from '../assets/slab.mp4'
// import heroimg2 from "../assets/blogs/blog2heroimg.jpg";
// import Letstalk from '../components/Letstalk';
// import { Link } from 'react-router-dom';
// const blogData = [
//   { id: 1, category: ['Branding', 'Websites'], image: aloya, heading: '10 Rules for Great Branding & Design' , link: "/blogs/blog01" , date: "Jan 27 2025"},
//   { id: 2, category: ['Branding', 'Websites'], image: heroimg2, heading: '6 Steps to Creating a Personal Style' , link: "/blogs/blog02" ,date: "Feb 10 2025"},

//   // { id: 3, category: ['Development'], image: aloya, heading: 'Heading of the blog card will go here' },
//   // { id: 4, category: ['Branding'], image: purus, heading: 'Heading of the blog card will go here' },
//   // { id: 5, category: ['Websites', 'Development'], image: aloya, heading: 'Heading of the blog card will go here' },
//   // { id: 6, category: ['Branding', 'Development'], image: aloya, heading: 'Heading of the blog card will go here' },
// ];

// export default function Blogs() {
//   return (
//     <div className={styles.blogpage}>
//         <div className={styles.heroSection}><video loop autoPlay src={heroimg} alt="" /></div>
//         <div className={styles.heading}><h1 >Articles</h1>
//         <h2>Our approach on Design</h2> </div>
//       {/* Blog Cards Section */}
//       <div className={styles.cardsSection}>

//         {blogData.map((blog) => (
//          <Link to={blog.link}> <div key={blog.id} className={styles.card}>
//             <img src={blog.image} alt="Blog" className={styles.cardImage} />

//             <h3 className={styles.cardHeading}>{blog.heading}  <button className={styles.cardButton}>→</button></h3>
//            <p className={styles.date}>{blog.date} </p>
//           </div> </Link>
//         ))}

//         {/* Div with Text after 4 cards */}
//         {blogData.length > 4 && (
//           <div className={styles.callToAction}>
//           <div> <p>Ready to Get Started? <span>Let's talk </span></p>
//             <a href="mailto:hello@haraaydesignstudio.com">hello@haraaydesignstudio.com</a></div>
//           <div className={styles.btndiv}>  <button className={styles.teamButton}>Talk to Our Team →</button></div>
//           </div>
//         )}
//       </div>

//       </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import styles from "./blogsPage.module.scss";
import blog1Img from "../../assets/blogs/bloghero.jpeg";

// Import dummy images — replace these with your actual imports
// import blog1Img from "./blog1.jpg";
// import blog2Img from "./blog2.jpg";
import blog3Img from "./Blog3.jpg";
import blog4Img from "./blog4b.png";
import blog2Img from "../../assets/blogs/blog2heroimg.jpg";
const blogs = [
  {
    id: "blog03",
    title:
      "They said AI would replace design. Instead, it proved how much it matters.",
    description:
      "The most ironic outcome of the AI design revolution is this: it has made strategic design more valuable, more visible, and more urgently necessary than at any point in the last decade. Here is why the prediction got it exactly backwards.",
    tags: ["AI", "Haraay AI", "Technology"],
    image: blog3Img,
  },
  {
    id: "blog04",
    title: "Why I started a design studio when everyone said AI would end it.",
    description:
      'When I was building the foundations of Haraay, the most common question I received was not "what kind of work will you do?" It was: "why now when AI can already do this?" Here is what I have learned since.',
    tags: ["Haraay", "Personal Story", "Haraay's Story"],
    image: blog4Img,
  },
  {
    id: "blog01",
    title: "10 Rules for Great Branding & Design",
    description:
      "Developing a distinctive creative style and voice is key to standing out in a crowded field. It sets you apart, makes your work unforgettable, and positions you as desirable in the job market.",
    tags: ["Brand Identity", "3D Design", "Graphic Designing"],
    image: blog1Img,
  },
  {
    id: "blog02",
    title: "6 Steps to Creating a Personal Style",
    description:
      "Every groundbreaking idea begins with a simple yet powerful question: Why? Take a moment to reflect on what frustrates or disappoints you about the world around you and let it guide your thinking.",
    tags: ["Personal Style", "Branding", "Creative Voice"],
    image: blog2Img,
  },
];

const BlogsPage = () => {
  return (
    <div className={styles.blogsPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Articles</h1>
        <p className={styles.pageSubtitle}>
          Our approach on Designs,
          <br />
          Tech and more
        </p>
      </div>

      {/* Blog cards */}
      <div className={styles.blogList}>
        {blogs.map((blog) => (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.id}
            className={styles.blogCard}
          >
            <div className={styles.cardContent}>
              <h2 className={styles.blogTitle}>{blog.title}</h2>
              <p className={styles.blogDescription}>{blog.description}</p>
              <div className={styles.tags}>
                {blog.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.cardImage}>
              <img src={blog.image} alt={blog.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
