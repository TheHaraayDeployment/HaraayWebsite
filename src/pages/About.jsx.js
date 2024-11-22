import React from "react";
import ReactDOM from "react-dom/client";
import Haraay1 from "./Haraay1.png";
import Slider from "react-slick";

const Main = () => {
  // const slider = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div className="AboutUs">
      <section className="Herosec">
        <div className="div1">
          <h1>LOGO</h1>
          <h1>Menu</h1>
        </div>
        <div className="div2">
          <h1>Haraay</h1>
        </div>
      </section>

      <section className="AboutHaraay">
        <div>
          <h1>About Haray</h1>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </p>
          <a href="#">See All Services</a>
        </div>

        <div className="AboutHaraay-img">
          <img src={Haraay1} />
        </div>
      </section>

      <section className="Process">
        <h1>Process</h1>

        <div className="Process-two">
          <div className="steps">
            <h1>The Steps we follow for product</h1>
            <button>Contact Us</button>
          </div>

          <div className="Process-two-content">
            <div className="Scroll">
              <div className="Scroll-numbers">
                <div className="ScrollOne">
                  <h1>1</h1>
                </div>
                <div className="ScrollTwo">
                  <h1>2</h1>
                </div>
                <div className="ScrollThree">
                  <h1>3</h1>
                </div>
                <div className="ScrollFour">
                  <h1>4</h1>
                </div>

                <div className="ProgressBar" id="ProgressBar">
                  <div
                    className="ActualProgressBar"
                    id="ActualProgressBar"></div>
                </div>
              </div>
            </div>

            <div className="Scroll-content">
              <div className="Scroll-description">
                <h1>Research & Analysis</h1>
                <p>
                  We focus on understanding the project in-depth to comprehend
                  its design needs and business objectives, delivering results
                  tailerd to it specific context
                </p>
                <h1>Research & Analysis</h1>
                <p>
                  We focus on understanding the project in-depth to comprehend
                  its design needs and business objectives, delivering results
                  tailerd to it specific context
                </p>
                <h1>Research & Analysis</h1>
                <p>
                  We focus on understanding the project in-depth to comprehend
                  its design needs and business objectives, delivering results
                  tailerd to it specific context
                </p>
                <h1>Research & Analysis</h1>
                <p>
                  We focus on understanding the project in-depth to comprehend
                  its design needs and business objectives, delivering results
                  tailerd to it specific context
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="OurTeam">
        <h1>Our Team</h1>
        <div className="OurTeam-info">
          {/* <Slider {...slider}> */}
          <div>
            <img src={Haraay1} />
            <h1>Full name</h1>
            <h2>Job Title</h2>
          </div>
          <div>
            <img src={Haraay1} />
            <h1>Full name</h1>
            <h2>Job Title</h2>
          </div>
          <div>
            <img src={Haraay1} />
            <h1>Full name</h1>
            <h2>Job Title</h2>
          </div>
          <div>
            <img src={Haraay1} />
            <h1>Full name</h1>
            <h2>Job Title</h2>
          </div>
          {/* </Slider> */}
        </div>
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
