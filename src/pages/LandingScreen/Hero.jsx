import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import "../../styles/Hero.scss";
import Projectimg1 from "../../assets/Akoyaheroimg.webp";
import Projectimg2 from "../../assets/Bosch/Boschimg.webp";
import Projectimg3 from "../../assets/BMS/BMSimg.webp";
import Projectimg4 from "../../assets/Lokneta/lokneta.webp";
import Projectimg5 from "../../assets/Bakers/Bakers.webp";
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={800}
          transitionSpeed={1000}
          className="tilt-container"
        >
          <div className="tilt-child">
            <h1
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${
                  mousePosition.y * 0.02
                }px)`,
              }}
            >
              {/* Haraay */}
            </h1>
            <img
              draggable="false"
              src={Projectimg1}
              alt="Image 1"
              //   className="w-1/3 transform translate-x-[-10%] translate-y-[5%]"
              style={{
                transform: `translate(${mousePosition.x * 0.05}px, ${
                  mousePosition.y * 0.05
                }px)`,
              }}
              className="image1"
            />
            <img
              draggable="false"
              src={Projectimg2}
              alt="Image 2"
              //   className="w-1/3 transform translate-x-[10%] translate-y-[-5%]"
              style={{
                transform: `translate(${mousePosition.x * -0.03}px, ${
                  mousePosition.y * -0.03
                }px)`,
              }}
              className="image2"
            />
            <img
              draggable="false"
              src={Projectimg4}
              alt="Image4"
              //   className="w-1/3 transform translate-x-[20%] translate-y-[10%]"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${
                  mousePosition.y * 0.02
                }px)`,
              }}
              className="image4"
            />{" "}
            <img
              draggable="false"
              data-aos="fade-down"
              src={Projectimg5}
              alt="Image5"
              //   className="w-1/3 transform translate-x-[20%] translate-y-[10%]"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${
                  mousePosition.y * 0.01
                }px)`,
              }}
              className="image5"
            />{" "}
            <img
              draggable="false"
              src={Projectimg3}
              alt="Image3"
              //   className="w-1/3 transform translate-x-[20%] translate-y-[10%]"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${
                  mousePosition.y * 0.02
                }px)`,
              }}
              className="image3"
            />{" "}
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default HeroSection;
