import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './ProductSection.css';
import Preloader from '../Preloader/Preloader';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imageSets = [
  [
    { src: require('./lift-gallery-rose-2.webp'), name: 'LIFT' },
    { src: require('./mx-brio-3qtr-front-right-graphite-gallery.webp'), name: 'MX BRIO' },
    { src: require('./keys-to-go-2-graphite-gallery-1.png'), name: 'KEYS-TO-GO 2' },
    { src: require('./mx-master-3s-mouse-back-view-graphite.webp'), name: 'MX MASTER 3S' },
    { src: require('./us-int-combo-touch-ipad-air-11-inch-gallery1.webp'), name: 'COMBO TOUCH' },
  ],
];

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
      <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"/>
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
      <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z"/>
    </svg>
  </div>
);

const ProductSection = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(Array(5).fill(false)); // Initially set to false, images not visible
  const imageRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Set images to visible after 3 seconds
      setVisibleImages(Array(5).fill(true));
    }, 3000); // Delay for 3 seconds

    // Cleanup the timer when the component is unmounted or updated
    return () => clearTimeout(timer);
  }, [currentSetIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => {
              const newVisibleImages = [...prev];
              newVisibleImages[index] = true; // Set the image as visible when it enters the viewport
              return newVisibleImages;
            });
            observer.unobserve(entry.target); // Stop observing once the image is in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    imageRefs.current.forEach((img) => img && observer.observe(img));
    return () => observer.disconnect(); // Cleanup observer when component is unmounted
  }, [currentSetIndex]);

  const handleNext = () => {
    setCurrentSetIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
    setVisibleImages(Array(5).fill(false)); // Reset visibility for the next set
  };

  const handlePrev = () => {
    setCurrentSetIndex((prevIndex) => (prevIndex - 1 + imageSets.length) % imageSets.length);
    setVisibleImages(Array(5).fill(false)); // Reset visibility for the previous set
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={handleNext} />,
    prevArrow: <PrevArrow onClick={handlePrev} />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="products">
      <div className="title">
        <button className="nothing1">NEW</button>
        <button className="nothing">BEST SELLERS</button>
        <button className="nothing">RECOMMENDED</button>
      </div>

      {/* Added the "prod" class wrapper around the Slider */}
      <div className="prod">
        <Slider {...settings}>
          {imageSets[currentSetIndex].map((item, index) => (
            <div className="ayush" key={index} ref={(el) => (imageRefs.current[index] = el)}>
              {/* Show Preloader until image is visible */}
              {!visibleImages[index] ? <Preloader /> : <img src={item.src} alt={item.name} />}
              <p>{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSection;
