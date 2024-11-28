import React from "react";
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

import { s } from "framer-motion/client";
function Contact() {
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
            <video
              src={herovid}
              width="515px"
              height="773px"
              muted
              autoPlay
            ></video>
          </div>
          <div className={styles.contactformsec}>
            <div className={styles.contactform}>
              <h1 className={styles.headtxt}>Connect With Our Experts</h1>
              <div className={styles.form}>
                <form>
                  <div className={styles.forminputes}>
                    <div className={styles.labeldiv}>
                      {" "}
                      <label>
                        First Name <span>*</span>{" "}
                      </label>{" "}
                    </div>
                    <input
                      type="text"
                      required
                      name="firstName"
                      placeholder="Ex:Dhawal Patel"
                    />
                  </div>
                  <div className={styles.forminputes}>
                    {" "}
                    <div className={styles.labeldiv}>
                      {" "}
                      <label>
                        Business Name <span>*</span>{" "}
                      </label>{" "}
                    </div>
                    <input
                      type="text"
                      required
                      name="businessName"
                      placeholder="Ex : Dhawal Patel Tech"
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
                      type="text"
                      required
                      name="mobileNumber"
                      placeholder="Ex: 8945488541"
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
                      type="text"
                      required
                      name="emailAddress"
                      placeholder="dhawal@tech.com"
                    />
                  </div>{" "}
                  <div className={styles.forminputes}>
                    <div className={styles.labeldiv}>
                      {" "}
                      <label>
                        Service Type <span>*</span>{" "}
                      </label>{" "}
                    </div>
                    <div className={styles.enquiryinput}>
                      <input type="radio" name="btype" value="Bussiness" />
                      <h5>Buisness</h5>
                      <input type="radio" name="btype" value="Job" />
                      <h5>Job</h5>
                    </div>
                    {/* <input className={styles.descbox}  
       rows="5" 
        type="text" name="" placeholder="Write Description of Business or Job"></input> */}
                    <textarea
                      placeholder="Type your message here"
                      className={styles.descbox}
                      name="Text1"
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
