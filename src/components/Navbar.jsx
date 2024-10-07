/* 
  The Navbar component provides a navigation bar for the application. 
  It includes the company logo and title, along with links to different pages: Home, About, and Contact. 
  The Link component from react-router-dom is used to enable client-side routing, allowing users to navigate 
  without refreshing the entire page.
*/

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation between pages

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  // Toggle menu visibility for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      {/* Logo and Title Section */}
      <div className="logo-container">
        <img src="/images/logo.png" alt="Company Logo" className="logo" />
        <h2 className="bill-summary">What's in the Bill?</h2>
      </div>

      {/* Mobile menu button */}
      <button className="mobile-menu-button" onClick={toggleMenu}>
        &#9776; {/* This represents a hamburger icon */}
      </button>

      {/* Navigation Menu */}
      <nav className={`nav-links ${isMenuOpen ? "open" : " "}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

