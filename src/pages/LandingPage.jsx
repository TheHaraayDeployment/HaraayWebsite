import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/LandingPage.module.scss";
import herovid from "../assets/herovid2.mp4";
import heroimg1 from "../assets/bakers_casestudy_details_overviewimg2.svg";
import heroimg2 from "../assets/purus_casestudy_overview.svg";
import heroimg6 from "../assets/purus_casestudy_hero.svg";
import heroimg4 from "../assets/Serenecasepackaging1.svg";
import heroimg5 from "../assets/SereneCasestudyPackaging.svg";
import heroimg3 from "../assets/ViratCasestudyPackaging2.svg";
import Akoyaheroimg from "../assets/Akoyaheroimg.svg";
import Purushero from "../assets/purus.svg";
import lokneta from "../assets/lokneta.svg";
import partnerimg1 from "../assets/partnerimg1.svg";
import partnerimg2 from "../assets/partnerimg2.svg";
import partnerimg3 from "../assets/partnerimg3.svg";
import partnerimg4 from "../assets/partnerimg4.svg";
import partnertxt from "../assets/partnertxt.svg";
import googlelogo from "../assets/googlelogo.svg";
import testprofile1 from "../assets/profile.jpeg";
import purusprofile from "../assets/puruslogo.png";
import testprofile2 from "../assets/testprofile2.svg";
import scissor from "../assets/scissor.svg";
import { useInView } from "react-intersection-observer";
import Letstalk from "../components/Letstalk.jsx";import Icons from '../components/Icons';
// animation for
import Aos from "aos";
import "aos/dist/aos.css";


// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
// Partners Image 
const partnerImages = [partnerimg1, partnerimg2, partnerimg3, partnerimg4];
const repeatedImages = Array(4).fill(partnerImages).flat(); // Repeat the array 4 times
// Partner image ends

const partnertextImg = Array(24).fill(partnertxt); // Create an array with 24 instances of 'partnertxt'

// 
const blogs = [
  {
    id: 1,
    title: "Blog Post 1",
    date: "October 10, 2024",
    description: "This is a short description for blog post 1.",
    image: "/path-to-your-image/blog1.jpg",
  },
  {
    id: 2,
    title: "Blog Post 2",
    date: "October 12, 2024",
    description: "This is a short description for blog post 2.",
    image: "/path-to-your-image/blog2.jpg",
  },
  {
    id: 3,
    title: "Blog Post 3",
    date: "October 14, 2024",
    description: "This is a short description for blog post 3.",
    image: "/path-to-your-image/blog3.jpg",
  },
];
export default function LandingPage() {

  const [labelText, setLabelText] = useState("First Name");

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Bussiness") {
      setLabelText("Business Name");
    } else if (selectedValue === "Job") {
      setLabelText("Last Name");
    }
  };
  useEffect(() => {

  


    Aos.init({ duration: 1500, once: false }); // Initialize AOS with options
  }, []);

   useEffect(() => {
    const texts = ["Recent", "work"];
    const stickySection = document.querySelector(`.${styles.sticky}`);
    const scrollSection = stickySection.querySelector(
      `.${styles.scrollsection}`
    );

    let textToShow = texts.join(" ");
    const existingTextElement = scrollSection.querySelector(
      `.${styles.dynamicP}`
    );
    if (existingTextElement) {
      existingTextElement.innerText = textToShow;
    } else {
      let tstCSS = document.createElement("p");
      tstCSS.innerText = textToShow;
      tstCSS.className = styles.dynamicP;
      scrollSection.appendChild(tstCSS);
    }

    const handleHome = () => {
      const offset = stickySection.parentElement.offsetTop;
      let percentage = ((window.scrollY - offset) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
      scrollSection.style.transform = `translate3d(${-percentage}vw,0, 0)`;
    };

    window.addEventListener("scroll", handleHome);

    return () => {
      window.removeEventListener("scroll", handleHome);
    };
  }, []);


  useEffect(() => {
   

    // GSAP animation for the Subhero section text
    gsap.fromTo(
      `.${styles.Subherotxt}`,
      { x: "40%", opacity: 0.8 },
      {
        x: "-40%",
        opacity: 1,
        // ease: "expo",
        scrollTrigger: {
          trigger: `.${styles.Subherosec}`,
          start: "top 80%",
          end: "bottom 15%",
          scrub: 1,
          markers: false, // Set to true for debugging
        },
      }
    );
  }, []);
    // Gsap Cards Recent Works
  
  
    // Ensure that ScrollTrigger recalculates positions after setup

  
      // for extracard
      useEffect(() => {
      gsap.fromTo(
        ".projectCards",
        {
          x:  "100%" , // Initial position based on index
          rotateZ: 20  
        },
        {
          x: "0%",                             // Final position
          rotateZ: 0,                           // Final rotation
          duration: 1.5,                        // Duration of animation
          ease: "power2.out",                   // Ease for smooth animation
          scrollTrigger: {
            trigger: ".projectCards",                      // Ensure each card triggers its own animation
            start: "top 80%",
            end: "bottom 60%",
                         
            scrub: 1,                           // Smooth the animation as you scroll
            markers: false,                      // Enable markers for debugging (can be removed later)
            toggleActions: "play none none none", // Control animation actions (like 'play' on enter)
          },
        }
      ); gsap.fromTo(
        ".projectCards1",
        {
          x:  "-100%" , // Initial position based on index
          rotateZ: -20  
        },
        {
          x: "0%",                             // Final position
          rotateZ: 0,                           // Final rotation
          duration: 1.5,                        // Duration of animation
          ease: "power2.out",                   // Ease for smooth animation
          scrollTrigger: {
            trigger: ".projectCards1",                      // Ensure each card triggers its own animation
            start: "top 80%",
            end: "bottom 60%",
                         
            scrub: 1,                           // Smooth the animation as you scroll
            markers: false,                      // Enable markers for debugging (can be removed later)
            toggleActions: "play none none none", // Control animation actions (like 'play' on enter)
          },
        }
      );
    
      gsap.fromTo(
        ".projectCards2",
        {
          x:  "100%" , // Initial position based on index
          rotateZ: 20  
        },
        {
          x: "0%",                             // Final position
          rotateZ: 0,                           // Final rotation
          duration: 1.5,                        // Duration of animation
          ease: "power2.out",                   // Ease for smooth animation
          scrollTrigger: {
            trigger: ".projectCards2",                      // Ensure each card triggers its own animation
            start: "top 80%",
            end: "bottom 60%",
                         
            scrub: 1,                           // Smooth the animation as you scroll
            markers: false,                      // Enable markers for debugging (can be removed later)
            toggleActions: "play none none none", // Control animation actions (like 'play' on enter)
          },
        }
      ); gsap.fromTo(
        ".projectCards3",
        {
          x:  "-100%" , // Initial position based on index
          rotateZ: -20  
        },
        {
          x: "0%",                             // Final position
          rotateZ: 0,                           // Final rotation
          duration: 1.5,                        // Duration of animation
          ease: "power2.out",                   // Ease for smooth animation
          scrollTrigger: {
            trigger: ".projectCards3",                      // Ensure each card triggers its own animation
            start: "top 80%",
            end: "bottom 60%",
                         
            scrub: 1,                           // Smooth the animation as you scroll
            markers: false,                      // Enable markers for debugging (can be removed later)
            toggleActions: "play none none none", // Control animation actions (like 'play' on enter)
          },
        }
      );
    }, []);
   
    
    // Gsap Cards Recent Works End
 
  

 
    return (
      <div className={styles.Landingpage}>
        <div className={styles.allsection}>
          <section className={styles.Herosec}>
            <h1>Haraay</h1>

            <img className={styles.heroimg1} src={heroimg1} />
            <img className={styles.heroimg2} src={heroimg2} />
            <img className={styles.heroimg3} src={heroimg3} />
            <img className={styles.heroimg4} src={heroimg4} />
            <img className={styles.heroimg5} src={heroimg5} />
            <img className={styles.heroimg6} src={heroimg6} />
          </section>
          {/* <section className={styles.Herosec2}>
            <video autoPlay className="herosecvideo" muted src={herovid} />
          </section> */}
          <section className={styles.Subherosec}>
            <h1 className={styles.Subherotxt}>
              Turning your problems to Transformative designs!
            </h1>
          </section>
          <section data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  className={styles.Wearesec}>
            <h2>We are </h2>
            <h1>Global Design Consultancy</h1>
            <h2>Powering brands for a brave new world. </h2>

            <div data-aos="fade-up"  className={styles.Subherotxtbtn}>
              <button>Learn more About us</button>
              <button>Discover our capabilities</button>
            </div>
          </section>
          {/* recent work txt */}

         
<div data-aos="fade-up"  className={styles.stickyparent}>
          <div className={styles.sticky}>
            <div className={styles.scrollsection}></div>
          </div>
        </div>
        
        
          <section  data-aos="fade-up"
     data-aos-duration="3000"  className={styles.worksec}>
            <div className="projectCards">
              <h1>Akoya</h1>
              <img src={Akoyaheroimg} alt="Project Card" />
            </div>{" "}
            <div className="projectCards1">
              <h1>Purus</h1>
              <img src={Purushero} alt="Project Card" />
            </div>{" "}
            <div className="projectCards2">
              <h1>Lokneta</h1>
              <img  src={lokneta} alt="Project Card" />
            </div>
            <div className="projectCards3">
              <h1>Akoya</h1>
              <img  src={Akoyaheroimg} alt="Project Card" />
            </div>{" "}
          </section>
          <section data-aos="fade-up"  className={styles.partners}>
            <div className={styles.partnrshead}>
              <h1>Our Partners</h1>
              <p>
                From champions to challengers, our clients have creative courage
                in common.
              </p>
            </div>

            <div data-aos="fade-up"  className={styles.partnercontent}>
              <div className={styles.imageslider}>
                <div className={styles.imagetrack}>
                {repeatedImages.map((imgSrc, index) => (
        <img key={index}  src={imgSrc} alt={`Partner ${index % 4 + 1}`} />
      ))}
                </div>
              </div>
            
              <div className={styles.imageslider2}>
                <div className={styles.imagetrack2}>
                {partnertextImg.map((imgSrc, index) => (
        <img key={index} src={imgSrc}  alt={`Partner ${index + 1}`} />
      ))}
                </div>{" "}
              </div>
            </div>
          </section>
          <section data-aos="fade-up"  className={styles.testimonial}>
            <h1>Testimonials</h1>
            <p>Why Everyone Loves Haraay</p>
            <div className={styles.testimonialContainer}>
              <div  data-aos="fade-left" className={styles.testimonialCard}>
                <div className={styles.profile}>
                  <img  src={purusprofile} alt="Profile 1" />
                </div>
                <div className={styles.content}>
                  <div className={styles.testname}>
                    {" "}
                    <h3>Puru’s Enterprise</h3>
                    <p>founder & ceo
                    </p>
                  </div>
                  <p className={styles.review}>
                  Puru's association with Haraay has been wonderful & fulfilling. The project scope was brand Identity, website & packaging design. Haraay overexceeded our expectations and ensure we got what we were looking from a qualitative agency. We express our gratitude and wish Haraay sustainability growth & success.

                  </p>
                  <div className={styles.caseStudy}>
                    <p>Explore Case Study</p>
                    <h4>Explore Case Study</h4>
                    <div className={styles.rating}>
                      <span>5.0</span>
                      <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                      <img
                        
                        src={googlelogo}
                        alt="Google Rating"
                      />
                    </div>
                  </div>
                </div>
              </div>
            
              <div  data-aos="fade-left" data-aos-delay="300" className={styles.testimonialCard}>
                <div className={styles.profile}>
                  <img  src={testprofile1} alt="Profile 1" />
                </div>
                <div className={styles.content}>
                  <div className={styles.testname}>
                    {" "}
                    <h3>Mr. Arvind </h3>
                    <p>MD & CEO
                    </p>
                  </div>
                  <p className={styles.review}>
                  What truly sets them apart is their ability to weave innovation into every element — our new website not only looks incredible, but it also functions flawlessly, making user experience effortless and intuitive. The 3D animations they crafted are immersive and elevate our digital presence to another level, bringing our products to life in a way that captivates our audience.

                  </p>
                  <div className={styles.caseStudy}>
                    <p>Explore Case Study</p> <h4>Explore Case Study</h4>
                    <div className={styles.rating}>
                      <span>5.0</span>
                      <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                      <img
                        
                        src={googlelogo}
                        alt="Google Rating"
                      />
                    </div>
                  </div>
                </div>
              </div>
             
              <div  data-aos="fade-left" data-aos-delay="600"className={styles.testimonialCard}>
                <div className={styles.profile}>
                  <img  src={testprofile1} alt="Profile 1" />
                </div>
                <div className={styles.content}>
                  <div className={styles.testname}>
                    {" "}
                    <h3>Mr. Mohit</h3>
                    <p>Product manager
                    </p>
                  </div>
                  <p className={styles.review}>
                  If you're looking for a team that’s not only experts in their field but also genuinely passionate about your brand's success, look no further. Haraay Studio has helped us stand out in a crowded market, and we couldn't be more thrilled with the results!"

                  </p>
                  <div className={styles.caseStudy}>
                    <p>Explore Case Study</p> <h4>Explore Case Study</h4>
                    <div className={styles.rating}>
                      <span>5.0</span>
                      <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                      <img
                        
                        src={googlelogo}
                        alt="Google Rating"
                      />
                    </div>
                  </div>
                </div>
              </div>  <div  data-aos="fade-left" data-aos-delay="900" className={styles.testimonialCard}>
                <div className={styles.profile}>
                  <img  src={testprofile1} alt="Profile 1" />
                </div>
                <div className={styles.content}>
                  <div className={styles.testname}>
                    {" "}
                    <h3>Shirishti </h3>
                    <p>Head of Digital Transformation
                    </p>
                  </div>
                  <p className={styles.review}>
                  We hired Haraay Design Studios to create a new brand identity and social media presence. We are delighted with the service and the brilliant work done by Haraay Design Studios. I would recommend them to get your brand out there and running.
                  </p>
                  <div className={styles.caseStudy}>
                    <p>Explore Case Study</p> <h4>Explore Case Study</h4>
                    <div className={styles.rating}>
                      <span>5.0</span>
                      <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                      <img
                        
                        src={googlelogo}
                        alt="Google Rating"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section  data-aos="fade-up"  className={styles.Blogsec}>
            <h1>Blogs </h1>
            <div className={styles.blogcards}>
              <div  data-aos-delay="0" data-aos="fade-left"  className={styles.blogcard}>
                <img  src={Akoyaheroimg} />
                <div>
                  <h4>Brand Stratergy </h4>
                  <h4>Brand Persnality</h4>
                </div>
                <p>
                  Heading of the blog card will go HereHeading of the blog card
                  will go Here
                </p>

                <button>  <Icons.BsArrowRight  title="Home" />    </button>
              </div>
              <div   data-aos-delay="500" data-aos="fade-left" className={styles.blogcard}>
                <img  src={Akoyaheroimg} />
                <div>
                  <h4>Brand Stratergy </h4>
                  <h4>Brand Persnality</h4>
                </div>
                <p>
                  Heading of the blog card will go HereHeading of the blog card
                  will go Here
                </p>

                <button>  <Icons.BsArrowRight  title="Home" />    </button>
              </div>
              <div  data-aos-delay="1000" data-aos="fade-left" className={styles.blogcard}>
                <img  src={Akoyaheroimg} />
                <div>
                  <h4>Brand Stratergy </h4>
                  <h4>Brand Persnality</h4>
                </div>
                <p>
                  Heading of the blog card will go HereHeading of the blog card
                  will go Here
                </p>

                <button>  <Icons.BsArrowRight  title="Home" />    </button>
              </div>
            </div>
          </section>
          <section data-aos="fade-up"  className={styles.Getintouch}>
            <h1>Get in Touch</h1>
            <div className={styles.getcard}>
              <div className={styles.formimg}>
                {" "}
                <h1>img</h1>
              </div>
              <div className={styles.form}>
                <form>
                  <div className={styles.forminputes}>
                    
                  <div className={styles.enquiryinput}>
                        <label>Service Type <span>*</span> </label> 
                      <input type="radio" name="btype" value="Bussiness"    onChange={handleRadioChange}  />
                      <h5>Buisness</h5>
                      <input type="radio" name="btype" value="Job"    onChange={handleRadioChange}   />
                      <h5>Job</h5>
                    </div>
                    
                  <div className={styles.labeldiv}>  <label>   First Name <span>*</span> </label> </div>
                    <input
                      type="text"
                      required
                      name="firstName"
                      placeholder="Ex:Dhawal Patel"
                    />
                  </div>
                  <div className={styles.forminputes}> <div className={styles.labeldiv}>  <label>{labelText} <span>*</span> </label> </div>
                   
                    <input
                      type="text"
                      required
                      name="businessName"
                      placeholder={labelText === "Last Name" ? "Ex: Dhawal Patel" : "Ex: XYZ Pvt Ltd"}
                    />
                  </div>{" "}
                  <div className={styles.forminputes}> 
                    <div className={styles.labeldiv}>  <label>Mobile Number <span>*</span> </label> </div>
                 
                    <input
                      type="text"
                      required
                      name="mobileNumber"
                      placeholder="Ex: 8945488541"
                    />
                  </div>{" "}
                  <div className={styles.forminputes}>
                  <div className={styles.labeldiv}>  <label>E-Mail Address <span>*</span> </label> </div>
                   
                 
                    <input
                      type="text"
                      required
                      name="emailAddress"
                      placeholder="dhawal@tech.com"
                    />
                  </div>{" "}
                  <div className={styles.forminputes}>
                  <div className={styles.labeldiv}>  <label>Service Type <span>*</span> </label> </div>
                   
                    
               
                    {/* <input className={styles.descbox}  
       rows="5" 
        type="text" name="" placeholder="Write Description of Business or Job"></input> */}
                 <textarea placeholder="Type your message here" className={styles.descbox}  name="Text1" cols="40" rows="5" ></textarea> </div>
                  <div className={styles.submitbtn}>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </section>{" "}
          <Letstalk data-aos="fade-up"  />
        </div>
      </div>
    );
  
}


