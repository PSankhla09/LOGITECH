import React from 'react';
import greyLogo from './logitechg-grey.svg'; 
import hoverLogo from './logitechg.svg'; 
import countryLogo from './earth-americas-solid.svg';
import './Ribbon.css';

const Ribbon = () => {
  return (
    <div className="Ribbon">
      <div className="logo1">
        
        <img src={greyLogo} alt="Grey Logo" className="grey-logo" />
        <img src={hoverLogo} alt="Hover Logo" className="hover-logo" />
      </div>
      <div className="ourbrands">
        <p>Our Brands</p>
      </div>
      <div className="country">
        <img src={countryLogo} alt="Country Logo" />
        <a href="https://www.logitech.com/en-in/change-location.html">
          <p>India</p>
        </a>
      </div>
    </div>
  );
};

export default Ribbon;
