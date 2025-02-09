import React, { useState } from 'react';
import './Shopproducts.css';
import Product1 from './mice-vertical-gallery-tablet-2-a.webp';
import Product2 from './keyboards-vertical-gallery-tablet-2-c.webp';
import Product3 from './headsets-earbuds-vertical-gallery-tablet-2-e.webp';
import Product4 from './ipad-keyboard-cases-vertical-gallery-tablet-2-b.webp';
import Product5 from './combo-vertical-gallery-tablet-2-d.webp';
import Product6 from './webcams-vertical-gallery-tablet-2-f.webp';
import Product7 from './presenters-horizontal-gallery-desktop-2-g.webp';
import Product8 from './education-vertical-gallery-desktop-2-i.webp';
import Product9 from './digital-pens-horizontal-gallery-desktop-2-k.webp';
import Product10 from './bluetooth-speakers-vertical-gallery-desktop-2-h.webp';
import Product11 from './business-horizontal-gallery-desktop-2-j.webp';
import Product12 from './gaming-vertical-gallery-desktop-2-l.webp';

const Shopproducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const totalSlides = 2;

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="cornitos">
      <div className="puffs">
        <h2>Shop Products</h2>
      </div>
      <div className="carousel">
        <div className="carousel-track">
          <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
            <div className="product-group1">
              <div className="cheese">
                <p>mice</p><img src={Product1} alt="Product1" className="large-image"/>
                <p>Ipad keyboard cases</p><img src={Product4} alt="Product4" className="small-image"/>
              </div>
              <div className="cheese">
                <p>keyboards</p><img src={Product2} alt="Product2" className="small-image"/>
                <p>combos</p><img src={Product5} alt="Product5" className="large-image" />
              </div>
              <div className="cheese">
                <p>headsets & earbuds</p> <img src={Product3} alt="Product3" className="large-image"/>
                <p>webcams</p> <img src={Product6} alt="Product6" className="small-image"/>
              </div>
            </div>
          </div>
          <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
            <div className="product-group">
              <div className="cheese">
                <p>presenters</p><img src={Product7} alt="Product7" className="small-image"/>
                <p>bluetooth speakers</p> <img src={Product10} alt="Product10" className="large-image"/>
              </div>
              <div className="cheese">
                <p>education</p><img src={Product8} alt="Product8" className="large-image"/>
                <p>business</p> <img src={Product11} alt="Product11" className="small-image"/>
              </div>
              <div className="cheese">
                <p>digital pens</p><img src={Product9} alt="Product9" className="small-image"/>
                <p>gaming</p><img src={Product12} alt="Product12" className="large-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-dots">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shopproducts;
