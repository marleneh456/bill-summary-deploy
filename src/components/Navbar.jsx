import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);

    handleResize(); // Check screen size when component mounts

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <img
          src="./images/logo.png"
          alt="Company Logo"
          className="logo"
          onClick={() => (window.location.href = "/")}
        />
        <h2 className="bill-summary">What's in the Bill?</h2>
      </div>

      {/* Show Desktop Navigation on large screens */}
      {!isMobile && (
        <nav className="desktop-nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Show Mobile Menu Button and Links on small screens */}
      {isMobile && (
        <>
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
          <nav className={`nav-links ${isMenuOpen ? "open" : "close"}`}>
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default Navbar;
