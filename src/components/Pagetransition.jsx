// src/components/PageTransition.jsx
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const PageTransition = ({ trigger }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (trigger) {
      gsap.to(".page-transition", {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(".page-transition", {
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [trigger]);

  return (
    <div className="page-transition">
      <div className="transition-content">
        {/* You can add some content here for the transition */}
      </div>
    </div>
  );
};

export default PageTransition;
