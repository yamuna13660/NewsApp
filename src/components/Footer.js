import React from "react";
import {Link} from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Home.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        {/* Branding & About */}
        <div className="footer-branding">
          <h2 className="footer-logo">AlgoMate</h2>
          <p className="footer-description">
            The best place to learn Data Structures, Algorithms, and ace your coding interviews with curated resources and real experiences.
          </p>
          <div className="footer-social">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></Link>
            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></Link>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-links">

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms & Conditions</Link></li>
            </ul>
          </div>



          <div className="footer-column">
            <h4>Quick Access</h4>
            <ul>
              <li><Link to="/practice">Striver's DSA Sheet</Link></li>
              <li><Link to="/practice">A2Z DSA Playlist</Link></li>
              <li><Link to="/practice">DSA Revision Sheet</Link></li>
              <li><Link to="/practice">DSA Topic-wise Problems</Link></li>
              
            </ul>
          </div>

          <div className="footer-column">
            <h4> DSA Practice Sets</h4>
            <ul>
              <li><Link to="/practice"> Array Practice</Link></li>
              <li><Link to="/practice">String Practice</Link></li>
              <li><Link to="/practice">Tree Practice</Link></li>
              <li><Link to="/practice">Graph Practice</Link></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} AlgoMate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
