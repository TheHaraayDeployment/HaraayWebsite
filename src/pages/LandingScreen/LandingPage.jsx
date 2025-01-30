import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import axios from "axios";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./LandingPage.module.scss";
import Hero from "./Hero.jsx";
import heroimg1 from "../../assets/bakers_casestudy_details_overviewimg2.svg";
import heroimg2 from "../../assets/purus_casestudy_overview.svg";
import heroimg6 from "../../assets/purus_casestudy_hero.svg";
import heroimg4 from "../../assets/Serenecasepackaging1.svg";
import heroimg5 from "../../assets/SereneCasestudyPackaging.svg";
import heroimg3 from "../../assets/ViratCasestudyPackaging2.svg";
// projects
import Akoyaheroimg from "../../assets/Akoyaheroimg.svg";
import Projectimg1 from "../../assets/Akoyaheroimg.webp";
import Projectimg2 from "../../assets/Bosch/Boschimg.webp";
import Projectimg3 from "../../assets/BMS/BMSimg.webp";
import Projectimg4 from "../../assets/Lokneta/lokneta.webp";
import Projectimg5 from "../../assets/Satvikraas/Satvikraas.webp";

import Purushero from "../../assets/purus.svg";

import AkoyaLOGO from "../../assets/Logo/LOGO Akoya.png";
import BakersLOGO from "../../assets/Logo/LOGO Bakers.png";
import BoschLOGO from "../../assets/Logo/LOGO Bosch.png";
import EdynamicsLOGO from "../../assets/Logo/LOGO Edynamics.png";
import MittalLOGO from "../../assets/Logo/LOGO Mittal.png";
import PurusLOGO from "../../assets/Logo/LOGO Purus.png";
import SamrudhaLOGO from "../../assets/Logo/LOGO Samruddh.png";
import SunLOGO from "../../assets/Logo/LOGO Sun.png";
import ViratLOGO from "../../assets/Logo/LOGO Virat.png";
import OtherLOGO from "../../assets/Logo/LOGO h.png";

import shape1 from "../../assets/shape1.png";
import partnertxt from "../../assets/partnertxt.svg";
import googlelogo from "../../assets/googlelogo.svg";
import testprofile1 from "../../assets/profile.jpeg";
import purusprofile from "../../assets/puruslogo.png";

import scissor from "../../assets/scissor.svg";
import { useInView } from "react-intersection-observer";
import Letstalk from "../../components/Letstalk.jsx";
import Icons from "../../components/Icons.jsx";
// animation for
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
// Partners Image
const partnerImages = [
  AkoyaLOGO,
  BakersLOGO,
  BoschLOGO,
  EdynamicsLOGO,
  MittalLOGO,
  PurusLOGO,
  SamrudhaLOGO,
  SunLOGO,
  ViratLOGO,
  OtherLOGO,
];
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
  const [labelText, setLabelText] = useState("Last Name");

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "business") {
      setLabelText("Business Name");
    } else if (selectedValue === "job") {
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

  useEffect(() => {
    const projectCards = document.querySelectorAll(".projectCards");

    projectCards.forEach((card, index) => {
      const isEven = index % 2 === 0;
      gsap.fromTo(
        card,
        {
          x: isEven ? "100%" : "-100%", // Initial position based on index
          rotateZ: isEven ? 20 : -20, // Rotate based on index
        },
        {
          x: "0%", // Final position
          rotateZ: 0, // Final rotation
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 30%",
            scrub: 0.6,
            markers: false, // Debug markers (set true for debugging)
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  // Gsap Cards Recent Works End

  // Form api

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
    serviceType: "business", // default to business
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_46bjn7n";
    const templateId = "template_5ezxh0b";
    const publicKey = "kur0xlk0tkiiMPcML";

    // const serviceId = 'service_5diw67o';
    // const templateId = 'template_anikidn';
    // const publicKey = 'rDXD6lwaxGvPMjhl3';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        // businessName: formData.serviceType === 'business' ? formData.businessName : '',
        emailAddress: formData.emailAddress,
        phoneNo: formData.mobileNumber,
        type: formData.serviceType,
        message: formData.message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      // Reset form after successful submission
      setFormData({
        firstName: "",
        businessName: "",
        lastName: "",
        mobileNumber: "",
        emailAddress: "",
        serviceType: "business",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  };
  return (
    <div className={styles.Landingpage}>
      <div className={styles.allsection}>
        <section className={styles.Herosec}>
          <Hero></Hero>
        
        </section>
       
        <section className={styles.Subherosec}>
          <h1 className={styles.Subherotxt}>
            Turning your problems to Transformative designs!
          </h1>
        </section>
        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className={styles.Wearesec}
        >
          <h2>We are </h2>
          <h1>Global Design Consultancy</h1>
          <h2>Powering brands for a brave new world. </h2>

          <div data-aos="fade-up" className={styles.Subherotxtbtn}>
            {" "}
            <button>
              {" "}
              <Link to="/about">Learn more About us </Link>
            </button>{" "}
            <button>
              {" "}
              <Link to="/expertise"> Discover our capabilities </Link>
            </button>
          </div>
        </section>
        {/* recent work txt */}
        <div data-aos="fade-up" className={styles.stickyparent}>
          <div className={styles.sticky}>
            <div className={styles.scrollsection}></div>
          </div>
        </div>
        <section className={styles.worksec}>
          <div className="projectCards">
            <div className={styles.projectcardtxt}>
              <h1>Akoya</h1>
              <h3>Branding & Packaging</h3>
            </div>
            <img
              draggable="false"
              className={styles.projectimg}
              src={Projectimg1}
              alt="Project Card"
            />
          </div>
          <div className="projectCards">
            <div className={styles.projectcardtxt}>
              <h1>Bosch Air Purifier</h1>
              <h3>3D</h3>
            </div>
            <img
              draggable="false"
              className={styles.projectimg}
              src={Projectimg2}
              alt="Project Card"
            />
          </div>
          <div className="projectCards">
            <div className={styles.projectcardtxt}>
              <h1>BMS</h1>
              <h3>Web Designing</h3>
            </div>
            <img
              draggable="false"
              className={styles.projectimg}
              src={Projectimg3}
              alt="Project Card"
            />
          </div>
          <div className="projectCards">
            <div className={styles.projectcardtxt}>
              <h1>Lokneta</h1>
              <h3>Mobile App Designing</h3>
            </div>
            <img
              draggable="false"
              className={styles.projectimg}
              src={Projectimg4}
              alt="Project Card"
            />
          </div>{" "}
          <div className="projectCards">
            <div className={styles.projectcardtxt}>
              <h1>SatvikRaas</h1>
              <h3>Branding | Website | Packaging</h3>
            </div>
            <img
              draggable="false"
              className={styles.projectimg}
              src={Projectimg5}
              alt="Project Card"
            />
          </div>
          <div className={styles.projcardsbtn}> <Link data-aos="fade-up"   to={"/works"}>
            See More Works</Link></div>
        </section>
        <section data-aos="fade-up" className={styles.partners}>
          <div className={styles.partnrshead}>
            <h1>Our Partners</h1>
            <p>
              From champions to challengers, our clients have creative courage
              in common.
            </p>
          </div>

          <div data-aos="fade-up" className={styles.partnercontent}>
            <div className={styles.imageslider}>
              <div className={styles.imagetrack}>
                {repeatedImages.map((imgSrc, index) => (
                  <img
                    draggable="false"
                    key={index}
                    src={imgSrc}
                    alt={`Partner ${(index % 4) + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className={styles.imageslider2}>
              <div className={styles.imagetrack2}>
                {partnertextImg.map((imgSrc, index) => (
                  <img
                    draggable="false"
                    key={index}
                    src={imgSrc}
                    alt={`Partner ${index + 1}`}
                  />
                ))}
              </div>{" "}
            </div>
          </div>
        </section>
        <section data-aos="fade-up" className={styles.testimonial}>
          <h1>Testimonials</h1>
          <p>Why Everyone Loves Haraay</p>
          <div className={styles.testimonialContainer}>
            <div data-aos="fade-left" className={styles.testimonialCard}>
              <div className={styles.profile}>
                <img draggable="false" src={PurusLOGO} alt="Profile 1" />
              </div>
              <div className={styles.content}>
                <div className={styles.testname}>
                  {" "}
                  <h3>Puru’s Enterprise</h3>
                  <p className={styles.testrole}>founder & ceo</p>
                </div>
                <p className={styles.review}>
                  Puru's association with Haraay has been wonderful &
                  fulfilling. The project scope was brand Identity, website &
                  packaging design. Haraay overexceeded our expectations and
                  ensure we got what we were looking from a qualitative agency.
                  We express our gratitude and wish Haraay sustainability growth
                  & success.
                </p>
                <div className={styles.caseStudy}>
                  {/* <p>Explore Case Study</p>
                  <h4>Explore Case Study</h4> */}
                  <div className={styles.rating}>
                    <span>5.0</span>
                    <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                    <img
                      draggable="false"
                      src={googlelogo}
                      alt="Google Rating"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className={styles.testimonialCard}
            >
              <div className={styles.profile}>
                <img draggable="false" src={testprofile1} alt="Profile 1" />
              </div>
              <div className={styles.content}>
                <div className={styles.testname}>
                  {" "}
                  <h3>Mr. Arvind </h3>
                  <p className={styles.testrole}>MD & CEO</p>
                </div>
                <p className={styles.review}>
                  What truly sets them apart is their ability to weave
                  innovation into every element — our new website not only looks
                  incredible, but it also functions flawlessly, making user
                  experience effortless and intuitive. The 3D animations they
                  crafted are immersive and elevate our digital presence to
                  another level, bringing our products to life in a way that
                  captivates our audience.
                </p>
                <div className={styles.caseStudy}>
                    {/* <p>Explore Case Study</p> <h4>Explore Case Study</h4> */} 
                  <div className={styles.rating}>
                    <span>5.0</span>
                    <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                    <img
                      draggable="false"
                      src={googlelogo}
                      alt="Google Rating"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="600"
              className={styles.testimonialCard}
            >
              <div className={styles.profile}>
                <img draggable="false" src={testprofile1} alt="Profile 1" />
              </div>
              <div className={styles.content}>
                <div className={styles.testname}>
                  {" "}
                  <h3>Mr. Mohit</h3>
                  <p className={styles.testrole}>Product manager</p>
                </div>
                <p className={styles.review}>
                  If you're looking for a team that’s not only experts in their
                  field but also genuinely passionate about your brand's
                  success, look no further. Haraay Studio has helped us stand
                  out in a crowded market, and we couldn't be more thrilled with
                  the results!"
                </p>
                <div className={styles.caseStudy}>
                    {/* <p>Explore Case Study</p> <h4>Explore Case Study</h4> */}
                  <div className={styles.rating}>
                    <span>5.0</span>
                    <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                    <img
                      draggable="false"
                      src={googlelogo}
                      alt="Google Rating"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              data-aos="fade-left"
              data-aos-delay="900"
              className={styles.testimonialCard}
            >
              <div className={styles.profile}>
                <img draggable="false" src={testprofile1} alt="Profile 1" />
              </div>
              <div className={styles.content}>
                <div className={styles.testname}>
                  {" "}
                  <h3>Shirishti </h3>
                  <p>Head of Digital Transformation</p>
                </div>
                <p className={styles.review}>
                  We hired Haraay Design Studios to create a new brand identity
                  and social media presence. We are delighted with the service
                  and the brilliant work done by Haraay Design Studios. I would
                  recommend them to get your brand out there and running.
                </p>
                <div className={styles.caseStudy}>
                    {/* <p>Explore Case Study</p> <h4>Explore Case Study</h4> */}
                  <div className={styles.rating}>
                    <span>5.0</span>
                    <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                    <img
                      draggable="false"
                      src={googlelogo}
                      alt="Google Rating"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section data-aos="fade-up" className={styles.Blogsec}>
          <h1>Blogs </h1>
          <div className={styles.blogcards}>
            <div
              data-aos-delay="0"
              data-aos="fade-left"
              className={styles.blogcard}
            >
             <img draggable="false" src={Akoyaheroimg} />
              <div>
                <h4>Brand Stratergy </h4>
                <h4>Brand Persnality</h4>
              </div>
              <p>
                Heading of the blog card will go HereHeading of the blog card
                will go Here
              </p>

              <button>
                {" "}
                <Icons.BsArrowRight title="Home" />{" "}
              </button>
            </div>
            <div
              data-aos-delay="500"
              data-aos="fade-left"
              className={styles.blogcard}
            >
             <img draggable="false" src={Akoyaheroimg} />
              <div>
                <h4>Brand Stratergy </h4>
                <h4>Brand Persnality</h4>
              </div>
              <p>
                Heading of the blog card will go HereHeading of the blog card
                will go Here
              </p>

              <button>
                {" "}
                <Icons.BsArrowRight title="Home" />{" "}
              </button>
            </div>
            <div
              data-aos-delay="1000"
              data-aos="fade-left"
              className={styles.blogcard}
            >
             <img draggable="false" src={Akoyaheroimg} />
              <div>
                <h4>Brand Stratergy </h4>
                <h4>Brand Persnality</h4>
              </div>
              <p>
                Heading of the blog card will go HereHeading of the blog card
                will go Here
              </p>

              <button>
                {" "}
                <Icons.BsArrowRight title="Home" />{" "}
              </button>
            </div>
          </div>
        </section> */}
        <section data-aos="fade-up" className={styles.Getintouch}>
          <h1>Get in Touch</h1>
          <div className={styles.getcard}>
            <div className={styles.formimg}>
              {" "}
              <h1></h1>
              <img
                draggable="false"
                src={shape1}
                className={styles.contactshape}
              />
            </div>
            <div className={styles.form}>
              <form onSubmit={handleSubmit}>
                <div className={styles.forminputes}>
                  <div className={`${styles.enquiryinput} ${styles.servicediv}`}>
                    <label className={styles.servicebtn}>
                    Enquiry Type <span>*</span>{" "}
                    </label>
                    <div className={styles.serviceinput}>
                    <input
                      type="radio"
                      name="serviceType"
                      value="business"
                      onChange={(e) => {
                        handleRadioChange(e);
                        handleChange(e);
                      }}
                      // checked={formData.serviceType === "business"}
                    />
                    <h5>Buisness</h5>
                    <input
                      type="radio"
                      name="serviceType"
                      value="job"
                      // checked={formData.serviceType === "job"}
                      onChange={(e) => {
                        handleRadioChange(e);
                        handleChange(e);
                      }}
                    />
                    <h5>Job</h5> </div>
                  </div>

                  <div className={styles.labeldiv}>
                    {" "}
                    <label>
                      {" "}
                      First Name <span>*</span>{" "}
                    </label>{" "}
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    name="firstName"
                    placeholder="Enter First name"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.forminputes}>
                  {" "}
                  <div className={styles.labeldiv}>
                    {" "}
                    <label>
                      {labelText} <span>*</span>{" "}
                    </label>{" "}
                  </div>
                  <input
                    onChange={handleChange}
                    type="text"
                    required
                    name="lastName"
                    value={formData.lastName}
                    placeholder={
                      labelText === "Last Name"
                        ? "Enter Last Name"
                        : "Enter Company Name"
                    }
                  />
                </div>{" "}
                <div className={styles.forminputes}>
                  <div className={styles.labeldiv}>
                    {" "}
                    <label>
                      Mobile Number <span>*</span>{" "}
                    </label>{" "}
                  </div>

                  <input
                    onChange={handleChange}
                    type="text"
                    required
                    name="mobileNumber"
                    placeholder="Enter Phone "
                    value={formData.mobileNumber}
                  />
                </div>{" "}
                <div className={styles.forminputes}>
                  <div className={styles.labeldiv}>
                    {" "}
                    <label>
                      E-Mail Address <span>*</span>{" "}
                    </label>{" "}
                  </div>

                  <input
                    onChange={handleChange}
                    type="text"
                    required
                    name="emailAddress"
                    placeholder="Enter Email"
                    value={formData.emailAddress}
                  />
                </div>{" "}
                <div className={styles.forminputes}>
                  <div className={styles.labeldiv}> </div>
                  <textarea
                    placeholder="Type your message here"
                    className={styles.descbox}
                    name="message"
                    onChange={handleChange}
                    cols="40"
                    rows="5"
                  ></textarea>{" "}
                </div>
                <div className={styles.submitbtn}>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </section>{" "}
        <Letstalk data-aos="fade-up" />
      </div>
    </div>
  );
}
