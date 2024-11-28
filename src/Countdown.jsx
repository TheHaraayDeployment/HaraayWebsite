import React, { useState, useEffect } from "react";
import "./styles.css"; // Import the CSS file
import bgimg from "../bannerimage.png";
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-11-28T10:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <div className="background">
        <img src={bgimg} alt="Background" className="background-image" />
      </div>
      <div className="content">
        <div className="countdown-date">
          <h3>28 Nov 2024</h3>
          <p>10:00 AM</p>
        </div>
        <div className="countdown-timer">
          <div className="time-section">
            <h1>{timeLeft.days.toString().padStart(2, "0")}</h1>
            <p>Days</p>
          </div>
          <span className="colon">:</span>
          <div className="time-section">
            <h1>{timeLeft.hours.toString().padStart(2, "0")}</h1>
            <p>Hours</p>
          </div>
          <span className="colon">:</span>
          <div className="time-section">
            <h1>{timeLeft.minutes.toString().padStart(2, "0")}</h1>
            <p>Minutes</p>
          </div>
        </div>
        <div className="countdown-text">
          <p>We are</p>
          <h2>Rebranding</h2>
          <p>Coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
