import React, { useState, useEffect, useRef } from 'react';
import './ProductSection.css';
import Image1 from './lift-gallery-rose-2.webp';
import Image2 from './mx-brio-3qtr-front-right-graphite-gallery.webp';
import Image3 from './keys-to-go-2-graphite-gallery-1.png';
import Image4 from './mx-master-3s-mouse-back-view-graphite.webp';
import Image5 from './us-int-combo-touch-ipad-air-11-inch-gallery1.webp';
import Preloader from '../Preloader/Preloader';

const ProductSection = () => {
  const [image1Visible, setImage1Visible] = useState(false);
  const [image2Visible, setImage2Visible] = useState(false);
  const [image3Visible, setImage3Visible] = useState(false);
  const [image4Visible, setImage4Visible] = useState(false);
  const [image5Visible, setImage5Visible] = useState(false);

  
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);

  const handleImageLoad = (setImageState, delayTime) => {
    setTimeout(() => {
      setImageState(true); 
    }, delayTime); 
  };

  
  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          if (entry.target === image1Ref.current) handleImageLoad(setImage1Visible, 3000);
          if (entry.target === image2Ref.current) handleImageLoad(setImage2Visible, 3000);
          if (entry.target === image3Ref.current) handleImageLoad(setImage3Visible, 3000);
          if (entry.target === image4Ref.current) handleImageLoad(setImage4Visible, 3000);
          if (entry.target === image5Ref.current) handleImageLoad(setImage5Visible, 3000);
        }
      });
    }, options);

    
    observer.observe(image1Ref.current);
    observer.observe(image2Ref.current);
    observer.observe(image3Ref.current);
    observer.observe(image4Ref.current);
    observer.observe(image5Ref.current);

    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="products">
      <div className="title">
        <button className="nothing1">NEW</button>
        <button className="nothing">BEST SELLERS</button>
        <button className="nothing">RECOMMENDED</button>
      </div>

      <div className="prod">
        
        <div className="ayush" ref={image1Ref}>
          {!image1Visible && <Preloader />}
          {image1Visible && <img src={Image1} alt="Image1" />}
          <p>LIFT</p>
        </div>

        
        <div className="ayush" ref={image2Ref}>
          {!image2Visible && <Preloader />}
          {image2Visible && <img src={Image2} alt="Image2" />}
          <p>MX BRIO</p>
        </div>

        
        <div className="ayush" ref={image3Ref}>
          {!image3Visible && <Preloader />}
          {image3Visible && <img src={Image3} alt="Image3" />}
          <p>KEYS-TO-GO 2</p>
        </div>

        
        <div className="ayush" ref={image4Ref}>
          {!image4Visible && <Preloader />}
          {image4Visible && <img src={Image4} alt="Image4" />}
          <p>MX MASTER 3S</p>
        </div>

        
        <div className="ayush" ref={image5Ref}>
          {!image5Visible && <Preloader />}
          {image5Visible && <img src={Image5} alt="Image5" />}
          <p>COMBO TOUCH FOR IPAD AIR</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
