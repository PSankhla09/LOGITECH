import React from 'react';
import './End.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaChevronRight  } from "react-icons/fa";

const End = () => {
  return (
    <div className="zara">
        <div className="handm">
            <div className="nivea">
                <h4>ABOUT</h4>
                <ul>
                    <li><a href="https://www.logitech.com/en-in/about.html">Logitech Story</a></li>
                    <li><a href="https://jobs.jobvite.com/logitech">Careers</a></li>
                    <li><a href="https://ir.logitech.com/">Investors</a></li>
                    <li><a href="https://blog.logitech.com/">Blog</a></li>
                    <li><a href="https://news.logitech.com/">Press</a></li>
                    <li><a href="https://www.logitech.com/en-in/about/contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div className="ponds">
                <div className="bajaj">
                    <h4>VALUES</h4>
                    <ul> 
                        <li><a href="https://www.logitech.com/en-in/social-impact.html">Social Impact</a></li>
                        <li><a href="https://www.logitech.com/en-in/sustainability.html">Sustainability</a></li>
                        <li><a href="https://www.logitech.com/en-in/sustainability/recycling.html">Recycling</a></li>
                    </ul>
                </div>
                <div className="wipro">
                    <h4>CUSTOMERS</h4>
                    <ul>
                        <li><a href="https://www.logitech.com/en-in/my-account/email-preferences.html">Email Preferences</a></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Social Media Icons BELOW handm */}
        <div className="social-icons">
            <a href="https://www.facebook.com/logitech" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
            <a href="https://twitter.com/logitech" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com/logitech/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>
        <div className="email-subscription">
                
                <div className="email-box">
                    <input type="email" placeholder="ENTER EMAIL ADDRESS" />
                    <button><FaChevronRight /></button>
                </div>
        </div>
        <div className="reserved"><p class='end'>©2025 Logitech. All rights reserved</p></div>
    </div>
  );
}

export default End;
