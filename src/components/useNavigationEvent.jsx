// src/hooks/useNavigationEvent.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useNavigationEvent = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 1000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [location]);

  return isNavigating;
};

export default useNavigationEvent;
