import React, { useState, useEffect } from "react";
import Desktop from './dfs-corporate-banner-desktop.jpg';
import Tablet from './dfs-corporate-banner-tablet.jpg';
import Mobile from './dfs-corporate-banner-mobile.jpg';
import './design.css';
const images = {
  desktop: Desktop,
  tablet: Tablet,
  mobile: Mobile,
};

const getImage = (width) => {
  if (width >= 1024) return images.desktop;
  if (width >= 490) return images.tablet;
  return images.mobile;
};

const Design = () => {
  const [imageSrc, setImageSrc] = useState(getImage(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(getImage(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img 
        src={imageSrc} 
        alt="Sustainability Banner" 
        className="w-full h-full object-cover"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />

      <div className="ishaan">
        <h1>Design for Sustainability</h1>
        <p>
          Design with less. Design smarter. Design for progress.
        </p>
        <button href="https://www.logitech.com/en-in/sustainability/dfs.html">Learn More</button>
      </div>
    </div>
  );
};

export default Design;
