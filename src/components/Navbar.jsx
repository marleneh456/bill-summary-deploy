import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Only full desktop, large protrait tablets, and landscape tablets have no menu button
  const [isFullScreen, setIsFullScreen] = useState(window.innerWidth >= 1018);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Update isFullScreen based on window width
      setIsFullScreen(window.innerWidth >= 1018);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

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
        <img
          src="./images/witb_titlecard_white.png"
          alt="Company Title Card"
          className="title-card"
        />
      </div>

      {isFullScreen ? (
        <nav className="full-screen-nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Meet The Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      ) : (
        <>
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </button>

          <nav className={`nav-links ${isMenuOpen ? "open" : "close"}`}>
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/team" onClick={toggleMenu}>Meet The Team</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default Navbar;