import React from "react";
import styles from "../styles/Contactus.module.scss";
import herovid from "../assets/contactherovid.mp4";
import partnerimg1 from "../assets/partnerimg1.svg";
import partnerimg2 from "../assets/partnerimg2.svg";
import partnerimg3 from "../assets/partnerimg3.svg";
import partnerimg4 from "../assets/partnerimg4.svg";
import partnertxt from "../assets/partnertxt.svg";


import { s } from "framer-motion/client";
function Contact() {
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
                  <div className={styles.labeldiv}>  <label>First Name <span>*</span> </label> </div>
                    <input
                      type="text"
                      required
                      name="firstName"
                      placeholder="Ex:Dhawal Patel"
                    />
                  </div>
                  <div className={styles.forminputes}> <div className={styles.labeldiv}>  <label>Business Name <span>*</span> </label> </div>
                   
                    <input
                      type="text"
                      required
                      name="businessName"
                      placeholder="Ex : Dhawal Patel Tech"
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
                   
                    
               
                    <div className={styles.enquiryinput}>
                      
                      <input type="radio" name="btype" value="Bussiness" />
                      <h5>Buisness</h5>
                      <input type="radio" name="btype" value="Job" />
                      <h5>Job</h5>
                    </div>
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
          </div>
        </div>
      </section>
      <section className={styles.contactdetails}>
        <div className={styles.contactdetailsdiv}>
          <div className={styles.leftdiv}>
            <h1>Let's Talk</h1>
          <div>
          <p>
            Tell us about your next project.
            </p>
          </div>
            <h4>hello@haraaydesignstudio.com  </h4>
          </div>

          <div className={styles.rightdiv}>
            <h1>Our Office</h1>
           <div>
           <p>
            Right , Near Royal Enfield Bhusari colony, Kothrud, Pune, Maharashtra 411038
            </p>
           </div>
            <h4 className={styles.phoneno}> +91 7498376495  </h4>
          </div>
        </div>
        </section>

        <section className={styles.partners}>
            <div className={styles.partnrshead}>
              <h1>Top Brands </h1>
              <p>
                From champions to challengers, our clients have creative courage
                in common.
              </p>
            </div>

            <div className={styles.partnercontent}>
              <div className={styles.imageslider}>
                <div className={styles.imagetrack}>
                  <img src={partnerimg1}></img>
                  <img src={partnerimg2}></img>
                  <img src={partnerimg3}></img>
                  <img src={partnerimg4}></img>
                  <img src={partnerimg1}></img>
                  <img src={partnerimg2}></img> <img src={partnerimg1}></img>
                  <img src={partnerimg2}></img>
                  <img src={partnerimg3}></img>
                  <img src={partnerimg4}></img>
                  <img src={partnerimg1}></img>
                  <img src={partnerimg2}></img> <img src={partnerimg1}></img>
                  <img src={partnerimg2}></img>
                  <img src={partnerimg3}></img>
                  <img src={partnerimg4}></img>
                  <img src={partnerimg1}></img>
                  <img src={partnerimg2}></img> <img src={partnerimg1}></img>
                  <img src={partnerimg2}></img>
                  <img src={partnerimg3}></img>
                  <img src={partnerimg4}></img>
                  <img src={partnerimg1}></img>
                  <img src={partnerimg2}></img>
                </div>
              </div>
              {/* <div className={styles.partnerstext}>
            <img src={partnertxt}></img>
            <img src={partnertxt}></img>
            <img src={partnertxt}></img>
            <img src={partnertxt}></img>
          </div> */}
              <div className={styles.imageslider2}>
                <div className={styles.imagetrack2}>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img> <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img> <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img> <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img> <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img> <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                  <img src={partnertxt}></img>
                </div>{" "}
              </div>
            </div>
          </section>
    </div>
  );
}

export default Contact;
