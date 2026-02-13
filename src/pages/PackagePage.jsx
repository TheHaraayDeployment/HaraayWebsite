import React, { useRef } from "react";
import styles from "../styles/PackagePage.module.scss";
import DummyImg from "../assets/RectangleDemoImg.png";
import Scrollablesection from "../components/ScrollableCards";
import googlelogo from "../assets/googlelogo.svg";
import Aos from "aos";
import "aos/dist/aos.css";
export default function PackagePage() {
  // testimonial btns
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className={styles.packagepage}>
      <section className={styles.sectionOne}>
        <div className={styles.leftDiv}>
          <div className={styles.topDiv}>
            <div className={styles.buttonsDiv}>
              <button className={styles.Herobutton}>Book a Call</button>
              <button className={styles.Herobutton2}>See Pricing</button>
            </div>
          </div>
          <div className={styles.bottomDiv}>
            <div className={styles.title}>
              <h1>Design subscriptions made for everyone.</h1>
              <h3>Elite design. On subscription.</h3>
              <p>Pause or cancel anytime.</p>
            </div>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <img src={DummyImg} alt="" />
        </div>
      </section>
      <section className={styles.sectionTwo}>
        <h2>
          One Subscription. Endless Design <span>Possibilities</span>.
        </h2>
        <div className={styles.Cards}>
          <img src={DummyImg} alt="" />
          <img src={DummyImg} alt="" />
          <img src={DummyImg} alt="" />
          <img src={DummyImg} alt="" />
          <img src={DummyImg} alt="" />
        </div>
      </section>
      <section className={styles.sectionThree}>
        <div className={styles.Container}>
          <h2>One Subscription. Endless Design Possibilities.</h2>
          <p></p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Scrollablesection />
            </div>
          </div>
        </div>{" "}
      </section>{" "}
      <section className={styles.testimonial}>
        <p>Why Every one Loves Haraay</p>
        <div className={styles.testimonialContainer} ref={containerRef}>
          <div className={styles.testimonialCard}>
            <div className={styles.profile}>
              <img draggable="false" src={DummyImg} alt="Profile 1" />
            </div>
            <div className={styles.content}>
              <div className={styles.testname}>
                {" "}
                <h3>Puru’s Enterprise</h3>
                <p className={styles.testrole}>founder & ceo</p>
              </div>
              <p className={styles.review}>
                Puru's association with Haraay has been wonderful & fulfilling.
                The project scope was brand Identity, website & packaging
                design. Haraay overexceeded our expectations and ensure we got
                what we were looking from a qualitative agency. We express our
                gratitude and wish Haraay sustainability growth & success.
              </p>
              <div className={styles.caseStudy}>
                {/* <p>Explore Case Study</p>
                        <h4>Explore Case Study</h4> */}
                <div className={styles.rating}>
                  <span>5.0</span>
                  <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                  <img draggable="false" src={googlelogo} alt="Google Rating" />
                </div>
              </div>
            </div>
          </div>
          <div data-aos-delay="300" className={styles.testimonialCard}>
            <div className={styles.profile}>
              <img draggable="false" src={DummyImg} alt="Profile 1" />
            </div>
            <div className={styles.content}>
              <div className={styles.testname}>
                {" "}
                <h3>Mr. Arvind </h3>
                <p className={styles.testrole}>MD & CEO</p>
              </div>
              <p className={styles.review}>
                What truly sets them apart is their ability to weave innovation
                into every element — our new website not only looks incredible,
                but it also functions flawlessly, making user experience
                effortless and intuitive. The 3D animations they crafted are
                immersive and elevate our digital presence to another level,
                bringing our products to life in a way that captivates our
                audience.
              </p>
              <div className={styles.caseStudy}>
                {/* <p>Explore Case Study</p> <h4>Explore Case Study</h4> */}
                <div className={styles.rating}>
                  <span>5.0</span>
                  <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                  <img draggable="false" src={googlelogo} alt="Google Rating" />
                </div>
              </div>
            </div>
          </div>
          <div data-aos-delay="600" className={styles.testimonialCard}>
            <div className={styles.profile}>
              <img draggable="false" src={DummyImg} alt="Profile 1" />
            </div>
            <div className={styles.content}>
              <div className={styles.testname}>
                {" "}
                <h3>Mr. Mohit</h3>
                <p className={styles.testrole}>Product manager</p>
              </div>
              <p className={styles.review}>
                If you're looking for a team that’s not only experts in their
                field but also genuinely passionate about your brand's success,
                look no further. Haraay Studio has helped us stand out in a
                crowded market, and we couldn't be more thrilled with the
                results!"
              </p>
              <div className={styles.caseStudy}>
                {/* <p>Explore Case Study</p> <h4>Explore Case Study</h4> */}
                <div className={styles.rating}>
                  <span>5.0</span>
                  <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                  <img draggable="false" src={googlelogo} alt="Google Rating" />
                </div>
              </div>
            </div>
          </div>{" "}
          <div data-aos-delay="900" className={styles.testimonialCard}>
            <div className={styles.profile}>
              <img draggable="false" src={DummyImg} alt="Profile 1" />
            </div>
            <div className={styles.content}>
              <div className={styles.testname}>
                {" "}
                <h3>Shirishti </h3>
                <p>Head of Digital Transformation</p>
              </div>
              <p className={styles.review}>
                We hired Haraay Design Studios to create a new brand identity
                and social media presence. We are delighted with the service and
                the brilliant work done by Haraay Design Studios. I would
                recommend them to get your brand out there and running.
              </p>
              <div className={styles.caseStudy}>
                {/* <p>Explore Case Study</p> <h4>Explore Case Study</h4> */}
                <div className={styles.rating}>
                  <span>5.0</span>
                  <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                  <img draggable="false" src={googlelogo} alt="Google Rating" />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className={styles.arrowbtns}>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <rect width="52" height="52" rx="26" fill="#E5348C" />
              <path
                d="M14 26L21.9103 18L23.1969 19.299L17.4782 25.0813L38 25.0813V26.9187L17.4782 26.9187L23.1969 32.6991L21.9103 34L14 26Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <rect width="52" height="52" rx="26" fill="#E5348C" />
              <path
                d="M38 26L30.0897 34L28.8031 32.701L34.5218 26.9187H14V25.0813H34.5218L28.8031 19.3009L30.0897 18L38 26Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
