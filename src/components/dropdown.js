import React from "react";
import Mice from "./shop-mice.webp"; // Ensure the correct image path

export const dropdownItems = {
  SHOP: [
    { name: "Mice", link: "https://www.logitech.com/en-in/products/mice.html", img: Mice },
    { name: "Keyboards", link: "/shop/keyboards", img: "/images/keyboards.jpg" }, 
    { name: "Headsets", link: "/shop/headsets", img: "/images/headsets.jpg" }
  ],
  DISCOVER: [
    { name: "Gaming", link: "/discover/gaming", img: "/images/gaming.jpg" },
    { name: "Ergonomics", link: "/discover/ergonomics", img: "/images/ergonomics.jpg" },
    { name: "Sustainability", link: "/discover/sustainability", img: "/images/sustainability.jpg" }
  ],
  BUSINESS: [
    { name: "Video Conferencing", link: "/business/video-conferencing", img: "/images/video.jpg" },
    { name: "Enterprise Solutions", link: "/business/enterprise", img: "/images/enterprise.jpg" }
  ],
  SUPPORT: [
    { name: "Product Help", link: "/support/help", img: "/images/help.jpg" },
    { name: "Downloads", link: "/support/downloads", img: "/images/downloads.jpg" },
    { name: "Contact Us", link: "/support/contact", img: "/images/contact.jpg" }
  ]
};

const Dropdown = ({ category, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-menu">
      {dropdownItems[category]?.map((item, index) => {
        console.log(item.img); // Debug the image path
        return (
          <a key={index} href={item.link} className="dropdown-item">
            {item.img && <img src={item.img} alt={item.name} className="dropdown-image" />}
            <span>{item.name}</span>
          </a>
        );
      })}
    </div>
  );
};

export default Dropdown;
