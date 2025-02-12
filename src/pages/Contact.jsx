import React, { useState, useEffect } from "react";
import styles from "../styles/Contactus.module.scss";
import herovid from "../assets/contactherovid.mp4";
import partnerimg1 from "../assets/partnerimg1.svg";
import partnerimg2 from "../assets/partnerimg2.svg";
import partnerimg3 from "../assets/partnerimg3.svg";
import partnerimg4 from "../assets/partnerimg4.svg";
import partnertxt from "../assets/partnertxt.svg";
// logos

import AkoyaLOGO from "../assets/Logo/LOGO Akoya.png";
import BakersLOGO from "../assets/Logo/LOGO Bakers.png";
import BoschLOGO from "../assets/Logo/LOGO Bosch.png";
import EdynamicsLOGO from "../assets/Logo/LOGO Edynamics.png";
import MittalLOGO from "../assets/Logo/LOGO Mittal.png";
import PurusLOGO from "../assets/Logo/LOGO Purus.png";
import SamrudhaLOGO from "../assets/Logo/LOGO Samruddh.png";
import SunLOGO from "../assets/Logo/LOGO Sun.png";
import ViratLOGO from "../assets/Logo/LOGO Virat.png";
import OtherLOGO from "../assets/Logo/LOGO h.png";
import shapee from "../assets/shape2.png";
import { s } from "framer-motion/client";
function Contact() {
  //
  //
  const [labelText, setLabelText] = useState("Last Name");

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
          <div className={styles.leftdiv}>
            <h1>Let's Talk</h1>
            <div>
              <p>Tell us about your next project.</p>
            </div>
            <h4>hello@haraaydesignstudio.com </h4>
          </div>

          <div className={styles.rightdiv}>
            <h1>Our Office</h1>
            <div>
              <p>
                Right , Near Royal Enfield Bhusari colony, Kothrud, Pune,
                Maharashtra 411038
              </p>
            </div>
            <h4 className={styles.phoneno}> +91 7498376495 </h4>
          </div>
        </div>
      </section>

      <section className={styles.partners}>
        <div className={styles.partnrshead}>
          <h1>Our Partners</h1>
          <p>
            From champions to challengers, our clients have creative courage in
            common.
          </p>
        </div>

        <div data-aos="fade-up" className={styles.partnercontent}>
          <div className={styles.imageslider}>
            <div className={styles.imagetrack}>
              {repeatedImages.map((imgSrc, index) => (
                <img
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
                <img key={index} src={imgSrc} alt={`Partner ${index + 1}`} />
              ))}
            </div>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
