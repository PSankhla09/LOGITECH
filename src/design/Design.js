import React, { useState, useEffect } from "react";
import Desktop from './dfs-corporate-banner-desktop.jpg';
import Tablet from './dfs-corporate-banner-tablet.jpg';
import Mobile from './dfs-corporate-banner-mobile.jpg';
import BannerImage2Desktop from './pcr-plastic-desktop.png';
import BannerImage2Tablet from './pcr-plastic-tablet.png';
import BannerImage2Mobile from './pcr-plastic-tablet.png';
import BannerImage3Desktop from './future-positive-challenge-desktop.jpg';
import BannerImage3Tablet from './future-positive-challenge-tablet.jpg';
import BannerImage3Mobile from './future-positive-challenge-tablet.jpg';
import BannerImage4Desktop from './bg-logicares-desktop.jpg';
import BannerImage4Tablet from './bg-logicares-tablet.jpg';
import BannerImage4Mobile from './bg-logicares-tablet.jpg';
import './design.css';

const images = [
  { 
    desktop: Desktop, 
    tablet: Tablet, 
    mobile: Mobile,
    content: {
      title: "Design for Sustainability",
      text: "Design with less. Design smarter. Design for progress.",
      link: "https://www.logitech.com/en-in/sustainability/dfs.html",
    }
  },
  { 
    desktop: BannerImage2Desktop, 
    tablet: BannerImage2Tablet, 
    mobile: BannerImage2Mobile,
    content: {
      title: "PCR Plastic Initiative",
      text: "Reduce plastic waste by recycling post-consumer resin.",
      link: "https://www.logitech.com/en-in/sustainability/pcr-plastic.html",
    }
  },
  { 
    desktop: BannerImage3Desktop, 
    tablet: BannerImage3Tablet, 
    mobile: BannerImage3Mobile,
    content: {
      title: "Future Positive Challenge",
      text: "Innovate for a better, more sustainable future.",
      link: "https://www.logitech.com/en-in/sustainability/future-positive-challenge.html",
    }
  },
  { 
    desktop: BannerImage4Desktop, 
    tablet: BannerImage4Tablet, 
    mobile: BannerImage4Mobile,
    content: {
      title: "LogiCares Initiative",
      text: "Supporting communities and promoting environmental sustainability.",
      link: "https://www.logitech.com/en-in/sustainability/logicare.html",
    }
  }
];

const getImage = (width, currentIndex) => {
  if (width >= 1024) return images[currentIndex].desktop;
  if (width >= 490) return images[currentIndex].tablet;
  return images[currentIndex].mobile;
};

const Design = () => {
  const [imageSrc, setImageSrc] = useState(getImage(window.innerWidth, 0));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(getImage(window.innerWidth, currentIndex));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  useEffect(() => {
    setImageSrc(getImage(window.innerWidth, currentIndex));
  }, [currentIndex]);

  const handleBannerChange = (index) => {
    setCurrentIndex(index);
  };

  const nextBanner1 = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevBanner1 = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Determine styles based on slide index
  const textColor = currentIndex === 0 ? "black" : "white";
  const buttonStyle = {
    backgroundColor: currentIndex === 0 ? "rgb(49, 46, 46)" : "white",
    color: currentIndex === 0 ? "white" : "black",
    border: `2px solid ${currentIndex === 0 ? "rgb(49, 46, 46)" : "white"}`,
    transition: "background 0.3s ease, color 0.3s ease, border 0.3s ease",
    padding:"3% 5%",
  };

  return (
    <div className="banner-container">
      <div className="banner-wrapper">
        <img src={imageSrc} alt="Sustainability Banner" className="banner-image" />

        {/* Ishaan Content with Dynamic Text and Button Styles */}
        <div className="ishaan" style={{ color: textColor }}>
          <h1 style={{ color: textColor }}>{images[currentIndex].content.title}</h1>
          <p style={{ color: textColor }}>{images[currentIndex].content.text}</p>
          <a href={images[currentIndex].content.link}>
            <button
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = currentIndex === 0 ? "transparent" : "transparent";
                e.target.style.color = currentIndex === 0 ? "black" : "white";
                e.target.style.border = `2px solid ${currentIndex === 0 ? "black" : "white"}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = buttonStyle.backgroundColor;
                e.target.style.color = buttonStyle.color;
                e.target.style.border = buttonStyle.border;
              }}
            >
              Learn More
            </button>
          </a>
        </div>

        {/* Carousel Arrows */}
        <div className="carousel-arrows1">
          <button className="carousel-arrow1 left" onClick={prevBanner1}>
            &#8249;
          </button>
          <button className="carousel-arrow1 right" onClick={nextBanner1}>
            &#8250;
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="carousel-dots1">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleBannerChange(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Design;
