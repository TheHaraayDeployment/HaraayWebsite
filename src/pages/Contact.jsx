import React, { useState, useEffect } from "react";
import styles from "../styles/Contactus.module.scss";

import {Link} from "react-router-dom"

import shapee from "../assets/shape2.png";
import { s } from "framer-motion/client";
function Contact() {
  //
  //
  const [labelText, setLabelText] = useState("Last Name");
const arrow = useState(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M20.3618 19.2754L24 15.6377L20.3618 11.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 15.6858H12.0935C17.4252 15.6834 16.5471 15.6875 20.5659 15.6875H22.6596" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);  
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "business") {
      setLabelText("Business Name");
    } else if (selectedValue === "job") {
      setLabelText("Last Name");
    }
  };
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
      // console.log(res.data);
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
  //form api ends
   const [openIndex, setOpenIndex] = useState(null);
  
    const toggleDropdown = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  const faqData = [
    {
      category: "Our Work",
      items: [
        {
          question: "New Business",
          answer:
            "For new business inquiries, please email a detailed brief of your project to  ",
        },
        {
          question: "Applying for Internships",
          answer:
            `We offer paid creative internships. Email us a link to your website at career@haraaydesignstudio.com. Please include the type of position you're applying for (Design, Production, Motion, etc.) in the subject of the email followed by “Intern Application." (Example: Production Intern Application)` ,
        },
        {
          question:
            "Applying for Positions",
          answer:
            "We are always on the lookout for talented creatives to join our team. Email us a link to your website to career@haraaydesignstudio.com. Please make the subject of the email: Job Application: Position Title (Designer, Producer, Animator, Photographer, etc.)",
        },
        {
          question: "Student Questions",
          answer:
            "Unfortunately, we can’t respond to every single question emailed to us, as we receive a large volume of questions every day. We have answered a large section of answers on our website, please check it out!",
        }
      ],
    },
  ];
  return (
    <div className={styles.contactpage}>
      <section className={styles.Herosec}>
        <div className={styles.Herodiv}>
          <div className={styles.videodiv}>
            {/* <video
              src={herovid}
              width="515px"
              height="773px"
              muted
              autoPlay
            ></video> */}
            <img src={shapee} className={styles.shape}></img>
          </div>
          <div className={styles.contactformsec}>
            <div className={styles.contactform}>
              <h1 className={styles.headtxt}>Connect With Our Experts</h1>
              <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                  <div className={styles.forminputes}>
                    <div className={styles.enquiryinput}>
                      <label className={styles.servicebtn}>
                        Service Type <span>*</span>{" "}
                      </label>
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
                      <h5>Job</h5>
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
                      placeholder="Enter First Name"
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
                      placeholder="Enter Phone"
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
          </div>
        </div>
      </section>
      <section className={styles.contactdetails}>
        <div className={styles.contactdetailsdiv}>
         <div className={styles.infocards}>
          <div className={styles.infoCard}>
            <h1>New Bussiness</h1>
            <a  href="mailto:business@haraaydesignstudio.com">business@haraaydesignstudio.com <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M20.3618 19.2754L24 15.6377L20.3618 11.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 15.6858H12.0935C17.4252 15.6834 16.5471 15.6875 20.5659 15.6875H22.6596" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></a>
          </div>
          <div className={styles.infoCard}>
            <h1>Join Our Team</h1>
            <a href="mailto:career@haraaydesignstudio.com">career@haraaydesignstudio.com <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M20.3618 19.2754L24 15.6377L20.3618 11.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 15.6858H12.0935C17.4252 15.6834 16.5471 15.6875 20.5659 15.6875H22.6596" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></a>
          </div>
          <div className={styles.infoCard}>
            <h1>Other Inquiries</h1>
            <a href="mailto:hello@haraaydesignstudio.com">hello@haraaydesignstudio.com <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M20.3618 19.2754L24 15.6377L20.3618 11.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 15.6858H12.0935C17.4252 15.6834 16.5471 15.6875 20.5659 15.6875H22.6596" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></a>
          </div>
         </div> <div className={styles.infocards}>
          <div className={styles.infoCard}>
            <h1>Phone</h1>
            <a href=""> +91 7498376495 <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M20.3618 19.2754L24 15.6377L20.3618 11.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 15.6858H12.0935C17.4252 15.6834 16.5471 15.6875 20.5659 15.6875H22.6596" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></a>
          </div>
          <div className={styles.infoCard}>
            <h1>Address</h1>
            <p >Right , Near Royal Enfield Bhusari colony, Kothrud, Pune, Maharashtra 411038</p>
          </div>
          <div className={styles.infoCard}>
            <h1>Office Hours</h1>
            
            <p>Mon – Sat / 9:30AM – 5:30PM</p>
          </div>
         </div>
        </div>
      </section>
<section className={styles.faqSection}>
  <div className={styles.faqscontent}>
          {/* Blog Cards Section */}
          <h1 className={styles.faqheading}>FAQ</h1>
          {faqData.map((section, sectionIdx) => (
            <div key={sectionIdx} className={styles.section}>
             
              {section.items.map((item, index) => {
                const uniqueIndex = `${sectionIdx}-${index}`;
                return (
                  <div
                    key={uniqueIndex}
                    className={`${styles.faqItem} ${
                      openIndex === uniqueIndex ? styles.open : ""
                    }`}
                  >
                    <button
                      className={styles.question}
                      onClick={() => toggleDropdown(uniqueIndex)}
                    >
                      {item.question}   <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"      className={openIndex === uniqueIndex ? styles.rotate : styles.normal}
                    >
                      <rect
                        y="34"
                        width="34"
                        height="34"
                        rx="17"
                        transform="rotate(-90 0 34)"
                        fill="#E5348C"
                      />
                      <path
                        d="M10.0555 23.3546L16.8819 11.2196C16.9197 11.1529 16.9745 11.0975 17.0407 11.0589C17.1069 11.0203 17.1822 11 17.2588 11C17.3354 11 17.4107 11.0203 17.4769 11.0589C17.5431 11.0975 17.5978 11.1529 17.6356 11.2196L24.462 23.3546C24.5055 23.4324 24.5238 23.5217 24.5146 23.6104C24.5055 23.699 24.4692 23.7826 24.4108 23.8499C24.3523 23.9171 24.2746 23.9647 24.1881 23.9862C24.1016 24.0076 24.0106 24.0019 23.9275 23.9697L17.4156 21.4384C17.3147 21.3992 17.2029 21.3992 17.102 21.4384L10.59 23.9706C10.5068 24.0029 10.4157 24.0088 10.3291 23.9873C10.2424 23.9659 10.1645 23.9182 10.106 23.8507C10.0475 23.7833 10.0113 23.6995 10.0022 23.6107C9.99319 23.5219 10.0118 23.4325 10.0555 23.3546Z"
                        fill="white"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    </button>{" "}
                  
                    <div
                      className={styles.answer}
                      style={{
                        display: openIndex === uniqueIndex ? "block" : "none",
                      }}
                    >
                      {item.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
          
          <Link to={"/faq"} className={styles.viewbtn}>View all FAQ’s <span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <rect width="36" height="36" rx="18" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8359 17.5591L20.9032 23.4932L19.9382 22.5297L24.2273 18.2406H8.83594V16.8777H24.2273L19.9382 12.5899L20.9032 11.625L26.8359 17.5591Z" fill="#E5348C"/>
</svg></span></Link>
        </div>
</section>
    
    </div>
  );
}

export default Contact;
