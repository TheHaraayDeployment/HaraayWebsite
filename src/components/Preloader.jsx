// src/components/Preloader.jsx
import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Set loading time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="preloader">
        <h1 className='pretxt'>Loading...</h1>
        <div className="spinner"></div> {/* Add your custom animation here */}
      </div>
    )
  );
};

export default Preloader;
