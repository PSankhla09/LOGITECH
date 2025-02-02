import React, { useState, useEffect } from 'react';
import './Banner.css';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger
import logoBanner from './Logitech_logo.svg.png';
import { dropdownItems } from './dropdown'; // Import dropdown data

const Banner = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for hamburger menu

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      if (width >= 1025) {
        setImageSrc('https://resource.logitech.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/homepage/mx-brio-hpb-desktop.jpg?v=1');
      } else if (width >= 720) {
        setImageSrc('https://resource.logitech.com/w_1024,h_1366,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/homepage/mx-brio-hpb-tablet.jpg?v=1');
      } else {
        setImageSrc('https://resource.logitech.com/w_420,h_1024,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/homepage/mx-brio-hpb-mobile.jpg?v=1');
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.querySelector('.menu').classList.toggle('open', !isMobileMenuOpen);
  };

  return (
    <div className={`Banner ${isMobileMenuOpen ? 'shifted' : ''}`}>
      {/* Navbar */}
      <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes className="hamburger-icon" /> : <FaBars className="hamburger-icon" />}
        </div>
        <div className="logo-container">
          <img src={logoBanner} alt="Logitech Logo" className="logo" />
        </div>

        {/* Navbar Options */}
        <div className={`options ${isMobileMenuOpen ? 'open' : ''}`}>
          {Object.keys(dropdownItems).map((menu, index) => (
            <div
              key={index}
              className="nav-item"
              onMouseEnter={() => setActiveDropdown(menu)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-btn">{menu}</button>
              {activeDropdown === menu && (
                <div className="dropdown-menu">
                  {dropdownItems[menu].map((item, i) => (
                    <a key={i} href={item.link}>{item.name}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <div className="account-container">
          <FaUser className="account-icon" />
        </div>
      </div>

      {/* Banner Section */}
      <section
        className="banner"
        aria-label="MEET. STREAM. MASTER."
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
        }}
        
      >
        <div className="search-container1">
          <FaSearch className="search-icon1" />
        </div>
        <div className="container">
          <div className="banner-content">
            <h2>MEET. STREAM. MASTER.</h2>
            <p>
              Introducing MX Brio. Experience sharp ultra HD 4K video with our
              most advanced webcam yet.
            </p>
            <div className="cta-buttons">
              <a href="/en-in/products/webcams/mx-brio.html" className="cta-btn">
                Learn More
              </a>
              <a href="/en-in/products/webcams/mx-brio-4k-webcam.html" className="cta-btn">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
