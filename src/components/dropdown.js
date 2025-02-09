import React from "react";
import Mice from './shop-mice.png'; 
import Keyboard from './shop-keyboards.png';
import Headsets from './shop-webcams-audio.png';
import Gaming from './shop-for-gamers.png';
import Sustainability from './discover-sustainability.png';
import Ergonomics from './discover-ergo-series.png';
import Products from './business-products.png';
import Software from './business-software-services-new.png';
import Partners from './business-partners.webp';
import Contact from './discover-feature-sustainability.webp';
import Business from './support-for-business-education.webp';
import SFBIndividuals from './support-for-individuals.webp';
export const dropdownItems = {
  SHOP: [
    {
      name: "Mice",
      img: Mice,
      options: [
        { name: "Wireless Mice", link: "/shop/mice/wireless" },
        { name: "Gaming Mice", link: "/shop/mice/gaming" },
        { name: "Ergonomic Mice", link: "/shop/mice/ergonomic" }
      ]
    },
    {
      name: "Keyboards",
      img: Keyboard,
      options: [
        { name: "Mechanical Keyboards", link: "/shop/keyboards/mechanical" },
        { name: "Wireless Keyboards", link: "/shop/keyboards/wireless" },
        { name: "Gaming Keyboards", link: "/shop/keyboards/gaming" }
      ]
    },
    { 
      name: "Headsets", 
      img: Headsets,
      options: [
        { name: "Wireless Headsets", link: "/shop/headsets/wireless" },
        { name: "Gaming Headsets", link: "/shop/headsets/gaming" },
        { name: "Office Headsets", link: "/shop/headsets/office" }
      ]
    }
  ],
  DISCOVER: [
    {
      name: "Gaming",
      img: Gaming,
      options: [
        { name: "PC Gaming", link: "/discover/gaming/pc" },
        { name: "Console Gaming", link: "/discover/gaming/console" },
        { name: "Mobile Gaming", link: "/discover/gaming/mobile" }
      ]
    },
    {
      name: "Ergo Series",
      img: Ergonomics,
      options: [
        { name: "Ergo Series", link: "https://www.logitech.com/en-in/ergo/ergo-series.html" },
        { name: "Ergo Setups", link: "https://www.logitech.com/en-in/ergo/ergo-setups.html" },
        { name: "Wellbeing Tips", link: "https://www.logitech.com/en-in/ergo/wellness-tips.html" },
        { name: "Ergo Lab", link: "https://www.logitech.com/en-in/ergo/design-lab.html" }
      ]
    },
    {
      name: "Sustainability",
      img: Sustainability,
      options: [
        { name: "Eco-Friendly Products", link: "/discover/sustainability/products" },
        { name: "Recycling Programs", link: "/discover/sustainability/recycling" },
        { name: "Sustainable Packaging", link: "/discover/sustainability/packaging" }
      ]
    }
  ],
  BUSINESS: [
    {
      name: "Products",
      img: Products,
      options: [
        { name: "Conference Cameras", link: "/business/video-conferencing/cameras" },
        { name: "Room Solutions", link: "/business/video-conferencing/rooms" },
        { name: "Collaboration Tools", link: "/business/video-conferencing/tools" }
      ]
    },
    {
      name: "Software & Services",
      img: Software,
      options: [
        { name: "Select Service Plan", link: "/business/enterprise/workstations" },
        { name: "Essential Service Plan", link: "/business/enterprise/networking" },
        { name: "Sync Management", link: "/business/enterprise/cloud" },
        { name: "Tune App", link: "/business/enterprise/cloud" }
      ]
    },
    {
      name: "Partners",
      img: Partners,
      options: [
        { name: "Microsoft Teams", link: "/business/enterprise/workstations" },
        { name: "Google", link: "/business/enterprise/networking" },
        { name: "Zoom", link: "/business/enterprise/cloud" },
        { name: "Alliance Partners", link: "/business/enterprise/cloud" }
      ]
    }
  ],
  SUPPORT: [
    {
      name: "Product Help",
      img: Business,
      options: [
        { name: "Manuals", link: "/support/help/manuals" },
        { name: "Troubleshooting", link: "/support/help/troubleshooting" },
        { name: "Warranty", link: "/support/help/warranty" }
      ]
    },
    {
      name: "Downloads",
      img: SFBIndividuals,
      options: [
        { name: "Software", link: "/support/downloads/software" },
        { name: "Drivers", link: "/support/downloads/drivers" },
        { name: "Firmware", link: "/support/downloads/firmware" }
      ]
    },
    {
      name: "Contact Us",
      img: Contact,
      options: [
        { name: "Email Support", link: "/support/contact/email" },
        { name: "Phone Support", link: "/support/contact/phone" },
        { name: "Live Chat", link: "/support/contact/chat" }
      ]
    }
  ]
};

const Dropdown = ({ category, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-menu">
      {dropdownItems[category]?.map((item, index) => (
        <div key={index} className="dropdown-category">
          
          <div className="dropdown-header">
            <img src={item.img} alt={item.name} className="dropdown-image" />
            <span className="dropdown-heading">{item.name}</span>
          </div>
        
          <div className="dropdown-options">
            {item.options.map((option, idx) => (
              <a key={idx} href={option.link} className="dropdown-item">
                {option.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
